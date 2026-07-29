import { Link } from "react-router-dom";

/**
 * Airside wordmark lockup.
 * Mark = a single sheared flare bar (the 18° cut idea, distilled).
 * Wordmark = "EXEC PASS" in Archivo, wide-set, uppercase-adjacent tracking.
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
    <Link to="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="Exec Pass — home">
      <span aria-hidden className="relative block h-6 w-4">
        <span className="absolute inset-0 bg-flare" style={{ clipPath: "polygon(35% 0, 100% 0, 65% 100%, 0 100%)" }} />
      </span>
      {!showMarkOnly && (
        <span className={`ep-wordmark text-[17px] leading-none ${inkClass}`}>
          EXEC&nbsp;PASS
        </span>
      )}
    </Link>
  );
};
