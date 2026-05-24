import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title:
      locale === "de"
        ? "Datenschutzerklärung"
        : "Privacy Policy (Datenschutz)",
  };
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return locale === "de" ? <DatenschutzDE /> : <DatenschutzEN />;
}

const prose =
  "prose-headings:font-serif prose-headings:text-charcoal prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-p:text-charcoal/70 prose-p:leading-relaxed prose-li:text-charcoal/70 prose-ul:list-disc prose-ul:pl-6 prose-a:text-warm-dark prose-a:underline";

function DatenschutzDE() {
  return (
    <section className="pt-28 pb-24">
      <div className={`max-w-3xl mx-auto px-6 lg:px-12 ${prose}`}>
        <h1 className="font-serif text-4xl text-charcoal mb-8">
          Datenschutzerklärung
        </h1>

        <h2>1. Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen
          zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
          aufgeführten Datenschutzerklärung.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </strong>
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch die
          Websitebetreiber: Yunes Nasr & Hesam Shahbazi, SoulWeddingFilms GbR,
          Köln & Düsseldorf, Deutschland. E-Mail: yunesyousefi35@gmail.com
        </p>
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong>
          <br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen, z.B. über das Kontaktformular. Andere Daten werden
          automatisch oder nach Ihrer Einwilligung beim Besuch der Website
          durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
          (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
          Seitenaufrufs).
        </p>
        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong>
          <br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden. Wenn Sie uns über das
          Kontaktformular eine Anfrage senden, werden Ihre Angaben zur
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
          gespeichert.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Vercel kann beim
          Besuch dieser Website personenbezogene Daten erheben, insbesondere
          Ihre IP-Adresse. Weitere Informationen finden Sie in der
          Datenschutzerklärung von Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vercel.com/legal/privacy-policy
          </a>
          .
        </p>
        <p>
          Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
          möglichst zuverlässigen Darstellung unserer Website.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Verantwortliche Stelle für die Datenverarbeitung auf dieser Website:
        </p>
        <p>
          Yunes Nasr & Hesam Shahbazi
          <br />
          SoulWeddingFilms GbR
          <br />
          Köln & Düsseldorf, Deutschland
          <br />
          E-Mail: yunesyousefi35@gmail.com
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige
          Aufsichtsbehörde ist der Landesbeauftragte für Datenschutz und
          Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
        </p>

        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
          Einwilligung oder in Erfüllung eines Vertrags automatisiert
          verarbeiten, an sich oder an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen.
        </p>

        <h3>Auskunft, Löschung und Berichtigung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
          jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung und ggf. ein Recht auf
          Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
          Fragen zum Thema personenbezogene Daten können Sie sich jederzeit
          an uns wenden.
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>

        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
          Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
          1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
          Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
          Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
          Verarbeitung auf unserem berechtigten Interesse an der effektiven
          Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt. Zwingende gesetzliche Bestimmungen — insbesondere
          Aufbewahrungsfristen — bleiben unberührt.
        </p>

        <h3>Formspree</h3>
        <p>
          Für die Verarbeitung von Kontaktformularen nutzen wir den Dienst
          Formspree (Formspree, Inc., USA). Wenn Sie das Kontaktformular
          absenden, werden Ihre eingegebenen Daten an Formspree übermittelt
          und von dort per E-Mail an uns weitergeleitet. Weitere
          Informationen finden Sie in der Datenschutzerklärung von Formspree:{" "}
          <a
            href="https://formspree.io/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://formspree.io/legal/privacy-policy
          </a>
          .
        </p>

        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch
          Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
          automatisch an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
          nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage
          von Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2>5. Externe Dienste</h2>

        <h3>Google Fonts</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
          sogenannte Google Fonts, die von Google bereitgestellt werden. Beim
          Aufruf einer Seite lädt Ihr Browser die benötigten Fonts direkt von
          Google, um Texte und Schriftarten korrekt anzuzeigen. Dabei wird
          Ihre IP-Adresse an Google übertragen. Weitere Informationen finden
          Sie in der Datenschutzerklärung von Google:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </a>
          .
        </p>

        <p className="mt-12 text-sm text-charcoal/40">
          Stand: Mai 2026
        </p>
      </div>
    </section>
  );
}

function DatenschutzEN() {
  return (
    <section className="pt-28 pb-24">
      <div className={`max-w-3xl mx-auto px-6 lg:px-12 ${prose}`}>
        <h1 className="font-serif text-4xl text-charcoal mb-8">
          Privacy Policy
        </h1>

        <h2>1. Privacy at a Glance</h2>

        <h3>General Information</h3>
        <p>
          The following information provides a simple overview of what happens
          to your personal data when you visit this website. Personal data is
          any data with which you could be personally identified. Detailed
          information on the subject of data protection can be found in our
          privacy policy listed below.
        </p>

        <h3>Data Collection on This Website</h3>
        <p>
          <strong>
            Who is responsible for data collection on this website?
          </strong>
          <br />
          Data processing on this website is carried out by the website
          operators: Yunes Nasr & Hesam Shahbazi, SoulWeddingFilms GbR,
          Cologne & Düsseldorf, Germany. Email: yunesyousefi35@gmail.com
        </p>
        <p>
          <strong>How do we collect your data?</strong>
          <br />
          Your data is collected when you provide it to us, e.g. via the
          contact form. Other data is collected automatically or with your
          consent by our IT systems when you visit the website. This is
          primarily technical data (e.g. internet browser, operating system,
          or time of page access).
        </p>
        <p>
          <strong>What do we use your data for?</strong>
          <br />
          Some data is collected to ensure error-free operation of the
          website. Other data may be used to analyze your user behavior. When
          you send us an inquiry via the contact form, your details are stored
          to process the request and for any follow-up questions.
        </p>

        <h2>2. Hosting</h2>
        <p>
          This website is hosted by Vercel Inc. When you visit this website,
          Vercel may collect personal data, particularly your IP address. For
          more information, please refer to Vercel&apos;s privacy policy:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vercel.com/legal/privacy-policy
          </a>
          .
        </p>

        <h2>3. General Information and Mandatory Disclosures</h2>

        <h3>Data Protection</h3>
        <p>
          The operator of this website takes the protection of your personal
          data very seriously. We treat your personal data confidentially and
          in accordance with statutory data protection regulations and this
          privacy policy.
        </p>

        <h3>Responsible Party</h3>
        <p>
          The responsible party for data processing on this website is:
        </p>
        <p>
          Yunes Nasr & Hesam Shahbazi
          <br />
          SoulWeddingFilms GbR
          <br />
          Cologne & Düsseldorf, Germany
          <br />
          Email: yunesyousefi35@gmail.com
        </p>

        <h3>Revocation of Your Consent</h3>
        <p>
          Many data processing operations are only possible with your express
          consent. You may revoke consent you have already given at any time.
          The legality of data processing carried out prior to revocation
          remains unaffected.
        </p>

        <h3>Right to Lodge a Complaint</h3>
        <p>
          In the event of violations of the GDPR, data subjects have the
          right to lodge a complaint with a supervisory authority. The
          competent supervisory authority is the State Commissioner for Data
          Protection and Freedom of Information of North Rhine-Westphalia
          (LDI NRW).
        </p>

        <h3>Right to Data Portability</h3>
        <p>
          You have the right to have data that we process automatically on
          the basis of your consent or in fulfillment of a contract handed
          over to you or to a third party in a common, machine-readable
          format.
        </p>

        <h3>Access, Deletion, and Correction</h3>
        <p>
          You have the right at any time to free information about your stored
          personal data, its origin and recipients, and the purpose of the
          data processing, and if applicable, the right to correct or delete
          this data. You can contact us at any time regarding this and other
          questions about personal data.
        </p>

        <h2>4. Data Collection on This Website</h2>

        <h3>Contact Form</h3>
        <p>
          If you send us inquiries via the contact form, your details from the
          inquiry form, including the contact data you provide there, will be
          stored by us for the purpose of processing the inquiry and in case
          of follow-up questions. We will not share this data without your
          consent.
        </p>
        <p>
          The processing of this data is based on Art. 6 (1) (b) GDPR if your
          request is related to the performance of a contract or is necessary
          for the implementation of pre-contractual measures. In all other
          cases, the processing is based on our legitimate interest in the
          effective processing of inquiries directed to us (Art. 6 (1) (f)
          GDPR).
        </p>

        <h3>Formspree</h3>
        <p>
          We use the service Formspree (Formspree, Inc., USA) for processing
          contact forms. When you submit the contact form, your data is
          transmitted to Formspree and forwarded to us by email. For more
          information, see Formspree&apos;s privacy policy:{" "}
          <a
            href="https://formspree.io/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://formspree.io/legal/privacy-policy
          </a>
          .
        </p>

        <h3>Server Log Files</h3>
        <p>
          The website provider automatically collects and stores information
          in server log files that your browser automatically transmits. These
          are:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system used</li>
          <li>Referrer URL</li>
          <li>Hostname of the accessing computer</li>
          <li>Time of the server request</li>
          <li>IP address</li>
        </ul>

        <h2>5. External Services</h2>

        <h3>Google Fonts</h3>
        <p>
          This site uses Google Fonts for consistent font rendering. When you
          load a page, your browser downloads the required fonts directly from
          Google. In doing so, your IP address is transmitted to Google. For
          more information, see Google&apos;s privacy policy:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </a>
          .
        </p>

        <p className="mt-12 text-sm text-charcoal/40">
          Last updated: May 2026
        </p>
      </div>
    </section>
  );
}
