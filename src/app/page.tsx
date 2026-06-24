import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Industrial Bearing & Chain Centre | Hubballi — Bearings, Chains & Belts",
  description:
    "Your trusted source for genuine industrial bearings, V-belts, roller chains, sprockets & spare parts in Hubballi, Karnataka. Established 2016. SKF, FAG, NTN, Fenner, Rolon brands.",
};

const CATEGORIES = [
  { id: "bearings", label: "Bearings", desc: "SKF, FAG, NTN, NBC, ARB — deep groove, spherical, taper, plumber block & pillow block", img: "/images/real image/skf-bearings-solutions.jpg", href: "/products?category=Bearings", badge: "BEARINGS", color: "#0B3D91" },
  { id: "vbelts", label: "V-Belts", desc: "A, B, C, D section & Fenner Poly-F raw-edge cogged belts for all industrial drives", img: "/images/real image/POLY F FENNER V BELTS.jpg", href: "/products?category=V-Belts", badge: "V-BELTS", color: "#E31E24" },
  { id: "chains-sprockets", label: "Chains & Sprockets", desc: "Rolon, Diamond, Hero roller chains & precision-machined sprockets in BS/ANSI sizes", img: "/images/real image/roller-chain-sprocket.jpg", href: "/products?category=Chains+%26+Sprockets", badge: "CHAINS & SPROCKETS", color: "#1E3A5F" },
  { id: "conveyor-belts", label: "Conveyor Belts", desc: "EP-grade flat belts, chevron belts, idler rollers & conveyor accessories", img: "/images/real image/conveyer belt.jpg", href: "/products?category=Conveyor+Belts", badge: "CONVEYOR BELTS", color: "#006633" },
  { id: "material-handling", label: "Material Handling", desc: "Trolley wheels, metal and plastic elevator buckets for all material handling needs", img: "/images/real image/plastic-elevator-buckets.webp", href: "/products?category=Material+Handling", badge: "MATERIAL HANDLING", color: "#C8A000" },
  { id: "crusher", label: "Crusher Spares", desc: "Jaw plates, toggle plates, bearing sets & V-belt kits for stone crushers", img: "/images/real image/impact-idlers stone crushers.jpg", href: "/products?category=Crusher+Spares", badge: "CRUSHER SPARES", color: "#7B3F00" },
  { id: "rice-mill", label: "Rice Mill Spares", desc: "Elevator belts, metal/plastic buckets, and specialized parts for rice mills", img: "/images/real image/rice-mill-elevator-belt.jpeg", href: "/products?category=Rice+Mill+Spares", badge: "RICE MILL SPARES", color: "#F2A900" },
];

const WHY_CHOOSE = [
  { title: "Genuine Products Guaranteed", desc: "Only authentic parts from authorised distributors of SKF, FAG, NTN, Fenner & Rolon. No counterfeits.", icon: "✓", color: "#22c55e" },
  { title: "Competitive Pricing", desc: "Best-value pricing with special bulk discounts for mills and factories. Repeat orders rewarded.", icon: "₹", color: "#F2A900" },
  { title: "Wide Range in Stock", desc: "500+ products across bearings, belts, chains, sprockets & spares — most available off-the-shelf.", icon: "📦", color: "#3b82f6" },
  { title: "Timely Delivery", desc: "Quick dispatch across Hubballi & North Karnataka. We understand every hour of downtime is costly.", icon: "🚚", color: "#a855f7" },
  { title: "Expert Technical Support", desc: "Experienced team helps you select the right grade and size for rice mills, crushers & conveyors.", icon: "⚙", color: "#06b6d4" },
  { title: "After-Sales Service", desc: "We stay available after your purchase. Any issue with a product? Our team is always ready to help.", icon: "🛠", color: "#ef4444" },
];

const BRANDS = [
  { name: "SKF", tag: "Precision Bearings", color: "#003F8A" },
  { name: "FAG", tag: "German Precision", color: "#E30613" },
  { name: "NTN", tag: "Rolling Bearings", color: "#003087" },
  { name: "ARB", tag: "Indian Bearings", color: "#1A4B8C" },
  { name: "NBC", tag: "Bearings India", color: "#C8102E" },
  { name: "Fenner", tag: "Poly-F V-Belts", color: "#E31E24" },
  { name: "Rolon", tag: "Roller Chains", color: "#00529B" },
  { name: "Diamond", tag: "Industrial Chains", color: "#1E3A5F" },
  { name: "Hero", tag: "Industrial Chains", color: "#003087" },
  { name: "NBR", tag: "Industrial Spares", color: "#003F8A" },
  { name: "FKRS", tag: "Industrial Spares", color: "#E30613" },
  { name: "HKG", tag: "Industrial Spares", color: "#E31E24" },
  { name: "ROCKMAN", tag: "Industrial Spares", color: "#003087" },
  { name: "EcoDrive", tag: "V-Belts", color: "#F2A900" },
  { name: "PIX", tag: "V-Belts", color: "#FF0000" },
];

const REVIEWS = [
  {
    text: "Bearings swalpa costly aaguttha anta hesardru, aadre IBCC lly SKF 6205 bearing price check maadidaga same day stock iralilla, maarananalli 2 tass loge deliver maadidru. Genuine product maathra – no duplicate. Our rice sheller running smooth for 8 months now.",
    author: "Basavaraj Hiremath",
    role: "Proprietor, Hiremath Rice Industries, Gadag",
    initial: "B",
    stars: 5,
    date: "2 weeks ago",
    product: "SKF 6205 Deep Groove Bearings (Qty: 12)",
    verified: true,
  },
  {
    text: "Stone crusher la jaw plates naavu kashtapatti kaLithaiddvi. IBCClly toggle plate, jaw plate set ready stock ithtu – price quote 15 min loge WhatsApp la bandhu. Fitting also correct, machine full load la kaLithide. Thank you IBCC team.",
    author: "Santosh Kumbar",
    role: "Stone Crusher Owner, Haveri District",
    initial: "S",
    stars: 5,
    date: "1 month ago",
    product: "Jaw Crusher Toggle Plate & Jaw Plate Set",
    verified: true,
  },
  {
    text: "Fenner B-section V-belts for our textile loom — took 3 pcs. Within same afternoon, Gokul Road shop la stock ready iralilla antha hesaru, aadre Ashok (owner) phone maddu adjust maadidru. That personal service is rare nowadays. Will buy again.",
    author: "Pradeep Kulkarni",
    role: "Proprietor, Kulkarni Textile Mill, Hubballi",
    initial: "P",
    stars: 4,
    date: "3 weeks ago",
    product: "Fenner Poly-F B-Section V-Belts (Qty: 3)",
    verified: true,
  },
];

const TICKER_ITEMS = [
  "✦ SKF Bearings Available",
  "✦ Fenner Poly-F V-Belts in Stock",
  "✦ Rolon Roller Chains",
  "✦ Rice Mill Spares Ready",
  "✦ Stone Crusher Parts",
  "✦ Same-Day Dispatch",
  "✦ 500+ Products in Range",
  "✦ Call: 7349049883",
  "✦ Hubballi, Karnataka",
  "✦ Genuine Brands Only",
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="hero-section" aria-label="Hero">
        <Image src="/images/plant home page.png" alt="Industrial Bearing & Chain Centre facility" fill priority className="object-cover" sizes="100vw" />
        <div className="hero-overlay" />

        {/* Floating gradient orbs */}
        <div className="orb orb-amber" style={{ width: 500, height: 500, top: "5%", right: "-5%", animationDelay: "0s", opacity: 0.25 }} />
        <div className="orb orb-navy" style={{ width: 350, height: 350, bottom: "10%", right: "25%", animationDelay: "4s", opacity: 0.2 }} />
        <div className="orb orb-amber" style={{ width: 200, height: 200, top: "60%", left: "10%", animationDelay: "7s", opacity: 0.15 }} />

        <div className="hero-content container-xl w-full py-20">
          <div className="max-w-2xl">
            {/* Animated pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-[#F2A900] inline-block animate-pulse-amber" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">Established 2016 · Hubballi, Karnataka</span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 animate-fade-up delay-100">
              Industrial <span className="shimmer-text">Bearings &amp;</span><br />Chain Centre
            </h1>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 animate-fade-up delay-200">
              Your trusted source for genuine industrial spare parts in Karnataka. Serving rice mills, crushers, conveyors &amp; feed mills since 2016.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link href="/products" id="hero-cta-products" className="btn-primary text-base px-7 py-3.5 hover:scale-105 transition-transform">View Products <ArrowRightIcon /></Link>
              <Link href="/contact" id="hero-cta-contact" className="btn-secondary text-base px-7 py-3.5 hover:scale-105 transition-transform">Contact Us</Link>
            </div>

            {/* Animated stat counters */}
            <div className="flex flex-wrap gap-10 mt-12 animate-fade-up delay-400">
              {[
                { value: "9+", label: "Years in Business" },
                { value: "12+", label: "Brands Stocked" },
                { value: "500+", label: "Products in Range" },
              ].map((s) => (
                <div key={s.label} className="relative group">
                  <div className="absolute -inset-2 bg-[#F2A900]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-[#F2A900] text-3xl font-extrabold leading-none stat-glow relative">{s.value}</p>
                  <p className="text-white/65 text-sm mt-1 relative">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── LIVE TICKER TAPE ─────────────────────────────────────────── */}
      <div className="bg-[#F2A900] overflow-hidden py-2.5 border-y-2 border-[#d4920a]">
        <div className="flex gap-12 marquee-track whitespace-nowrap" style={{ width: "max-content" }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-[#072a6b] font-bold text-sm tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── TRUST STRIP ─────────────────────────────────────────────── */}
      <section className="bg-[#072a6b]" aria-label="Trust strip">
        <div className="container-xl">
          <div className="flex flex-wrap items-stretch justify-center divide-x divide-white/10">
{/* Address */}
            <div className="flex items-center gap-3 px-6 py-5 flex-1 min-w-[180px] justify-center group hover:bg-white/5 transition-colors cursor-default">
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">📍</span>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Hubballi, Gokul Road</p>
                <p className="text-white/55 text-xs">Industrial Area, Plot #29</p>
              </div>
            </div>

            {/* Primary phone — real tel: link, works on mobile */}
            <a
              href="tel:+917349049883"
              className="flex items-center gap-3 px-6 py-5 flex-1 min-w-[180px] justify-center group hover:bg-white/5 transition-colors"
              aria-label="Call IBCC on 7349049883"
            >
              <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">📞</span>
              <div>
                <p className="text-white font-bold text-sm leading-tight underline underline-offset-2 decoration-[#F2A900]/60">7349049883</p>
                <p className="text-[#F2A900] text-xs font-semibold">Tap to Call Now</p>
              </div>
            </a>

            {/* Brands */}
            <div className="flex items-center gap-3 px-6 py-5 flex-1 min-w-[180px] justify-center group hover:bg-white/5 transition-colors cursor-default">
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🏷</span>
              <div>
                <p className="text-white font-bold text-sm leading-tight">12 Trusted Brands</p>
                <p className="text-white/55 text-xs">SKF · FAG · Fenner · Rolon</p>
              </div>
            </div>

            {/* Dispatch */}
            <div className="flex items-center gap-3 px-6 py-5 flex-1 min-w-[180px] justify-center group hover:bg-white/5 transition-colors cursor-default">
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">⚡</span>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Same-Day Dispatch</p>
                <p className="text-white/55 text-xs">Across Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ──────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 overflow-hidden border-y border-slate-200" aria-label="Brands we stock">
        <ScrollReveal className="container-xl mb-10 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Authorised Dealer / Stockist</p>
          <h2 className="text-2xl font-extrabold text-[#0B3D91]">Brands We Stock</h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">Official stockist of the world's most trusted industrial brands</p>
        </ScrollReveal>

        {/* Forward marquee — logo SVG already contains brand name, just show tagline below */}
        <div className="relative overflow-hidden mb-4">
          <div className="flex gap-5 marquee-track items-center" style={{ width: "max-content" }}>
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div key={`fwd-${i}`} className="flex flex-col items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm px-5 py-4 min-w-[120px] hover:border-[#F2A900] hover:shadow-lg transition-all hover:-translate-y-1 duration-300 group cursor-default">
                <img
                  src={`/images/logos/${brand.name.toLowerCase()}.svg`}
                  alt={`${brand.name} logo`}
                  className="h-9 w-20 object-contain"
                />
                <span className="text-slate-400 text-[10px] font-medium mt-1.5 text-center leading-tight">{brand.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reverse marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-5 marquee-track-reverse items-center" style={{ width: "max-content" }}>
            {[...BRANDS, ...BRANDS].reverse().map((brand, i) => (
              <div key={`rev-${i}`} className="flex flex-col items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm px-5 py-4 min-w-[120px] hover:border-[#F2A900] hover:shadow-lg transition-all hover:-translate-y-1 duration-300 cursor-default">
                <img
                  src={`/images/logos/${brand.name.toLowerCase()}.svg`}
                  alt={`${brand.name} logo`}
                  className="h-9 w-20 object-contain"
                />
                <span className="text-slate-400 text-[10px] font-medium mt-1.5 text-center leading-tight">{brand.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ──────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="categories-heading">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-14">
            <p className="badge-amber mb-3">What We Stock</p>
            <h2 id="categories-heading" className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91] section-title section-title-center">Our Product Range</h2>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto">A comprehensive range of industrial spare parts — from precision bearings to heavy conveyor belts — all from genuine manufacturers.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={(i % 3 + 1) as 1|2|3|4|5}>
                <Link href={cat.href} id={`cat-card-${cat.id}`} className="product-card group block h-full">
                  <div className="relative overflow-hidden h-52 bg-white">
                    <Image src={cat.img} alt={cat.label} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    {/* Color accent line on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500" style={{ backgroundColor: cat.color, opacity: 0 }} />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-[#F2A900] text-[#072a6b] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">{cat.badge}</span>
                    </div>
                    {/* Hover overlay CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/90 text-[#0B3D91] font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">View Products <ArrowRightIcon /></span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-[#0B3D91] text-xl mb-2 group-hover:text-[#F2A900] transition-colors">{cat.label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link href="/products" id="view-all-products-btn" className="btn-navy px-8 py-3.5 hover:scale-105 transition-transform inline-flex">View All 500+ Products <ArrowRightIcon /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY CHOOSE — GLASSMORPHISM ──────────────────────────────── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #061a40 0%, #072a6b 40%, #0B3D91 70%, #0d2f5c 100%)" }}
        aria-labelledby="why-heading"
      >
        {/* Multi-layer background orbs */}
        <div className="orb orb-amber" style={{ width: 450, height: 450, top: "-15%", left: "-8%", opacity: 0.18 }} />
        <div className="orb orb-navy" style={{ width: 600, height: 600, bottom: "-25%", right: "-12%", opacity: 0.12, animationDelay: "6s" }} />
        <div className="orb orb-amber" style={{ width: 200, height: 200, top: "50%", left: "50%", opacity: 0.08, animationDelay: "3s" }} />

        {/* Animated grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #F2A900 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="container-xl relative z-10">
          <ScrollReveal className="text-center mb-14">
            <p className="badge-amber mb-3">Why Choose IBCC</p>
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold text-white">Why Industrial Buyers Trust Us</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">Building trust with rice mills, stone crushers & feed mills across Karnataka since 2016.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((item, i) => (
              <ScrollReveal key={item.title} delay={(i % 3 + 1) as 1|2|3|4|5}>
                <div className="glass-card p-7 hover:bg-white/15 transition-all duration-500 group h-full relative overflow-hidden">
                  {/* Animated corner glow */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" style={{ backgroundColor: item.color }} />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: item.color + "25", border: `1.5px solid ${item.color}40` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ backgroundColor: item.color }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER — ANIMATED STEPS ──────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="how-heading">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-16">
            <p className="badge-amber mb-3">Simple Process</p>
            <h2 id="how-heading" className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91]">How To Order</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Getting the right industrial spare parts has never been easier.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Animated connector line */}
            <div className="hidden md:block absolute top-12 left-[calc(33%+20px)] right-[calc(33%+20px)] h-0.5">
              <div className="h-full bg-gradient-to-r from-[#0B3D91] via-[#F2A900] to-[#25D366] animate-pulse-amber" />
            </div>

            {[
              { num: "01", title: "Tell Us The Part", desc: "Call or WhatsApp with the part number, bearing size, belt section, or machine model. A photo works too!", color: "#0B3D91", textColor: "white", emoji: "💬" },
              { num: "02", title: "We Confirm Stock", desc: "Our team instantly checks inventory and gives you a competitive price quote with genuine brand options.", color: "#F2A900", textColor: "#072a6b", emoji: "✅" },
              { num: "03", title: "Same Day Dispatch", desc: "Confirm the order and we dispatch same day. Pickup from shop or delivery across Karnataka.", color: "#25D366", textColor: "white", emoji: "🚚" },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={(i + 1) as 1|2|3} className="text-center relative z-10">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-6 shadow-2xl animate-float relative"
                  style={{ backgroundColor: step.color, color: step.textColor, animationDelay: `${i * 1.5}s` }}
                >
                  {step.num}
                  <span className="absolute -top-2 -right-2 text-2xl">{step.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B3D91] mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <a
              href="https://wa.me/917349049883?text=Hello%2C%20I%20need%20a%20spare%20part."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-10 py-4 rounded-2xl text-base hover:bg-[#1db954] transition-all hover:scale-105 shadow-2xl shadow-green-500/30"
            >
              <WhatsAppIcon /> Start Your Order on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ───────────────────────────────────────── */}
      <section className="section-padding bg-slate-50" aria-labelledby="sectors-heading">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <ScrollReveal className="lg:w-1/2">
              <p className="badge-amber mb-3">Industries Served</p>
              <h2 id="sectors-heading" className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91] section-title mb-6">Who We Supply To</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">From paddy processing units to heavy stone-crushing plants, we supply the right spares to keep your machinery running. Deep inventory and quick availability means less downtime for you.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: "🌾", label: "Rice Mills", count: "50+" },
                  { icon: "🪨", label: "Stone Crushers", count: "30+" },
                  { icon: "⚙️", label: "Conveyors", count: "25+" },
                  { icon: "🌽", label: "Feed Mills", count: "20+" },
                  { icon: "🏗️", label: "Agro Industry", count: "60+" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-1 p-4 rounded-xl bg-white border border-slate-100 hover:border-[#F2A900] hover:bg-[#fffbf0] hover:shadow-lg transition-all hover:scale-105 duration-300 group cursor-default">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                    <span className="text-sm font-bold text-slate-700">{s.label}</span>
                    <span className="text-xs font-semibold text-[#F2A900]">{s.count} clients</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2} className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image src="/images/about-warehouse.png" alt="Industrial supply warehouse" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/40 to-transparent" />
              </div>
              {/* Floating stat badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl border border-slate-100 px-6 py-4 hidden md:block animate-float">
                <p className="text-[#0B3D91] font-extrabold text-2xl leading-none">2016</p>
                <p className="text-slate-500 text-xs mt-1">Established</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-[#F2A900] rounded-xl shadow-xl px-5 py-4 hidden md:block animate-float" style={{ animationDelay: "2s" }}>
                <p className="text-[#072a6b] font-extrabold text-2xl leading-none">500+</p>
                <p className="text-[#072a6b]/70 text-xs mt-1">Products in Range</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50" aria-labelledby="reviews-heading">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-14">
            {/* Google-style rating summary */}
            <div className="inline-flex flex-col items-center bg-white rounded-2xl shadow-md border border-slate-100 px-8 py-5 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span className="text-slate-600 text-sm font-semibold">Google Reviews</span>
              </div>
              <p className="text-4xl font-extrabold text-[#0B3D91] leading-none">4.8</p>
              <div className="flex gap-0.5 my-1.5">
                {[1,2,3,4,5].map(i => <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F2A900"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p className="text-slate-400 text-xs">Based on 47 Google reviews</p>
            </div>
            <p className="badge-amber mb-3">Customer Reviews</p>
            <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91]">What Our Clients Say</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Real feedback from rice mills, stone crushers & factories across Karnataka.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={i} delay={(i + 1) as 1|2|3}>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col hover:shadow-xl hover:border-[#F2A900]/40 hover:-translate-y-2 transition-all duration-500 h-full group">
                  {/* Header: avatar + name + Google icon */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#1a52b3] text-white flex items-center justify-center font-bold text-base shadow-md flex-shrink-0">
                      {review.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-800 text-sm leading-tight truncate">{review.author}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{review.role}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(s => (
                            <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill={s <= review.stars ? "#F2A900" : "#e2e8f0"}>
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-slate-400 text-[10px]">{review.date}</span>
                      </div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5" aria-hidden>
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  {/* Product badge */}
                  {review.product && (
                    <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 mb-3 self-start">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0B3D91" strokeWidth="2.5"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                      <span className="text-[10px] font-semibold text-slate-600">{review.product}</span>
                    </div>
                  )}

                  {/* Review text */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{review.text}</p>

                  {/* Verified badge */}
                  {review.verified && (
                    <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-slate-50">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                      <span className="text-[11px] text-green-600 font-semibold">Verified Purchase</span>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#F2A900] via-[#ffc200] to-[#F2A900] relative overflow-hidden" aria-label="Call to action">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #072a6b 0px, #072a6b 1px, transparent 1px, transparent 12px)" }} />
        <div className="orb orb-amber" style={{ width: 350, height: 350, top: "-60%", right: "-5%", opacity: 0.3 }} />

        <div className="container-xl py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <ScrollReveal>
              <h2 className="text-[#072a6b] text-3xl sm:text-4xl font-extrabold leading-tight">Need a quote or urgent spare?</h2>
              <p className="text-[#072a6b]/70 mt-3 text-lg max-w-md">Call or WhatsApp us directly — we respond fast. Most items available same-day.</p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+917349049883" id="cta-call-primary" className="flex items-center gap-2 bg-[#072a6b] text-white font-bold px-7 py-4 rounded-xl hover:bg-[#0B3D91] transition-all hover:scale-105 shadow-xl text-base">
                  <PhoneIcon /> 7349049883
                </a>
                <a href="tel:+918147027162" id="cta-call-secondary" className="flex items-center gap-2 bg-white/30 text-[#072a6b] font-bold px-7 py-4 rounded-xl hover:bg-white/60 transition-all hover:scale-105 text-base">
                  <PhoneIcon /> 81470 27162
                </a>
                <a
                  href="https://wa.me/917349049883?text=Hello%2C%20I%20need%20a%20quote%20for%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-whatsapp"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:bg-[#1db954] transition-all hover:scale-105 shadow-xl text-base"
                >
                  <WhatsAppIcon /> WhatsApp Quote
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRightIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>;
}
function WhatsAppIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" /></svg>;
}
