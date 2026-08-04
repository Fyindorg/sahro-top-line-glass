import { categoryImage } from "@/lib/category-images";

const modules = import.meta.glob("@/assets/products-drive/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const BY_STEM: Record<string, string> = {};
for (const [path, url] of Object.entries(modules)) {
  const stem = path.split("/").pop()!.replace(/\.webp$/i, "").toLowerCase();
  BY_STEM[stem] = url;
  const base = stem.replace(/-+$/, "").replace(/a$/, "");
  if (base && !BY_STEM[base]) BY_STEM[base] = url;
  const compact = stem.replace(/-/g, "");
  if (compact && !BY_STEM[compact]) BY_STEM[compact] = url;
}

const norm = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export function productImage(p: {
  slug: string;
  categorySlug: string;
  specs: Record<string, string>;
}): string {
  const model = norm(p.specs.Model ?? p.specs.Type ?? "");
  const candidates = [
    p.slug,
    model,
    `${model}a`,
    `${model}-`,
    model.replace(/-/g, ""),
  ];
  for (const c of candidates) {
    if (c && BY_STEM[c]) return BY_STEM[c];
  }
  return categoryImage(p.categorySlug);
}
