import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const meta = messages.meta;

  return {
    title: {
      default: meta.title,
      template: `%s | SoulWeddingFilms`,
    },
    description: meta.description,
    metadataBase: new URL("https://soulweddingfilms.de"),
    alternates: {
      canonical: `https://soulweddingfilms.de/${locale}`,
      languages: {
        de: "https://soulweddingfilms.de/de",
        en: "https://soulweddingfilms.de/en",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://soulweddingfilms.de/${locale}`,
      siteName: "SoulWeddingFilms",
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
