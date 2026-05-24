import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return {
    title: messages.services.title,
    description: messages.services.description,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesContent />;
}

type Package = {
  name: string;
  tagline: string;
  price: string;
  popular?: boolean;
  features: string[];
};

type Addon = {
  name: string;
  price: string;
};

function ServicesContent() {
  const t = useTranslations("services");
  const packages = t.raw("packages") as Package[];
  const addons = t.raw("addons") as Addon[];

  return (
    <section className="pt-28 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              {t("title")}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              {t("description")}
            </p>
          </FadeIn>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 150}>
              <div
                className={`relative p-8 md:p-10 border transition-shadow hover:shadow-lg ${
                  pkg.popular
                    ? "border-warm bg-white"
                    : "border-charcoal/10 bg-white/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-8 bg-warm text-cream text-xs tracking-widest uppercase px-4 py-1">
                    {t("popular")}
                  </div>
                )}

                <h2 className="font-serif text-3xl text-charcoal mb-1">
                  {pkg.name}
                </h2>
                <p className="text-charcoal/50 text-sm mb-6">{pkg.tagline}</p>

                <div className="mb-8">
                  <span className="font-serif text-4xl text-charcoal">
                    {pkg.price}
                  </span>
                  <span className="text-charcoal/40 text-lg ml-1">&euro;</span>
                </div>

                <p className="text-xs text-charcoal/40 uppercase tracking-widest mb-4">
                  {t("includes")}
                </p>
                <ul className="space-y-3 mb-10">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-charcoal/70"
                    >
                      <svg
                        className="w-4 h-4 text-warm mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className={`block text-center py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                    pkg.popular
                      ? "bg-charcoal text-cream hover:bg-charcoal/90"
                      : "border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-cream"
                  }`}
                >
                  {t.raw("includes") === "Was enthalten ist"
                    ? "Anfrage senden"
                    : "Get in touch"}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Add-ons */}
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-charcoal mb-3 text-center">
              {t("addonsTitle")}
            </h2>
            <p className="text-charcoal/60 text-center mb-10">
              {t("addonsDescription")}
            </p>

            <div className="space-y-0">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between py-5 border-b border-charcoal/10"
                >
                  <span className="text-charcoal/80">{addon.name}</span>
                  <span className="font-serif text-lg text-charcoal">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
