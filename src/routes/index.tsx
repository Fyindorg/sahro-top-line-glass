import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CATEGORIES, PRODUCTS, categorySlug, waLink, type Product } from "@/lib/products";
import about from "@/assets/about.webp";
import productBg from "@/assets/product-bg.webp";
import heroBathroom from "@/assets/hero-bathroom.webp";
import heroGlassDoor from "@/assets/hero-glass-door.webp";
import heroAutoSliding from "@/assets/hero-auto-sliding.webp";
import heroWindow from "@/assets/hero-window.webp";
import heroHardware from "@/assets/hero-hardware.webp";
import { ArrowRight, ChevronLeft, ChevronRight, Factory, ShieldCheck, Globe2 } from "lucide-react";
import { WhatsAppSolidIcon } from "@/components/WhatsAppIcon";
import { CountUp } from "@/components/CountUp";

const HERO_SLIDES = [
  { img: heroBathroom, kicker: "Bathroom Accessories", title: "Premium bathroom hardware, crafted for modern living.", sub: "Chrome-finished towel rails, glass shelves, holders and connectors engineered to last." },
  { img: heroGlassDoor, kicker: "Glass Door Accessories", title: "Glass door hardware, engineered in-house.", sub: "Hinges, patch fittings, clamps and locks for frameless glass door systems." },
  { img: heroAutoSliding, kicker: "Automatic Sliding Doors", title: "Automatic sliding door systems for commercial entrances.", sub: "Smooth, reliable operation with sensors, tracks and premium mechanisms." },
  { img: heroWindow, kicker: "Window Accessories", title: "Window hardware built for the Gulf climate.", sub: "Durable handles, rollers, hinges, locks and multi-point systems for aluminium and uPVC windows." },
  { img: heroHardware, kicker: "Hardware Accessories", title: "The complete range of architectural hardware.", sub: "Brackets, clamps, screws, bolts, closers and specialist fittings for every installation." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Top Line Glass Products Accessories — Glass Door Hardware & Bathroom Accessories Manufacturer | KSA" },
      { name: "description", content: "Premium glass clamps, shower hinges, glass connectors, bathroom mirrors and door hardware. Direct manufacturer with two factories & two showrooms in Saudi Arabia." },
      { property: "og:title", content: "Top Line Glass Products Accessories — Glass Hardware & Bathroom Accessories" },
      { property: "og:description", content: "Direct manufacturer serving KSA, UAE, Bahrain & Kuwait with premium glass door control systems and bathroom hardware." },
      { property: "og:url", content: "/" },
      
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 5500);
    return () => clearInterval(t);
  }, [paused, total]);

  const go = (dir: 1 | -1) => setIdx((i) => (i + dir + total) % total);

  return (
    <section
      className="relative overflow-hidden gradient-brand text-brand-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== idx}
        >
          <img src={s.img} alt={s.kicker} className="h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} decoding={i === 0 ? "sync" : "async"} width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />
        </div>
      ))}

      <div className="container-tight relative py-24 md:py-32 max-w-3xl">
        {HERO_SLIDES.map((s, i) => (
          <div key={i} className={i === idx ? "block" : "hidden"}>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 anim-fade-up">{s.kicker} · Riyadh, KSA</div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance anim-fade-up">{s.title}</h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl anim-fade-up">{s.sub}</p>
          </div>
        ))}
        <div className="mt-8 flex flex-wrap gap-3 anim-fade-up">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground lift">
            Explore Products <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={waLink("Hi, I would like to send an enquiry about Top Line Glass Products Accessories.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
            <WhatsAppSolidIcon className="h-4 w-4" /> Send Enquiry on WhatsApp
          </a>
        </div>
      </div>

      {/* Controls */}
      <button onClick={() => go(-1)} aria-label="Previous slide" className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 text-white transition">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={() => go(1)} aria-label="Next slide" className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 text-white transition">
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-4 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      <HeroCarousel />

      {/* STATS */}
      <section className="border-b border-border bg-surface">
        <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {[
            { n: 20000, suffix: "+ sqm", l: "of factories & showrooms" },
            { n: 2, suffix: "", l: "factories, 2 showrooms" },
            { n: 90, suffix: "%+", l: "exported to GCC markets" },
            { n: 350, suffix: "+", l: "products in our catalogue" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="font-display text-3xl font-bold text-foreground">
                <CountUp end={s.n} suffix={s.suffix} />
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY STRIPS */}
      <section className="container-tight py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Product Range</div>
            <h2 className="font-display text-4xl mt-2">{CATEGORIES.length} categories, {PRODUCTS.length}+ SKUs</h2>
          </div>
          <Link to="/products" className="text-sm font-medium underline-grow">View all products →</Link>
        </div>

        <div className="space-y-10">
          {CATEGORIES.map((c, idx) => (
            <CategoryStrip key={c} category={c} variant={idx % 4} />
          ))}
        </div>
      </section>

      {/* WHY */}

      <section className="bg-surface border-y border-border">
        <div className="container-tight py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="group overflow-hidden rounded-2xl shadow-card">
            <img src={about} alt="Frameless glass shower with premium chrome hardware" className="aspect-[4/3] w-full object-cover img-zoom" loading="lazy" width={1400} height={960} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Why Choose Us</div>
            <h2 className="font-display text-4xl mt-2">Source factory. Strict quality. One-stop solution.</h2>
            <ul className="mt-8 space-y-5">
              {[
                { icon: Factory, t: "Source factory", d: "70% manufactured in-house; 30% sourced from trusted German and Italian partners." },
                { icon: ShieldCheck, t: "Quality control", d: "Automated production lines and rigorous QC for precision, durability and performance." },
                { icon: Globe2, t: "Export-ready", d: "Servicing Saudi Arabia, UAE, Bahrain, Kuwait and the wider GCC region." },
              ].map((x) => (
                <li key={x.t} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md gradient-gold text-gold-foreground"><x.icon className="h-5 w-5" /></div>
                  <div>
                    <div className="font-semibold">{x.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{x.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline-grow">Learn more about us →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight py-20 text-center">
        <h2 className="font-display text-4xl">Ready to specify the right hardware?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Talk to our team for catalogues, quantity pricing and project consultation.</p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <a href={waLink("Hi, I would like to send an enquiry about Top Line Glass Products Accessories.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white lift" style={{ backgroundColor: "#25D366" }}><WhatsAppSolidIcon className="h-4 w-4" /> WhatsApp Enquiry</a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

const STRIP_VARIANTS = [
  { wrap: "bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground border-primary", label: "text-gold", title: "text-primary-foreground", card: "bg-white/5 border-white/10 hover:bg-white/10", cardTitle: "text-primary-foreground", cardMeta: "text-primary-foreground/60", btn: "bg-white/10 hover:bg-white/20 text-white border-white/20", accent: "bg-gold" },
  { wrap: "bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 text-foreground border-amber-200", label: "text-amber-700", title: "text-foreground", card: "bg-white border-amber-200 hover:border-amber-400 shadow-sm", cardTitle: "text-foreground", cardMeta: "text-muted-foreground", btn: "bg-white hover:bg-amber-100 text-amber-900 border-amber-300", accent: "bg-amber-500" },
  { wrap: "bg-slate-50 text-foreground border-slate-200", label: "text-slate-600", title: "text-slate-900", card: "bg-white border-slate-200 hover:border-slate-400 shadow-sm", cardTitle: "text-slate-900", cardMeta: "text-slate-500", btn: "bg-slate-900 hover:bg-slate-800 text-white border-slate-900", accent: "bg-slate-900" },
  { wrap: "bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 text-foreground border-teal-200", label: "text-teal-700", title: "text-foreground", card: "bg-white border-teal-200 hover:border-teal-400 shadow-sm", cardTitle: "text-teal-900", cardMeta: "text-muted-foreground", btn: "bg-teal-700 hover:bg-teal-800 text-white border-teal-700", accent: "bg-teal-500" },
];

function CategoryStrip({ category, variant }: { category: string; variant: number }) {
  const slug = categorySlug(category);
  const items = PRODUCTS.filter((p) => p.categorySlug === slug);
  const scroller = useRef<HTMLDivElement | null>(null);
  const v = STRIP_VARIANTS[variant % STRIP_VARIANTS.length];
  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };
  if (items.length === 0) return null;
  return (
    <div className={`relative rounded-2xl border ${v.wrap} p-5 md:p-6 overflow-hidden`}>
      <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full ${v.accent}`} />
      <div className="flex items-end justify-between gap-4 mb-5 pl-3">
        <div>
          <div className={`text-[10px] uppercase tracking-[0.28em] font-medium ${v.label}`}>Category</div>
          <h3 className={`font-display text-2xl md:text-3xl mt-1 ${v.title}`}>{category}</h3>
          <div className={`text-xs mt-1 ${v.cardMeta}`}>{items.length} products</div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => scroll(-1)} aria-label="Scroll left" className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${v.btn}`}><ChevronLeft className="h-4 w-4" /></button>
          <button onClick={() => scroll(1)} aria-label="Scroll right" className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${v.btn}`}><ChevronRight className="h-4 w-4" /></button>
          <Link to="/products/$category" params={{ category: slug }} className={`hidden md:inline-flex items-center gap-1 rounded-md border px-3 py-2 text-xs font-semibold transition-colors ${v.btn}`}>View all <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </div>
      <div ref={scroller} className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pl-3 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((p) => <StripCard key={p.slug} p={p} v={v} />)}
      </div>
    </div>
  );
}

function StripCard({ p, v }: { p: Product; v: typeof STRIP_VARIANTS[number] }) {
  const model = p.specs.Model ?? "";
  return (
    <Link to="/products/$category/$product" params={{ category: p.categorySlug, product: p.slug }} className={`group snap-start shrink-0 w-[240px] rounded-xl border overflow-hidden transition-all ${v.card}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
        <img src={productBg} alt="" aria-hidden width={240} height={180} className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
        <div className="absolute inset-0 grid place-items-center p-4 text-center">
          <div className={`font-display text-lg leading-tight ${v.cardTitle}`}>{model || "TOP LINE"}</div>
        </div>
      </div>
      <div className="p-3">
        <div className={`text-[13px] font-medium line-clamp-2 leading-snug ${v.cardTitle}`}>{p.title}</div>
        <div className={`mt-1 text-[11px] ${v.cardMeta}`}>View details →</div>
      </div>
    </Link>
  );
}
