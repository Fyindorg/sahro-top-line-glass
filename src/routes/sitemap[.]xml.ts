import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PRODUCTS, CATEGORIES, categorySlug } from "@/lib/products";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: { p: string; cf?: string; pr?: string }[] = [
          { p: "/", cf: "weekly", pr: "1.0" },
          { p: "/about", cf: "monthly", pr: "0.8" },
          { p: "/products", cf: "weekly", pr: "0.9" },
          { p: "/catalogues", cf: "monthly", pr: "0.6" },
          { p: "/contact", cf: "monthly", pr: "0.6" },
        ];
        for (const c of CATEGORIES) paths.push({ p: `/products/${categorySlug(c)}`, cf: "weekly", pr: "0.8" });
        for (const p of PRODUCTS) paths.push({ p: `/products/${p.categorySlug}/${p.slug}`, cf: "monthly", pr: "0.6" });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((e) => `  <url><loc>${BASE_URL}${e.p}</loc>${e.cf ? `<changefreq>${e.cf}</changefreq>` : ""}${e.pr ? `<priority>${e.pr}</priority>` : ""}</url>`),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
