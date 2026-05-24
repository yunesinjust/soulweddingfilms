import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return { title: messages.datenschutz.title };
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DatenschutzContent />;
}

function DatenschutzContent() {
  const t = useTranslations("datenschutz");

  return (
    <section className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1 className="font-serif text-4xl text-charcoal mb-8">{t("title")}</h1>
        <div className="text-charcoal/70 leading-relaxed whitespace-pre-line">
          {t("content")}
        </div>
      </div>
    </section>
  );
}
