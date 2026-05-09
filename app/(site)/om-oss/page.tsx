import type { Metadata } from "next";
import Image from "next/image";
import { MainPartnersSection } from "@/app/components/main-partners-section";
import { boardMembers } from "@/app/data/board";
import { values } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/seo";

const infoItems = [
  "Studentdriven juristbyrå från Handelshögskolan vid Göteborgs universitet",
  "Rådgivning för företag, organisationer och privatpersoner",
  "Tydliga svar, nära dialog och praktiskt användbara leveranser",
];

export const metadata: Metadata = createPageMetadata({
  title: "Om vår juristbyrå",
  description:
    "Läs om HandelsJuristerna, Sveriges största studentdrivna juristbyrå med juridisk rådgivning från Handelshögskolan vid Göteborgs universitet.",
  path: "/om-oss",
  keywords: ["om HandelsJuristerna", "juriststudenter Göteborg"],
});

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-page-text">
        <div className="section-inner narrow">
          <h1 className="section-title">Sveriges största studentdrivna byrå.</h1>
          <div className="about-page-lead">
            <p>
              HandelsJuristerna är en juristbyrå driven av juriststudenter från
              Handelshögskolan vid Göteborgs universitet. Vi gör juridiken mer lättillgänglig
              för företag, organisationer och privatpersoner som vill ha tydliga
              råd utan onödig omväg.
            </p>
            <p>
              Vårt arbetssätt bygger på nära dialog, akademisk noggrannhet och
              juridik som går att använda i praktiken. Målet är att varje klient
              ska förstå både frågan, alternativen och nästa steg.
            </p>
          </div>
        </div>
      </section>
      <section className="section work-method-section">
        <div className="section-inner split section-navy work-method-layout">
          <div className="work-method-copy">
            <h2>Senior, rak och kommersiellt förankrad rådgivning.</h2>
            <p>
              Vi kombinerar akademisk skärpa med ett praktiskt arbetssätt där
              varje råd är begripligt, användbart och möjligt att agera
              på direkt.
            </p>
          </div>
          <div className="values-list">
            {values.map((value) => (
              <p key={value}>
                {value}
              </p>
            ))}
          </div>
        </div>
      </section>
      <MainPartnersSection />
      <section className="about-page-image-section">
        <div className="wrapper content-module_width-medium about-page-image-grid">
          <figure className="content-module_thumbnail about-page-image">
            <Image
              alt="HandelsJuristernas medarbetare i möte"
              className="responsive-img"
              height={800}
              priority
              src="https://handelsjuristerna.se/beta/wp-content/uploads/2021/02/IMG_0715.jpg"
              width={1200}
            />
          </figure>

          <div className="about-page-info">
            <h2>Juridik med låg tröskel och hög ambitionsnivå.</h2>
            <ul>
              {infoItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      

      <section className="about-page-board" aria-labelledby="about-board-title">
        <div className="section-inner">
          <div className="about-page-board-header">
            <h2 className="section-title" id="about-board-title">
              Vår styrelse
            </h2>
          </div>

          <div className="about-page-board-list">
            {boardMembers.map((member) => (
              <article className="about-page-board-member" key={member.name}>
                <div>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
                <p>{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
