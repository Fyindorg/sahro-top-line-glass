import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, categorySlug, waLink } from "@/lib/products";
import { Menu, X, ChevronDown } from "lucide-react";
import { WhatsAppSolidIcon } from "./WhatsAppIcon";
import logo from "@/assets/sahro-logo-v2.png.asset.json";

type NavItem = { to: "/about" | "/products" | "/catalogues" | "/projects" | "/contact"; label: string; hasDropdown?: boolean };
const NAV: NavItem[] = [
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/catalogues", label: "Catalogues" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const enquiry = waLink("Hi, I would like to send an enquiry about Top Line Glass Products Accessories.");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 lg:px-4 flex h-20 items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo.url}
            alt="Top Line Glass Products Accessories"
            className="h-14 w-auto transition-transform group-hover:scale-105"
            width={108}
            height={56}
          />
          <div className="leading-tight hidden xl:block">
            <div className="text-[13px] font-semibold tracking-tight">Top Line Glass Products Accessories</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Manufacturer · Riyadh</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((n) => (
            <div key={n.to} className="relative group/nav">
              <Link
                to={n.to}
                className="inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
                {n.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>
              {n.hasDropdown && (
                <div className="invisible opacity-0 translate-y-1 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 transition-all duration-200 fixed left-1/2 -translate-x-1/2 top-[80px] w-[min(920px,calc(100vw-2rem))] px-2">
                  <div className="rounded-xl border border-border bg-popover shadow-lift p-3 grid grid-cols-2 md:grid-cols-3 gap-1.5 max-h-[70vh] overflow-y-auto">
                    {CATEGORIES.map((c, i) => (
                      <Link
                        key={c}
                        to="/products/$category"
                        params={{ category: categorySlug(c) }}
                        className="flex items-center gap-3 rounded-md px-2.5 py-2 text-sm hover:bg-accent transition-colors"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
                          {i + 1}
                        </span>
                        <span className="leading-tight">{c}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={enquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-[13px] font-semibold text-white shadow-card lift"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppSolidIcon className="h-4 w-4" /> Send Enquiry
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-tight py-3 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <a href={enquiry} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>
              <WhatsAppSolidIcon className="h-4 w-4" /> Send Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
