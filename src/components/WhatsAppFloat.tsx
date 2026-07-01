import { waLink } from "@/lib/products";
import { WhatsAppSolidIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hi, I would like to send an enquiry about Top Line Glass Products Accessories.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-lift transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping" style={{ backgroundColor: "#25D366" }} />
      <WhatsAppSolidIcon className="relative h-7 w-7" />
    </a>
  );
}
