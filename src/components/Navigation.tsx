"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { getLocalizedHref } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";

const navLinks = [
  { path: "/", label: "home" },
  { path: "/portfolio", label: "portfolio" },
  { path: "/leistungen", label: "services" },
  { path: "/ueber-mich", label: "about" },
  { path: "/kontakt", label: "contact" },
] as const;

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-charcoal/5">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href={`/${locale}`}
          className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-charcoal"
        >
          SoulWeddingFilms
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? pathname === "/"
                : pathname.startsWith(link.path);
            return (
              <a
                key={link.path}
                href={getLocalizedHref(link.path, locale)}
                className={`text-sm tracking-wide transition-colors ${
                  isActive
                    ? "text-charcoal"
                    : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                {t(link.label)}
              </a>
            );
          })}
          <LanguageToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-b border-charcoal/5">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={getLocalizedHref(link.path, locale)}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-serif text-charcoal/80 hover:text-charcoal transition-colors"
              >
                {t(link.label)}
              </a>
            ))}
            <div className="pt-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
