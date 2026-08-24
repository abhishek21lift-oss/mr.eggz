export type CartItem = { id: string; name: string; quantity: number };

export const CART_KEY = "mr-eggz-cart";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  if (typeof window !== "undefined") window.localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addToCart(item: CartItem) {
  const items = readCart();
  const existing = items.find((entry) => entry.id === item.id);
  if (existing) existing.quantity += item.quantity;
  else items.push(item);
  writeCart(items);
  return items;
}
