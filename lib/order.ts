import type { CartItem } from "./cart";

export type CustomerDetails = {
  name: string;
  phone: string;
  address: string;
  city: string;
  pin: string;
};

export type OrderDraft = {
  id: string;
  status: "draft";
  items: CartItem[];
  customer: CustomerDetails;
  total: null;
  createdAt: string;
};

export function createOrderDraft(items: CartItem[], customer: CustomerDetails): OrderDraft {
  return {
    id: `draft_${Date.now()}`,
    status: "draft",
    items,
    customer,
    total: null,
    createdAt: new Date().toISOString(),
  };
}
