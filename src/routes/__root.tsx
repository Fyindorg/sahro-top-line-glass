import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Please try again.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Top Line Glass Products Accessories — Premium Glass Door Hardware & Bathroom Accessories | KSA" },
      { name: "description", content: "Sahro Top Line Glass Products Accessories supplies high-quality glass door hardware, shower enclosure fittings, glass connectors, handles, locks & brackets." },
      { name: "author", content: "Top Line Glass Products Accessories" },
      { name: "keywords", content: "glass door hardware Saudi Arabia, bathroom accessories KSA, glass clamps, shower hinges, frameless shower hardware, bathroom mirrors Riyadh, glass connectors, floor springs, Top Line Glass Products Accessories" },
      { property: "og:site_name", content: "Top Line Glass Products Accessories" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Top Line Glass Products Accessories — Premium Glass Door Hardware & Bathroom Accessories | KSA" },
      { property: "og:description", content: "Sahro Top Line Glass Products Accessories supplies high-quality glass door hardware, shower enclosure fittings, glass connectors, handles, locks & brackets." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Top Line Glass Products Accessories — Premium Glass Door Hardware & Bathroom Accessories | KSA" },
      { name: "twitter:description", content: "Sahro Top Line Glass Products Accessories supplies high-quality glass door hardware, shower enclosure fittings, glass connectors, handles, locks & brackets." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/tNRR7x7O9sPEPp7orXK2mHGKVw93/social-images/social-1782885833814-sahro-top-line-glass-accessories-opengraph.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/tNRR7x7O9sPEPp7orXK2mHGKVw93/social-images/social-1782885833814-sahro-top-line-glass-accessories-opengraph.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Top Line Glass Products Accessories",
        url: "/",
        description: "Leading Middle East manufacturer of glass door control systems, bathroom accessories and door & window hardware.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "JQR4+798, Al Madina Al Munawwarah Rd, Al Sina'iyah",
          addressLocality: "Riyadh",
          postalCode: "12845",
          addressCountry: "SA",
        },
        contactPoint: [{ "@type": "ContactPoint", telephone: "+966564508627", contactType: "sales", email: "kcdtc@gmail.com", areaServed: ["SA","AE","BH","KW"] }],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}
