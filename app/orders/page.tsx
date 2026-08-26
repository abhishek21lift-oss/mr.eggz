"use client";

import { useEffect, useState } from "react";

type Order = { id: string; status: string; total: number | null; createdAt: string };

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("mrEggzOrders");
      if (raw) setOrders(JSON.parse(raw));
    } catch {}
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="border-b border-black/10 px-6 py-4 md:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between"><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><a href="/shop" className="rounded-full bg-[#171713] px-5 py-2 text-sm font-bold text-white">Shop</a></div></header>
      <section className="mx-auto max-w-4xl px-6 py-14 md:px-12 md:py-20">
        <p className="text-xs font-black uppercase tracking-[.25em] text-[#8c6d21]">My orders</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-.05em]">Your orders.</h1>
        <div className="mt-10 space-y-4">
          {orders.length === 0 ? <div className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-xl font-black">No orders yet.</h2><p className="mt-2 text-sm text-black/50">Your confirmed orders will appear here once order persistence is connected to the platform API.</p><a href="/products" className="mt-6 inline-flex rounded-full bg-[#171713] px-6 py-3 font-black text-white">Browse eggs</a></div> : orders.map((order) => <a key={order.id} href={`/order/${order.id}`} className="block rounded-[1.5rem] border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.15em] text-[#8c6d21]">{order.id}</p><h2 className="mt-2 font-black">{order.status}</h2></div><div className="text-right"><p className="font-black">{order.total == null ? "—" : `₹${order.total.toFixed(2)}`}</p><p className="mt-1 text-xs text-black/40">{new Date(order.createdAt).toLocaleString()}</p></div></div></a>)}
        </div>
      </section>
    </main>
  );
}
