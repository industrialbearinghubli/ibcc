import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Established 2016 | Industrial Bearing & Chain Centre",
  description:
    "Learn about Industrial Bearing & Chain Centre — established in 2016 by Ajitkumar Jaiswal in Hubballi. Genuine bearings, chains & spare parts for industrial buyers across Karnataka.",
};

const BRANDS = [
  { name: "SKF", tagline: "Precision Bearings", logo: "/images/logos/skf.svg" },
  { name: "FAG", tagline: "German Precision", logo: "/images/logos/fag.svg" },
  { name: "NTN", tagline: "Rolling Bearings", logo: "/images/logos/ntn.svg" },
  { name: "ARB", tagline: "Bearings India", logo: "/images/logos/arb.svg" },
  { name: "NBC", tagline: "Indian Bearings", logo: "/images/logos/nbc.svg" },
  { name: "Fenner", tagline: "Poly-F V-Belts", logo: "/images/logos/fenner.svg" },
  { name: "Rolon", tagline: "Roller Chains", logo: "/images/logos/rolon.svg" },
  { name: "Diamond", tagline: "Industrial Chains", logo: "/images/logos/diamond.svg" },
  { name: "Hero", tagline: "Industrial Chains", logo: "/images/logos/hero.svg" },
  { name: "KEC Bearings", tagline: "Automotive Bearings", logo: "/images/logos/kec.svg" },
  { name: "NBR", tagline: "Industrial Spares", logo: "/images/logos/nbr.svg" },
  { name: "FKRS", tagline: "Industrial Spares", logo: "/images/logos/fkrs.svg" },
  { name: "HKG", tagline: "Industrial Spares", logo: "/images/logos/hkg.svg" },
  { name: "ROCKMAN", tagline: "Industrial Spares", logo: "/images/logos/rockman.svg" },
  { name: "EcoDrive", tagline: "V-Belts", logo: "/images/logos/ecodrive.svg" },
  { name: "PIX", tagline: "V-Belts", logo: "/images/logos/pix.svg" },
];

const PRODUCT_RANGE = [
  "Bearings — Deep Groove, Spherical, Taper, Angular Contact",
  "Plumber Block & Pillow Block Bearings",
  "Bearing Sleeves & Adapter Sleeves",
  "V-Belts — A, B, C, D & Z sections",
  "Fenner Poly-F Plus & Eco Plus Belts",
  "Fenner Wedge Belts (SPA, SPB, SPC)",
  "Timing Belts (HTD / T Series)",
  "3-Pin Roller Sets",
  "V-Pulleys — Solid, Taper Lock, PTO Types",
  "Pulley Bush (Taper Lock Bush 1008–5050)",
  "Simplex, Duplex & Triplex Roller Chains",
  "Hero, Rolon, Diamond Brand Chains",
  "Sprockets (BS/ANSI — plain, hubbed, taper lock)",
  "Chain Pulley Blocks (1T, 3T, 5T)",
  "Lever Hoists & Gear Trolleys",
  "Conveyor Belts (EP / Chevron / Flat)",
  "Conveyor Idler Rollers & Belt Fasteners",
  "Webbing Sling Belts (1T–10T)",
  "Wire Rope (6×19, 6×37, Galvanized)",
  "Wire Rope Slings (Eye-Eye Type)",
  "Worm Gearboxes & Helical Gearboxes",
  "Gearbox Spares (Gears / Shafts / Seals)",
  "Oil Seals (NBR/Viton), O-Rings",
  "Pin Bush Couplings & Chain Couplings",
  "Wire Mesh — Woven & Welded",
  "Springs (Compression & Tension)",
  "Square Bolts, Patta Bolts, Hex Sets",
  "Trolley Wheels (PU / Cast Iron)",
  "Elevator Buckets (PVC / Metal)",
  "Snatch Blocks & Pulley Blocks",
  "Rice Mill Rubber Rollers & Sheller Stones",
  "Rice Mill Separator Screens & Bearing Sets",
  "Rice Mill V-Belt Sets & Pulley Sets",
  "Jaw Plates, Toggle Plates (Crusher Spares)",
  "Crusher Bearing Sets & V-Belt Kits",
  "Hammer Mill Screens & Hammers",
  "Feed Conveyor Chains & Mixer Paddles",
  "Diaphragm Rubber / Leather",
];

const WHY_CHOOSE = [
  {
    title: "Reasonable Rates",
    desc: "Competitive pricing on all products — ensuring you get the best value, especially for bulk and repeat orders.",
  },
  {
    title: "Good Quality Spares",
    desc: "We source from reputable manufacturers ensuring high-quality spares that perform reliably and last longer.",
  },
  {
    title: "Wide Range in Stock",
    desc: "Extensive inventory across all product categories — most items available off the shelf for immediate dispatch.",
  },
  {
    title: "Timely Delivery",
    desc: "We understand machine downtime is costly. We prioritise quick supply and same-day availability wherever possible.",
  },
  {
    title: "Expert Technical Support",
    desc: "Our experienced team helps you choose the right specifications, grade and brand for your exact application.",
  },
  {
    title: "Genuine Products Guarantee",
    desc: "Every product is sourced from authorised channels — no counterfeits, no compromises on authenticity.",
  },
  {
    title: "Competitive Bulk Discounts",
    desc: "Special pricing for factories, mills and large buyers. Ask us about your volume requirements.",
  },
  {
    title: "After-Sales Support",
    desc: "Our team stays available after your purchase to resolve any issue or assist with product-related queries.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero — with floating orbs */}
      <div className="relative bg-gradient-to-br from-[#072a6b] via-[#0B3D91] to-[#1a52b3] pt-16 pb-24 overflow-hidden">
        {/* Gradient orbs for depth */}
        <div className="orb orb-amber" style={{ width: 300, height: 300, top: '-10%', right: '5%', opacity: 0.2 }} />
        <div className="orb orb-navy" style={{ width: 400, height: 400, bottom: '-20%', left: '-5%', opacity: 0.15, animationDelay: '5s' }} />
        <div className="container-xl text-center relative z-10">
          <p className="badge-amber mb-4 animate-fade-up">About Us</p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4 animate-fade-up delay-100">
            Industrial Bearing &amp; Chain Centre
          </h1>
          <p className="text-white/65 max-w-2xl mx-auto text-lg animate-fade-up delay-200">
            Established in 2016 — your trusted industrial spare parts supplier in Hubballi, Karnataka.
          </p>
          {/* Quick stat pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-up delay-300">
            {[
              { v: '2016', l: 'Founded' },
              { v: '9+', l: 'Years Serving' },
              { v: '12+', l: 'Brands Stocked' },
              { v: '500+', l: 'Products Range' },
            ].map(s => (
              <div key={s.l} className="glass-card px-5 py-3 text-center">
                <p className="text-[#F2A900] font-extrabold text-xl leading-none">{s.v}</p>
                <p className="text-white/70 text-xs mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image
                  src="/images/stone crusher.png"
                  alt="Industrial Bearing &amp; Chain Centre — Hubballi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Badge overlay */}
              <div className="absolute -bottom-5 -right-5 bg-[#F2A900] rounded-xl px-6 py-4 shadow-xl hidden sm:block">
                <p className="text-[#072a6b] font-extrabold text-3xl leading-none">2016</p>
                <p className="text-[#072a6b]/70 text-sm font-semibold mt-1">Established</p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <p className="badge-navy mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91] section-title mb-8">
                Serving Industry Since 2016
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                <p>
                  <strong className="text-[#0B3D91]">Industrial Bearing & Chain Centre</strong> was established in 2016 with a clear purpose to be a reliable, single-stop source for genuine industrial spare parts in Hubballi and across Karnataka.
                </p>
                <p>
                  Founded and managed by <strong className="text-[#0B3D91]">Ajitkumar Jaiswal</strong>, the business was built on a commitment to supplying only authentic products from trusted manufacturers. No counterfeits, no compromise on quality.
                </p>
                <p>
                  Over the years, we have built long-term relationships with rice mill operators, stone crusher units, and conveyor system operators throughout Karnataka. Our team has hands-on experience in understanding exactly what each industry needs, helping customers select the right product every time.
                </p>
                <p>
                  We deal in bearings, V-belts, Fenner Poly-F belts, V-pulleys, Roller chains, Sprockets, Chain pulley blocks, Conveyor belts, Rice mill spare parts, Crusher spares, and feed spares. We source from globally trusted brands including SKF, FAG, NTN, Fenner, Rolon, Diamond, and more.
                </p>
              </div>

              {/* GST + contact */}
              <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Proprietor</span>
                  <span className="text-slate-800 font-bold">Ajitkumar Jaiswal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Established</span>
                  <span className="text-slate-800 font-bold">2016</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">GSTIN</span>
                  <span className="text-slate-800 font-mono font-bold">29BRWPA5389N1ZO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Address</span>
                  <span className="text-slate-800 font-bold text-right">
                    Plot #29, Industrial Area, 2nd Gate,<br />
                    Gokul Road, Hubballi – 580030
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands we stock — Auto-scrolling marquee */}
      <section className="section-padding bg-slate-50 overflow-hidden" aria-labelledby="brands-heading">
        <div className="container-xl mb-8">
          <div className="text-center">
            <p className="badge-amber mb-3">Authorised Stockist</p>
            <h2 id="brands-heading" className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91] section-title section-title-center">
              Working With The Best
            </h2>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
              We are authorised dealers and stockists for the most respected industrial brands — so you always get genuine, certified products.
            </p>
          </div>
        </div>

        {/* Marquee track 1 — left scroll */}
        <div className="relative overflow-hidden mb-4">
          <div className="flex gap-5 marquee-track" style={{ width: "max-content" }}>
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={`brand-fwd-${i}`}
                className="flex flex-col items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm px-6 py-5 min-w-[150px] hover:border-[#F2A900] hover:shadow-md transition-all"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="h-10 object-contain mb-2 bg-slate-50 rounded p-1"
                />
                <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">{brand.tagline}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee track 2 — right scroll (reverse) */}
        <div className="relative overflow-hidden">
          <div className="flex gap-5 marquee-track-reverse" style={{ width: "max-content" }}>
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={`brand-rev-${i}`}
                className="flex flex-col items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm px-6 py-5 min-w-[150px] hover:border-[#F2A900] hover:shadow-md transition-all"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="h-10 object-contain mb-2 bg-slate-50 rounded p-1"
                />
                <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">{brand.tagline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full product range */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left */}
            <div className="lg:w-2/5">
              <p className="badge-navy mb-4">Complete Range</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91] section-title mb-8">
                Everything We Deal In
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our product range spans bearings, belts, chains, conveyors, and a broad range of specialised spares for rice mills, stone crushers, and feed mills.
              </p>
              <Link href="/products" id="about-view-products-btn" className="btn-navy inline-flex">
                Browse All Products
                <ArrowRightIcon />
              </Link>
            </div>

            {/* Product list */}
            <div className="lg:w-3/5">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRODUCT_RANGE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F2A900] flex items-center justify-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="#072a6b">
                        <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
                      </svg>
                    </span>
                    <span className="text-slate-600 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-gradient-to-br from-[#072a6b] via-[#0B3D91] to-[#1a52b3]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 bg-white/10 text-white/80 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-3">
              Why Choose IBCC
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Our Customers Keep Coming Back
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_CHOOSE.map((item, i) => (
              <div
                key={i}
                className="bg-white/8 border border-white/10 rounded-xl p-5 hover:bg-white/12 hover:border-[#F2A900]/40 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F2A900] flex items-center justify-center mb-4">
                  <span className="text-[#072a6b] font-black text-base">✓</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[#F2A900]">
        <div className="container-xl text-center">
          <h2 className="text-[#072a6b] text-3xl font-extrabold mb-4">
            Ready to place an order?
          </h2>
          <p className="text-[#072a6b]/70 mb-8 max-w-lg mx-auto">
            Get in touch with us directly. We\'re available Mon–Sat, 9:30 AM to 7:00 PM.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" id="about-contact-btn" className="flex items-center gap-2 bg-[#072a6b] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#0B3D91] transition-colors">
              Send Enquiry
              <ArrowRightIcon />
            </Link>
            <a
              href="tel:+917349049883"
              id="about-call-btn"
              className="flex items-center gap-2 bg-[#072a6b] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#0B3D91] transition-colors"
            >
              <PhoneIcon />
              7349049883
            </a>
            <a
              href="tel:+918147027162"
              id="about-call-btn-alt"
              className="flex items-center gap-2 bg-white/30 text-[#072a6b] font-bold px-7 py-3.5 rounded-lg hover:bg-white/50 transition-colors"
            >
              <PhoneIcon />
              81470 27162
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
