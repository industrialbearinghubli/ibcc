const fs = require('fs');

const allFiles = fs.readdirSync('public/images/real image');

const skipFiles = ["NBC-Deep-Groove-Ball-Bearing.webp"]; // user requested removal

const fileToCategoryMap = {
  "BEARING SLEEVE.jpeg": "Bearings",
  "Ball Bearings.webp": "Bearings",
  "nidel bearins.jpg": "Bearings",
  "pillow-block-bearing.jpg": "Bearings",
  "skf-bearings-solutions.jpg": "Bearings",
  "tapper-roller.webp": "Bearings",
  "Thrust-Roller-Bearing.jpg": "Bearings",

  "ECODRIVE belt.webp": "V-Belts",
  "PIX belt.jpeg": "V-Belts",
  "POLY F FENNER V BELTS.jpg": "V-Belts",

  "Industrial-V-Belt-Pulley.jpg": "V-Pulley",
  "TAPER LOCK PULLEY.jpg": "V-Pulley",
  "V-belt-Pulley.jpeg": "V-Pulley",
  "tapper lock pulley.jpg": "V-Pulley",

  "CHAINS SPROCKETS .jpeg": "Chains & Sprockets",
  "roller-chain-sprocket.jpg": "Chains & Sprockets",
  "Roller chain  simplex duplex and triplex.jpeg": "Chains & Sprockets",

  "BLOCKS.webp": "Chain Pulley Block",
  "CHAIN BLOCK.jpg": "Chain Pulley Block",
  "MASTA BLOCKS.jpg": "Chain Pulley Block",
  "indef-chain-pulley-block.jpeg": "Chain Pulley Block",
  "indef-chain-pully-blocks-500x500.webp": "Chain Pulley Block",
  "Electric Hoist.jpg": "Chain Pulley Block",

  "V- type Conveyor-Belt.webp": "Conveyor Belts",
  "conveyer belt.jpg": "Conveyor Belts",
  "lagging sheet converyer belt.webp": "Conveyor Belts",

  "Fenner Reduction Gear Boxes All Models.webp": "Gearboxes",
  "Fenner Gear Box.jpg": "Gearboxes",
  "Jiger Gearbox All Models.jpg": "Gearboxes",

  "LOVEJOY COUPLING.jpeg": "Oil Seals & Couplings",
  "OIL SEALS.jpg": "Oil Seals & Couplings",
  "PINBUSH COUPLING FENNER.png": "Oil Seals & Couplings",
  "nylon-gear-coupling.webp": "Oil Seals & Couplings",
  "star coupling.webp": "Oil Seals & Couplings",

  "Fastners.jpg": "Fasteners & Hardware",
  "PATTA BOLTS.jpg": "Fasteners & Hardware",
  "square nut bolt.jpeg": "Fasteners & Hardware",
  "welding-rod.jpeg": "Fasteners & Hardware",
  "grease.png": "Fasteners & Hardware",

  "D SHACKLES.jpg": "Material Handling",
  "TROLLEY WHEELS.webp": "Material Handling",
  "WIRE ROPE.webp": "Material Handling",
  "flat slings.png": "Material Handling",

  "Jaw-Crusher-Plate stone crushers.jpg": "Crusher Spares",
  "MS PERFORATED SHEETS stone crusher.jpg": "Crusher Spares",
  "impact-idlers stone crushers.jpg": "Crusher Spares",
  "rollers-and-idlers.jpg": "Crusher Spares",
  "stone-crusher-wire-mesh-1000x1000.jpg": "Crusher Spares",
  "Coil-Springs.webp": "Crusher Spares",
  "diaphragm.jpeg": "Crusher Spares",
  "return roller stone crusher.jpeg": "Crusher Spares",

  "Elevator-Buckets metal.jpg": "Rice Mill Spares",
  "plastic-elevator-buckets.webp": "Rice Mill Spares",
  "rice-mill-elevator-belt.jpeg": "Rice Mill Spares",
};

let newProducts = [];
let idCounter = 1;

for (const file of allFiles) {
  if (skipFiles.includes(file)) continue;

  const category = fileToCategoryMap[file] || "Fasteners & Hardware";
  let baseName = file.split('.')[0].replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
  const acronyms = ["SKF", "FAG", "NTN", "NBC", "ARB", "SMSR", "TBD", "MS", "IBCC"];
  
  const name = baseName.toLowerCase().split(' ').map(word => {
    const upper = word.toUpperCase();
    if (acronyms.includes(upper)) return upper;
    if (upper === 'AND') return 'and';
    if (upper === 'MIN') return 'Min';
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  newProducts.push({
    id: "prod-" + idCounter++,
    name: name,
    category: category,
    image: "/images/real image/" + file,
    description: `Premium quality ${name} for industrial applications.`,
  });
}

const productType = `export type ProductCategory =
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

export const products: Product[] = ${JSON.stringify(newProducts, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

fs.writeFileSync('src/data/products.ts', productType);
console.log("Updated products.ts with " + newProducts.length + " products");
