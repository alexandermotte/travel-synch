import { Link } from "react-router-dom";

/**
 * Exec Pass lockup — cerulean ring mark + "Exec Pass" wordmark in Fraunces.
 * Matches the live product identity at fasttrack.exec-pass.com.
 */
export const AirsideMark = ({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  showMarkOnly?: boolean;
  className?: string;
}) => {
  const inkClass = variant === "light" ? "text-bright" : "text-ink";
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Exec Pass — home">
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#35A0D8" />
        <circle cx="12" cy="12" r="4.5" fill="currentColor" className={inkClass} />
      </svg>
      <span
        className={`ep-display text-[22px] font-bold leading-none ${inkClass}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        Exec Pass
      </span>
    </Link>
  );
};
