import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "@/app/components/testimonials";
import {
  clientLogos,
  offices,
  practiceAreas,
  values,
} from "@/app/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <video
          aria-hidden="true"
          autoPlay
          className="hero-media"
          loop
          muted
          playsInline
        >
          <source
            src="https://www.mannheimerswartling.se/app/uploads/2026/02/MSA_Hemsida-Film_Vinter-2026_v2_WEB.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1>
            Sveriges största <br />
            studentdrivna byrå
          </h1>
          <p className="preamble">
            Handelsjuristerna är en juristbyrå driven av juriststudenter från Handelshögskolan i Göteborg <br className="desktop-break" />
            Vår vision är att vara den flexibla och okomplicerade byrån som gör juridiken lättillgänglig för såväl företag som privatpersoner.
          </p>
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

      <section className="section about-firm-section">
        <div className="section-inner about-firm-content">
          <h2>En ledande studentdriven byrå</h2>
          <p>
            Som Sveriges största studentdrivna juristbyrå bistår vi företag,
            organisationer och privatpersoner med kvalificerad juridisk
            rådgivning i viktiga och affärsnära frågor. Vår rådgivning
            kännetecknas av juridisk precision, nyfikenhet och ett tydligt
            fokus på klientens mål. Med stark akademisk förankring, praktisk
            förståelse och ett nära samarbete med våra klienter utvecklar vi
            lösningar som är genomtänkta, tillgängliga och hållbara över tid.
          </p>
          <footer>
            <Link className="button button-primary" href="/om-oss">
              Om byrån
            </Link>
          </footer>
        </div>
      </section>

      <section className="client-marquee-section" aria-label="Tidigare kunder">
        <div className="client-marquee" aria-label="Tidigare kunder">
          {[0, 1].map((loop) => (
            <div
              className="client-marquee-track"
              aria-hidden={loop === 1}
              key={loop}
            >
              {clientLogos.map((logo) => (
                <Image
                  alt={loop === 0 ? logo.alt : ""}
                  className="client-logo"
                  height={80}
                  key={`${loop}-${logo.name}`}
                  src={logo.src}
                  width={logo.width}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section expertise-section">
        <div className="section-inner expertise-heading">
          <p className="eyebrow">Expertisområden</p>
          <h2>Våra tjänster</h2>
        </div>

        <div className="section-inner expertise-grid">
          {practiceAreas.map((area, index) => (
            <Link
              className="expertise-item"
              href="/expertis"
              key={area.title}
              aria-label={`Läs mer om ${area.title}`}
            >
              <span className="expertise-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <span className="expertise-read-more" aria-hidden="true">
                Läs mer
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Testimonials />

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
