import type { Metadata } from "next";
import { PageIntro } from "@/app/components/page-intro";
import { people } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Medarbetare",
  description: "Möt juristerna på HJ Advokatbyrå.",
};

export default function PeoplePage() {
  return (
    <>
      <PageIntro
        eyebrow="Medarbetare"
        title="Erfarna jurister med tydligt mandat i uppdraget."
      >
        <p>
          Teamet är byggt för nära samarbete, korta beslutsvägar och ansvar från
          första analys till avslutad förhandling.
        </p>
      </PageIntro>

      <section className="section">
        <div className="section-inner people-grid full">
          {people.map((person) => (
            <article className="person-card large" key={person.email}>
              <div className="person-photo" aria-hidden="true">
                {person.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <h2>{person.name}</h2>
                <p>{person.role}</p>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
