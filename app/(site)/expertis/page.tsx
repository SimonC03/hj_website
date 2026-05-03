import type { Metadata } from "next";
import { PageIntro } from "@/app/components/page-intro";
import { practiceAreas } from "@/app/data/site";
import { PriceList } from "./price-list";

export const metadata: Metadata = {
  title: "Expertisområden",
  description:
    "Expertisområden och fasta från-priser för juridiska tjänster hos Handelsjuristerna.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageIntro
        eyebrow="Expertisområden"
        title="Juridisk rådgivning med tydliga områden och priser."
      >
        <p>
          Våra uppdrag börjar ofta i ett konkret affärsbeslut. Därför organiserar
          vi rådgivningen runt klientens situation, riskbild och tidsplan. Längre
          ned hittar du också våra från-priser för vanliga juridiska ärenden.
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

      <PriceList />
    </>
  );
}
