"use client";

import { useLocale } from "next-intl";
import { usePathname, getLocalizedHref } from "@/i18n/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();

  function getTargetUrl(targetLocale: string) {
    return getLocalizedHref(pathname, targetLocale);
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <a
        href={getTargetUrl("de")}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === "de"
            ? "text-charcoal"
            : "text-gray-mid hover:text-charcoal"
        }`}
      >
        DE
      </a>
      <span className="text-gray-mid">/</span>
      <a
        href={getTargetUrl("en")}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === "en"
            ? "text-charcoal"
            : "text-gray-mid hover:text-charcoal"
        }`}
      >
        EN
      </a>
    </div>
  );
}
