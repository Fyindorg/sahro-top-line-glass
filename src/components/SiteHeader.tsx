import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, categorySlug, waLink } from "@/lib/products";
import {
  Menu, X, ChevronDown,
  DoorOpen, Fence, Bath, Grip, RotateCw, Sparkles, Building2, DoorClosed,
  Fingerprint, RefreshCw, Layers, GitMerge, Link2, KeyRound, Lock, Frame,
  Handshake, StretchHorizontal, ShowerHead, CircleDot, TrendingUp, ArrowLeftRight, Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WhatsAppSolidIcon } from "./WhatsAppIcon";
import logo from "@/assets/sahro-logo.png.asset.json";

const CAT_ICON: Record<string, { icon: LucideIcon; tint: string }> = {
  "Automatic Sliding Door System": { icon: DoorOpen, tint: "from-sky-500/20 to-sky-500/5 text-sky-500" },
  "Balustrade Accessories": { icon: Fence, tint: "from-amber-500/20 to-amber-500/5 text-amber-600" },
  "Bathroom Accessories Set": { icon: Bath, tint: "from-teal-500/20 to-teal-500/5 text-teal-600" },
  "Bathroom Glass Clamps": { icon: Grip, tint: "from-cyan-500/20 to-cyan-500/5 text-cyan-600" },
  "Bathroom Hinges": { icon: RotateCw, tint: "from-indigo-500/20 to-indigo-500/5 text-indigo-500" },
  "Bathroom Mirrors": { icon: Sparkles, tint: "from-slate-500/20 to-slate-500/5 text-slate-500" },
  "Curtain Wall Accessories": { icon: Building2, tint: "from-blue-500/20 to-blue-500/5 text-blue-500" },
  "Door Closers": { icon: DoorClosed, tint: "from-orange-500/20 to-orange-500/5 text-orange-600" },
  "Fingerprint Door Locks": { icon: Fingerprint, tint: "from-fuchsia-500/20 to-fuchsia-500/5 text-fuchsia-600" },
  "Floor Hinges": { icon: RefreshCw, tint: "from-emerald-500/20 to-emerald-500/5 text-emerald-600" },
  "Folding Door Systems": { icon: Layers, tint: "from-rose-500/20 to-rose-500/5 text-rose-500" },
  "Glass Connections": { icon: GitMerge, tint: "from-lime-500/20 to-lime-500/5 text-lime-600" },
  "Glass Connectors": { icon: Link2, tint: "from-violet-500/20 to-violet-500/5 text-violet-600" },
  "Glass Door Gating Sets": { icon: KeyRound, tint: "from-yellow-500/20 to-yellow-500/5 text-yellow-600" },
  "Glass Door Locks": { icon: Lock, tint: "from-red-500/20 to-red-500/5 text-red-600" },
  "Glass Door Patch Fittings": { icon: Frame, tint: "from-pink-500/20 to-pink-500/5 text-pink-500" },
  "Luxurious Glass Door Handles": { icon: Handshake, tint: "from-amber-500/20 to-amber-500/5 text-amber-500" },
  "PVC Sealing Strips": { icon: StretchHorizontal, tint: "from-neutral-500/20 to-neutral-500/5 text-neutral-500" },
  "Shower Room Sets": { icon: ShowerHead, tint: "from-cyan-500/20 to-cyan-500/5 text-cyan-500" },
  "Sliding Wheels": { icon: CircleDot, tint: "from-blue-500/20 to-blue-500/5 text-blue-600" },
  "Stair Handrails": { icon: TrendingUp, tint: "from-stone-500/20 to-stone-500/5 text-stone-600" },
  "Swing Doors": { icon: ArrowLeftRight, tint: "from-purple-500/20 to-purple-500/5 text-purple-600" },
  "Window & Door Hardware": { icon: Wrench, tint: "from-zinc-500/20 to-zinc-500/5 text-zinc-600" },
};

type NavItem = { to: "/about" | "/products" | "/catalogues" | "/contact"; label: string; hasDropdown?: boolean };
const NAV: NavItem[] = [
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/catalogues", label: "Catalogues" },
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
                    {CATEGORIES.map((c) => {
                      const cfg = CAT_ICON[c] ?? { icon: Wrench, tint: "from-muted to-transparent text-muted-foreground" };
                      const Icon = cfg.icon;
                      return (
                        <Link
                          key={c}
                          to="/products/$category"
                          params={{ category: categorySlug(c) }}
                          className="flex items-center gap-3 rounded-md px-2.5 py-2 text-sm hover:bg-accent transition-colors"
                        >
                          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-md bg-gradient-to-br ${cfg.tint}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="leading-tight">{c}</span>
                        </Link>
                      );
                    })}
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
