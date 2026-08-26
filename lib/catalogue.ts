export type Product = {
  id: string;
  name: string;
  quantity: number;
  description: string;
  price: number;
  mrp: number;
  discountLabel: string;
  currency: "INR";
  availability: "unknown" | "available" | "unavailable";
};

export const products: Product[] = [
  {
    id: "6",
    name: "MR. EGGZ - 6 White Eggs (Mini Pack)",
    quantity: 6,
    description: "A compact 6-egg pack for everyday orders.",
    price: 65,
    mrp: 90,
    discountLabel: "27% OFF",
    currency: "INR",
    availability: "available",
  },
  {
    id: "10",
    name: "MR. EGGZ - 10 White Eggs (Smart Pack)",
    quantity: 10,
    description: "An everyday 10-egg pack for families and fitness-focused buyers.",
    price: 100,
    mrp: 140,
    discountLabel: "29% OFF",
    currency: "INR",
    availability: "available",
  },
  {
    id: "30",
    name: "MR. EGGZ - 30 White Eggs (Family Pack)",
    quantity: 30,
    description: "A family-size 30-egg stock-up pack.",
    price: 275,
    mrp: 365,
    discountLabel: "25% OFF",
    currency: "INR",
    availability: "available",
  },
];

export const businessConfig = {
  brand: "Mr. Eggz",
  location: "Uttari Village, Kanpur",
  whatsapp: null as string | null,
  phone: null as string | null,
  email: null as string | null,
  delivery: { zones: null as string[] | null, fee: null as number | null, eta: null as string | null },
  payment: { enabled: false, methods: [] as string[] },
};

export function getProduct(id: string) {
  return products.find((product) => product.id === id) ?? null;
}
