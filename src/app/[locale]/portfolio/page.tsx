import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PortfolioGrid from "@/components/PortfolioGrid";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return {
    title: messages.portfolio.title,
    description: messages.portfolio.description,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PortfolioContent />;
}

function PortfolioContent() {
  const t = useTranslations("portfolio");

  return (
    <section className="pt-28 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            {t("title")}
          </h1>
          <p className="text-charcoal/60 text-lg">{t("description")}</p>
        </div>

        <PortfolioGrid />
      </div>
    </section>
  );
}
