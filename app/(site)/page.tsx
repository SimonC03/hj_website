import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/app/components/contact-form";
import { MainPartnersSection } from "@/app/components/main-partners-section";
import { clientLogos, firm, practiceAreas, values } from "@/app/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          alt=""
          aria-hidden="true"
          className="hero-media"
          fill
          priority
          sizes="100vw"
          src="/images/hero.jpg"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1>
            Sveriges största <br />
            studentdrivna byrå
          </h1>
          <p className="preamble">
            HandelsJuristerna är en juristbyrå driven av juriststudenter från
            Handelshögskolan i Göteborg <br className="desktop-break" />
            Vi gör juridiken lättillgänglig för företag och privatpersoner.
          </p>
        </div>
      </section>

      <section className="module-component module-component_content about-firm-section">
        <div className="wrapper content-module_width-medium">
          <figure className="content-module_thumbnail">
            <Image
              alt="HandelsJuristerna"
              className="responsive-img"
              height={800}
              src="https://handelsjuristerna.se/beta/wp-content/uploads/2021/02/IMG_0715.jpg"
              width={1200}
            />
          </figure>
          <div className="content-module_wrapper">
            <h2 className="content-module_title section-title">Om oss</h2>
            <div className="content-module_content article-text text-flow">
              <p className="preamble-large">
                Som Sveriges största studentdrivna juristbyrå bistår vi
                företag, organisationer och privatpersoner med kvalificerad
                juridisk rådgivning. Med stark akademisk förankring och ett
                nära samarbete utvecklar vi lösningar som är tydliga,
                tillgängliga och hållbara.
              </p>
            </div>
            <footer className="content-module_footer">
              <Link className="button button-primary" href="/om-oss">
                Om byrån
              </Link>
            </footer>
          </div>
        </div>
      </section>

      <MainPartnersSection />

      <section className="section work-method-section">
        <div className="section-inner split section-navy work-method-layout">
          <div className="work-method-copy">
            <h2>Senior, rak och kommersiellt förankrad rådgivning.</h2>
            <p>
              Vi kombinerar akademisk skärpa med ett praktiskt arbetssätt där
              varje råd ska vara begripligt, användbart och möjligt att agera
              på direkt.
            </p>
          </div>
          <div className="values-list">
            {values.map((value) => (
              <p key={value}>
                {value}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="module-component module-component_content expertise-section"
        aria-labelledby="expertise-title"
      >
        <div className="wrapper content-module_width-medium expertise-module">
          <div className="content-module_wrapper">
            <h2
              className="content-module_title section-title"
              id="expertise-title"
            >
              Expertisområden
            </h2>
            <div className="content-module_content article-text text-flow">
              <p className="preamble-large">
                Vi hjälper företag, organisationer och privatpersoner med
                tydlig juridisk rådgivning inom våra centrala områden.
              </p>
            </div>
          </div>
        </div>

        <div className="section-inner expertise-grid">
          {practiceAreas.map((area) => (
            <Link
              className="expertise-item"
              href="/expertis"
              key={area.title}
              aria-label={`Läs mer om ${area.title}`}
            >
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
