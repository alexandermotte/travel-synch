/**
 * Outbound links to the booking app + attribution forwarding.
 *
 * exec-pass.com never transacts, authenticates or hosts legal text —
 * every one of those needs is handed off to fasttrack.exec-pass.com
 * (or member.exec-pass.com), with the inbound tracking params preserved
 * so the marketing -> funnel hop stays one attributed session.
 */

export const BOOKING_ORIGIN = "https://fasttrack.exec-pass.com";
export const MEMBER_URL = "https://member.exec-pass.com";

/** Locale of the booking app that marketing hands off to (EN only at launch). */
export const BOOKING_LOCALE = "en";

/** Params the booking app reads and threads through checkout to /thankyou. */
const FORWARDED_PARAMS = ["gclid", "product", "theme", "currency", "design", "fbclid", "msclkid"];

export function forwardedParams(search: string = typeof window === "undefined" ? "" : window.location.search) {
  const inbound = new URLSearchParams(search);
  const out = new URLSearchParams();
  inbound.forEach((value, key) => {
    if (key.startsWith("utm_") || FORWARDED_PARAMS.includes(key)) out.set(key, value);
  });
  return out;
}

/**
 * Build a URL on the booking app, forwarding inbound attribution params.
 * @param path path after the locale segment, e.g. "" or "terms"
 */
export function bookingUrl(path = "", search?: string) {
  const clean = path.replace(/^\/+/, "");
  const base = `${BOOKING_ORIGIN}/${BOOKING_LOCALE}${clean ? `/${clean}` : ""}`;
  const params = forwardedParams(search).toString();
  return params ? `${base}?${params}` : base;
}

/**
 * Internal pre-checkout route (plan selection) — keeps inbound attribution params
 * so they can be forwarded onward to the booking app on the final hop.
 */
export function preCheckoutPath(plan?: "medium" | "premium", search?: string) {
  const params = forwardedParams(search);
  if (plan) params.set("plan", plan);
  const qs = params.toString();
  return qs ? `/pre-checkout?${qs}` : "/pre-checkout";
}


/** Legal routes live in the booking app only — one source of truth for compliance copy. */
export const LEGAL_LINKS = [
  { label: "Terms & Conditions", path: "terms" },
  { label: "Privacy Policy", path: "privacy" },
  { label: "Subscription Terms", path: "subscription-terms" },
  { label: "Legal Notice", path: "legal-notice" },
  { label: "Cookie Policy", path: "cookie-policy" },
  { label: "Unsubscribe", path: "unsubscribe" },
] as const;
