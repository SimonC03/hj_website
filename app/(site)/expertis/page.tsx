import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/seo";
import { PriceList } from "./price-list";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Juridiska tjänster och priser",
  description:
    "Se HandelsJuristernas juridiska tjänster, expertisområden och fasta från-priser för företag, organisationer och privatpersoner.",
  path: "/expertis",
  keywords: [
    "juridiska tjänster",
    "fasta priser juridik",
    "avtal jurist",
    "familjerätt",
    "bostadsjuridik",
  ],
});

export default function ExpertisePage() {
  return (
    <div className={`${styles.expertisePage} expertise-page`}>
      <section className={styles.hero}>
        <div className={`section-inner ${styles.heroInner}`}>
          <h1>
            Vår expertis
          </h1>
          <p>
            Affärsjuridik handlar om mer än lagrum. Vi hjälper företag och
            organisationer att navigera möjligheter, risker och beslut med
            tydlig rådgivning och transparenta från-priser.
          </p>
        </div>
      </section>
      <PriceList />
    </div>
  );
}
