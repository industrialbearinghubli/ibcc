import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white">


      {/* Main footer content */}
      <div className="container-xl pt-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-10 sm:h-12 w-auto">
                <Image src="/images/ibcc-logo.png" alt="IBCC Logo" width={200} height={54} className="object-contain h-full w-auto" />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Established 2016. Trusted supplier of industrial bearings, chains, belts & spare parts in Hubballi, serving Karnataka industries.
            </p>
            <p className="text-slate-500 text-xs">
              GSTIN: <span className="text-slate-300 font-mono">29BRWPA5389N1ZO</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Prop: <span className="text-slate-300">Ajitkumar Jaiswal</span>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link flex items-center gap-2">
                    <span className="text-[#F2A900] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Products</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Bearings (SKF, FAG, NTN, NBC)", href: "/products?category=Bearings" },
                { label: "V-Belts & Fenner Poly-F", href: "/products?category=V-Belts" },
                { label: "Roller Chains & Sprockets", href: "/products?category=Roller+Chain" },
                { label: "Conveyor Belts", href: "/products?category=Conveyor+Belts" },
                { label: "Rice Mill Spare Parts", href: "/products?category=Rice+Mill+Spares" },
                { label: "Crusher Spares", href: "/products?category=Crusher+Spares" },
                { label: "Chain Pulley Blocks", href: "/products?category=Chain+Pulley+Block" },
                { label: "V-Pulleys & Feed Spares", href: "/products?category=V-Pulley" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="footer-link flex items-center gap-2">
                    <span className="text-[#F2A900] text-xs">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <MapPinIcon />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Plot #29, Industrial Area,<br />
                  2nd Gate, Gokul Road,<br />
                  Hubballi – 580030, Karnataka
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <PhoneIconSmall />
                <div className="text-sm space-y-1">
                  <a href="tel:+917349049883" className="footer-link block">7349049883</a>
                  <a href="tel:+919036843910" className="footer-link block">9036843910</a>
                  <a href="tel:+918147027162" className="footer-link block">81470 27162</a>
                  <a href="tel:+918364507884" className="footer-link block">0836-4507884 (Landline)</a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <EmailIcon />
                <a
                  href="mailto:industrialbearing.hubli@gmail.com"
                  className="footer-link text-sm break-all"
                >
                  industrialbearing.hubli@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <ClockIcon />
                <span className="text-slate-400 text-sm">
                  Mon – Sat: 9:30 AM – 7:00 PM<br />
                  Sun: 10:00 AM – 2:00 PM
                </span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Google Map embed removed as per request to only keep it on Contact page */}
      <div className="border-t border-white/5 bg-[#060e1c]">
        <div className="container-xl py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {year} Industrial Bearing & Chain Centre, Hubballi. All rights reserved.</p>
            <p>
              Prop: Ajitkumar Jaiswal · GSTIN: 29BRWPA5389N1ZO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function PhoneIconSmall() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
