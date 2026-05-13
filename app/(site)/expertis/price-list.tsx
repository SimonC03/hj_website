"use client";

import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { expertisePage } from "@/app/data/site";
import {
  pricingCategories,
  pricingServices,
  type PricingCategoryId,
} from "@/app/data/pricing";
import styles from "./page.module.css";

export function PriceList() {
  const [activeCategory, setActiveCategory] = useState<PricingCategoryId>("all");

  const services = useMemo(() => {
    if (activeCategory === "all") {
      return pricingServices;
    }

    return pricingServices.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryLabel =
    activeCategory === "all"
      ? expertisePage.priceList.allCategoryLabel
      : pricingCategories.find((category) => category.id === activeCategory)?.title;

  return (
    <section aria-label={expertisePage.priceList.ariaLabel} className={`section ${styles.pricingSection}`}>
      <div className="section-inner">
        <div aria-label={expertisePage.priceList.categoryAriaLabel} className={styles.categoryTabs} role="tablist">
          {pricingCategories.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                aria-controls="pricing-services"
                aria-selected={isActive}
                className={`${styles.categoryTab} ${isActive ? styles.activeTab : ""}`}
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                role="tab"
                type="button"
              >
                <span className={styles.categoryText}>
                  <strong>{category.title}</strong>
                  <small>{category.description}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className={styles.servicesShell} id="pricing-services" role="tabpanel">
          <div className={styles.servicesMeta}>
            <span>{services.length} {expertisePage.priceList.serviceCountLabel}</span>
            <span>{activeCategoryLabel}</span>
          </div>

          <div className={styles.serviceList}>
            {services.map((service) => (
              <details className={styles.serviceItem} key={`${service.category}-${service.title}`}>
                <summary className={styles.serviceSummary}>
                  <span className={styles.serviceTitleBlock}>
                    <span>{service.title}</span>
                    <small>{service.summary}</small>
                  </span>
                  <span className={styles.servicePrice}>{service.price}</span>
                  <span className={styles.serviceToggle} aria-hidden="true">
                    <ChevronDown size={20} />
                  </span>
                </summary>

                <div className={styles.serviceBody}>
                  <ul className={styles.includeList}>
                    {service.includes.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.note && <p className={styles.serviceNote}>{service.note}</p>}

                  <div className={styles.serviceFooter}>
                    <span>{expertisePage.priceList.paymentText}</span>
                    <Link className="button button-primary" href={expertisePage.priceList.consultationHref}>
                      {expertisePage.priceList.consultationLabel}
                    </Link>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
