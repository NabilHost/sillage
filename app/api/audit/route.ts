import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { SITE } from "@/lib/site";

const schema = z.object({
  nom: z.string().min(2).max(120),
  email: z.string().email().max(200),
  site: z.string().url().max(300).or(z.literal("")),
  sujet: z.string().max(80),
  message: z.string().min(20).max(5000),
  _hp: z.string().max(0).optional(),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!rateLimit(`audit:${ip}`, 5, 60_000)) {
    return NextResponse.json({ error: "Trop de requêtes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps invalide." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides." }, { status: 400 });
  }

  /* Honeypot rempli : on répond 200 sans rien faire (bot silencieusement écarté) */
  if (parsed.data._hp) {
    return NextResponse.json({ ok: true });
  }

  const { nom, email, site, sujet, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    /* Adresses surchargeable par env : permet un routage de test (onboarding@resend.dev
       vers une boîte perso) tant que le domaine définitif n'est pas vérifié dans Resend. */
    const from =
      process.env.RESEND_FROM ??
      `Essor <formulaire@${new URL(SITE.url).hostname.replace("www.", "")}>`;
    const to = process.env.CONTACT_TO ?? SITE.email;
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `[${sujet}] ${nom}${site ? ` · ${site}` : ""}`,
        html: `
          <p><strong>Nom :</strong> ${escapeHtml(nom)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Site :</strong> ${escapeHtml(site || "non renseigné")}</p>
          <p><strong>Sujet :</strong> ${escapeHtml(sujet)}</p>
          <p><strong>Message :</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      });
    } catch (err) {
      /* Échec Resend (domaine non vérifié, quota…) : on log le lead pour ne pas le
         perdre, sans renvoyer d'erreur 500 au visiteur. */
      console.error("[contact] envoi Resend échoué, lead loggé :", err, { nom, email, site, sujet });
    }
  } else {
    /* Pas de clé Resend configurée : log serveur pour ne pas perdre le lead en dev */
    console.log("[contact] lead reçu (RESEND_API_KEY absente) :", { nom, email, site, sujet });
  }

  return NextResponse.json({ ok: true });
}
