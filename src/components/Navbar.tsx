"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#072a6b] shadow-2xl"
            : "bg-[rgba(7,42,107,0.88)] backdrop-blur-md"
        }`}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
              {/* Company Logo */}
              <div className="w-11 h-11 rounded-md overflow-hidden flex-shrink-0 transition-transform group-hover:scale-110 shadow-md bg-white">
                <Image src="/images/logo cmp.png" alt="Industrial Bearing & Chain Centre Logo" width={44} height={44} className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-base leading-tight tracking-tight hidden sm:block">
                  INDUSTRIAL BEARING
                </span>
                <span className="text-[#F2A900] font-extrabold text-base leading-tight tracking-tight hidden sm:block">
                  &amp; CHAIN CENTRE
                </span>
                <span className="text-white font-extrabold text-base leading-tight tracking-tight sm:hidden">
                  IBCC
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#F2A900] bg-white/10"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919062186130"
                target="_blank"
                rel="noopener noreferrer"
                id="nav-whatsapp-cta"
                className="hidden sm:flex items-center gap-2 bg-[#25D366] text-white text-sm font-bold px-4 py-2 rounded-full transition-all hover:bg-[#1db954] hover:shadow-lg active:scale-95"
              >
                <WhatsAppIcon />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
              {/* Call CTA */}
              <a
                href="tel:+919062186130"
                id="nav-call-cta"
                className="hidden md:flex items-center gap-2 btn-primary text-sm py-2 px-4"
              >
                <PhoneIcon />
                Call Now
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                id="nav-mobile-toggle"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors"
              >
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white my-1 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 bg-[#072a6b]">
            <nav className="container-xl py-3 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-md text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "text-[#F2A900] bg-white/10"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile CTAs */}
              <div className="flex gap-3 mt-3 pb-2">
                <a
                  href="https://wa.me/919062186130"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-bold py-3 rounded-lg"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
                <a
                  href="tel:+919062186130"
                  className="flex-1 flex items-center justify-center gap-2 btn-primary text-sm py-3 rounded-lg"
                >
                  <PhoneIcon />
                  Call Now
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-[70px]" />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
