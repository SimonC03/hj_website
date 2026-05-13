import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { careerPage } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata(careerPage.metadata);

export default function CareerPage() {
  const applicationHref = `mailto:${careerPage.applicationEmail}?subject=${encodeURIComponent(careerPage.applicationSubject)}`;

  return (
    <div className={`${styles.page} career-page`}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>
            {careerPage.hero.prefix}{" "}
            <span className={styles.heroAccent}>{careerPage.hero.accent}</span>{" "}
            {careerPage.hero.suffix}
          </h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <div className={styles.copyStack}>
            {careerPage.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.detailList}>
          {careerPage.roleContent.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.calloutSection}>
        <div className={styles.callout}>
          <h2>{careerPage.callout.title}</h2>
          <p>{careerPage.callout.text}</p>
          <figure className={styles.calloutMedia}>
            <Image
              alt={careerPage.callout.imageAlt}
              className={styles.calloutImage}
              height={2651}
              sizes="(max-width: 720px) calc(100vw - 100px), 1210px"
              src={careerPage.callout.image}
              width={7952}
            />
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <div className={styles.listColumns}>
            <div>
              <h3>{careerPage.meritsTitle}</h3>
              <ul className={styles.cleanList}>
                {careerPage.merits.map((merit) => (
                  <li key={merit}>{merit}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{careerPage.requirementsTitle}</h3>
              <ul className={styles.cleanList}>
                {careerPage.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.applySection}>
        <div className={styles.applyInner}>
          <div className={styles.applyContent}>
            <p>
              {careerPage.applicationTextBeforeEmail}{" "}
              <a href={`mailto:${careerPage.applicationEmail}`}>
                {careerPage.applicationEmail}
              </a>{" "}
              {careerPage.applicationTextAfterEmail}
            </p>
            <ul className={styles.applicationList}>
              {careerPage.applicationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button button-primary" href={applicationHref}>
              {careerPage.applicationButtonLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
