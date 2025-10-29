import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrency, currencies } from "@/contexts/CurrencyContext";
import { Globe } from "lucide-react";

interface CurrencyPickerProps {
  variant?: "light" | "dark";
}

export const CurrencyPicker = ({ variant = "light" }: CurrencyPickerProps) => {
  const { currency, setCurrency } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={variant === "dark" ? "ghost" : "outline"} 
          className={`gap-2 hover:text-white ${variant === "dark" ? "text-background hover:bg-background/10 border border-background/20 hover:border-background/40" : ""}`}
        >
          <Globe className="h-4 w-4" />
          <span>{currency}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64 bg-popover z-50">
        {currencies.map((curr) => (
          <DropdownMenuItem
            key={curr.code}
            onClick={() => setCurrency(curr.code)}
            className={`cursor-pointer group ${currency === curr.code ? "bg-accent text-white" : ""}`}
          >
            <div className="flex flex-col">
              <div className="font-medium group-hover:text-white">{curr.code}</div>
              <div className={`text-xs group-hover:text-white/90 ${currency === curr.code ? "text-white/80" : "text-muted-foreground"}`}>
                {curr.label}
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
