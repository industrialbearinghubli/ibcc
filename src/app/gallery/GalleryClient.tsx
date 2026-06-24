"use client";

import { useState } from "react";
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    id: "g-conveyor-belts",
    src: "/images/real image/V- type Conveyor-Belt.webp",
    title: "Conveyor Belts",
    desc: "EP-grade flat conveyor belts in large industrial rolls",
    category: "Conveyor Belts",
    icon: "📦",
  },
  {
    id: "g-bearings",
    src: "/images/real image/skf-bearings-solutions.jpg",
    title: "Industrial Bearings",
    desc: "SKF, FAG, NTN, NBC & ARB bearing collection",
    category: "Bearings",
    icon: "⚙️",
  },
  {
    id: "g-chains-sprockets",
    src: "/images/real image/roller-chain-sprocket.jpg",
    title: "Roller Chains & Sprockets",
    desc: "Rolon, Diamond & Hero roller chains with precision sprockets",
    category: "Chains",
    icon: "⛓️",
  },
  {
    id: "g-vbelts",
    src: "/images/real image/POLY F FENNER V BELTS.jpg",
    title: "V-Belts & Fenner Poly-F",
    desc: "A, B, C, D section belts and Fenner Poly-F raw-edge belts",
    category: "V-Belts",
    icon: "〰️",
  },
  {
    id: "g-vpulley",
    src: "/images/real image/V-belt-Pulley.jpeg",
    title: "V-Pulleys & Taper Lock",
    desc: "Cast iron V-groove pulleys in all standard sizes",
    category: "V-Pulleys",
    icon: "🔩",
  },
  {
    id: "g-pulley-block",
    src: "/images/real image/indef-chain-pully-blocks-500x500.webp",
    title: "Chain Pulley Blocks",
    desc: "Heavy-duty manual chain hoists, 1T to 5T capacity",
    category: "Chain Blocks",
    icon: "🏗️",
  },
  {
    id: "g-material-handling",
    src: "/images/real image/plastic-elevator-buckets.webp",
    title: "Material Handling",
    desc: "Plastic and metal elevator buckets, trolley wheels",
    category: "Material Handling",
    icon: "🚜",
  },
  {
    id: "g-crusher",
    src: "/images/real image/impact-idlers stone crushers.jpg",
    title: "Crusher Spare Parts",
    desc: "Jaw plates, toggle plates & bearing assemblies",
    category: "Crusher",
    icon: "🪨",
  },
  {
    id: "g-conveyor-accessories",
    src: "/images/real image/lagging sheet converyer belt.webp",
    title: "Conveyor Accessories",
    desc: "Lagging sheets and heavy-duty conveyor belt parts",
    category: "Conveyor Belts",
    icon: "📦",
  },
  {
    id: "g-wire-rope",
    src: "/images/real image/WIRE ROPE.webp",
    title: "Wire Rope & Slings",
    desc: "6×19 and 6×37 wire ropes, webbing slings for lifting",
    category: "Wire Rope",
    icon: "🪢",
  },
  {
    id: "g-oil-seals",
    src: "/images/real image/OIL SEALS.jpg",
    title: "Oil Seals & Couplings",
    desc: "NBR/Viton rotary oil seals, jaw couplings & O-rings",
    category: "Oil Seals",
    icon: "💧",
  },
  {
    id: "g-gearboxes",
    src: "/images/real image/Fenner Gear Box.jpg",
    title: "Gearboxes",
    desc: "Worm and helical gearboxes for industrial power transmission",
    category: "Gearboxes",
    icon: "🔧",
  },
];

export default function GalleryClient() {
  const [lightboxItem, setLightboxItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#072a6b] via-[#0B3D91] to-[#1a52b3] pt-12 pb-20">
        <div className="container-xl text-center">
          <p className="badge-amber mb-3">Visual Gallery</p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">Product Gallery</h1>
          <p className="text-white/65 max-w-2xl mx-auto text-lg">
            A visual showcase of the products we stock — from precision bearings to heavy industrial conveyor belts. Click any image to enlarge.
          </p>
        </div>
      </div>

      <div className="container-xl py-8 sm:py-12">
        {/* Gallery grid — modern CSS grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="gallery-item group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 aspect-square cursor-pointer"
              onClick={() => setLightboxItem(item)}
              role="button"
              aria-label={`View ${item.title}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLightboxItem(item)}
            >
              <div className="absolute inset-0 bg-white">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain p-3 sm:p-5 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Hover overlay icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 pointer-events-none">
                <div className="bg-[#F2A900] rounded-full w-10 h-10 flex items-center justify-center shadow-2xl">
                  <ZoomIcon />
                </div>
              </div>
              
              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-3 pb-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <p className="text-white font-extrabold text-xs sm:text-sm leading-tight drop-shadow-md truncate">{item.title}</p>
                <p className="text-white/80 text-[10px] sm:text-xs mt-0.5 drop-shadow-md line-clamp-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <p className="text-slate-500 mb-4">
                Want to see a product in action or need a customised quote?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/917349049883"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="gallery-whatsapp-cta"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1db954] transition-colors"
                >
                  <WhatsAppIcon />
                  Request More Photos
                </a>
                <a href="/contact" id="gallery-contact-cta" className="btn-navy">
                  Send Enquiry
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal
          aria-label={`Viewing ${lightboxItem.title}`}
        >
          <button
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightboxItem(null)}
            aria-label="Close lightbox"
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxItem.src}
              alt={lightboxItem.title}
              width={1200}
              height={900}
              className="lightbox-img"
              priority
            />
            <div className="text-center">
              <p className="text-white font-bold text-xl">{lightboxItem.title}</p>
              <p className="text-white/60 text-sm mt-1">{lightboxItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── ICONS ──────────────────────────────────────────────────────────────

function ZoomIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B3D91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
