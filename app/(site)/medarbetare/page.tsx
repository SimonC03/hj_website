import type { Metadata } from "next";
import { employeeSections, type EmployeeProfile } from "./people";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Medarbetare",
  description: "Möt juristerna på HJ Advokatbyrå.",
};

function splitName(name: string) {
  return name.split(" ").map((part) => <span key={`${name}-${part}`}>{part}</span>);
}

function toPhoneHref(phone: string) {
  return `tel:${phone.replaceAll(" ", "")}`;
}

function EmployeeGrid({ people }: { people: EmployeeProfile[] }) {
  return (
    <div className={styles.grid}>
      {people.map((person) => (
        <article
          className={styles.card}
          key={person.email}
          style={{ backgroundImage: `url("${person.profileImage}")` }}
        >
          <div className={styles.previewLink}>
            <div className={styles.previewContent}>
              <h3 className={styles.previewName}>
                <span className={styles.previewNameWords}>{splitName(person.name)}</span>
              </h3>
              <p className={styles.previewRole}>{person.title}</p>
            </div>
          </div>

          <div className={styles.hoverPanel}>
            {person.linkedinUrl ? (
              <a
                aria-label={`${person.name} på LinkedIn`}
                className={styles.linkedin}
                href={person.linkedinUrl}
                rel="noreferrer"
                target="_blank"
              >
                in
              </a>
            ) : null}

            <div className={styles.hoverBody}>
              <h3 className={styles.hoverName}>
                <span className={styles.hoverNameWords}>{splitName(person.name)}</span>
              </h3>
              <p className={styles.hoverRole}>{person.title}</p>
              <a className={styles.contactLink} href={`mailto:${person.email}`}>
                {person.email}
              </a>
              <div className={styles.phoneList}>
                <a className={styles.phoneLink} href={toPhoneHref(person.phone)}>
                  {person.phone}
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
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
