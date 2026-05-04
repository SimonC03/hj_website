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
          <h1>Juridisk rådgivning med tydliga områden och priser.</h1>
          <p>
            Våra uppdrag börjar ofta i ett konkret affärsbeslut. Därför
            organiserar vi rådgivningen runt klientens situation, riskbild och
            tidsplan. Längre ned hittar du också våra från-priser för vanliga
            juridiska ärenden.
          </p>
        </div>
      </section>

      <PriceList />
    </div>
  );
}
