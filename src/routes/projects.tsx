import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { waLink } from "@/lib/products";
import { MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { WhatsAppSolidIcon } from "@/components/WhatsAppIcon";
import heroBathroom from "@/assets/hero-bathroom.webp";
import heroGlassDoor from "@/assets/hero-glass-door.webp";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Top Line Glass Products Accessories | KSA" },
      { name: "description", content: "Selected glass hardware and bathroom accessory projects delivered across Saudi Arabia — hotels, residential towers and commercial developments." },
      { property: "og:title", content: "Our Projects — Top Line Glass Products Accessories" },
      { property: "og:description", content: "Signature installations across Riyadh and the GCC using premium glass door and bathroom hardware." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const PROJECTS = [
  {
    title: "Al Nakheel Residential Tower — Riyadh",
    location: "Riyadh, Saudi Arabia",
    year: "2024",
    image: heroBathroom,
    summary:
      "Complete supply of frameless shower enclosures, bathroom accessories and glass hardware across 180 luxury apartments.",
    scope: [
      "Shower hinges, glass clamps and support rods",
      "Chrome-finished bathroom accessory sets",
      "Frameless glass door patch fittings",
    ],
  },
  {
    title: "Grand Plaza Business Hotel — Riyadh",
    location: "Al Sina'iyah, Riyadh, KSA",
    year: "2023",
    image: heroGlassDoor,
    summary:
      "End-to-end glass door hardware for the lobby, meeting rooms and 240 guest bathrooms — including automatic sliding entrances.",
    scope: [
      "Automatic sliding door systems at main entrances",
      "Floor springs and glass door locks for meeting rooms",
      "Full bathroom hardware package across all guest floors",
    ],
  },
];

function Projects() {
  return (
    <div className="container-tight py-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects" }]} />
      <h1 className="font-display text-4xl mt-3">Our Projects</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        A snapshot of recent installations where Top Line Glass Products Accessories supplied the complete hardware package — from concept to delivery.
      </p>

      <div className="mt-10 space-y-10">
        {PROJECTS.map((p, i) => (
          <article key={p.title} className="grid lg:grid-cols-2 gap-8 rounded-2xl border border-border bg-card overflow-hidden shadow-card">
            <div className={`group overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img src={p.image} alt={p.title} className="h-full w-full object-cover aspect-[4/3] img-zoom" loading="lazy" width={1200} height={900} />
            </div>
            <div className="p-7 lg:p-9 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.22em] text-gold">Case Study</div>
              <h2 className="font-display text-2xl md:text-3xl mt-2">{p.title}</h2>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" />{p.location}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-gold" />{p.year}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed">{p.summary}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.scope.map((s) => (
                  <li key={s} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />{s}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={waLink(`Hi, I saw the ${p.title} project on your website and would like to discuss a similar project.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white lift" style={{ backgroundColor: "#25D366" }}>
                  <WhatsAppSolidIcon className="h-4 w-4" /> Discuss a Similar Project
                </a>
                <Link to="/products" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-semibold">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
