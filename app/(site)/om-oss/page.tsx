import type { Metadata } from "next";
import Image from "next/image";
import { MainPartnersSection } from "@/app/components/main-partners-section";
import { boardMembers } from "@/app/data/board";
import { aboutPage, values } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createPageMetadata(aboutPage.metadata);

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-page-text">
        <div className="section-inner narrow">
          <h1 className="section-title">{aboutPage.intro.title}</h1>
          <div className="about-page-lead">
            {aboutPage.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section work-method-section">
        <div className="section-inner split section-navy work-method-layout">
          <div className="work-method-copy">
            <h2>{aboutPage.method.title}</h2>
            <p>{aboutPage.method.text}</p>
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
              alt={aboutPage.imageSection.imageAlt}
              className="responsive-img"
              height={800}
              priority
              src={aboutPage.imageSection.image}
              width={1200}
            />
          </figure>

          <div className="about-page-info">
            <h2>{aboutPage.imageSection.title}</h2>
            <ul>
              {aboutPage.imageSection.items.map((item) => (
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
              {aboutPage.boardTitle}
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
