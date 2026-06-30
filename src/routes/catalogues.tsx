import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { waLink } from "@/lib/products";
import { FileDown, MessageCircle } from "lucide-react";

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
        Our latest product catalogues will be published here shortly. In the meantime, request a copy directly on WhatsApp.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {[
          { t: "Glass Hardware Catalogue", d: "Glass clamps, connectors, hinges, door handles & locks." },
          { t: "Bathroom Accessories Catalogue", d: "Mirrors, shower rods, sealing strips & enclosure fittings." },
          { t: "Door Control Hardware Catalogue", d: "Floor springs, door wheels, knobs & related fittings." },
          { t: "Full Product Catalogue", d: "Complete Sahro Top Line range across all 15 categories." },
        ].map((c) => (
          <div key={c.t} className="group rounded-2xl border border-border bg-card p-8 lift relative overflow-hidden">
            <div className="grid h-12 w-12 place-items-center rounded-md gradient-gold text-gold-foreground"><FileDown className="h-5 w-5" /></div>
            <h2 className="font-display text-2xl mt-5">{c.t}</h2>
            <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Coming soon</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl gradient-brand text-brand-foreground p-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Need a catalogue now?</div>
          <div className="font-display text-2xl mt-1">Request a PDF copy on WhatsApp.</div>
        </div>
        <a href={waLink("Hi, please share your latest product catalogues.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground lift">
          <MessageCircle className="h-4 w-4" /> Request on WhatsApp
        </a>
      </div>
    </div>
  );
}
