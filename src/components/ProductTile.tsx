import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import productBg from "@/assets/product-bg.webp";

export function ProductTile({ p }: { p: Product }) {
  const model = p.specs.Model ?? p.specs.Type ?? "";
  return (
    <Link
      to="/products/$category/$product"
      params={{ category: p.categorySlug, product: p.slug }}
      className="group block rounded-xl border border-border bg-card shadow-card lift overflow-hidden"
    >
      <div className="product-tile tile-shine aspect-[4/3] relative">
        <img
          src={productBg}
          alt=""
          aria-hidden
          width={640}
          height={480}
          className="absolute inset-0 h-full w-full object-cover opacity-25 img-zoom"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.category}</div>
            <div className="mt-2 font-display text-2xl text-ink">{model || "TOP LINE"}</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-foreground">{p.title}</h3>
        <div className="mt-2 inline-flex items-center text-xs text-gold font-medium">View details →</div>
      </div>
    </Link>
  );
}
