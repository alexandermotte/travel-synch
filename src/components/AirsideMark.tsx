import { Link } from "react-router-dom";
import markSrc from "@/assets/exec-pass-mark.png";

/**
 * Exec Pass wordmark lockup.
 * Mark = flare-orange geometric glyph. Wordmark = "Exec Pass" in Fraunces.
 */
export const AirsideMark = ({
  variant = "light",
  showMarkOnly = false,
  className = "",
}: {
  variant?: "light" | "dark";
  showMarkOnly?: boolean;
  className?: string;
}) => {
  const inkClass = variant === "light" ? "text-bright" : "text-ink";
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Exec Pass — home">
      <img src={markSrc} alt="" width={28} height={28} className="h-7 w-7" />
      {!showMarkOnly && (
        <span className={`ep-wordmark text-[20px] leading-none ${inkClass}`}>
          Exec Pass
        </span>
      )}
    </Link>
  );
};
