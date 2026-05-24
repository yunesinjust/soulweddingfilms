"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // TODO: Replace with your Formspree endpoint
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID";

      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/50 border border-warm/30 p-12 text-center">
        <p className="font-serif text-2xl text-charcoal mb-2">&hearts;</p>
        <p className="text-charcoal/70">{t("success")}</p>
      </div>
    );
  }

  const inputStyles =
    "w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal placeholder:text-charcoal/30 focus:border-warm focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-sm text-charcoal/50 mb-1">
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={t("namePlaceholder")}
            className={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-charcoal/50 mb-1">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={t("emailPlaceholder")}
            className={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm text-charcoal/50 mb-1">
            {t("date")}
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm text-charcoal/50 mb-1">
            {t("location")}
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder={t("locationPlaceholder")}
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label htmlFor="package" className="block text-sm text-charcoal/50 mb-1">
          {t("package")}
        </label>
        <select
          id="package"
          name="package"
          className={`${inputStyles} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            {t("packageOptions.placeholder")}
          </option>
          <option value="liebe">{t("packageOptions.liebe")}</option>
          <option value="herz">{t("packageOptions.herz")}</option>
          <option value="seele">{t("packageOptions.seele")}</option>
          <option value="unsure">{t("packageOptions.unsure")}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-charcoal/50 mb-1">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("messagePlaceholder")}
          className={`${inputStyles} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">{t("error")}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full md:w-auto bg-charcoal text-cream px-12 py-4 text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
