import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { regenerateWordings, downloadConfigFile } from "@/utils/configGenerator";
import { siteConfig } from "@/config/site.config";
import { Loader2 } from "lucide-react";

const ConfigGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mainDomain, setMainDomain] = useState("");
  const [fastTrackDomain, setFastTrackDomain] = useState("");
  const [checkInDomain, setCheckInDomain] = useState("");
  const [primaryColor, setPrimaryColor] = useState("205 85% 45%");
  const [accentColor, setAccentColor] = useState("42 95% 55%");
  const [generatedConfig, setGeneratedConfig] = useState<any>(null);

  const handleGenerate = async () => {
    if (!companyName) {
      toast({
        title: "Missing Information",
        description: "Please enter at least a company name",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Step 1: Regenerate wordings with AI
      toast({
        title: "Generating Content",
        description: "AI is rephrasing all wordings for your new brand...",
      });

      const result = await regenerateWordings({
        companyName,
        tone: "Professional, friendly, and reassuring",
      });

      if (!result.success) {
        throw new Error(result.error || "Failed to regenerate wordings");
      }

      // Step 2: Create new config with custom values
      const newConfig = {
        ...siteConfig,
        company: {
          name: companyName,
          legalName: companyName,
          phone: phone || siteConfig.company.phone,
          email: email || siteConfig.company.email,
          address: siteConfig.company.address,
        },
        domains: {
          main: mainDomain || siteConfig.domains.main,
          fastTrack: fastTrackDomain || siteConfig.domains.fastTrack,
          checkIn: checkInDomain || siteConfig.domains.checkIn,
        },
        colors: {
          ...siteConfig.colors,
          primary: primaryColor,
          accent: accentColor,
        },
        content: result.rephrased,
      };

      setGeneratedConfig(newConfig);

      toast({
        title: "Success!",
        description: "Your new site configuration has been generated. Review and download it below.",
      });
    } catch (error) {
      console.error("Error generating config:", error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedConfig) return;
    downloadConfigFile(generatedConfig);
    toast({
      title: "Downloaded",
      description: "Configuration file downloaded successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Site Configuration Generator</h1>
          <p className="text-muted-foreground">
            Create a new branded site by providing basic information. AI will automatically
            rephrase all content to match your brand while keeping the same structure.
          </p>
        </div>

        <Card className="p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-6">Brand Information</h2>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Your Company Name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@yourcompany.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="mainDomain">Main Domain</Label>
              <Input
                id="mainDomain"
                value={mainDomain}
                onChange={(e) => setMainDomain(e.target.value)}
                placeholder="yourcompany.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fastTrackDomain">Fast-Track Domain</Label>
                <Input
                  id="fastTrackDomain"
                  value={fastTrackDomain}
                  onChange={(e) => setFastTrackDomain(e.target.value)}
                  placeholder="https://fast-track.yourcompany.com"
                />
              </div>
              <div>
                <Label htmlFor="checkInDomain">Check-In Domain</Label>
                <Input
                  id="checkInDomain"
                  value={checkInDomain}
                  onChange={(e) => setCheckInDomain(e.target.value)}
                  placeholder="https://checkin.yourcompany.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryColor">Primary Color (HSL)</Label>
                <Input
                  id="primaryColor"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  placeholder="205 85% 45%"
                />
                <div 
                  className="mt-2 h-8 rounded-md border"
                  style={{ backgroundColor: `hsl(${primaryColor})` }}
                />
              </div>
              <div>
                <Label htmlFor="accentColor">Accent Color (HSL)</Label>
                <Input
                  id="accentColor"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  placeholder="42 95% 55%"
                />
                <div 
                  className="mt-2 h-8 rounded-md border"
                  style={{ backgroundColor: `hsl(${accentColor})` }}
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !companyName}
            className="w-full mt-8"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating with AI...
              </>
            ) : (
              "Generate Configuration"
            )}
          </Button>
        </Card>

        {generatedConfig && (
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Generated Configuration</h2>
            <p className="text-muted-foreground mb-6">
              Your configuration has been generated with AI-rephrased content. 
              Review the preview below and download the file.
            </p>

            <div className="bg-muted p-4 rounded-md mb-6 max-h-96 overflow-auto">
              <pre className="text-sm">
                {JSON.stringify(generatedConfig, null, 2)}
              </pre>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleDownload} className="flex-1">
                Download site.config.ts
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setGeneratedConfig(null)}
                className="flex-1"
              >
                Generate Another
              </Button>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-md">
              <h3 className="font-semibold mb-2">Next Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Download the generated site.config.ts file</li>
                <li>Create a new Lovable project or remix this one</li>
                <li>Replace the src/config/site.config.ts file with the downloaded version</li>
                <li>Update index.css with your new color values</li>
                <li>Replace logo and assets as needed</li>
                <li>Your new branded site is ready!</li>
              </ol>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ConfigGenerator;
