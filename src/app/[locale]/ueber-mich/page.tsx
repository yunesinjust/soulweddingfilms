import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return {
    title: messages.about.title,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("about");

  return (
    <section className="pt-32 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section 1 — Hero text */}
        <div className="max-w-3xl mx-auto text-center mb-32 md:mb-40">
          <FadeIn>
            <h1 className="font-serif text-[clamp(1.75rem,5vw,4.5rem)] text-charcoal font-light tracking-wide whitespace-nowrap mb-10">
              {t("heading")}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-charcoal/70 text-lg md:text-xl leading-relaxed">
              {t("bio")}
            </p>
          </FadeIn>
        </div>

        {/* Section 2 — Two column team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mb-32 md:mb-40">
          {/* Hesam */}
          <FadeIn>
            <div>
              <div className="relative aspect-[3/4] overflow-hidden mb-8">
                <Image
                  src="/images/about/hesam.PNG"
                  alt="Hesam Shahbazi"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                {t("hesamName")}
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                {t("hesamBio")}
              </p>
            </div>
          </FadeIn>

          {/* Yunes */}
          <FadeIn delay={200}>
            <div>
              <div className="relative aspect-[3/4] overflow-hidden mb-8">
                <Image
                  src="/images/about/yunes.jpg"
                  alt="Yunes Nasr"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                {t("yunesName")}
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                {t("yunesBio")}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Section 3 — Stats bar */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-charcoal/10 mb-32 md:mb-40">
            {[
              t("statsWeddings"),
              t("statsArea"),
              t("statsLocation"),
              t("statsRegion"),
            ].map((stat) => (
              <div key={stat} className="text-center">
                <p className="font-serif text-xl md:text-2xl text-charcoal">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Section 4 — Philosophy quote */}
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center py-8">
            <p className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal/20 font-light italic tracking-wide">
              {t("quote")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
