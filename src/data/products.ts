export type ProductCategory =
  | "Bearings"
  | "V-Belts"
  | "V-Pulley"
  | "Chains & Sprockets"
  | "Chain Pulley Block"
  | "Conveyor Belts"
  | "Gearboxes"
  | "Oil Seals & Couplings"
  | "Fasteners & Hardware"
  | "Material Handling"
  | "Rice Mill Spares"
  | "Crusher Spares";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  description: string;
  brand?: string;
};

export const ALL_CATEGORIES: ProductCategory[] = [
  "Bearings",
  "V-Belts",
  "V-Pulley",
  "Chains & Sprockets",
  "Chain Pulley Block",
  "Conveyor Belts",
  "Gearboxes",
  "Oil Seals & Couplings",
  "Fasteners & Hardware",
  "Material Handling",
  "Rice Mill Spares",
  "Crusher Spares",
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Ball Bearings",
    category: "Bearings",
    image: "/images/real image/Ball Bearings.webp",
    description: "Premium quality Ball Bearings for industrial applications."
  },
  {
    id: "prod-2",
    name: "Bearing Sleeve",
    category: "Bearings",
    image: "/images/real image/BEARING SLEEVE.jpeg",
    description: "Premium quality Bearing Sleeve for industrial applications."
  },
  {
    id: "prod-3",
    name: "Blocks",
    category: "Chain Pulley Block",
    image: "/images/real image/BLOCKS.webp",
    description: "Premium quality Blocks for industrial applications."
  },
  {
    id: "prod-4",
    name: "Chain Block",
    category: "Chain Pulley Block",
    image: "/images/real image/CHAIN BLOCK.jpg",
    description: "Premium quality Chain Block for industrial applications."
  },
  {
    id: "prod-5",
    name: "Chains Sprockets",
    category: "Chains & Sprockets",
    image: "/images/real image/CHAINS SPROCKETS .jpeg",
    description: "Premium quality Chains Sprockets for industrial applications."
  },
  {
    id: "prod-6",
    name: "Coil Springs",
    category: "Crusher Spares",
    image: "/images/real image/Coil-Springs.webp",
    description: "Premium quality Coil Springs for industrial applications."
  },
  {
    id: "prod-7",
    name: "Conveyer Belt",
    category: "Conveyor Belts",
    image: "/images/real image/conveyer belt.jpg",
    description: "Premium quality Conveyer Belt for industrial applications."
  },
  {
    id: "prod-8",
    name: "D Shackles",
    category: "Material Handling",
    image: "/images/real image/D SHACKLES.jpg",
    description: "Premium quality D Shackles for industrial applications."
  },
  {
    id: "prod-9",
    name: "Diaphragm",
    category: "Crusher Spares",
    image: "/images/real image/diaphragm.jpeg",
    description: "Premium quality Diaphragm for industrial applications."
  },
  {
    id: "prod-10",
    name: "Ecodrive Belt",
    category: "V-Belts",
    image: "/images/real image/ECODRIVE belt.webp",
    description: "Premium quality Ecodrive Belt for industrial applications."
  },
  {
    id: "prod-11",
    name: "Electric Hoist",
    category: "Chain Pulley Block",
    image: "/images/real image/Electric Hoist.jpg",
    description: "Premium quality Electric Hoist for industrial applications."
  },
  {
    id: "prod-12",
    name: "Elevator Buckets Metal",
    category: "Rice Mill Spares",
    image: "/images/real image/Elevator-Buckets metal.jpg",
    description: "Premium quality Elevator Buckets Metal for industrial applications."
  },
  {
    id: "prod-13",
    name: "Fastners",
    category: "Fasteners & Hardware",
    image: "/images/real image/Fastners.jpg",
    description: "Premium quality Fastners for industrial applications."
  },
  {
    id: "prod-14",
    name: "Fenner Gear Box",
    category: "Gearboxes",
    image: "/images/real image/Fenner Gear Box.jpg",
    description: "Premium quality Fenner Gear Box for industrial applications."
  },
  {
    id: "prod-15",
    name: "Fenner Reduction Gear Boxes All Models",
    category: "Gearboxes",
    image: "/images/real image/Fenner Reduction Gear Boxes All Models.webp",
    description: "Premium quality Fenner Reduction Gear Boxes All Models for industrial applications."
  },
  {
    id: "prod-16",
    name: "Flat Slings",
    category: "Material Handling",
    image: "/images/real image/flat slings.png",
    description: "Premium quality Flat Slings for industrial applications."
  },
  {
    id: "prod-17",
    name: "Grease",
    category: "Fasteners & Hardware",
    image: "/images/real image/grease.png",
    description: "Premium quality Grease for industrial applications."
  },
  {
    id: "prod-18",
    name: "Impact Idlers Stone Crushers",
    category: "Crusher Spares",
    image: "/images/real image/impact-idlers stone crushers.jpg",
    description: "Premium quality Impact Idlers Stone Crushers for industrial applications."
  },
  {
    id: "prod-19",
    name: "Indef Chain Pulley Block",
    category: "Chain Pulley Block",
    image: "/images/real image/indef-chain-pulley-block.jpeg",
    description: "Premium quality Indef Chain Pulley Block for industrial applications."
  },
  {
    id: "prod-20",
    name: "Indef Chain Pully Blocks 500x500",
    category: "Chain Pulley Block",
    image: "/images/real image/indef-chain-pully-blocks-500x500.webp",
    description: "Premium quality Indef Chain Pully Blocks 500x500 for industrial applications."
  },
  {
    id: "prod-21",
    name: "Industrial V Belt Pulley",
    category: "V-Pulley",
    image: "/images/real image/Industrial-V-Belt-Pulley.jpg",
    description: "Premium quality Industrial V Belt Pulley for industrial applications."
  },
  {
    id: "prod-22",
    name: "Jaw Crusher Plate Stone Crushers",
    category: "Crusher Spares",
    image: "/images/real image/Jaw-Crusher-Plate stone crushers.jpg",
    description: "Premium quality Jaw Crusher Plate Stone Crushers for industrial applications."
  },
  {
    id: "prod-23",
    name: "Jiger Gearbox All Models",
    category: "Gearboxes",
    image: "/images/real image/Jiger Gearbox All Models.jpg",
    description: "Premium quality Jiger Gearbox All Models for industrial applications."
  },
  {
    id: "prod-24",
    name: "Lagging Sheet Converyer Belt",
    category: "Conveyor Belts",
    image: "/images/real image/lagging sheet converyer belt.webp",
    description: "Premium quality Lagging Sheet Converyer Belt for industrial applications."
  },
  {
    id: "prod-25",
    name: "Lovejoy Coupling",
    category: "Oil Seals & Couplings",
    image: "/images/real image/LOVEJOY COUPLING.jpeg",
    description: "Premium quality Lovejoy Coupling for industrial applications."
  },
  {
    id: "prod-26",
    name: "Masta Blocks",
    category: "Chain Pulley Block",
    image: "/images/real image/MASTA BLOCKS.jpg",
    description: "Premium quality Masta Blocks for industrial applications."
  },
  {
    id: "prod-27",
    name: "MS Perforated Sheets Stone Crusher",
    category: "Crusher Spares",
    image: "/images/real image/MS PERFORATED SHEETS stone crusher.jpg",
    description: "Premium quality MS Perforated Sheets Stone Crusher for industrial applications."
  },
  {
    id: "prod-28",
    name: "Nidel Bearins",
    category: "Bearings",
    image: "/images/real image/nidel bearins.jpg",
    description: "Premium quality Nidel Bearins for industrial applications."
  },
  {
    id: "prod-29",
    name: "Nylon Gear Coupling",
    category: "Oil Seals & Couplings",
    image: "/images/real image/nylon-gear-coupling.webp",
    description: "Premium quality Nylon Gear Coupling for industrial applications."
  },
  {
    id: "prod-30",
    name: "Oil Seals",
    category: "Oil Seals & Couplings",
    image: "/images/real image/OIL SEALS.jpg",
    description: "Premium quality Oil Seals for industrial applications."
  },
  {
    id: "prod-31",
    name: "Patta Bolts",
    category: "Fasteners & Hardware",
    image: "/images/real image/PATTA BOLTS.jpg",
    description: "Premium quality Patta Bolts for industrial applications."
  },
  {
    id: "prod-32",
    name: "Pillow Block Bearing",
    category: "Bearings",
    image: "/images/real image/pillow-block-bearing.jpg",
    description: "Premium quality Pillow Block Bearing for industrial applications."
  },
  {
    id: "prod-33",
    name: "Pinbush Coupling Fenner",
    category: "Oil Seals & Couplings",
    image: "/images/real image/PINBUSH COUPLING FENNER.png",
    description: "Premium quality Pinbush Coupling Fenner for industrial applications."
  },
  {
    id: "prod-34",
    name: "Pix Belt",
    category: "V-Belts",
    image: "/images/real image/PIX belt.jpeg",
    description: "Premium quality Pix Belt for industrial applications."
  },
  {
    id: "prod-35",
    name: "Plastic Elevator Buckets",
    category: "Rice Mill Spares",
    image: "/images/real image/plastic-elevator-buckets.webp",
    description: "Premium quality Plastic Elevator Buckets for industrial applications."
  },
  {
    id: "prod-36",
    name: "Poly F Fenner V Belts",
    category: "V-Belts",
    image: "/images/real image/POLY F FENNER V BELTS.jpg",
    description: "Premium quality Poly F Fenner V Belts for industrial applications."
  },
  {
    id: "prod-37",
    name: "Return Roller Stone Crusher",
    category: "Crusher Spares",
    image: "/images/real image/return roller stone crusher.jpeg",
    description: "Premium quality Return Roller Stone Crusher for industrial applications."
  },
  {
    id: "prod-38",
    name: "Rice Mill Elevator Belt",
    category: "Rice Mill Spares",
    image: "/images/real image/rice-mill-elevator-belt.jpeg",
    description: "Premium quality Rice Mill Elevator Belt for industrial applications."
  },
  {
    id: "prod-39",
    name: "Roller Chain Simplex Duplex and Triplex",
    category: "Chains & Sprockets",
    image: "/images/real image/Roller chain  simplex duplex and triplex.jpeg",
    description: "Premium quality Roller Chain Simplex Duplex and Triplex for industrial applications."
  },
  {
    id: "prod-40",
    name: "Roller Chain Sprocket",
    category: "Chains & Sprockets",
    image: "/images/real image/roller-chain-sprocket.jpg",
    description: "Premium quality Roller Chain Sprocket for industrial applications."
  },
  {
    id: "prod-41",
    name: "Rollers and Idlers",
    category: "Crusher Spares",
    image: "/images/real image/rollers-and-idlers.jpg",
    description: "Premium quality Rollers and Idlers for industrial applications."
  },
  {
    id: "prod-42",
    name: "SKF Bearings Solutions",
    category: "Bearings",
    image: "/images/real image/skf-bearings-solutions.jpg",
    description: "Premium quality SKF Bearings Solutions for industrial applications."
  },
  {
    id: "prod-43",
    name: "Square Nut Bolt",
    category: "Fasteners & Hardware",
    image: "/images/real image/square nut bolt.jpeg",
    description: "Premium quality Square Nut Bolt for industrial applications."
  },
  {
    id: "prod-44",
    name: "Star Coupling",
    category: "Oil Seals & Couplings",
    image: "/images/real image/star coupling.webp",
    description: "Premium quality Star Coupling for industrial applications."
  },
  {
    id: "prod-45",
    name: "Stone Crusher Wire Mesh 1000x1000",
    category: "Crusher Spares",
    image: "/images/real image/stone-crusher-wire-mesh-1000x1000.jpg",
    description: "Premium quality Stone Crusher Wire Mesh 1000x1000 for industrial applications."
  },
  {
    id: "prod-46",
    name: "Taper Lock Pulley",
    category: "V-Pulley",
    image: "/images/real image/TAPER LOCK PULLEY.jpg",
    description: "Premium quality Taper Lock Pulley for industrial applications."
  },
  {
    id: "prod-47",
    name: "Tapper Lock Pulley",
    category: "V-Pulley",
    image: "/images/real image/tapper lock pulley.jpg",
    description: "Premium quality Tapper Lock Pulley for industrial applications."
  },
  {
    id: "prod-48",
    name: "Tapper Roller",
    category: "Bearings",
    image: "/images/real image/tapper-roller.webp",
    description: "Premium quality Tapper Roller for industrial applications."
  },
  {
    id: "prod-49",
    name: "Thrust Roller Bearing",
    category: "Bearings",
    image: "/images/real image/Thrust-Roller-Bearing.jpg",
    description: "Premium quality Thrust Roller Bearing for industrial applications."
  },
  {
    id: "prod-50",
    name: "Trolley Wheels",
    category: "Material Handling",
    image: "/images/real image/TROLLEY WHEELS.webp",
    description: "Premium quality Trolley Wheels for industrial applications."
  },
  {
    id: "prod-51",
    name: "V Type Conveyor Belt",
    category: "Conveyor Belts",
    image: "/images/real image/V- type Conveyor-Belt.webp",
    description: "Premium quality V Type Conveyor Belt for industrial applications."
  },
  {
    id: "prod-52",
    name: "V Belt Pulley",
    category: "V-Pulley",
    image: "/images/real image/V-belt-Pulley.jpeg",
    description: "Premium quality V Belt Pulley for industrial applications."
  },
  {
    id: "prod-53",
    name: "Welding Rod",
    category: "Fasteners & Hardware",
    image: "/images/real image/welding-rod.jpeg",
    description: "Premium quality Welding Rod for industrial applications."
  },
  {
    id: "prod-54",
    name: "Wire Rope",
    category: "Material Handling",
    image: "/images/real image/WIRE ROPE.webp",
    description: "Premium quality Wire Rope for industrial applications."
  }
];
