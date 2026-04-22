import type { Metadata } from "next";
import { PageIntro } from "@/app/components/page-intro";
import { firm, offices } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta HJ Advokatbyrå i Stockholm eller Göteborg.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kontakt"
        title="Berätta kort vad du behöver hjälp med."
      >
        <p>
          Skicka ett meddelande eller ring växeln. Vi kopplar dig till rätt
          jurist utifrån ärende, bransch och tidplan.
        </p>
      </PageIntro>

      <section className="section">
        <div className="section-inner contact-page-grid">
          <div className="contact-panel">
            <h2>Direktkontakt</h2>
            <a href={`mailto:${firm.email}`}>{firm.email}</a>
            <a href={`tel:${firm.phone.replaceAll(" ", "")}`}>{firm.phone}</a>
            <p>
              Vid nya ärenden: ange gärna bolag, motpart om relevant och vilken
              tidsfrist som gäller.
            </p>
          </div>

          <div className="office-list stacked">
            {offices.map((office) => (
              <article key={office.city}>
                <h2>{office.city}</h2>
                <p>{office.address}</p>
                <a href={`tel:${office.phone.replaceAll(" ", "")}`}>
                  {office.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
