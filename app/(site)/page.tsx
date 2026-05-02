import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/app/components/contact-form";
import { footerData } from "@/app/components/site-footer";
import { clientLogos, firm, practiceAreas, values } from "@/app/data/site";

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
            Handelsjuristerna är en juristbyrå driven av juriststudenter från
            Handelshögskolan i Göteborg <br className="desktop-break" />
            Vi gör juridiken lättillgänglig för företag och privatpersoner.
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
            rådgivning. Med stark akademisk förankring och ett nära samarbete
            utvecklar vi lösningar som är tydliga, tillgängliga och hållbara.
          </p>
          <footer>
            <Link className="button button-primary" href="/om-oss">
              Om byrån
            </Link>
          </footer>
        </div>
      </section>

      <section
  className="section main-partners-section"
  aria-labelledby="main-partners-title"
>
  <div className="section-inner main-partners-content">
    <div className="main-partners-copy">
      <p className="eyebrow">Huvudpartners</p>

      <h2 id="main-partners-title">
        Tillsammans med våra huvudpartners
      </h2>

      <p>
        Våra huvudpartners är med och stärker HandelsFöretagen genom
        långsiktiga samarbeten, kunskapsutbyte och möjligheter för våra
        medlemmar att möta näringslivet på riktigt.
      </p>
    </div>

    {footerData.partners.length > 0 ? (
      <div className="main-partners-grid">
        {footerData.partners.map((partner) => {
          const logo = (
            <Image
              alt={`${partner.name} logo`}
              className="main-partner-logo"
              height={partner.height}
              src={partner.logo}
              width={partner.width}
            />
          );

          return partner.href ? (
            <a
              aria-label={`Besök ${partner.name}`}
              className="main-partner-link"
              href={partner.href}
              key={partner.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              {logo}
            </a>
          ) : (
            <div className="main-partner-link" key={partner.name}>
              {logo}
            </div>
          );
        })}
      </div>
    ) : null}
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

      <section className="section contact-band">
        <div className="section-inner contact-grid">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>Kontakta oss gärna</h2>
            <p>Ring, maila eller fyll i formuläret så hör vi av oss så fort vi kan.</p>
            <dl className="contact-details">
              <div>
                <dt>Adress</dt>
                <dd>{firm.address}</dd>
              </div>
              <div>
                <dt>E-post</dt>
                <dd>
                  <a href={`mailto:${firm.email}`}>{firm.email}</a>
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href={`tel:${firm.phone.replaceAll(" ", "")}`}>
                    {firm.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
