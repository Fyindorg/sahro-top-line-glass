import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { waLink } from "@/lib/products";
import { FileDown, MessageCircle } from "lucide-react";
import cataloguesData from "@/data/catalogues.json";

type Catalogue = { title: string; filename: string; url: string; size: number };
const catalogues = cataloguesData as Catalogue[];

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const Route = createFileRoute("/catalogues")({
  head: () => ({
    meta: [
      { title: "Catalogues — Glass Hardware & Bathroom Accessories | Sahro Top Line" },
      { name: "description", content: "Download Sahro Top Line product catalogues for glass clamps, hinges, connectors, bathroom mirrors, floor springs and door hardware. Manufacturer-direct, Riyadh KSA." },
      { property: "og:title", content: "Catalogues | Sahro Top Line" },
      { property: "og:description", content: "Browse and download our latest product catalogues." },
      { property: "og:url", content: "/catalogues" },
    ],
    links: [{ rel: "canonical", href: "/catalogues" }],
  }),
  component: Catalogues,
});

function Catalogues() {
  return (
    <div className="container-tight py-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Catalogues" }]} />
      <h1 className="font-display text-4xl mt-3">Catalogues</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        Download our latest product catalogues covering glass hardware, bathroom accessories, and door control systems.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalogues.map((c) => (
          <a
            key={c.filename}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            download={c.filename}
            className="group rounded-2xl border border-border bg-card p-6 lift relative overflow-hidden flex flex-col"
          >
            <div className="grid h-12 w-12 place-items-center rounded-md gradient-gold text-gold-foreground transition-transform group-hover:scale-110">
              <FileDown className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl mt-5 leading-tight">{c.title}</h2>
            <div className="mt-auto pt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span className="uppercase tracking-[0.18em]">PDF</span>
              <span>{formatSize(c.size)}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl gradient-brand text-brand-foreground p-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Need something specific?</div>
          <div className="font-display text-2xl mt-1">Request a custom catalogue on WhatsApp.</div>
        </div>
        <a href={waLink("Hi, please share your latest product catalogues.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground lift">
          <MessageCircle className="h-4 w-4" /> Request on WhatsApp
        </a>
      </div>
    </div>
  );
}
