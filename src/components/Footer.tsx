"use client";

import { useTranslations, useLocale } from "next-intl";
import { getLocalizedHref } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-cream mb-3">
              SoulWeddingFilms
            </h3>
            <p className="text-sm text-cream/60">{t("footer.tagline")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-cream/40 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <a href={getLocalizedHref("/", locale)} className="text-sm text-cream/60 hover:text-cream transition-colors">
                {t("nav.home")}
              </a>
              <a href={getLocalizedHref("/portfolio", locale)} className="text-sm text-cream/60 hover:text-cream transition-colors">
                {t("nav.portfolio")}
              </a>
              <a href={getLocalizedHref("/leistungen", locale)} className="text-sm text-cream/60 hover:text-cream transition-colors">
                {t("nav.services")}
              </a>
              <a href={getLocalizedHref("/ueber-mich", locale)} className="text-sm text-cream/60 hover:text-cream transition-colors">
                {t("nav.about")}
              </a>
              <a href={getLocalizedHref("/kontakt", locale)} className="text-sm text-cream/60 hover:text-cream transition-colors">
                {t("nav.contact")}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-cream/40 uppercase tracking-widest mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <a href={`/${locale}/impressum`} className="text-sm text-cream/60 hover:text-cream transition-colors">
                {t("footer.impressum")}
              </a>
              <a href={`/${locale}/datenschutz`} className="text-sm text-cream/60 hover:text-cream transition-colors">
                {t("footer.datenschutz")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-sm text-cream/40">
            {t("footer.copyright", { year: year.toString() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
