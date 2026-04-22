import type { Metadata } from "next";
import { PageIntro } from "@/app/components/page-intro";
import { practiceAreas } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Expertis",
  description:
    "Expertisområden inom bolagsrätt, transaktioner, tvistlösning, kommersiella avtal, fastigheter och regulatorik.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageIntro
        eyebrow="Expertis"
        title="Affärsjuridik som möter frågan där den faktiskt uppstår."
      >
        <p>
          Våra uppdrag börjar ofta i ett konkret affärsbeslut. Därför organiserar
          vi rådgivningen runt klientens situation, riskbild och tidsplan.
        </p>
      </PageIntro>

      <section className="section">
        <div className="section-inner card-grid wide">
          {practiceAreas.map((area) => (
            <article className="practice-card detailed" key={area.title}>
              <span>{area.title}</span>
              <p>{area.description}</p>
              <ul className="tag-list">
                {area.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
