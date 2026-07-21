import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { categoryImage } from "@/lib/category-images";

export function ProductTile({ p }: { p: Product }) {
  const model = p.specs.Model ?? p.specs.Type ?? "";
  const img = categoryImage(p.categorySlug);
  return (
    <Link
      to="/products/$category/$product"
      params={{ category: p.categorySlug, product: p.slug }}
      className="group block rounded-xl border border-border bg-card shadow-card lift overflow-hidden"
    >
      <div className="product-tile tile-shine aspect-[4/3] relative bg-surface">
        <img
          src={img}
          alt={`${p.category} — ${p.title}`}
          width={640}
          height={480}
          className="absolute inset-0 h-full w-full object-cover img-zoom"
          loading="lazy"
          decoding="async"
        />
        {model && (
          <div className="absolute bottom-2 right-2 rounded bg-background/85 backdrop-blur px-2 py-1 text-[10px] font-medium tracking-wide text-foreground">
            {model}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.category}</div>
        <h3 className="mt-1 text-sm font-medium leading-snug line-clamp-2 group-hover:text-foreground">{p.title}</h3>
        <div className="mt-2 inline-flex items-center text-xs text-gold font-medium">View details →</div>
      </div>
    </Link>
  );
}
