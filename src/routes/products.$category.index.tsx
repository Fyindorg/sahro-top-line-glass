import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductTile } from "@/components/ProductTile";
import { CATEGORIES, CATEGORY_BY_SLUG, categorySlug, countByCategory, productsByCategory } from "@/lib/products";
import { Search } from "lucide-react";

export const Route = createFileRoute("/products/$category/")({
  beforeLoad: ({ params }) => {
    if (!CATEGORY_BY_SLUG[params.category]) throw notFound();
  },
  head: ({ params }) => {
    const cat = CATEGORY_BY_SLUG[params.category] ?? "Products";
    const count = productsByCategory(params.category).length;
    const title = `${cat} — Premium ${cat} for Bathrooms & Glass Doors | Sahro Top Line KSA`;
    const desc = `Shop ${count}+ ${cat.toLowerCase()} from Sahro Top Line. Manufacturer-direct pricing on premium ${cat.toLowerCase()} for showers, glass doors and bathrooms across Saudi Arabia & GCC.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: `${cat} | Sahro Top Line` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/products/${params.category}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.category}` }],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="container-tight py-20 text-center">
      <h1 className="font-display text-3xl">Category not found</h1>
      <Link to="/products" className="mt-4 inline-block text-gold underline-grow">Back to products</Link>
    </div>
  ),
});

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = CATEGORY_BY_SLUG[category];
  const products = productsByCategory(category);
  const counts = countByCategory();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return products;
    return products.filter((p) => p.title.toLowerCase().includes(s) || Object.values(p.specs).some((v) => String(v).toLowerCase().includes(s)));
  }, [q, products]);

  return (
    <div className="container-tight py-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: cat }]} />
      <h1 className="font-display text-4xl mt-3">{cat}</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        Premium {cat.toLowerCase()} by Sahro Top Line — engineered in-house for shower enclosures, glass doors and bathroom installations across the Middle East.
      </p>

      <div className="mt-6 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="lg:sticky lg:top-20 self-start">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Categories</div>
          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {CATEGORIES.map((c) => {
              const slug = categorySlug(c);
              const active = slug === category;
              return (
                <Link
                  key={c}
                  to="/products/$category"
                  params={{ category: slug }}
                  className={"flex items-center justify-between rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors " + (active ? "bg-primary text-primary-foreground" : "hover:bg-accent")}
                >
                  <span>{c}</span>
                  <span className={"text-xs ml-3 " + (active ? "text-primary-foreground/70" : "text-muted-foreground")}>{counts[slug] ?? 0}</span>
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
              placeholder={`Search ${cat.toLowerCase()}…`}
              className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Search products"
            />
          </div>
          <div className="text-xs text-muted-foreground mb-4">{filtered.length} of {products.length}</div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((p) => <ProductTile key={p.slug} p={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
