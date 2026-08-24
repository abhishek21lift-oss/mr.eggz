export type Product = {
  id: string;
  name: string;
  quantity: number;
  description: string;
  price: number | null;
  currency: "INR";
  availability: "unknown" | "available" | "unavailable";
};

export const products: Product[] = [
  { id: "6", name: "6 Egg Pack", quantity: 6, description: "A compact pack for everyday orders.", price: null, currency: "INR", availability: "unknown" },
  { id: "10", name: "10 Egg Pack", quantity: 10, description: "An everyday pack for families and fitness-focused buyers.", price: null, currency: "INR", availability: "unknown" },
  { id: "30", name: "30 Egg Pack", quantity: 30, description: "A stock-up pack for regular egg buyers and bulk needs.", price: null, currency: "INR", availability: "unknown" },
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
