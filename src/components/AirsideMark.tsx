import { Link } from "react-router-dom";

/**
 * Exec Pass wordmark — text only, deliberately. No icon or monogram.
 * "Exec Pass" in Fraunces with a cerulean period.
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
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Exec Pass — home">
      <span className={`ep-wordmark text-[22px] leading-none ${inkClass}`}>
        Exec Pass<span className="text-flare">.</span>
      </span>
    </Link>
  );
};
