import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Impressum" : "Legal Notice (Impressum)",
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return locale === "de" ? <ImpressumDE /> : <ImpressumEN />;
}

const prose =
  "prose-headings:font-serif prose-headings:text-charcoal prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-p:text-charcoal/70 prose-p:leading-relaxed prose-li:text-charcoal/70 prose-a:text-warm-dark prose-a:underline";

function ImpressumDE() {
  return (
    <section className="pt-28 pb-24">
      <div className={`max-w-3xl mx-auto px-6 lg:px-12 ${prose}`}>
        <h1 className="font-serif text-4xl text-charcoal mb-8">Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Yunes Nasr & Hesam Shahbazi
          <br />
          SoulWeddingFilms GbR
          <br />
          (Gesellschaft bürgerlichen Rechts)
          <br />
          Hochzeitsvideografie & Fotografie
        </p>
        <p>
          Köln & Düsseldorf, Nordrhein-Westfalen
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: yunesyousefi35@gmail.com
        </p>

        <h2>Vertretungsberechtigte Gesellschafter</h2>
        <p>
          Yunes Nasr
          <br />
          Hesam Shahbazi
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Yunes Nasr & Hesam Shahbazi
          <br />
          Köln & Düsseldorf, Deutschland
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit. Diese finden Sie unter{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .
        </p>

        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
          erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
          jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
          zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
          derartige Links umgehend entfernen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
          schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
          werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
          trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
          wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h2>Bildnachweis</h2>
        <p>
          Alle auf dieser Website gezeigten Fotos und Videos wurden von Yunes
          Nasr & Hesam Shahbazi / SoulWeddingFilms GbR erstellt und unterliegen
          dem Urheberrecht. Eine Nutzung ohne ausdrückliche Genehmigung ist
          nicht gestattet.
        </p>
      </div>
    </section>
  );
}

function ImpressumEN() {
  return (
    <section className="pt-28 pb-24">
      <div className={`max-w-3xl mx-auto px-6 lg:px-12 ${prose}`}>
        <h1 className="font-serif text-4xl text-charcoal mb-8">
          Legal Notice (Impressum)
        </h1>

        <h2>Information pursuant to § 5 DDG</h2>
        <p>
          Yunes Nasr & Hesam Shahbazi
          <br />
          SoulWeddingFilms GbR
          <br />
          (Gesellschaft bürgerlichen Rechts)
          <br />
          Wedding Videography & Photography
        </p>
        <p>
          Cologne & Düsseldorf, North Rhine-Westphalia
          <br />
          Germany
        </p>

        <h2>Contact</h2>
        <p>
          Email: yunesyousefi35@gmail.com
        </p>

        <h2>Authorized Representatives</h2>
        <p>
          Yunes Nasr
          <br />
          Hesam Shahbazi
        </p>

        <h2>Responsible for content pursuant to § 18 (2) MStV</h2>
        <p>
          Yunes Nasr & Hesam Shahbazi
          <br />
          Cologne & Düsseldorf, Germany
        </p>

        <h2>EU Dispute Resolution</h2>
        <p>
          The European Commission provides a platform for online dispute
          resolution (ODR). You can find it at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .
        </p>

        <h2>Consumer Dispute Resolution</h2>
        <p>
          We are not willing or obliged to participate in dispute resolution
          proceedings before a consumer arbitration board.
        </p>

        <h2>Liability for Content</h2>
        <p>
          As a service provider, we are responsible for our own content on
          these pages in accordance with general legislation pursuant to § 7
          (1) DDG. According to §§ 8 to 10 DDG, however, we as a service
          provider are not obligated to monitor transmitted or stored
          third-party information or to investigate circumstances that
          indicate illegal activity.
        </p>
        <p>
          Obligations to remove or block the use of information under general
          law remain unaffected. However, liability in this regard is only
          possible from the point in time at which we become aware of a
          specific infringement. Upon becoming aware of such violations, we
          will remove this content immediately.
        </p>

        <h2>Liability for Links</h2>
        <p>
          Our website contains links to external third-party websites over
          whose content we have no influence. Therefore, we cannot accept any
          liability for this third-party content. The respective provider or
          operator of the linked pages is always responsible for the content
          of the linked pages.
        </p>

        <h2>Copyright</h2>
        <p>
          The content and works created by the site operator on these pages
          are subject to German copyright law. Duplication, processing,
          distribution, or any form of commercialization beyond the scope of
          copyright law requires the written consent of the respective author
          or creator. Downloads and copies of this site are only permitted for
          private, non-commercial use.
        </p>
        <p>
          All photos and videos shown on this website were created by Yunes
          Nasr & Hesam Shahbazi / SoulWeddingFilms GbR and are protected by
          copyright. Use without express permission is not permitted.
        </p>
      </div>
    </section>
  );
}
