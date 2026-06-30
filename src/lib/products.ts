import data from "@/data/products.json";

export interface Product {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  features: string;
  specs: Record<string, string>;
}

export const CATEGORIES: string[] = data.categories;
export const PRODUCTS: Product[] = data.products as unknown as Product[];

export const categorySlug = (c: string) =>
  c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const CATEGORY_BY_SLUG: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [categorySlug(c), c]),
);

export const productsByCategory = (slug: string) =>
  PRODUCTS.filter((p) => p.categorySlug === slug);

export const findProduct = (catSlug: string, productSlug: string) =>
  PRODUCTS.find((p) => p.categorySlug === catSlug && p.slug === productSlug);

export const countByCategory = (): Record<string, number> => {
  const out: Record<string, number> = {};
  for (const p of PRODUCTS) out[p.categorySlug] = (out[p.categorySlug] ?? 0) + 1;
  return out;
};

export const WHATSAPP_NUMBER = "966564508627";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
