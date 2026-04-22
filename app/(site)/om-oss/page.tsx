import type { Metadata } from "next";
import { PageIntro } from "@/app/components/page-intro";
import { highlights, values } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "HJ Advokatbyrå är en affärsjuridisk byrå med fokus på tydlig, senior och kommersiell rådgivning.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Om oss"
        title="En fokuserad byrå för klienter som vill ha tydliga råd."
      >
        <p>
          Vi arbetar nära våra klienter och prioriterar juridik som går att
          omsätta i beslut, förhandlingar och långsiktiga relationer.
        </p>
      </PageIntro>

      <section className="stats-band standalone" aria-label="Snabbfakta">
        <div className="section-inner stats-grid">
          {highlights.map((item) => (
            <div className="stat" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Principer</p>
            <h2>Så arbetar vi.</h2>
          </div>
          <div className="values-list">
            {values.map((value) => (
              <p key={value}>{value}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
