import { Link } from "@tanstack/react-router";
import { CATEGORIES, categorySlug } from "@/lib/products";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/sahro-logo-v2.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="container-tight py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="inline-flex items-center justify-center rounded-md bg-white p-2">
            <img src={logo.url} alt="Top Line Glass Products Accessories" className="h-10 w-auto" width={80} height={40} />
          </div>
          <div className="font-display text-lg mt-4 font-semibold">Top Line Glass Products Accessories</div>
          <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
            Premium glass door control systems, bathroom accessories, and door &amp; window hardware for the Middle East.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
            <li><Link to="/products" className="hover:text-primary-foreground">Products</Link></li>
            <li><Link to="/catalogues" className="hover:text-primary-foreground">Catalogues</Link></li>
            <li><Link to="/projects" className="hover:text-primary-foreground">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Categories</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70 columns-1">
            {CATEGORIES.slice(0, 8).map((c) => (
              <li key={c}>
                <Link to="/products/$category" params={{ category: categorySlug(c) }} className="hover:text-primary-foreground">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Get in touch</div>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> <a href="tel:+966564508627">+966 56 450 8627</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> <a href="mailto:kcdtc@gmail.com">kcdtc@gmail.com</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> JQR4+798, Al Madina Al Munawwarah Rd, Al Sina'iyah, Riyadh 12845, KSA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-tight py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Top Line Glass Products Accessories. All rights reserved.</span>
          <span>Manufacturer · Exporter · KSA</span>
        </div>
      </div>
    </footer>
  );
}
