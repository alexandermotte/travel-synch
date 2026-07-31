import { useLocation, useNavigate } from "react-router-dom";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES, isLang, Lang } from "@/i18n/config";
import { useLang } from "@/i18n/LanguageContext";

interface Props {
  variant?: "light" | "dark";
  className?: string;
}

/** Switches language while staying on the same page (/fr/about -> /de/about). */
export const LanguageSelector = ({ variant = "light", className = "" }: Props) => {
  const { lang } = useLang();
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();

  const switchTo = (next: Lang) => {
    const segments = pathname.split("/").filter(Boolean);
    if (isLang(segments[0])) segments[0] = next;
    else segments.unshift(next);
    navigate(`/${segments.join("/")}${search}${hash}`);
  };

  const active = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Select language"
        className={`inline-flex items-center gap-2 ep-mono ep-ease rounded-full px-3 py-1.5 border ${
          variant === "dark"
            ? "text-bright border-line-dark hover:border-flare-bright"
            : "text-ink-muted border-line hover:text-ink hover:border-ink"
        } ${className}`}
      >
        <Globe size={15} />
        <span>{active.short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 bg-popover z-50">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => switchTo(l.code)}
            className="cursor-pointer gap-3"
          >
            <span className="ep-chip w-7 text-muted-foreground">{l.short}</span>
            <span className="flex-1">{l.label}</span>
            {l.code === lang && <Check size={14} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
