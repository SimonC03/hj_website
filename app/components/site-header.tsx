"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { firm } from "@/app/data/site";

type MenuItem = {
  label: string;
  href: string;
};

const quickNav = [
  { label: "EXPERTISOMRÅDEN", href: "/expertis" },
  { label: "MEDARBETARE", href: "/medarbetare" },
  { label: "KARRIÄR", href: "/karriar" },
];

const mainMenu: MenuItem[] = [
  { label: "Startsida", href: "/" },
  { label: "Expertisområden", href: "/expertis" },
  { label: "Medarbetare", href: "/medarbetare" },
  { label: "Karriär", href: "/karriar" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

function HeaderLogo({
  className = "",
  src = "/logos/full-white.png",
}: {
  className?: string;
  src?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={firm.displayName}
      className={`hj-header-logo ${className}`}
      style={{ objectFit: "contain", objectPosition: "left center" }}
    />
  );
}

function MenuList({
  items,
  onNavigate,
  pathname,
}: {
  items: MenuItem[];
  onNavigate: () => void;
  pathname: string;
}) {
  return (
    <ul className="mobile-nav-list">
      {items.map((item) => {
        const isCurrent =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(`${item.href}/`));

        return (
          <li className={`menu-item${isCurrent ? " active" : ""}`} key={item.label}>
            <Link
              aria-current={isCurrent ? "page" : undefined}
              href={item.href}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const usesLightHeader =
    pathname === "/om-oss";
  const headerLogoSrc =
    usesLightHeader && !isScrolled && !isMenuOpen
      ? "/logos/full-black.png"
      : "/logos/full-white.png";

  const closeAll = () => {
    setIsMenuOpen(false);
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
      <header
        className={`site-header handelsjuristerna-header${isScrolled ? " sticky" : ""}${
          isHidden && !isMenuOpen ? " hidden" : ""
        }${
          isMenuOpen ? " active" : ""
        }`}
      >
        <div className="header-container">
          <Link className="logotype" href="/" onClick={closeAll}>
            <HeaderLogo src={headerLogoSrc} />
          </Link>

          <div className="menu-right">
            <nav className="handelsjuristerna-navbar" aria-label="Snabbnavigation">
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
            <HeaderLogo src="/logos/full-white.png" />
          </Link>

          <MenuList
            items={mainMenu}
            onNavigate={closeAll}
            pathname={pathname}
          />
        </nav>
      </header>
    </>
  );
}
