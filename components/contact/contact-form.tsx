"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  nom: z.string().min(2, "Votre nom, en deux caractères minimum."),
  email: z.string().email("Un email valide est nécessaire pour vous répondre."),
  site: z.string().url("Une URL complète, avec https://").or(z.literal("")),
  sujet: z.string(),
  message: z.string().min(20, "Quelques lignes de contexte nous aident à préparer l'appel."),
  _hp: z.string().max(0).optional() /* honeypot : les bots le remplissent */,
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-[10px] border border-border bg-bg-2 px-4 py-3 text-[15px] text-text outline-none transition-colors placeholder:text-muted-2 focus:border-accent/60";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sujet: "Audit SEO", site: "" },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="callout" role="status">
        <span className="callout-label">Message envoyé</span>
        <p>Merci. Nous revenons vers vous sous 48 h ouvrées avec une première lecture.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot : caché aux humains, rempli par les bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("_hp")}
      />

      <div>
        <label htmlFor="nom" className="mb-2 block text-[13px] font-semibold">Votre nom</label>
        <input id="nom" type="text" autoComplete="name" className={inputClass} {...register("nom")} />
        {errors.nom && <p className="mt-1.5 text-[12.5px] text-accent">{errors.nom.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-[13px] font-semibold">Email professionnel</label>
        <input id="email" type="email" autoComplete="email" className={inputClass} {...register("email")} />
        {errors.email && <p className="mt-1.5 text-[12.5px] text-accent">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="site" className="mb-2 block text-[13px] font-semibold">URL de votre site</label>
        <input id="site" type="url" placeholder="https://" className={inputClass} {...register("site")} />
        {errors.site && <p className="mt-1.5 text-[12.5px] text-accent">{errors.site.message}</p>}
      </div>

      <div>
        <label htmlFor="sujet" className="mb-2 block text-[13px] font-semibold">Sujet</label>
        <select id="sujet" className={inputClass} {...register("sujet")}>
          <option>Audit SEO</option>
          <option>Audit Google Ads</option>
          <option>Audit de citabilité IA (GEO)</option>
          <option>Création ou refonte de site</option>
          <option>Autre demande</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-[13px] font-semibold">
          Votre contexte, en quelques lignes
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Votre activité, votre enjeu du moment, vos échéances."
          className={`${inputClass} resize-y`}
          {...register("message")}
        />
        {errors.message && <p className="mt-1.5 text-[12.5px] text-accent">{errors.message.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2.5 rounded-full bg-accent py-3 pl-6 pr-3 text-[14px] font-bold text-bg transition-colors hover:bg-accent-deep disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
          <span aria-hidden className="flex size-[30px] items-center justify-center rounded-full bg-bg font-mono text-sm text-accent">
            ↗
          </span>
        </button>
        {status === "error" && (
          <p className="mt-3 text-[13px] text-accent" role="alert">
            L&apos;envoi a échoué. Écrivez-nous directement : bonjour@sillage-agence.fr
          </p>
        )}
        <p className="mt-3 text-[12.5px] text-muted-2">
          Vos données ne servent qu&apos;à traiter votre demande. Pas de newsletter surprise.
        </p>
      </div>
    </form>
  );
}
