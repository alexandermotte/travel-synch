import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const API_BASE = "https://production-api-czbs.onrender.com";

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const body = await req.json().catch(() => ({}));

    // Step 2 — confirm unsubscribe from the emailed token link
    if (body.action === "confirm" && typeof body.token === "string" && body.token.length <= 512) {
      const response = await fetch(`${API_BASE}/unsubscribe/${encodeURIComponent(body.token)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Accept: "*/*" },
      });
      const text = await response.text();
      let data: Record<string, unknown>;
      try { data = JSON.parse(text); } catch { data = { message: text }; }
      console.log("Confirm unsubscribe:", response.status, text);
      return json({ success: response.ok, ...data }, response.status);
    }

    // Step 1 — request the confirmation email
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const fromEmail = typeof body.fromEmail === "string" ? body.fromEmail.trim() : "";
    const origin = typeof body.origin === "string" ? body.origin : "https://exec-pass.com";
    const websiteId = Deno.env.get("CONTACT_WEBSITE_ID") || "";

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;
    if (!emailOk || !fromEmail) {
      return json({ success: false, message: "A valid email address is required" }, 400);
    }
    if (!websiteId) {
      console.error("CONTACT_WEBSITE_ID is not configured");
      return json({ success: false, message: "Unsubscribe is not configured" }, 500);
    }

    const response = await fetch(`${API_BASE}/emails/unsubscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "*/*", origin },
      body: JSON.stringify({ email, fromEmail, websiteId }),
    });

    const text = await response.text();
    console.log("Unsubscribe request:", response.status, text);
    let data: Record<string, unknown>;
    try { data = JSON.parse(text); } catch { data = { message: text }; }

    if (!response.ok) {
      return json({ success: false, message: data.message || "Request failed" }, response.status);
    }

    return json({ success: true, message: "Unsubscribe request processed successfully" });
  } catch (error) {
    console.error("Error in unsubscribe function:", error);
    return json({ success: false, message: (error as Error).message }, 500);
  }
});
