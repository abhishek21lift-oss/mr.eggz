import type { CartItem } from "./cart";
import { products } from "./catalogue";

export type CustomerDetails = {
  name: string;
  phone: string;
  address: string;
  city: string;
  pin: string;
};

export type OrderStatus = "PLACED" | "CONFIRMED" | "PACKING" | "OUT_FOR_DELIVERY" | "DELIVERED" | "CANCELLED";

export type DeliveryLocation = {
  latitude: number;
  longitude: number;
  source: "GPS" | "MANUAL";
};

export type Order = {
  id: string;
  status: OrderStatus;
  items: Array<CartItem & { unitPrice: number }>;
  customer: CustomerDetails;
  location: DeliveryLocation;
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type OrderDraft = Order;

export const ORDERS_KEY = "mr-eggz-orders";

export function createOrderDraft(
  items: CartItem[],
  customer: CustomerDetails,
  location: DeliveryLocation,
  deliveryFee = 0,
): Order {
  const pricedItems = items.map((item) => ({
    ...item,
    unitPrice: products.find((product) => product.id === item.id)?.price ?? 0,
  }));
  const subtotal = pricedItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const now = new Date().toISOString();
  return {
    id: `ME-${Date.now().toString(36).toUpperCase()}`,
    status: "PLACED",
    items: pricedItems,
    customer,
    location,
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
    createdAt: now,
    updatedAt: now,
  };
}

export function readOrders(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ORDERS_KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}

export function writeOrders(orders: Order[]) {
  if (typeof window !== "undefined") window.localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function saveOrder(order: Order) {
  const orders = [order, ...readOrders().filter((item) => item.id !== order.id)];
  writeOrders(orders);
  return order;
}

export function updateOrderStatus(id: string, status: OrderStatus) {
  const orders = readOrders().map((order) =>
    order.id === id ? { ...order, status, updatedAt: new Date().toISOString() } : order,
  );
  writeOrders(orders);
  return orders.find((order) => order.id === id) ?? null;
}
