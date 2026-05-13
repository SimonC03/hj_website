"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { firm, navigation, siteAssets } from "@/app/data/site";

type MenuItem = {
  label: string;
  href: string;
};

function HeaderLogo({
  className = "",
  src = siteAssets.logos.headerLight,
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
      ? siteAssets.logos.headerDark
      : siteAssets.logos.headerLight;

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
            <nav
              className="handelsjuristerna-navbar"
              aria-label={navigation.labels.quickNavAria}
            >
              <ul className="navbar-nav">
                {navigation.quickNav.map((item) => (
                  <li className="menu-item" key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              aria-expanded={isMenuOpen}
              aria-label={
                isMenuOpen
                  ? navigation.labels.closeMenu
                  : navigation.labels.openMenu
              }
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
          aria-label={navigation.labels.mainMenuAria}
          className={`mobile-menu${isMenuOpen ? " open" : ""}`}
        >
          <Link className="logotype logotype--mobile" href="/" onClick={closeAll}>
            <HeaderLogo src={siteAssets.logos.headerLight} />
          </Link>

          <MenuList
            items={navigation.mainMenu as MenuItem[]}
            onNavigate={closeAll}
            pathname={pathname}
          />
        </nav>
      </header>
    </>
  );
}
