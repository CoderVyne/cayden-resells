export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: "rev-001",
    productId: "sp5der-hoodie-black",
    author: "Alex Johnson",
    rating: 5,
    date: "2023-11-15",
    title: "Awesome quality and fast shipping!",
    comment: "The SP5DER hoodie is exactly as described. Amazing quality and the shipping was incredibly fast. Cayden was great with communication throughout the process. Will definitely buy from again!",
    verified: true,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: "rev-002",
    productId: "airpods-pro-2",
    author: "Samantha Lee",
    rating: 5,
    date: "2023-12-03",
    title: "Brand new and cheaper than retail",
    comment: "Received my AirPods Pro and they were brand new as promised. Saved about $30 compared to buying from Apple directly. Great seller communication and fast shipping.",
    verified: true,
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    id: "rev-003",
    productId: "sp5der-hoodie-black",
    author: "Marcus Williams",
    rating: 4,
    date: "2023-10-22",
    title: "Great hoodie, slightly delayed shipping",
    comment: "The hoodie is amazing quality and definitely authentic. Only giving 4 stars because shipping took a bit longer than expected, but Cayden kept me updated throughout the process.",
    verified: true,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  },
  {
    id: "rev-004",
    productId: "macbook-pro-m3",
    author: "Jordan Taylor",
    rating: 5,
    date: "2024-01-05",
    title: "Saved hundreds on a brand new MacBook!",
    comment: "Absolutely thrilled with my purchase! The MacBook was brand new as described, factory sealed with full warranty. Saved a significant amount compared to buying from Apple. Cayden was professional and shipping was super fast.",
    verified: true,
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
  },
  {
    id: "rev-005",
    productId: "playstation-5",
    author: "Chris Rodriguez",
    rating: 5,
    date: "2023-11-30",
    title: "Finally got a PS5 at a reasonable price",
    comment: "After months of trying to get a PS5 at retail, I found Cayden Resells. Price was fair considering the market, and the console was completely new. Great communication and fast delivery.",
    verified: true,
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
  },
  {
    id: "rev-006",
    productId: "jordan-4-bred",
    author: "Michael Chen",
    rating: 5,
    date: "2023-12-12",
    title: "100% authentic, great condition",
    comment: "The Jordan 4 Breds are definitely authentic. Cayden provided detailed pictures before shipping and even included a legit check receipt. Super happy with this purchase.",
    verified: true,
    avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg"
  },
  {
    id: "rev-007",
    productId: "iphone-15-pro-max",
    author: "Emma Davis",
    rating: 5,
    date: "2024-01-15",
    title: "Brand new iPhone, excellent service",
    comment: "Received my iPhone 15 Pro Max today and couldn't be happier! It was brand new as described and I saved $100 compared to Apple Store. Cayden was very responsive and shipping was super fast.",
    verified: true,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: "rev-008",
    productId: "sp5der-hoodie-white",
    author: "Tyler Brown",
    rating: 4,
    date: "2023-12-28",
    title: "Great hoodie, runs slightly small",
    comment: "The white SP5DER hoodie is 100% authentic and looks amazing. Just be aware that it runs slightly small. I normally wear L but should have gone with XL. Otherwise, great purchase and seller was very helpful.",
    verified: true,
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
  }
];

export default reviews;