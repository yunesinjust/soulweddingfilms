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

  const stats = [
    { value: t("statsWeddings") },
    { value: t("statsExperience") },
    { value: t("statsLocation") },
    { value: t("statsArea") },
  ];

  return (
    <section className="pt-28 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Team Hero — inspired by reference image */}
        <div className="bg-charcoal rounded-sm overflow-hidden mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Hesam — left */}
            <FadeIn>
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
                {/* Placeholder until real photo is uploaded */}
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-cream/10 flex items-center justify-center">
                      <svg className="w-16 h-16 text-cream/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent">
                  <p className="font-serif text-xl text-cream">{t("hesam")}</p>
                  <p className="text-sm text-cream/50">{t("hesamLocation")}</p>
                </div>
              </div>
            </FadeIn>

            {/* Center text */}
            <FadeIn delay={200}>
              <div className="flex flex-col items-center justify-center text-center px-8 py-16 md:py-0">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight mb-8">
                  {t("teamHeading")}
                </h1>
                <p className="text-cream/60 text-sm md:text-base leading-relaxed max-w-xs">
                  {t("teamSubtext")}
                </p>
              </div>
            </FadeIn>

            {/* Yunes — right */}
            <FadeIn delay={400}>
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
                {/* Placeholder until real photo is uploaded */}
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-cream/10 flex items-center justify-center">
                      <svg className="w-16 h-16 text-cream/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent">
                  <p className="font-serif text-xl text-cream">{t("yunes")}</p>
                  <p className="text-sm text-cream/50">{t("yunesLocation")}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-charcoal/10 mb-24">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="font-serif text-xl md:text-2xl text-charcoal">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Philosophy */}
        <div className="max-w-3xl mx-auto mb-24">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 text-center">
              {t("philosophyHeading")}
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-charcoal/70 text-lg leading-relaxed text-center">
              {t("philosophy")}
            </p>
          </FadeIn>
        </div>

        {/* Trust Signals */}
        <FadeIn>
          <div className="bg-white/50 border border-charcoal/10 p-10 md:p-14 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl text-charcoal mb-8 text-center">
              {t("trustHeading")}
            </h3>
            <div className="space-y-4">
              {[t("trustDrone"), t("trustTeam"), t("trustGear")].map(
                (item) => (
                  <div key={item} className="flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-warm mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-charcoal/70">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
