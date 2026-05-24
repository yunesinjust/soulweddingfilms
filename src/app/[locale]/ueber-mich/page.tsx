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
    { value: t("statsOrigin") },
  ];

  return (
    <section className="pt-28 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero section with photo and greeting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Photo */}
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/portfolio/couple4/SaveVid.Net_654014759_18084664799253382_3463596499537653552_n.jpg"
                alt="Photographer portrait"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Story */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={200}>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
                {t("greeting")}
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-charcoal/70 text-lg leading-relaxed whitespace-pre-line">
                {t("story")}
              </p>
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
              {[t("trustDrone"), t("trustSecond"), t("trustGear")].map(
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
