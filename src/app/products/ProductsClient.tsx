"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products, ALL_CATEGORIES, getCategoryFromSlug, getCategorySlug, type ProductCategory } from "@/data/products";
import {
  LayoutGrid, Settings2, Cable, CircleDot, Link2, Blocks,
  MoveRight, Cog, Droplets, Wrench, PackageOpen, Wheat, Mountain
} from "lucide-react";

// Category icons map — professional Lucide icons
const CAT_ICON_COMPONENTS: Record<string, React.ReactNode> = {
  "All":                  <LayoutGrid  size={15} strokeWidth={2} />,
  "Bearings":             <Settings2   size={15} strokeWidth={2} />,
  "V-Belts":             <Cable       size={15} strokeWidth={2} />,
  "V-Pulley":            <CircleDot   size={15} strokeWidth={2} />,
  "Chains & Sprockets":  <Link2       size={15} strokeWidth={2} />,
  "Chain Pulley Block":  <Blocks      size={15} strokeWidth={2} />,
  "Conveyor Belts":      <MoveRight   size={15} strokeWidth={2} />,
  "Gearboxes":           <Cog         size={15} strokeWidth={2} />,
  "Oil Seals & Couplings": <Droplets  size={15} strokeWidth={2} />,
  "Fasteners & Hardware": <Wrench     size={15} strokeWidth={2} />,
  "Material Handling":   <PackageOpen size={15} strokeWidth={2} />,
  "Rice Mill Spares":    <Wheat       size={15} strokeWidth={2} />,
  "Crusher Spares":      <Mountain    size={15} strokeWidth={2} />,
};

export default function ProductsClient({ initialCategorySlug = "all" }: { initialCategorySlug?: string }) {
  const router = useRouter();
  
  const initialCat = getCategoryFromSlug(initialCategorySlug) || "All";
  
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(initialCat);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sync state if prop changes (via Next.js soft navigation)
  useEffect(() => {
    setActiveCategory(getCategoryFromSlug(initialCategorySlug) || "All");
  }, [initialCategorySlug]);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const searchWords = search.toLowerCase().replace(/[-_]/g, " ").split(/\s+/).filter(Boolean);
    const targetString = [p.name, p.description, p.brand, p.category].filter(Boolean).join(" ").toLowerCase().replace(/[-_]/g, " ");
    
    const matchSearch =
      !search || searchWords.every((word) => targetString.includes(word));
    
    return matchCat && matchSearch;
  });

  const handleCategoryClick = (cat: ProductCategory | "All") => {
    setSidebarOpen(false);
    const slug = getCategorySlug(cat);
    if (slug === "all") {
      router.push("/products");
    } else {
      router.push(`/products/${slug}`);
    }
  };

  return (
    <>
      {/* Page header */}
      <div className="bg-[#072a6b] pt-12 pb-16">
        <div className="container-xl text-center">
          <p className="badge-amber mb-3">Full Product Range</p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">Our Products</h1>
          <p className="text-white/65 max-w-2xl mx-auto text-lg">
            Browse our complete range of industrial spare parts — all from genuine, authorised sources.
            Can&apos;t find what you need? Call us — we stock more than what&apos;s listed here.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto mt-8 relative">
            <input
              type="search"
              id="product-search"
              placeholder="Search by name or brand…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-slate-800 bg-white font-medium text-sm shadow-xl outline-none focus:ring-2 focus:ring-[#F2A900]"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container-xl pt-8 pb-20 sm:pb-28">
        {/* Mobile: filter toggle button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 bg-[#072a6b] text-white font-bold px-5 py-2.5 rounded-lg text-sm w-full justify-between"
          >
            <span className="flex items-center gap-2">
              <FilterIcon />
              {activeCategory === "All" ? "All Categories" : activeCategory}
            </span>
            <span className="text-[#F2A900] text-xs font-medium">
              {filtered.length} items
            </span>
          </button>

          {/* Mobile sidebar dropdown */}
          {sidebarOpen && (
            <div className="mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-20 relative">
              <SidebarContent
                activeCategory={activeCategory}
                onSelect={handleCategoryClick}
              />
            </div>
          )}
        </div>

        {/* Desktop: sidebar + grid layout */}
        <div className="flex gap-8 items-start">

          {/* ── SIDEBAR (desktop only) ── */}
          <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-24">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#072a6b] px-4 py-3">
                <p className="text-white font-bold text-xs uppercase tracking-widest">
                  Filter by Category
                </p>
              </div>
              <SidebarContent
                activeCategory={activeCategory}
                onSelect={handleCategoryClick}
              />
            </div>

            {/* Quick contact card */}
            <div className="mt-4 bg-gradient-to-br from-[#F2A900] to-[#e09800] rounded-2xl p-5 text-center shadow">
              <p className="text-[#072a6b] font-extrabold text-sm mb-1">Can&apos;t find it?</p>
              <p className="text-[#072a6b]/70 text-xs mb-3 leading-snug">
                We stock more than what&apos;s listed. Call us!
              </p>
              <a
                href="tel:+917349049883"
                className="flex items-center justify-center gap-1.5 bg-[#072a6b] text-white font-bold text-xs px-4 py-2.5 rounded-lg hover:bg-[#0B3D91] transition-colors"
              >
                <PhoneIcon /> 7349049883
              </a>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 min-w-0">
            {/* Results info bar */}
            <div className="flex items-center justify-between mb-5 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
              <p className="text-slate-600 text-sm">
                Showing{" "}
                <span className="font-bold text-[#0B3D91]">{filtered.length}</span>{" "}
                {activeCategory !== "All" ? (
                  <>results in <span className="font-semibold text-slate-700">{activeCategory}</span></>
                ) : (
                  "products"
                )}
                {search ? <> for &ldquo;<span className="font-semibold">{search}</span>&rdquo;</> : ""}
              </p>
              {(search || activeCategory !== "All") && (
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="text-xs text-[#0B3D91] font-semibold hover:underline flex items-center gap-1"
                >
                  ✕ Clear filters
                </button>
              )}
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">🔍</p>
                <h2 className="text-xl font-bold text-slate-700 mb-2">No results found</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Try a different search term, or{" "}
                  <button
                    onClick={() => { setSearch(""); setActiveCategory("All"); }}
                    className="text-[#0B3D91] font-semibold underline"
                  >
                    browse all products
                  </button>
                </p>
                <a
                  href="https://wa.me/917349049883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Request via WhatsApp
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <div key={product.id} id={`product-${product.id}`} className="product-card group">
                    {/* Image */}
                    <div className="relative overflow-hidden h-44">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="product-card-img"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {product.brand && (
                        <div className="absolute top-2 right-2">
                          <span className="badge-amber">{product.brand}</span>
                        </div>
                      )}
                      <div className="absolute top-2 left-2">
                        <span className="badge-navy">{product.category}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-[#0B3D91] text-sm leading-snug mb-2">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed flex-1">
                        {product.description}
                      </p>

                      {/* CTA */}
                      <Link
                        href={`/contact?product=${encodeURIComponent(product.name)}`}
                        id={`enquire-${product.id}`}
                        className="mt-4 flex items-center justify-center gap-2 btn-primary text-xs py-2.5 w-full text-center rounded-md"
                      >
                        <EnquireIcon />
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-12 bg-[#072a6b] rounded-2xl p-8 text-center">
              <h2 className="text-white text-2xl font-extrabold mb-2">
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="text-white/65 mb-6 max-w-lg mx-auto">
                We stock more than what&apos;s listed here. Call or WhatsApp us with your requirement and
                we&apos;ll check availability immediately.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+917349049883" id="products-call-btn" className="btn-primary">
                  <PhoneIcon /> 7349049883
                </a>
                <a
                  href="https://wa.me/917349049883"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="products-whatsapp-btn"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1db954] transition-colors"
                >
                  <WhatsAppIcon />
                  Send WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ── SIDEBAR CONTENT (shared between desktop & mobile) ──────────────────
function SidebarContent({
  activeCategory,
  onSelect,
}: {
  activeCategory: ProductCategory | "All";
  onSelect: (cat: ProductCategory | "All") => void;
}) {
  const allCount = products.length;

  return (
    <nav className="py-2">
      {/* All Products */}
      <button
        id="cat-tab-all"
        onClick={() => onSelect("All")}
        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold transition-all duration-150 group
          ${activeCategory === "All"
            ? "bg-[#072a6b] text-white"
            : "text-slate-700 hover:bg-slate-50 hover:text-[#0B3D91]"
          }`}
      >
        <span className="flex items-center gap-2.5">
          <span className="flex-shrink-0">{CAT_ICON_COMPONENTS["All"]}</span>
          All Products
        </span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full
          ${activeCategory === "All" ? "bg-[#F2A900] text-[#072a6b]" : "bg-slate-100 text-slate-500 group-hover:bg-[#e8f0fe] group-hover:text-[#0B3D91]"}`}>
          {allCount}
        </span>
      </button>

      {/* Divider */}
      <div className="mx-4 my-1 border-t border-slate-100" />

      {/* Category list */}
      {ALL_CATEGORIES.map((cat) => {
        const count = products.filter((p) => p.category === cat).length;
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            id={`cat-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => onSelect(cat)}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-all duration-150 group
              ${isActive
                ? "bg-[#072a6b] text-white font-semibold"
                : "text-slate-600 hover:bg-slate-50 hover:text-[#0B3D91] font-medium"
              }`}
          >
            <span className="flex items-center gap-2.5">
              <span className="flex-shrink-0">{CAT_ICON_COMPONENTS[cat] ?? <Cog size={15} strokeWidth={2} />}</span>
              <span className="text-left leading-tight">{cat}</span>
            </span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0
              ${isActive ? "bg-[#F2A900] text-[#072a6b]" : "bg-slate-100 text-slate-500 group-hover:bg-[#e8f0fe] group-hover:text-[#0B3D91]"}`}>
              {count}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

// ── ICONS ──────────────────────────────────────────────────────────────
function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  );
}

function EnquireIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
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

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}
