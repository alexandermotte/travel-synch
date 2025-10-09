import { supabase } from "@/integrations/supabase/client";
import { siteConfig, SiteConfig } from "@/config/site.config";

export interface RegenerationResult {
  success: boolean;
  rephrased?: any;
  error?: string;
}

/**
 * Regenerates all content wordings using AI
 * @param brandInfo - Basic brand information for context
 * @returns Updated content object with regenerated wordings
 */
export async function regenerateWordings(brandInfo: {
  companyName: string;
  tone?: string;
}): Promise<RegenerationResult> {
  try {
    const { data, error } = await supabase.functions.invoke('regenerate-wordings', {
      body: {
        currentContent: siteConfig.content,
        brandInfo,
      },
    });

    if (error) {
      console.error('Error calling regenerate-wordings:', error);
      return {
        success: false,
        error: error.message || 'Failed to regenerate wordings',
      };
    }

    if (!data.success) {
      return {
        success: false,
        error: data.error || 'Regeneration failed',
      };
    }

    return {
      success: true,
      rephrased: data.rephrased,
    };
  } catch (error) {
    console.error('Error in regenerateWordings:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Exports a complete site configuration with custom values
 * This can be copied and used to create a new site
 */
export function exportSiteConfig(
  customConfig: Partial<SiteConfig>
): SiteConfig {
  return {
    ...siteConfig,
    ...customConfig,
  };
}

/**
 * Generates a download of the complete site.config.ts file
 * with customized values
 */
export function downloadConfigFile(config: SiteConfig) {
  const configString = `/**
 * Site Configuration Template
 * Generated on ${new Date().toISOString()}
 */

export const siteConfig = ${JSON.stringify(config, null, 2)};

export type SiteConfig = typeof siteConfig;
`;

  const blob = new Blob([configString], { type: 'text/typescript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'site.config.ts';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
