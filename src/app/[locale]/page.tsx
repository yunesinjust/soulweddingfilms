import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();

  const featured = [
    {
      image: "/images/portfolio/couple1/653615956_18095577353072570_7667656562791677331_n.jpg",
      couple: "Sofia & Luca",
      location: "Izmir",
    },
    {
      image: "/images/portfolio/couple2/655232474_18100197164501104_1742626033673695152_n.jpg",
      couple: "Mia & Noah",
      location: "Istanbul",
    },
    {
      image: "/images/portfolio/couple3/SaveVid.Net_649607898_18067170428650169_7273847145288097803_n.jpg",
      couple: "Leila & Cem",
      location: "Izmir",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background — swap <Image> for <video> later */}
        <div className="absolute inset-0">
          {/* To use video: replace Image with <video autoPlay muted loop playsInline className="..."><source src="/videos/hero.mp4" type="video/mp4" /></video> */}
          <Image
            src="/images/portfolio/couple5/SaveVid.Net_651914782_18061107392349471_3921259645139575875_n.jpg"
            alt="Wedding couple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/30" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-light tracking-wide">
            {t("hero.tagline")}
          </h1>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-block border border-cream/80 text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-cream/50 animate-pulse" />
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">
            {t("home.introHeading")}
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            {t("home.intro")}
          </p>
        </FadeIn>
      </section>

      {/* Featured Work */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              {t("home.featuredHeading")}
            </h2>
            <Link
              href="/portfolio"
              className="text-sm text-warm-dark hover:text-charcoal transition-colors tracking-wide"
            >
              {t("home.featuredCta")} &rarr;
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <FadeIn key={item.couple} delay={i * 150}>
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.couple}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg text-charcoal">
                    {item.couple}
                  </h3>
                  <p className="text-sm text-charcoal/50 mt-1">
                    {item.location}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-cream py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
              {t("home.ctaHeading")}
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-cream/70 text-lg mb-10 leading-relaxed">
              {t("home.ctaText")}
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <Link
              href="/kontakt"
              className="inline-block border border-cream/80 text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              {t("home.ctaButton")}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
