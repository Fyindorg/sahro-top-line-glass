import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { CATEGORIES, PRODUCTS, categorySlug, countByCategory, waLink, type Product } from "@/lib/products";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import productBg from "@/assets/product-bg.jpg";
import { ArrowRight, ChevronLeft, ChevronRight, Factory, ShieldCheck, Globe2 } from "lucide-react";
import { WhatsAppIcon, WhatsAppSolidIcon } from "@/components/WhatsAppIcon";
import { CountUp } from "@/components/CountUp";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Top Line Glass Products Accessories — Glass Door Hardware & Bathroom Accessories Manufacturer | KSA" },
      { name: "description", content: "Premium glass clamps, shower hinges, glass connectors, bathroom mirrors and door hardware. Direct manufacturer with two factories & two showrooms in Saudi Arabia." },
      { property: "og:title", content: "Top Line Glass Products Accessories — Glass Hardware & Bathroom Accessories" },
      { property: "og:description", content: "Direct manufacturer serving KSA, UAE, Bahrain & Kuwait with premium glass door control systems and bathroom hardware." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const counts = countByCategory();
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-brand text-brand-foreground">
        <div className="absolute inset-0 opacity-30">
          <img src={hero} alt="" aria-hidden className="h-full w-full object-cover img-zoom" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/20" />
        <div className="container-tight relative py-24 md:py-32 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 anim-fade-up">Manufacturer · Riyadh, KSA</div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance anim-fade-up">
            Premium glass hardware &amp; bathroom accessories, engineered in-house.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl anim-fade-up">
            Top Line Glass Products Accessories manufactures glass door control systems, frameless shower hardware,
            bathroom mirrors and door &amp; window fittings — exported to over five GCC markets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 anim-fade-up">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground lift">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={waLink("Hi, I would like to send an enquiry about Top Line Glass Products Accessories.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
              <WhatsAppIcon className="h-4 w-4" /> Send Enquiry on WhatsApp
            </a>
          </div>
        </div>
      </section>

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

      {/* CATEGORIES */}
      <section className="container-tight py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Product Range</div>
            <h2 className="font-display text-4xl mt-2">15 categories, hundreds of SKUs</h2>
          </div>
          <Link to="/products" className="text-sm font-medium underline-grow">View all products →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((c) => {
            const slug = categorySlug(c);
            return (
              <Link
                key={c}
                to="/products/$category"
                params={{ category: slug }}
                className="group rounded-xl border border-border bg-card p-6 lift relative overflow-hidden"
              >
                <div className="text-xs text-muted-foreground">{counts[slug] ?? 0} products</div>
                <div className="mt-2 font-display text-xl group-hover:text-gold transition-colors">{c}</div>
                <ArrowRight className="absolute right-5 bottom-5 h-4 w-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
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
          <a href={waLink("Hi, I would like to send an enquiry about Top Line Glass Products Accessories.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white lift" style={{ backgroundColor: "#25D366" }}><WhatsAppIcon className="h-4 w-4" /> WhatsApp Enquiry</a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
