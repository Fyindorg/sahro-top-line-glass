import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import about from "@/assets/about.jpg";
import { Factory, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sahro Top Line Glass Accessories Manufacturer | Riyadh, KSA" },
      { name: "description", content: "Sahro Top Line is a leading Middle East manufacturer of glass door control systems, bathroom accessories and door & window hardware. Two factories, two showrooms, 20,000 sqm." },
      { property: "og:title", content: "About Sahro Top Line — Glass Hardware Manufacturer" },
      { property: "og:description", content: "In-house R&D, production and sales for glass hardware fittings, door control hardware, bathroom hardware and door & window accessories." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/og-about.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="container-tight pt-10 pb-4">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </section>

      <section className="container-tight pb-10">
        <div className="text-xs uppercase tracking-[0.22em] text-gold">About Sahro Top Line</div>
        <h1 className="font-display text-5xl mt-3 max-w-3xl text-balance">A leading Middle East manufacturer of premium glass hardware &amp; bathroom accessories.</h1>
      </section>

      <section className="container-tight grid lg:grid-cols-5 gap-10 pb-16">
        <div className="lg:col-span-3 prose max-w-none text-foreground/85 leading-relaxed text-[15px] space-y-5">
          <p>
            <strong>TOP LINE</strong> is a leading manufacturer serving the Middle East market,
            specializing in premium <strong>glass door control systems</strong>, <strong>bathroom accessories</strong>,
            and <strong>door &amp; window hardware</strong>. With strong in-house research, development,
            and manufacturing capabilities, we provide complete hardware solutions by integrating
            design, production, and sales under one roof.
          </p>
          <p>
            Our product portfolio includes <strong>glass hardware fittings</strong>, <strong>door control hardware</strong>,
            <strong> bathroom hardware</strong>, and <strong>door &amp; window accessories</strong>. Operating two factories
            and two showrooms with a combined area of nearly <strong>20,000 square meters</strong>, we export over
            <strong> 90% of our products</strong> to Saudi Arabia, the UAE, Bahrain, Kuwait, and other regional markets.
          </p>
          <p>
            From frameless shower enclosures and bathroom mirrors to floor springs, glass clamps, glass
            connectors and architectural door hardware — every product we ship is engineered for the
            climate, water quality and architectural style of the Gulf region.
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="group overflow-hidden rounded-2xl shadow-card">
            <img src={about} alt="Luxury bathroom with frameless glass shower and premium hardware by Sahro Top Line" className="aspect-[4/5] w-full object-cover img-zoom" loading="lazy" width={1400} height={960} />
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-tight py-16">
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Why Choose Us</div>
          <h2 className="font-display text-4xl mt-2 max-w-2xl">Source factory advantages, strict quality control.</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl border border-border bg-card p-8 lift">
              <div className="grid h-12 w-12 place-items-center rounded-md gradient-gold text-gold-foreground"><Factory className="h-6 w-6" /></div>
              <h3 className="font-display text-2xl mt-5">1. Source Factory</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                As a direct manufacturer, we provide complete one-stop solutions. Around <strong>70% of our products</strong> are
                manufactured in our own factories, while the remaining <strong>30% are sourced from trusted partners in Germany
                and Italy</strong>. Our strict quality standards ensure reliable products, competitive pricing, and a seamless
                procurement experience.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 lift">
              <div className="grid h-12 w-12 place-items-center rounded-md gradient-gold text-gold-foreground"><ShieldCheck className="h-6 w-6" /></div>
              <h3 className="font-display text-2xl mt-5">2. Quality Control</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our production is backed by <strong>advanced manufacturing technology</strong>, experienced technical teams, and modern
                management practices. <strong>Multiple automated production lines</strong> and rigorous quality control processes ensure
                every product meets high standards of precision, durability, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-tight py-16 grid md:grid-cols-4 gap-6 text-center">
        {[
          ["20,000+ sqm", "Manufacturing & showroom area"],
          ["2 + 2", "Factories & showrooms"],
          ["90%+", "Exports to GCC"],
          ["5 Markets", "KSA · UAE · Bahrain · Kuwait · more"],
        ].map(([v, l]) => (
          <div key={v} className="rounded-xl border border-border bg-card p-6">
            <div className="font-display text-2xl">{v}</div>
            <div className="text-xs text-muted-foreground mt-1">{l}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
