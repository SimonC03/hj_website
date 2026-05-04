import type { Metadata } from "next";
import { ContactForm } from "@/app/components/contact-form";
import { PageIntro } from "@/app/components/page-intro";
import { firm } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakta juristbyrån",
  description:
    "Kontakta HandelsJuristerna för juridisk rådgivning i Göteborg. Ring, maila eller skicka en förfrågan så återkommer vi.",
  path: "/kontakt",
  keywords: ["kontakta juristbyrå", "juridisk rådgivning Göteborg"],
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Kontakt" title="Kontakta oss">
        <p>Maila eller fyll i formuläret så återkommer vi.</p>
      </PageIntro>

      <section className="section contact-page-section">
        <div className="section-inner contact-page-grid">
          <div className="contact-page-copy">
            <div className="contact-panel">
              <h2>Direktkontakt</h2>
              <a href={`mailto:${firm.email}`}>{firm.email}</a>
              <a href={`tel:${firm.phone.replaceAll(" ", "")}`}>
                {firm.phone}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
