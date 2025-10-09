import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { currentContent, brandInfo } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Starting wording regeneration for:', brandInfo.companyName);

    const systemPrompt = `You are a professional copywriter specializing in travel and tourism brands. 
Your task is to rephrase content while:
- Keeping the same themes, structure, and message intent
- Adapting the tone to match the brand personality
- Maintaining SEO-friendly language
- Using engaging, clear, and professional wording
- Preserving all key features and benefits
- Never inventing new features or removing existing ones

Return ONLY valid JSON without any markdown formatting or code blocks.`;

    const userPrompt = `Brand Information:
Company: ${brandInfo.companyName}
Industry: Travel services (fast-track, check-in, museums)
Tone: ${brandInfo.tone || 'Professional, friendly, and reassuring'}

Current Content to Rephrase:
${JSON.stringify(currentContent, null, 2)}

Please rephrase all the text content while keeping the exact same structure and JSON keys. 
Maintain the meaning but use fresh, engaging language that fits the brand.
Return the result as valid JSON with the same structure.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error(`AI Gateway failed: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;
    
    console.log('Generated content:', generatedContent);

    // Parse the AI response to extract JSON
    let rephrased;
    try {
      // Try to parse directly
      rephrased = JSON.parse(generatedContent);
    } catch (e) {
      // If it fails, try to extract JSON from markdown code blocks
      const jsonMatch = generatedContent.match(/```json\n([\s\S]*?)\n```/);
      if (jsonMatch) {
        rephrased = JSON.parse(jsonMatch[1]);
      } else {
        // Try to find any JSON-like structure
        const jsonStart = generatedContent.indexOf('{');
        const jsonEnd = generatedContent.lastIndexOf('}') + 1;
        if (jsonStart !== -1 && jsonEnd > jsonStart) {
          rephrased = JSON.parse(generatedContent.substring(jsonStart, jsonEnd));
        } else {
          throw new Error('Could not parse AI response as JSON');
        }
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        rephrased,
        original: currentContent 
      }), 
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in regenerate-wordings:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false 
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
