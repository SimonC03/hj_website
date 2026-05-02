"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { firm } from "@/app/data/site";

type MenuItem = {
  label: string;
  href: string;
  children?: MenuItem[];
};

const quickNav = [
  { label: "EXPERTISOMRÅDEN", href: "/expertis" },
  { label: "PRISER", href: "/priser" },
  { label: "MEDARBETARE", href: "/medarbetare" },
];

const mainMenu: MenuItem[] = [
  {
    label: "Vår expertis",
    href: "/expertis",
    children: [
      { label: "Verksamhetsområden", href: "/expertis" },
      { label: "Bransch", href: "/expertis" },
      { label: "International desks", href: "/expertis" },
      { label: "ESG i rådgivningen", href: "/expertis" },
    ],
  },
  { label: "Priser", href: "/priser" },
  { label: "Medarbetare", href: "/medarbetare" },
  {
    label: "Aktuellt",
    href: "/aktuellt",
    children: [
      { label: "Artiklar", href: "/aktuellt" },
      { label: "Nyheter", href: "/aktuellt" },
      { label: "Event", href: "/aktuellt" },
      { label: "Uppdrag", href: "/aktuellt" },
    ],
  },
  {
    label: "Om oss",
    href: "/om-oss",
    children: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Erbjudande", href: "/om-oss" },
      { label: "Hållbarhet", href: "/om-oss" },
      { label: "Värdegrund", href: "/om-oss" },
    ],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    children: [
      { label: "Kontor", href: "/kontakt" },
      { label: "Presskontakt", href: "/kontakt" },
    ],
  },
];

function HeaderLogo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logos/full-white.png"
      alt={firm.displayName}
      className={`hj-header-logo ${className}`}
      style={{ objectFit: "contain", objectPosition: "left center" }}
    />
  );
}

function MenuList({
  items,
  openItem,
  onToggle,
  onNavigate,
}: {
  items: MenuItem[];
  openItem: string | null;
  onToggle: (label: string) => void;
  onNavigate: () => void;
}) {
  return (
    <ul className="mobile-nav-list">
      {items.map((item) => {
        const isOpen = openItem === item.label;
        const hasChildren = Boolean(item.children?.length);

        return (
          <li
            className={`menu-item${hasChildren ? " menu-item-has-children" : ""}${
              isOpen ? " active" : ""
            }`}
            key={item.label}
          >
            {hasChildren ? (
              <button
                aria-expanded={isOpen}
                className="menu-accordion-trigger"
                onClick={() => onToggle(item.label)}
                type="button"
              >
                {item.label}
              </button>
            ) : (
              <Link href={item.href} onClick={onNavigate}>
                {item.label}
              </Link>
            )}

            {hasChildren && (
              <ul className={`sub-menu${isOpen ? " active" : ""}`}>
                {item.children?.map((child) => (
                  <li key={`${item.label}-${child.label}`}>
                    <Link href={child.href} onClick={onNavigate}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  const overlayOpen = isMenuOpen;

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenMobileItem(null);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY >= 100);

      if (Math.abs(currentY - lastScrollY.current) > 25) {
        setIsHidden(currentY > lastScrollY.current && currentY > 128);
        lastScrollY.current = Math.max(currentY, 0);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("header-overlay-open", overlayOpen);

    return () => document.body.classList.remove("header-overlay-open");
  }, [overlayOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <>
      <button
        aria-label="Stäng meny"
        className={`header-overlay${overlayOpen ? " active" : ""}`}
        onClick={closeAll}
        type="button"
      />

      <header
        className={`site-header setterwalls-header${isScrolled ? " sticky" : ""}${
          isHidden && !overlayOpen ? " hidden" : ""
        }${isMenuOpen ? " active" : ""}`}
      >
        <div className="header-container">
          <Link className="logotype" href="/" onClick={closeAll}>
            <HeaderLogo />
          </Link>

          <div className="menu-right">
            <nav className="setterwalls-navbar" aria-label="Snabbnavigation">
              <ul className="navbar-nav">
                {quickNav.map((item) => (
                  <li className="menu-item" key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
              className="hamburger-toggle"
              onClick={toggleMenu}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          aria-label="Huvudmeny"
          className={`mobile-menu${isMenuOpen ? " open" : ""}`}
        >
          <Link className="logotype logotype--mobile" href="/" onClick={closeAll}>
            <HeaderLogo />
          </Link>

          <MenuList
            items={mainMenu}
            onNavigate={closeAll}
            onToggle={(label) =>
              setOpenMobileItem((current) => (current === label ? null : label))
            }
            openItem={openMobileItem}
          />
        </nav>
      </header>
    </>
  );
}
