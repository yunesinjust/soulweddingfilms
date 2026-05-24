import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return {
    title: messages.contact.title,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("contact");

  return (
    <section className="pt-28 pb-24 md:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            {t("title")}
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-charcoal/60 text-lg mb-12">{t("description")}</p>
        </FadeIn>

        <FadeIn delay={300}>
          <ContactForm />
        </FadeIn>

        {/* Direct contact */}
        <FadeIn delay={400}>
          <div className="mt-16 pt-12 border-t border-charcoal/10 text-center">
            <p className="text-charcoal/50 text-sm uppercase tracking-widest mb-4">
              {t("directContact")}
            </p>
            <div className="space-y-2">
              <p className="text-charcoal/70">{t("email")}</p>
              <p className="text-charcoal/70">{t("instagram")}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
