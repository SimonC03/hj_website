import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/app/lib/seo";
import styles from "./page.module.css";

const applicationEmail = "rekrytering@handelsjuristerna.se";

const roleContent = [
  {
    title: "Vad du gör",
    text: "Du är delaktig i processen från första kundkontakt till praktiskt genomförande. Det dagliga arbetet kan omfatta mötesbokning via telefon, klientmöten, utbildningsuppdrag och juridiskt arbete i praktiken.",
  },
  {
    title: "Vad du arbetar med",
    text: "Som juridisk konsult får du arbeta brett inom affärsjuridiken, med frågor som kan röra allt från testamenten till aktieägaravtal och GDPR.",
  },
  {
    title: "Vad du får",
    text: "Du får praktisk erfarenhet, ett team av andra konsulter, möjlighet att använda kontoret för arbete och studier samt tillgång till sociala aktiviteter och ett affärsjuridiskt nätverk.",
  },
];

const requirements = [
  "Du studerar juridik på Handelshögskolan vid Göteborgs universitet och har läst klart termin 2.",
  "Mycket goda skriftliga och muntliga kunskaper i svenska.",
  "Goda skriftliga och muntliga kunskaper i engelska.",
  "Du kan planera dina studier så att du är tillgänglig för uppdrag.",
];

const merits = [
  "Du är förtroendeingivande, relationsskapande och nyfiken på klientarbete.",
  "Erfarenhet av försäljning och service.",
  "Goda betyg från juristutbildningen.",
];

const applicationChecklist = [
  "CV",
  "Motiverande brev",
  "Betyg från juristutbildningen",
];

export const metadata: Metadata = createPageMetadata({
  title: "Karriär och spontanansökan",
  description:
    "Skicka en spontanansökan som juridisk konsult hos HandelsJuristerna och läs mer om arbetet, kraven och möjligheten att få praktisk juridisk erfarenhet.",
  path: "/karriar",
  keywords: [
    "spontanansökan juridisk konsult",
    "karriär juriststudent",
    "juriststudent Göteborg",
    "jobb juristbyrå Göteborg",
  ],
});

export default function CareerPage() {
  const applicationHref = `mailto:${applicationEmail}?subject=Spontanansökan%20juridisk%20konsult`;

  return (
    <div className={`${styles.page} career-page`}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>
            Bli juridisk{" "}
            <span className={styles.heroAccent}>konsult</span> vid sidan av
            studierna
          </h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <div className={styles.copyStack}>
            <p>
              Som juridisk konsult hos HandelsJuristerna omsätter du dina
              teoretiska kunskaper i praktiken. Rollen är upplagd för att kunna
              kombineras med juristprogrammet och ger dig erfarenhet av både
              juridisk analys, klientkontakt och professionellt ansvar.
            </p>
            <p>
              Du blir en del av ett team som stöttar varandra i uppdragen och i
              utvecklingen av byrån. För den som är motiverad finns också
              möjlighet att växa vidare till seniora konsultroller,
              teamledarroller och ledningsgruppen.
            </p>
          </div>
        </div>

        <div className={styles.detailList}>
          {roleContent.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.calloutSection}>
        <div className={styles.callout}>
          <h2>Praktisk affärsjuridik i ett sammanhang byggt för studenter.</h2>
          <p>
            Du får ta ansvar tidigt, arbeta nära klienter och utvecklas
            tillsammans med andra juriststudenter som vill omsätta juridiken i
            konkreta leveranser.
          </p>
          <figure className={styles.calloutMedia}>
            <Image
              alt="Juriststudenter som arbetar tillsammans med juridiska dokument."
              className={styles.calloutImage}
              height={2651}
              sizes="(max-width: 720px) calc(100vw - 100px), 1210px"
              src="/images/AdobeStock_310976337.jpeg"
              width={7952}
            />
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <div className={styles.listColumns}>
            <div>
              <h3>Passar dig som</h3>
              <ul className={styles.cleanList}>
                {merits.map((merit) => (
                  <li key={merit}>{merit}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Formella krav</h3>
              <ul className={styles.cleanList}>
                {requirements.map((requirement) => (
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
              Skicka din spontanansökan till{" "}
              <a href={`mailto:${applicationEmail}`}>{applicationEmail}</a> och
              bifoga följande handlingar.
            </p>
            <ul className={styles.applicationList}>
              {applicationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button button-primary" href={applicationHref}>
              Öppna e-post
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
