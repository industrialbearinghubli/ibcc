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
    name: "BEARING SLEEVE",
    category: "Bearings",
    image: "/images/real image/BEARING SLEEVE.jpeg",
    description: "Premium quality BEARING SLEEVE for industrial applications."
  },
  {
    id: "prod-3",
    name: "BLOCKS",
    category: "Chain Pulley Block",
    image: "/images/real image/BLOCKS.webp",
    description: "Premium quality BLOCKS for industrial applications."
  },
  {
    id: "prod-4",
    name: "Bmh Electric Hoist",
    category: "Chain Pulley Block",
    image: "/images/real image/bmh-electric-hoist.jpg",
    description: "Premium quality Bmh Electric Hoist for industrial applications."
  },
  {
    id: "prod-5",
    name: "CHAIN BLOCK",
    category: "Chain Pulley Block",
    image: "/images/real image/CHAIN BLOCK.jpg",
    description: "Premium quality CHAIN BLOCK for industrial applications."
  },
  {
    id: "prod-6",
    name: "CHAINS SPROCKETS 1",
    category: "Chains & Sprockets",
    image: "/images/real image/CHAINS_SPROCKETS_1.jpg",
    description: "Premium quality CHAINS SPROCKETS 1 for industrial applications."
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
    name: "D SHACKLES",
    category: "Material Handling",
    image: "/images/real image/D SHACKLES.jpg",
    description: "Premium quality D SHACKLES for industrial applications."
  },
  {
    id: "prod-9",
    name: "ECODRIVE Belt",
    category: "V-Belts",
    image: "/images/real image/ECODRIVE belt.webp",
    description: "Premium quality ECODRIVE Belt for industrial applications."
  },
  {
    id: "prod-10",
    name: "Elevator Buckets Metal",
    category: "Material Handling",
    image: "/images/real image/Elevator-Buckets metal.jpg",
    description: "Premium quality Elevator Buckets Metal for industrial applications."
  },
  {
    id: "prod-11",
    name: "Fastners",
    category: "Fasteners & Hardware",
    image: "/images/real image/Fastners.jpg",
    description: "Premium quality Fastners for industrial applications."
  },
  {
    id: "prod-12",
    name: "Fenner Belts",
    category: "V-Belts",
    image: "/images/real image/Fenner-Belts.jpg",
    description: "Premium quality Fenner Belts for industrial applications."
  },
  {
    id: "prod-13",
    name: "Fenner Reduction Gear Boxes F 20260309142734701",
    category: "Gearboxes",
    image: "/images/real image/fenner-reduction-gear-boxes-f-20260309142734701.webp",
    description: "Premium quality Fenner Reduction Gear Boxes F 20260309142734701 for industrial applications."
  },
  {
    id: "prod-14",
    name: "Flat Slings",
    category: "Material Handling",
    image: "/images/real image/flat slings.png",
    description: "Premium quality Flat Slings for industrial applications."
  },
  {
    id: "prod-15",
    name: "Grease",
    category: "Fasteners & Hardware",
    image: "/images/real image/grease.png",
    description: "Premium quality Grease for industrial applications."
  },
  {
    id: "prod-16",
    name: "Impact Idlers Stone Crushers",
    category: "Crusher Spares",
    image: "/images/real image/impact-idlers stone crushers.jpg",
    description: "Premium quality Impact Idlers Stone Crushers for industrial applications."
  },
  {
    id: "prod-17",
    name: "Indef Chain Pulley Block",
    category: "Chain Pulley Block",
    image: "/images/real image/indef-chain-pulley-block.jpeg",
    description: "Premium quality Indef Chain Pulley Block for industrial applications."
  },
  {
    id: "prod-18",
    name: "Indef Chain Pully Blocks 500x500",
    category: "Chain Pulley Block",
    image: "/images/real image/indef-chain-pully-blocks-500x500.webp",
    description: "Premium quality Indef Chain Pully Blocks 500x500 for industrial applications."
  },
  {
    id: "prod-19",
    name: "Industrial V Belt Pulley",
    category: "V-Pulley",
    image: "/images/real image/Industrial-V-Belt-Pulley.jpg",
    description: "Premium quality Industrial V Belt Pulley for industrial applications."
  },
  {
    id: "prod-20",
    name: "Jaw Crusher Plate Stone Crushers",
    category: "Crusher Spares",
    image: "/images/real image/Jaw-Crusher-Plate stone crushers.jpg",
    description: "Premium quality Jaw Crusher Plate Stone Crushers for industrial applications."
  },
  {
    id: "prod-21",
    name: "JIGER GEAR BOXES",
    category: "Gearboxes",
    image: "/images/real image/JIGER GEAR BOXES.webp",
    description: "Premium quality JIGER GEAR BOXES for industrial applications."
  },
  {
    id: "prod-22",
    name: "Jiger Gearbox",
    category: "Gearboxes",
    image: "/images/real image/jiger gearbox.jpg",
    description: "Premium quality Jiger Gearbox for industrial applications."
  },
  {
    id: "prod-23",
    name: "Lagging Sheet Converyer Belt",
    category: "Conveyor Belts",
    image: "/images/real image/lagging sheet converyer belt.webp",
    description: "Premium quality Lagging Sheet Converyer Belt for industrial applications."
  },
  {
    id: "prod-24",
    name: "LOVEJOY COUPLING2",
    category: "Oil Seals & Couplings",
    image: "/images/real image/LOVEJOY COUPLING2.jpeg",
    description: "Premium quality LOVEJOY COUPLING2 for industrial applications."
  },
  {
    id: "prod-25",
    name: "MASTA BLOCKS",
    category: "Chain Pulley Block",
    image: "/images/real image/MASTA BLOCKS.jpg",
    description: "Premium quality MASTA BLOCKS for industrial applications."
  },
  {
    id: "prod-26",
    name: "MS PERFORATED SHEETS Stone Crusher",
    category: "Crusher Spares",
    image: "/images/real image/MS PERFORATED SHEETS stone crusher.jpg",
    description: "Premium quality MS PERFORATED SHEETS Stone Crusher for industrial applications."
  },
  {
    id: "prod-27",
    name: "Nidel Bearins",
    category: "Bearings",
    image: "/images/real image/nidel bearins.jpg",
    description: "Premium quality Nidel Bearins for industrial applications."
  },
  {
    id: "prod-28",
    name: "Nylon Gear Coupling",
    category: "Oil Seals & Couplings",
    image: "/images/real image/nylon-gear-coupling.webp",
    description: "Premium quality Nylon Gear Coupling for industrial applications."
  },
  {
    id: "prod-29",
    name: "OIL SEALS",
    category: "Oil Seals & Couplings",
    image: "/images/real image/OIL SEALS.jpg",
    description: "Premium quality OIL SEALS for industrial applications."
  },
  {
    id: "prod-30",
    name: "PATTA BOLTS",
    category: "Fasteners & Hardware",
    image: "/images/real image/PATTA BOLTS.jpg",
    description: "Premium quality PATTA BOLTS for industrial applications."
  },
  {
    id: "prod-31",
    name: "Pillow Block Bearing",
    category: "Bearings",
    image: "/images/real image/pillow-block-bearing.jpg",
    description: "Premium quality Pillow Block Bearing for industrial applications."
  },
  {
    id: "prod-32",
    name: "PINBUSH COUPLING FENNER",
    category: "Oil Seals & Couplings",
    image: "/images/real image/PINBUSH COUPLING FENNER.png",
    description: "Premium quality PINBUSH COUPLING FENNER for industrial applications."
  },
  {
    id: "prod-33",
    name: "PIX Belt",
    category: "V-Belts",
    image: "/images/real image/PIX belt.jpeg",
    description: "Premium quality PIX Belt for industrial applications."
  },
  {
    id: "prod-34",
    name: "Plastic Elevator Buckets",
    category: "Material Handling",
    image: "/images/real image/plastic-elevator-buckets.webp",
    description: "Premium quality Plastic Elevator Buckets for industrial applications."
  },
  {
    id: "prod-35",
    name: "POLY F FENNER V BELTS",
    category: "V-Belts",
    image: "/images/real image/POLY F FENNER V BELTS.jpg",
    description: "Premium quality POLY F FENNER V BELTS for industrial applications."
  },
  {
    id: "prod-36",
    name: "Roller Chain Sprocket",
    category: "Chains & Sprockets",
    image: "/images/real image/roller-chain-sprocket.jpg",
    description: "Premium quality Roller Chain Sprocket for industrial applications."
  },
  {
    id: "prod-37",
    name: "Rollers And Idlers",
    category: "Crusher Spares",
    image: "/images/real image/rollers-and-idlers.jpg",
    description: "Premium quality Rollers And Idlers for industrial applications."
  },
  {
    id: "prod-38",
    name: "Skf Bearings Solutions",
    category: "Bearings",
    image: "/images/real image/skf-bearings-solutions.jpg",
    description: "Premium quality Skf Bearings Solutions for industrial applications."
  },
  {
    id: "prod-39",
    name: "SMSR TBD Gearbox",
    category: "Gearboxes",
    image: "/images/real image/SMSR-TBD-Gearbox.jpg",
    description: "Premium quality SMSR TBD Gearbox for industrial applications."
  },
  {
    id: "prod-40",
    name: "SPROCKETS 2",
    category: "Chains & Sprockets",
    image: "/images/real image/SPROCKETS 2.jpeg",
    description: "Premium quality SPROCKETS 2 for industrial applications."
  },
  {
    id: "prod-41",
    name: "Sprockets1 Min",
    category: "Chains & Sprockets",
    image: "/images/real image/sprockets1-min.jpg",
    description: "Premium quality Sprockets1 Min for industrial applications."
  },
  {
    id: "prod-42",
    name: "Square Nut Bolt",
    category: "Fasteners & Hardware",
    image: "/images/real image/square nut bolt.jpeg",
    description: "Premium quality Square Nut Bolt for industrial applications."
  },
  {
    id: "prod-43",
    name: "Star Coupling",
    category: "Oil Seals & Couplings",
    image: "/images/real image/star coupling.webp",
    description: "Premium quality Star Coupling for industrial applications."
  },
  {
    id: "prod-44",
    name: "Stone Crusher Wire Mesh 1000x1000",
    category: "Crusher Spares",
    image: "/images/real image/stone-crusher-wire-mesh-1000x1000.jpg",
    description: "Premium quality Stone Crusher Wire Mesh 1000x1000 for industrial applications."
  },
  {
    id: "prod-45",
    name: "TAPER LOCK PULLEY",
    category: "V-Pulley",
    image: "/images/real image/TAPER LOCK PULLEY.jpg",
    description: "Premium quality TAPER LOCK PULLEY for industrial applications."
  },
  {
    id: "prod-46",
    name: "Tapper Lock Pulley",
    category: "V-Pulley",
    image: "/images/real image/tapper lock pulley.jpg",
    description: "Premium quality Tapper Lock Pulley for industrial applications."
  },
  {
    id: "prod-47",
    name: "Tapper Roller",
    category: "Bearings",
    image: "/images/real image/tapper-roller.webp",
    description: "Premium quality Tapper Roller for industrial applications."
  },
  {
    id: "prod-48",
    name: "Thrust Roller Bearing",
    category: "Bearings",
    image: "/images/real image/Thrust-Roller-Bearing.jpg",
    description: "Premium quality Thrust Roller Bearing for industrial applications."
  },
  {
    id: "prod-49",
    name: "TROLLEY WHEELS 2",
    category: "Material Handling",
    image: "/images/real image/TROLLEY WHEELS 2.webp",
    description: "Premium quality TROLLEY WHEELS 2 for industrial applications."
  },
  {
    id: "prod-50",
    name: "TROLLEY WHEELS",
    category: "Material Handling",
    image: "/images/real image/TROLLEY WHEELS.webp",
    description: "Premium quality TROLLEY WHEELS for industrial applications."
  },
  {
    id: "prod-51",
    name: "V  Type Conveyor Belt",
    category: "Conveyor Belts",
    image: "/images/real image/V- type Conveyor-Belt.webp",
    description: "Premium quality V  Type Conveyor Belt for industrial applications."
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
    name: "WIRE ROPE 1",
    category: "Material Handling",
    image: "/images/real image/WIRE ROPE 1.webp",
    description: "Premium quality WIRE ROPE 1 for industrial applications."
  }
];
