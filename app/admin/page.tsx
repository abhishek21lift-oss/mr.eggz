"use client";

import { useEffect, useMemo, useState } from "react";
import { readOrders, type Order } from "../../lib/order";

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => setOrders(readOrders()), []);

  const revenue = useMemo(() => orders.filter((o) => o.status !== "CANCELLED").reduce((sum, o) => sum + o.total, 0), [orders]);
  const active = orders.filter((o) => !["DELIVERED", "CANCELLED"].includes(o.status)).length;
  const delivered = orders.filter((o) => o.status === "DELIVERED").length;

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="border-b border-black/10 bg-[#f7f4ea] px-6 py-5 md:px-10"><div className="mx-auto flex max-w-7xl items-center justify-between"><div><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><p className="mt-1 text-xs font-bold uppercase tracking-[.2em] text-black/40">Admin operations</p></div><a href="/admin/orders" className="rounded-full bg-[#171713] px-5 py-3 text-sm font-black text-white">Open order desk</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Today at a glance</p>
        <h1 className="mt-2 text-5xl font-black md:text-6xl">Dashboard</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[["Total orders", orders.length], ["Active orders", active], ["Delivered", delivered], ["Order value", `₹${revenue.toFixed(2)}`]].map(([label,value]) => <div key={String(label)} className="rounded-[1.75rem] bg-white p-6 shadow-sm"><p className="text-sm font-bold text-black/45">{label}</p><p className="mt-3 text-4xl font-black">{value}</p></div>)}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href="/admin/orders" className="rounded-[2rem] bg-[#171713] p-7 text-white transition hover:-translate-y-1"><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9b65d]">Operations</p><h2 className="mt-3 text-2xl font-black">Manage orders</h2><p className="mt-2 text-sm text-white/55">Confirm, pack, dispatch, deliver or cancel orders.</p></a>
          <a href="/products" className="rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-1"><p className="text-xs font-black uppercase tracking-[.2em] text-[#8c6d21]">Catalogue</p><h2 className="mt-3 text-2xl font-black">View products</h2><p className="mt-2 text-sm text-black/50">Review the live customer catalogue and pricing.</p></a>
          <a href="/" className="rounded-[2rem] bg-[#dfe8cf] p-7 transition hover:-translate-y-1"><p className="text-xs font-black uppercase tracking-[.2em] text-[#456032]">Customer app</p><h2 className="mt-3 text-2xl font-black">Open storefront</h2><p className="mt-2 text-sm text-black/55">Test the complete customer shopping flow.</p></a>
        </div>
        <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-7"><div className="flex items-center justify-between"><div><h2 className="text-xl font-black">Recent orders</h2><p className="mt-1 text-sm text-black/45">Latest activity recorded by checkout.</p></div><a href="/admin/orders" className="text-sm font-black text-[#8c6d21]">View all →</a></div><div className="mt-5 space-y-3">{orders.slice(0,5).map((order) => <div key={order.id} className="flex flex-col justify-between gap-2 rounded-2xl bg-[#f7f4ea] p-4 sm:flex-row sm:items-center"><div><strong>{order.id}</strong><p className="text-xs text-black/45">{order.customer.name} · {order.items.length} line items</p></div><div className="flex items-center gap-4"><strong>₹{order.total.toFixed(2)}</strong><span className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase">{order.status.replaceAll("_"," ")}</span></div></div>)}{orders.length === 0 && <p className="py-6 text-center text-sm text-black/40">No orders yet.</p>}</div></div>
      </section>
    </main>
  );
}
