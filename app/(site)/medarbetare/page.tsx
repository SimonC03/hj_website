import type { Metadata } from "next";
import Link from "next/link";
import { employeeSections, getEmployeeId, type EmployeeProfile } from "@/app/data/people";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Medarbetare",
  description: "Möt juristerna på HJ Advokatbyrå.",
};

function splitName(name: string) {
  return name.split(" ").map((part) => <span key={`${name}-${part}`}>{part}</span>);
}

function EmployeeGrid({ people }: { people: EmployeeProfile[] }) {
  return (
    <div className={styles.grid}>
      {people.map((person) => {
        const profileHref = `/medarbetare/${getEmployeeId(person)}`;

        return (
          <Link
            aria-label={`Läs mer om ${person.name}`}
            className={styles.card}
            href={profileHref}
            key={person.email}
            style={{ backgroundImage: `url("${person.profileImage}")` }}
          >
            <article className={styles.cardInner}>
              <div className={styles.previewLink}>
                <div className={styles.previewContent}>
                  <h3 className={styles.previewName}>
                    <span className={styles.previewNameWords}>{splitName(person.name)}</span>
                  </h3>
                  <p className={styles.previewRole}>{person.title}</p>
                </div>
              </div>

              <div className={styles.hoverPanel}>
                <div className={styles.hoverBody}>
                  <h3 className={styles.hoverName}>
                    <span className={styles.hoverNameWords}>{splitName(person.name)}</span>
                  </h3>
                  <p className={styles.hoverRole}>{person.title}</p>
                  <span className={styles.contactLink}>{person.email}</span>
                  <div className={styles.phoneList}>
                    <span className={styles.phoneLink}>{person.phone}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default function PeoplePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Medarbetare</h1>
        <p className={styles.heroIntro}>
          Vi på HandelsJuristerna är stolta över att ha en personalstyrka som
          består av några av de mest framstående juriststudenterna på
          Handelshögskolan vid Göteborgs universitet. Nedan finns
          kontaktuppgifter till alla våra medarbetare.
        </p>
      </section>

      {employeeSections.map((section, index) => (
        <section
          className={`${styles.groupSection}${index > 0 ? ` ${styles.groupSectionMuted}` : ""}`}
          key={section.id}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionLabel}>{section.label}</h2>
          </div>
          <EmployeeGrid people={section.people} />
        </section>
      ))}
    </div>
  );
}
