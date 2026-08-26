"use client";

import { useEffect, useState } from "react";
import { readOrders, type Order } from "../../../lib/order";

const steps = ["PLACED", "CONFIRMED", "PACKING", "OUT_FOR_DELIVERY", "DELIVERED"] as const;

export default function OrderTrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const [order, setOrder] = useState<Order | null>(null);
  const [id, setId] = useState("");

  useEffect(() => {
    void params.then(({ id: orderId }) => {
      setId(orderId);
      setOrder(readOrders().find((item) => item.id === orderId) ?? null);
    });
  }, [params]);

  if (!order) {
    return <main className="grid min-h-screen place-items-center bg-[#f7f4ea] px-6"><div className="rounded-[2rem] bg-white p-10 text-center"><h1 className="text-3xl font-black">Order not found</h1><p className="mt-2 text-black/50">We could not find {id || "this order"} on this device.</p><a href="/" className="mt-6 inline-flex rounded-full bg-[#171713] px-6 py-3 font-bold text-white">Back home</a></div></main>;
  }

  const current = order.status === "CANCELLED" ? -1 : steps.indexOf(order.status as typeof steps[number]);

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="border-b border-black/10 px-6 py-5 md:px-10"><div className="mx-auto flex max-w-5xl items-center justify-between"><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><a href="/products" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Shop again</a></div></header>
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-20">
        <p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Live order tracking</p>
        <h1 className="mt-3 text-5xl font-black md:text-6xl">{order.id}</h1>
        <div className="mt-8 rounded-[2rem] bg-[#171713] p-7 text-white md:p-10">
          {order.status === "CANCELLED" ? <div><p className="text-xs font-black uppercase tracking-[.2em] text-red-300">Cancelled</p><h2 className="mt-3 text-3xl font-black">This order was cancelled.</h2></div> : <div className="space-y-6">{steps.map((step, index) => <div key={step} className="flex gap-4"><div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${index <= current ? "bg-[#d9b65d] text-[#171713]" : "bg-white/10 text-white/40"}`}>{index < current ? "✓" : index + 1}</div><div><p className={`font-black ${index <= current ? "text-white" : "text-white/35"}`}>{step.replaceAll("_", " ")}</p><p className="mt-1 text-xs text-white/35">{step === "PLACED" ? "Order received" : step === "CONFIRMED" ? "Order accepted by Mr. Eggz" : step === "PACKING" ? "Fresh eggs are being packed" : step === "OUT_FOR_DELIVERY" ? "Rider is on the way" : "Delivered to your door"}</p></div></div>)}</div>}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2"><div className="rounded-[2rem] bg-white p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-[#8c6d21]">Delivery</p><p className="mt-3 font-black">{order.customer.address}</p><p className="mt-1 text-sm text-black/50">{order.customer.city} · {order.customer.pin}</p><p className="mt-3 text-xs text-black/40">{order.location.latitude.toFixed(6)}, {order.location.longitude.toFixed(6)}</p></div><div className="rounded-[2rem] bg-white p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-[#8c6d21]">Payment summary</p><div className="mt-4 flex justify-between"><span>Subtotal</span><strong>₹{order.subtotal.toFixed(2)}</strong></div><div className="mt-2 flex justify-between"><span>Delivery</span><strong>{order.deliveryFee ? `₹${order.deliveryFee.toFixed(2)}` : "FREE"}</strong></div><div className="mt-4 border-t border-black/10 pt-4 flex justify-between text-lg"><span className="font-black">Total</span><strong>₹{order.total.toFixed(2)}</strong></div></div></div>
      </section>
    </main>
  );
}
