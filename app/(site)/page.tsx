import Link from "next/link";
import {
  firm,
  highlights,
  insights,
  offices,
  people,
  practiceAreas,
  values,
} from "@/app/data/site";

export default function HomePage() {
  const featuredAreas = practiceAreas.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Affärsjuridisk advokatbyrå</p>
          <h1>Juridisk rådgivning för avgörande affärsbeslut.</h1>
          <p>
            {firm.displayName} hjälper bolag, ägare och ledningar att navigera
            transaktioner, tvister och komplexa avtal med tydlig strategi och
            senior närvaro.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/kontakt">
              Kontakta oss
            </Link>
            <Link className="button button-secondary" href="/expertis">
              Se vår expertis
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Snabbfakta">
        <div className="section-inner stats-grid">
          {highlights.map((item) => (
            <div className="stat" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Expertis</p>
            <h2>Rådgivning byggd för affärer som rör sig snabbt.</h2>
          </div>
          <p className="section-lead">
            Vi kombinerar specialiserad juridik med praktisk förståelse för
            affären, organisationen och beslutsprocessen bakom varje uppdrag.
          </p>
        </div>

        <div className="section-inner card-grid">
          {featuredAreas.map((area) => (
            <article className="practice-card" key={area.title}>
              <span>{area.title}</span>
              <p>{area.description}</p>
              <Link href="/expertis" aria-label={`Läs mer om ${area.title}`}>
                Läs mer
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Arbetssätt</p>
            <h2>Senior, rak och kommersiellt förankrad rådgivning.</h2>
          </div>
          <div className="values-list">
            {values.map((value) => (
              <p key={value}>{value}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner section-heading">
          <p className="eyebrow">Medarbetare</p>
          <h2>Specialister som kan ta ansvar från första mötet.</h2>
        </div>
        <div className="section-inner people-grid">
          {people.map((person) => (
            <article className="person-card" key={person.email}>
              <div className="person-photo" aria-hidden="true">
                {person.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Aktuellt</p>
            <h2>Insikter från juridiken och affärslivet.</h2>
          </div>
          <Link className="text-link" href="/aktuellt">
            Alla artiklar
          </Link>
        </div>
        <div className="section-inner insight-grid">
          {insights.map((item) => (
            <article className="insight-card" key={item.title}>
              <p>
                {item.type} · {item.date}
              </p>
              <h3>{item.title}</h3>
              <Link href="/aktuellt">Läs mer</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-band">
        <div className="section-inner contact-grid">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>Låt oss diskutera nästa beslut innan det blir bråttom.</h2>
            <p>
              Beskriv ärendet kort så återkommer rätt jurist. Vid brådskande
              ärenden kan du ringa växeln direkt.
            </p>
            <Link className="button button-primary" href="/kontakt">
              Starta dialogen
            </Link>
          </div>
          <div className="office-list">
            {offices.map((office) => (
              <article key={office.city}>
                <h3>{office.city}</h3>
                <p>{office.address}</p>
                <a href={`tel:${office.phone.replaceAll(" ", "")}`}>
                  {office.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
