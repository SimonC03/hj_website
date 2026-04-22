import type { Metadata } from "next";
import { PageIntro } from "@/app/components/page-intro";
import { insights } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Aktuellt",
  description: "Artiklar, analyser och nyheter från HJ Advokatbyrå.",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Aktuellt"
        title="Juridiska perspektiv på beslut som påverkar affären."
      >
        <p>
          Här samlas analyser, nyheter och korta kommentarer om förändringar som
          är relevanta för bolag, ägare och beslutsfattare.
        </p>
      </PageIntro>

      <section className="section section-muted">
        <div className="section-inner insight-grid all">
          {insights.map((item) => (
            <article className="insight-card" key={item.title}>
              <p>
                {item.type} · {item.date}
              </p>
              <h2>{item.title}</h2>
              <a href="mailto:kontakt@hjadvokatbyra.se">Be om analysen</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
