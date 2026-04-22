import Link from "next/link";
import { firm, navItems } from "@/app/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${firm.displayName} startsida`}>
        <span className="brand-mark">HJ</span>
        <span className="brand-name">{firm.displayName}</span>
      </Link>

      <nav className="primary-nav" aria-label="Huvudnavigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="/kontakt">
        Boka rådgivning
      </Link>
    </header>
  );
}
