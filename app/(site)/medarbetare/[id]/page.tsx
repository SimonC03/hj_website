import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { employeeProfilePage } from "@/app/data/site";
import { employees, findEmployeeById, getEmployeeId } from "@/app/data/people";
import { createPageMetadata } from "@/app/lib/seo";
import styles from "./page.module.css";

type EmployeePageProps = {
  params: Promise<{ id: string }>;
};

function toPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function hasItems(items?: string[]) {
  return Boolean(items?.length);
}

function ValueList({ items }: { items?: string[] }) {
  if (!hasItems(items)) {
    return <p className={styles.emptyValue}>{employeeProfilePage.emptyValue}</p>;
  }

  return (
    <ul className={styles.itemList}>
      {items?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TagList({ items }: { items?: string[] }) {
  if (!hasItems(items)) {
    return <p className={styles.emptyValue}>{employeeProfilePage.emptyValue}</p>;
  }

  return (
    <div className={styles.tagList}>
      {items?.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function DetailField({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.profileDetail}>
      <h2 className={styles.profileDetailTitle}>{title}</h2>
      <div className={styles.profileDetailContent}>{children}</div>
    </div>
  );
}

export function generateStaticParams() {
  return employees.map((person) => ({
    id: getEmployeeId(person),
  }));
}

export async function generateMetadata({ params }: EmployeePageProps): Promise<Metadata> {
  const { id } = await params;
  const person = findEmployeeById(id);

  if (!person) {
    return createPageMetadata(employeeProfilePage.fallbackMetadata);
  }

  const path = `/medarbetare/${getEmployeeId(person)}`;

  return createPageMetadata({
    title: `${person.name}, ${person.title}`,
    description: `Kontaktuppgifter till ${person.name}, ${person.title} ${employeeProfilePage.metadataDescriptionSuffix}`,
    path,
    keywords: [person.name, person.title, employeeProfilePage.metadataKeyword],
  });
}

export default async function EmployeePage({ params }: EmployeePageProps) {
  const { id } = await params;
  const person = findEmployeeById(id);

  if (!person) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <article className={styles.person}>
        <header className={styles.header}>
          <div className={styles.headerImage}>
            <Link className={styles.imageBackLink} href="/medarbetare">
              {employeeProfilePage.backLabel}
            </Link>
            <Image
              alt={person.name}
              className={styles.image}
              height={1280}
              priority
              src={person.profileImage}
              width={1084}
            />
          </div>

          <div className={styles.headerContent}>
            <p className={styles.eyebrow}>{employeeProfilePage.eyebrow}</p>
            <h1 className={styles.name}>{person.name}</h1>
            <p className={styles.title}>{person.title}</p>

            <hr className={styles.rule} />

            <div className={styles.contactBlock}>
              <h2 className={styles.profileDetailTitle}>{employeeProfilePage.contactTitle}</h2>
              <div className={styles.contactList}>
                <a className={styles.infoLink} href={`mailto:${person.email}`}>
                  {person.email}
                </a>

                <a className={styles.infoLink} href={toPhoneHref(person.phone)}>
                  {person.phone}
                </a>

                {person.linkedinUrl ? (
                  <a
                  className={styles.infoLink}
                  href={person.linkedinUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {employeeProfilePage.profileUrlLabel}
                </a>
              ) : null}
              </div>
            </div>

            <hr className={styles.rule} />

            <div className={styles.profileDetails}>
              <DetailField title={employeeProfilePage.detailTitles.languages}>
                <ValueList items={person.languages} />
              </DetailField>

              <DetailField title={employeeProfilePage.detailTitles.education}>
                <ValueList items={person.education} />
              </DetailField>

              <DetailField title={employeeProfilePage.detailTitles.specialAreas}>
                <TagList items={person.specialAreas} />
              </DetailField>
            </div>
          </div>
        </header>
      </article>
    </div>
  );
}
