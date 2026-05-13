import Image from "next/image";
import { footerData, partnersSection } from "@/app/data/site";

export function MainPartnersSection() {
  return (
    <section
      className="module-component module-component_content main-partners-section"
      aria-labelledby="main-partners-title"
    >
      <div className="wrapper content-module_width-narrow">
        <div className="content-module_wrapper content-module_wrapper-center">
          <h2
            className="content-module_title section-title"
            id="main-partners-title"
          >
            {partnersSection.title}
          </h2>
          <div className="content-module_content article-text text-flow">
            <p className="preamble-large">
              {partnersSection.intro}
            </p>
          </div>
        </div>

        {footerData.partners.length > 0 ? (
          <div className="main-partners-grid" aria-label="Huvudpartners">
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
  );
}
