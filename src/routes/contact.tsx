import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { waLink } from "@/lib/products";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { WhatsAppSolidIcon } from "@/components/WhatsAppIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Top Line Glass Products Accessories | Riyadh, KSA" },
      { name: "description", content: "Contact Top Line Glass Products Accessories for glass door hardware, bathroom accessories and project enquiries. Riyadh KSA. Phone +966 56 450 8627 · kcdtc@gmail.com." },
      { property: "og:title", content: "Contact Top Line Glass Products Accessories | Riyadh, KSA" },
      { property: "og:description", content: "Get in touch for catalogues, quotations and project consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name} (${form.email}${form.phone ? ", " + form.phone : ""}). ${form.message}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  };

  return (
    <div className="container-tight py-8">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      <h1 className="font-display text-4xl mt-3">Contact Us</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Send us your enquiry and our team will respond promptly. For instant replies, message us on WhatsApp.</p>

      <div className="mt-8 grid lg:grid-cols-[1.1fr_1fr] gap-10">
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-7 shadow-card space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Name</span>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Email</span>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Phone (optional)</span>
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Message</span>
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground lift cursor-pointer hover:opacity-95">
            <Send className="h-4 w-4" /> Send Message
          </button>
          {sent && <div className="text-xs text-muted-foreground">Opening WhatsApp with your message…</div>}
        </form>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-4">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md gradient-gold text-gold-foreground"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mobile</div>
                <a href="tel:+966564508627" className="font-medium hover:text-gold">+966 56 450 8627</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md gradient-gold text-gold-foreground"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</div>
                <a href="mailto:kcdtc@gmail.com" className="font-medium hover:text-gold">kcdtc@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md gradient-gold text-gold-foreground"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Showroom</div>
                <div className="font-medium leading-relaxed">JQR4+798, Al Madina Al Munawwarah Rd,<br />Al Sina'iyah, Riyadh, 12845, KSA</div>
              </div>
            </div>
            <a href={waLink("Hi, I would like to send an enquiry about Top Line Glass Products Accessories products.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-sm font-semibold text-white lift">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden shadow-card">
            <a href="https://share.google/P0gBPafps3B5vnC8U" target="_blank" rel="noopener noreferrer" className="block">
              <iframe
                title="Top Line Glass Products Accessories location on Google Maps"
                src="https://www.google.com/maps?q=JQR4%2B798+Al+Madina+Al+Munawwarah+Rd+Al+Sina'iyah+Riyadh+12845&output=embed"
                className="w-full aspect-[4/3] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
