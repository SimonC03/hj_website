import type { Metadata } from "next";
import { ContactForm } from "@/app/components/contact-form";
import { PageIntro } from "@/app/components/page-intro";
import { contactPage, firm } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createPageMetadata(contactPage.metadata);

export default function ContactPage() {
  return (
    <>
      <PageIntro title={contactPage.intro.title}>
        <p>{contactPage.intro.text}</p>
      </PageIntro>

      <section className="section contact-page-section">
        <div className="section-inner contact-page-grid">
          <div className="contact-page-copy">
            <div className="contact-panel">
              <h2>{contactPage.panel.title}</h2>
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
