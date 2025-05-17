export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  featured?: boolean;
  condition: 'New' | 'Like New' | 'Good' | 'Used';
  soldBy: string;
  authenticity: 'Verified' | 'Pending' | 'Unknown';
}

const products: Product[] = [
  {
    id: "sp5der-hoodie-black",
    name: "Black Spider Hoodie",
    brand: "SP5DER",
    price: 399.99,
    originalPrice: 450,
    description: "Authentic SP5DER black hoodie with signature spider web design. Limited edition, highly sought after streetwear piece. This hoodie features premium heavyweight cotton, unique distressed details, and the iconic spider embroidery.", 
    images: [
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
      "https://images.pexels.com/photos/6311602/pexels-photo-6311602.jpeg"
    ],
    category: "Clothing",
    tags: ["hoodie", "sp5der", "streetwear", "designer", "limited edition"],
    inStock: true,
    featured: true,
    condition: "New",
    soldBy: "Cayden",
    authenticity: "Verified"
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Generation)",
    brand: "Apple",
    price: 219.99,
    originalPrice: 249.99,
    description: "Apple AirPods Pro 2nd Generation with active noise cancellation. Includes MagSafe Charging Case, sealed in original packaging. These feature improved sound quality, longer battery life, and enhanced noise cancellation compared to the previous generation.",
    images: [
      "https://images.pexels.com/photos/7034527/pexels-photo-7034527.jpeg",
      "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg"
    ],
    category: "Electronics",
    tags: ["airpods", "apple", "headphones", "tech", "wireless"],
    inStock: true,
    featured: true,
    condition: "New",
    soldBy: "Cayden",
    authenticity: "Verified"
  },
  {
    id: "sp5der-hoodie-white",
    name: "White Spider Hoodie",
    brand: "SP5DER",
    price: 419.99,
    originalPrice: 475,
    description: "Authentic SP5DER white hoodie with signature spider web design. Limited production run, highly collectible. Features heavyweight premium cotton construction with custom spider logo embroidery and web pattern detailing.",
    images: [
      "https://images.pexels.com/photos/5699103/pexels-photo-5699103.jpeg",
      "https://images.pexels.com/photos/5698999/pexels-photo-5698999.jpeg"
    ],
    category: "Clothing",
    tags: ["hoodie", "sp5der", "streetwear", "designer", "limited edition"],
    inStock: true,
    condition: "New",
    soldBy: "Cayden",
    authenticity: "Verified"
  },
  {
    id: "macbook-pro-m3",
    name: "MacBook Pro 14\" (M3 Pro)",
    brand: "Apple",
    price: 1899.99,
    originalPrice: 1999.99,
    description: "Apple MacBook Pro with M3 Pro chip, 14-inch display, 16GB RAM, and 512GB SSD. Factory sealed in original packaging with full Apple warranty. Features the revolutionary Apple Silicon technology for unmatched performance and efficiency.",
    images: [
      "https://images.pexels.com/photos/7974/pexels-photo.jpg",
      "https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg"
    ],
    category: "Electronics",
    tags: ["macbook", "apple", "laptop", "tech"],
    inStock: true,
    condition: "New",
    soldBy: "Cayden",
    authenticity: "Verified"
  },
  {
    id: "playstation-5",
    name: "PlayStation 5 Digital Edition",
    brand: "Sony",
    price: 449.99,
    originalPrice: 499.99,
    description: "Sony PlayStation 5 Digital Edition, brand new in box. Next-gen gaming with ultra-high-speed SSD, ray tracing, and 4K gaming support. Package includes console, DualSense controller, base, cables, and documentation.",
    images: [
      "https://images.pexels.com/photos/12903415/pexels-photo-12903415.jpeg",
      "https://images.pexels.com/photos/5622395/pexels-photo-5622395.jpeg"
    ],
    category: "Electronics",
    tags: ["playstation", "gaming", "console", "sony", "ps5"],
    inStock: false,
    condition: "New",
    soldBy: "Cayden",
    authenticity: "Verified"
  },
  {
    id: "jordan-4-bred",
    name: "Air Jordan 4 'Bred'",
    brand: "Nike",
    price: 379.99,
    originalPrice: 200,
    description: "Air Jordan 4 Retro 'Bred' 2019 release. One of the most iconic Jordan colorways ever released. Features black nubuck upper with cement grey and red accents. Includes original box and paper.",
    images: [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg",
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg"
    ],
    category: "Footwear",
    tags: ["jordan", "nike", "sneakers", "bred", "retro"],
    inStock: true,
    condition: "New",
    soldBy: "Cayden",
    authenticity: "Verified"
  },
  {
    id: "pokemon-booster-box",
    name: "Pokémon Scarlet & Violet Booster Box",
    brand: "Pokémon",
    price: 139.99,
    originalPrice: 144.99,
    description: "Sealed Pokémon Scarlet & Violet Booster Box containing 36 packs. Latest set with brand new Pokémon and exciting card mechanics. Factory sealed with protective outer wrapping.",
    images: [
      "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg",
      "https://images.pexels.com/photos/163036/pokemon-go-pokemon-pokemon-go-smartphone-163036.jpeg"
    ],
    category: "Collectibles",
    tags: ["pokemon", "cards", "booster", "tcg", "collectibles"],
    inStock: true,
    condition: "New",
    soldBy: "Cayden",
    authenticity: "Verified"
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1199.99,
    originalPrice: 1299.99,
    description: "Apple iPhone 15 Pro Max, 256GB, Titanium finish. Unopened in original packaging with full warranty. Features the powerful A17 Pro chip, ProMotion display, and advanced camera system.",
    images: [
      "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
    ],
    category: "Electronics",
    tags: ["iphone", "apple", "smartphone", "tech"],
    inStock: true,
    featured: true,
    condition: "New",
    soldBy: "Cayden",
    authenticity: "Verified"
  }
];

export default products;