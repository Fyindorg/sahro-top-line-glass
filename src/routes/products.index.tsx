import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductTile } from "@/components/ProductTile";
import { CATEGORIES, PRODUCTS, categorySlug, countByCategory } from "@/lib/products";
import { Search } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Glass Hardware, Bathroom Accessories & Door Fittings | Sahro Top Line" },
      { name: "description", content: "Browse 500+ premium glass clamps, glass connectors, shower hinges, floor springs, bathroom mirrors, door knobs and locks. Manufacturer pricing from Riyadh, KSA." },
      { property: "og:title", content: "Products — Sahro Top Line Glass Accessories" },
      { property: "og:description", content: "Complete catalogue of premium glass door hardware and bathroom accessories." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const counts = countByCategory();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return PRODUCTS;
    return PRODUCTS.filter((p) =>
      p.title.toLowerCase().includes(s) ||
      p.category.toLowerCase().includes(s) ||
      Object.values(p.specs).some((v) => String(v).toLowerCase().includes(s))
    );
  }, [q]);

  return (
    <div className="container-tight py-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
      <h1 className="font-display text-4xl mt-3">All Products</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Premium glass hardware, bathroom accessories and door &amp; window fittings — engineered for the Gulf market.</p>

      <div className="mt-6 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="lg:sticky lg:top-20 self-start">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Categories</div>
          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {CATEGORIES.map((c) => {
              const slug = categorySlug(c);
              return (
                <Link
                  key={c}
                  to="/products/$category"
                  params={{ category: slug }}
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors whitespace-nowrap"
                >
                  <span>{c}</span>
                  <span className="text-xs text-muted-foreground ml-3">{counts[slug] ?? 0}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <div>
          <div className="relative mb-6">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && filtered.length === 1) navigate({ to: "/products/$category/$product", params: { category: filtered[0].categorySlug, product: filtered[0].slug } }); }}
              placeholder="Search 500+ products by name, model or specification…"
              className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Search products"
            />
          </div>
          <div className="text-xs text-muted-foreground mb-4">{filtered.length} products</div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.slice(0, 60).map((p) => <ProductTile key={p.categorySlug + p.slug} p={p} />)}
          </div>
          {filtered.length > 60 && (
            <div className="mt-6 text-sm text-muted-foreground">Showing first 60 of {filtered.length}. Refine your search or pick a category to see more.</div>
          )}
        </div>
      </div>
    </div>
  );
}
