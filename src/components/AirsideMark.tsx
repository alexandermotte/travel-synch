import { Link } from "react-router-dom";

/**
 * Exec Pass lockup — twin slanted bars in cerulean + "EXEC PASS" wordmark.
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
      <svg viewBox="0 0 64 64" className="h-7 w-7 shrink-0" aria-hidden="true">
        <path
          d="M24 8L34 8L18.4 56L8.4 56Z M40 8L56 8L40.4 56L24.4 56Z"
          fill="#0AA4EB"
        />
      </svg>
      <span
        className={`text-[19px] font-bold uppercase leading-none ${inkClass}`}
        style={{ letterSpacing: "0.06em" }}
      >
        Exec Pass
      </span>
    </Link>
  );
};
