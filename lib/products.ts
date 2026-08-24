export type Product = {
  id: string;
  slug: string;
  name: string;
  count: number;
  description: string;
};

export const products: Product[] = [
  { id: "6", slug: "6-egg-pack", name: "6 Egg Pack", count: 6, description: "A compact pack for quick, everyday orders." },
  { id: "10", slug: "10-egg-pack", name: "10 Egg Pack", count: 10, description: "The everyday family and fitness pack." },
  { id: "30", slug: "30-egg-pack", name: "30 Egg Pack", count: 30, description: "A stock-up pack for regular egg buyers." },
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}
