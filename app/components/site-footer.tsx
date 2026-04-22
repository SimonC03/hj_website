import Link from "next/link";

type Office = {
  city: string;
  address: string[];
  phone: string;
  email: string;
};

// ---------------------------------------------------------------------------
// DATA: Detta kan du flytta till din @/app/data/site.ts om du vill ha allt samlat
// ---------------------------------------------------------------------------
export const footerData = {
  brandName: "HandelsJuristerna",
  aboutText:
    "Handelsjuristerna är en juristbyrå driven av juriststudenter från Handelshögskolan i Göteborg. Vår vision är att vara den flexibla och okomplicerade byrån som gör juridiken lättillgänglig för såväl företag som privatpersoner.",
  copyrightYear: new Date().getFullYear(),
  socials: {
    linkedin: "https://www.linkedin.com/company/ditt-foretag/",
    instagram: "https://www.instagram.com/dittforetag/",
    facebook: "https://www.facebook.com/dittforetag/",
  },
  navItems: [
    { label: "Kompetensområden", href: "/kompetensomraden" },
    { label: "Karriär", href: "/karriar" },
    { label: "Nyheter", href: "/nyheter" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Medarbetare", href: "/medarbetare" },
    { label: "Policyer", href: "/policyer" },
  ],
  office: {
    city: "Göteborg",
    address: ["Magasinsgatan 18 A", "411 18 Göteborg"],
    phone: "+46 (0)10-179 78 00",
    email: "vast@dinfirma.se",
  } satisfies Office,
  partners: [] as string[],
};

// ---------------------------------------------------------------------------
// KOMPONENT
// ---------------------------------------------------------------------------
export function SiteFooter() {
  return (
    <footer className="site-footer wp-block-template-part">
      <div className="bg-primary-dark pt-12 pb-24 px-6 lg:px-8" role="contentinfo">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-11 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            
            {/* LOGOTYP */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 88 88"
                width="88"
                height="88"
                role="img"
                aria-label={`${footerData.brandName} Logotyp`}
              >
                {/* Byt ut denna path mot din egen SVG-logotyp */}
                <path
                  fill="#fff"
                  d="M85.775 0H60.85c-.606 0-1.173.242-1.577.645l-44.83 44.659a2.22 2.22 0 0 0-.647 1.572v23.901L0 84.522l3.156 3.143 13.797-13.744h23.992c.607 0 1.174-.242 1.578-.645l44.83-44.659A2.22 2.22 0 0 0 88 27.045V2.217C88 1.007 86.989 0 85.775 0M47.58 43.41h18.611L55.31 54.252H36.697zm4.45-4.434 10.884-10.842h18.611L70.643 38.976zM67.325 23.74 83.55 7.578V23.74zM18.247 47.803l43.535-43.37h18.612l-62.147 61.91zm21.768 21.684H21.403l10.884-10.842h18.611z"
                ></path>
              </svg>
              <p className="mt-6 max-w-72 text-sm leading-6 text-white/75">
                {footerData.aboutText}
              </p>
            </div>

            {/* INNEHÅLL & SOCIALA MEDIER */}
            <div>
              <h3 className="my-0 text-white text-xl has-text-xl-font-size">
                Innehåll
              </h3>
              <nav
                id="footer-navigation"
                className="footer-navigation pt-6 mt-6 border-t border-[#a15630]"
                role="navigation"
                aria-label="Primary menu"
              >
                <div className="footer-menu-container">
                  <ul
                    id="footer-menu-list"
                    className="list-none pl-0 mt-0 flex flex-col gap-3 text-sm [&>li>a]:text-white [&>li>a]:no-underline"
                  >
                    {footerData.navItems.map((item) => (
                      <li key={item.href} className="menu-item">
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              <h3 className="mt-6 mb-0 text-xl has-text-xl-font-size text-white">
                Följ oss
              </h3>
              <div className="flex gap-6 pt-6 mt-6 border-t border-[#a15630]">
                {footerData.socials.linkedin && (
                  <a
                    href={footerData.socials.linkedin}
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg fill="#fff" className="size-6" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                )}
                {footerData.socials.instagram && (
                  <a
                    href={footerData.socials.instagram}
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                )}
                {footerData.socials.facebook && (
                  <a
                    href={footerData.socials.facebook}
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* KONTOR */}
            <div>
              <h3 className="my-0 text-white text-xl has-text-xl-font-size">
                Kontor
              </h3>

              <div className="pt-6 mt-6 border-t border-[#a15630]">
                <h4 className="has-text-lg-font-size text-lg/8 text-white font-(family-name:--wp--preset--font-family--inria-serif) font-normal my-0">
                  {footerData.office.city}
                </h4>
                <ul className="list-none pl-0 mt-3 mb-0 flex flex-col gap-1">
                  {footerData.office.address.map((line) => (
                    <li key={line} className="text-sm text-white">
                      {line}
                    </li>
                  ))}
                  <li className="text-sm mt-1">
                    <a href={`tel:${footerData.office.phone}`} className="text-white no-underline">
                      {footerData.office.phone}
                    </a>
                  </li>
                  <li className="text-sm">
                    <a href={`mailto:${footerData.office.email}`} className="text-white no-underline">
                      {footerData.office.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* SAMARBETSPARTNERS */}
            <div>
              <h3 className="my-0 text-white text-xl has-text-xl-font-size">
                Samarbetspartners
              </h3>

              <div className="pt-6 mt-6 border-t border-[#a15630]">
                {footerData.partners.length > 0 ? (
                  <ul className="list-none pl-0 mt-0 mb-0 flex flex-col gap-3">
                    {footerData.partners.map((partner) => (
                      <li key={partner} className="text-sm text-white">
                        {partner}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="my-0 text-sm leading-6 text-white/75">
                    Lägg till samarbetspartners här.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
