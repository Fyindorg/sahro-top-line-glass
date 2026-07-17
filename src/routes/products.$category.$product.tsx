import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CATEGORY_BY_SLUG, findProduct, productsByCategory, waLink } from "@/lib/products";
import { ProductTile } from "@/components/ProductTile";
import productBg from "@/assets/product-bg.webp";
import { MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/products/$category/$product")({
  beforeLoad: ({ params }) => {
    const p = findProduct(params.category, params.product);
    if (!p) throw notFound();
  },
  head: ({ params }) => {
    const p = findProduct(params.category, params.product);
    if (!p) return { meta: [{ title: "Product not found" }] };
    const cat = p.category;
    const specsText = Object.entries(p.specs).slice(0, 4).map(([k, v]) => `${k}: ${v}`).join(", ");
    const desc = `${p.title} by Top Line Glass Products Accessories — premium ${cat.toLowerCase()} for bathroom glass and door installations. ${specsText}. Order on WhatsApp.`.slice(0, 300);
    return {
      meta: [
        { title: `${p.title} — ${cat} | Top Line Glass Products Accessories` },
        { name: "description", content: desc },
        { property: "og:title", content: `${p.title} | Top Line Glass Products Accessories` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.category}/${params.product}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.category}/${params.product}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.title,
          category: cat,
          brand: { "@type": "Brand", name: "Top Line Glass Products Accessories" },
          description: p.features,
          sku: p.specs.Model ?? undefined,
          manufacturer: { "@type": "Organization", name: "Top Line Glass Products Accessories" },
        }),
      }],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container-tight py-20 text-center">
      <h1 className="font-display text-3xl">Product not found</h1>
      <Link to="/products" className="mt-4 inline-block text-gold">Browse all products</Link>
    </div>
  ),
});

function ProductPage() {
  const { category, product } = Route.useParams();
  const p = findProduct(category, product)!;
  const related = productsByCategory(category).filter((x) => x.slug !== product).slice(0, 4);
  const model = p.specs.Model ?? p.specs.Type ?? "";
  const orderMsg = `Hi I am looking for ${p.title}, can you assist me further?`;

  return (
    <div className="container-tight py-8">
      <Breadcrumbs items={[
        { label: "Home", to: "/" },
        { label: "Products", to: "/products" },
        { label: p.category, to: "/products/$category", params: { category } },
        { label: p.title },
      ]} />

      <div className="mt-6 grid lg:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="group rounded-2xl border border-border bg-card shadow-card overflow-hidden">
          <div className="product-tile tile-shine aspect-square relative">
            <img src={productBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 img-zoom" />
            <div className="absolute inset-0 grid place-items-center p-10 text-center">
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{p.category}</div>
                <div className="mt-3 font-display text-5xl text-ink">{model || "TOP LINE"}</div>
                <div className="mt-3 text-xs text-muted-foreground">Top Line Glass Products Accessories · Riyadh, KSA</div>
              </div>
            </div>
          </div>
        </div>

        {/* SPECS */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">{p.category}</div>
          <h1 className="font-display text-3xl md:text-4xl mt-2 text-balance">{p.title}</h1>

          <div className="mt-6 rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-surface text-xs uppercase tracking-[0.18em] text-muted-foreground">Specifications</div>
            <dl className="divide-y divide-border">
              {Object.entries(p.specs).map(([k, v]) => (
                <div key={k} className="grid grid-cols-[160px_1fr] gap-4 px-5 py-3 text-sm">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-foreground">{v}</dd>
                </div>
              ))}
              {Object.keys(p.specs).length === 0 && (
                <div className="px-5 py-4 text-sm text-muted-foreground">Contact us for full specifications.</div>
              )}
            </dl>
          </div>

          <a
            href={waLink(orderMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-card lift"
          >
            <MessageCircle className="h-4 w-4" /> Order Now on WhatsApp
          </a>
        </div>
      </div>

      {/* FEATURES */}
      <section className="mt-12 rounded-2xl border border-border bg-card p-8">
        <div className="text-xs uppercase tracking-[0.22em] text-gold">Features &amp; Benefits</div>
        <h2 className="font-display text-2xl mt-2">Why specify the {p.title}</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">{p.features}</p>

        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
          {[
            "Premium architectural-grade alloy construction",
            "Corrosion-resistant finish for humid bathroom environments",
            "Manufactured to GCC market standards",
            "Backed by Top Line Glass Products Accessories manufacturer warranty",
          ].map((b) => (
            <li key={b} className="flex gap-2"><Check className="h-4 w-4 text-gold mt-0.5" /> <span>{b}</span></li>
          ))}
        </ul>

        <a
          href={waLink(orderMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-card lift"
        >
          <MessageCircle className="h-4 w-4" /> Order Now
        </a>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl mb-5">More from {p.category}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r) => <ProductTile key={r.slug} p={r} />)}
          </div>
        </section>
      )}
    </div>
  );
}
