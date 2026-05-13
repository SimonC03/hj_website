import type { Metadata } from "next";
import { expertisePage } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/seo";
import { PriceList } from "./price-list";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata(expertisePage.metadata);

export default function ExpertisePage() {
  return (
    <div className={`${styles.expertisePage} expertise-page`}>
      <section className={styles.hero}>
        <div className={`section-inner ${styles.heroInner}`}>
          <h1>
            {expertisePage.hero.title}
          </h1>
          <p>
            {expertisePage.hero.text}
          </p>
        </div>
      </section>
      <PriceList />
    </div>
  );
}
