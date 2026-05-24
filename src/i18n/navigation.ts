import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// Localized path mappings for English
export const localizedPaths: Record<string, Record<string, string>> = {
  "/leistungen": { de: "/leistungen", en: "/services" },
  "/ueber-mich": { de: "/ueber-mich", en: "/about" },
  "/kontakt": { de: "/kontakt", en: "/contact" },
};

export function getLocalizedHref(path: string, locale: string): string {
  const mapping = localizedPaths[path];
  if (mapping && mapping[locale]) {
    return `/${locale}${mapping[locale]}`;
  }
  return `/${locale}${path}`;
}
