import type { Metadata } from "next";
import { PriceList } from "./price-list";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Expertisområden",
  description:
    "Expertisområden och fasta från-priser för juridiska tjänster hos Handelsjuristerna.",
};

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
