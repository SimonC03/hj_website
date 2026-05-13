import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/app/components/contact-form";
import { HeroStats } from "@/app/components/hero-stats";
import { MainPartnersSection } from "@/app/components/main-partners-section";
import { clientLogos, homePage, practiceAreas } from "@/app/data/site";

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
          preload="metadata"
        >
          <source src={homePage.hero.video} />
        </video>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1>
            {homePage.hero.titleLines.map((line) => (
              <span className="hero-title-line" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p className="preamble">
            {homePage.hero.preambleBeforeBreak}{" "}
            <br className="desktop-break" />
            {homePage.hero.preambleAfterBreak}
          </p>
          <HeroStats />
        </div>
      </section>

      <section className="client-marquee-section" aria-label={homePage.clients.ariaLabel}>
        <div className="client-marquee" aria-label={homePage.clients.ariaLabel}>
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

      <section className="module-component module-component_content about-firm-section">
        <div className="wrapper content-module_width-medium">
          <figure className="content-module_thumbnail">
            <Image
              alt={homePage.about.imageAlt}
              className="responsive-img"
              height={800}
              src={homePage.about.image}
              width={1200}
            />
          </figure>
          <div className="content-module_wrapper">
            <h2 className="content-module_title section-title">{homePage.about.title}</h2>
            <div className="content-module_content article-text text-flow">
              <p className="preamble-large">
                {homePage.about.text}
              </p>
            </div>
            <footer className="content-module_footer">
              <Link className="button button-primary" href={homePage.about.buttonHref}>
                {homePage.about.buttonLabel}
              </Link>
            </footer>
          </div>
        </div>
      </section>

      <MainPartnersSection />

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
              {homePage.expertise.title}
            </h2>
            <div className="content-module_content article-text text-flow">
              <p className="preamble-large">
                {homePage.expertise.text}
              </p>
            </div>
          </div>
        </div>

        <div className="section-inner expertise-grid">
          {practiceAreas.map((area) => (
            <Link
              className="expertise-item"
              href={homePage.expertise.href}
              key={area.title}
              aria-label={`${homePage.expertise.readMoreLabel} om ${area.title}`}
            >
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <span className="expertise-read-more" aria-hidden="true">
                {homePage.expertise.readMoreLabel}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section contact-band">
        <div className="section-inner contact-grid">
          <div>
            <h2>{homePage.contact.title}</h2>
            <p>{homePage.contact.text}</p>
            <dl className="contact-details">
              {homePage.contact.details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>
                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
