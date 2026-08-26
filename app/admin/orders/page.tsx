"use client";

import { useEffect, useMemo, useState } from "react";
import { readOrders, updateOrderStatus, type Order, type OrderStatus } from "../../../lib/order";

const statuses: OrderStatus[] = ["PLACED", "CONFIRMED", "PACKING", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED"];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<"ALL" | OrderStatus>("ALL");
  const [selected, setSelected] = useState<Order | null>(null);

  const refresh = () => setOrders(readOrders());
  useEffect(() => { refresh(); }, []);

  const filtered = useMemo(
    () => filter === "ALL" ? orders : orders.filter((order) => order.status === filter),
    [orders, filter],
  );

  const changeStatus = (id: string, status: OrderStatus) => {
    updateOrderStatus(id, status);
    refresh();
    setSelected((current) => current?.id === id ? { ...current, status, updatedAt: new Date().toISOString() } : current);
  };

  const count = (status: OrderStatus) => orders.filter((order) => order.status === status).length;

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f7f4ea]/95 px-6 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><p className="mt-1 text-xs font-bold uppercase tracking-[.2em] text-black/40">Operations · Orders</p></div>
          <div className="flex gap-2"><a href="/products" className="rounded-full border border-black/10 px-4 py-2 text-sm font-bold">Shop</a><button onClick={refresh} className="rounded-full bg-[#171713] px-4 py-2 text-sm font-bold text-white">Refresh</button></div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Live order desk</p><h1 className="mt-2 text-5xl font-black md:text-6xl">Orders</h1></div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {(["PLACED","CONFIRMED","PACKING","OUT_FOR_DELIVERY","DELIVERED","CANCELLED"] as OrderStatus[]).map((status) => <button key={status} onClick={() => setFilter(status)} className={`rounded-2xl border px-3 py-3 text-left ${filter === status ? "border-[#8c6d21] bg-white" : "border-black/10 bg-white/50"}`}><span className="block text-lg font-black">{count(status)}</span><span className="text-[9px] font-bold uppercase tracking-wider text-black/45">{status.replaceAll("_", " ")}</span></button>)}
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1"><button onClick={() => setFilter("ALL")} className={`rounded-full px-5 py-2 text-sm font-black ${filter === "ALL" ? "bg-[#171713] text-white" : "bg-white border border-black/10"}`}>All ({orders.length})</button>{statuses.map((status) => <button key={status} onClick={() => setFilter(status)} className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-black ${filter === status ? "bg-[#171713] text-white" : "bg-white border border-black/10"}`}>{status.replaceAll("_", " ")}</button>)}</div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-[2rem] border border-dashed border-black/15 bg-white/60 p-14 text-center"><div className="text-5xl">🥚</div><h2 className="mt-4 text-2xl font-black">No orders here.</h2><p className="mt-2 text-black/50">Orders placed through checkout will appear on this operations desk.</p></div>
        ) : (
          <div className="mt-8 grid gap-4">
            {filtered.map((order) => (
              <button key={order.id} onClick={() => setSelected(order)} className="grid w-full gap-4 rounded-[1.75rem] border border-black/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:grid-cols-[1.1fr_.8fr_.7fr_.5fr] md:items-center">
                <div><p className="font-black">{order.id}</p><p className="mt-1 text-sm text-black/50">{order.customer.name} · {order.customer.phone}</p><p className="mt-1 text-xs text-black/35">{new Date(order.createdAt).toLocaleString()}</p></div>
                <div><p className="text-sm font-bold">{order.items.reduce((s, i) => s + i.quantity, 0)} packs</p><p className="mt-1 text-xs text-black/40">{order.items.map((i) => `${i.quantity}× ${i.name}`).join(", ")}</p></div>
                <div className="font-black">₹{order.total.toFixed(2)}</div>
                <span className="rounded-full bg-[#dfe8cf] px-3 py-2 text-center text-[10px] font-black uppercase tracking-wide text-[#456032]">{order.status.replaceAll("_", " ")}</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/40 p-4" onClick={() => setSelected(null)}>
          <aside onClick={(e) => e.stopPropagation()} className="ml-auto h-full w-full max-w-xl overflow-y-auto rounded-[2rem] bg-[#f7f4ea] p-6 shadow-2xl md:p-8">
            <div className="flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-[.25em] text-[#8c6d21]">Order details</p><h2 className="mt-2 text-3xl font-black">{selected.id}</h2></div><button onClick={() => setSelected(null)} className="rounded-full border border-black/10 px-3 py-2">×</button></div>
            <div className="mt-7 rounded-2xl bg-white p-5"><p className="font-black">Customer</p><p className="mt-2 text-sm">{selected.customer.name} · {selected.customer.phone}</p><p className="mt-1 text-sm text-black/60">{selected.customer.address}, {selected.customer.city} - {selected.customer.pin}</p><p className="mt-3 text-xs text-black/40">GPS: {selected.location.latitude.toFixed(6)}, {selected.location.longitude.toFixed(6)}</p></div>
            <div className="mt-4 rounded-2xl bg-white p-5"><p className="font-black">Items</p>{selected.items.map((item) => <div key={item.id} className="mt-3 flex justify-between text-sm"><span>{item.quantity}× {item.name}</span><strong>₹{(item.unitPrice * item.quantity).toFixed(2)}</strong></div>)}<div className="mt-4 border-t border-black/10 pt-4"><div className="flex justify-between text-sm"><span>Subtotal</span><strong>₹{selected.subtotal.toFixed(2)}</strong></div><div className="mt-2 flex justify-between text-sm"><span>Delivery</span><strong>{selected.deliveryFee ? `₹${selected.deliveryFee.toFixed(2)}` : "FREE"}</strong></div><div className="mt-3 flex justify-between text-lg"><span className="font-black">Total</span><strong>₹{selected.total.toFixed(2)}</strong></div></div></div>
            <div className="mt-4 rounded-2xl bg-[#171713] p-5 text-white"><p className="text-xs font-black uppercase tracking-[.2em] text-[#d9b65d]">Update status</p><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">{statuses.map((status) => <button key={status} onClick={() => changeStatus(selected.id, status)} className={`rounded-xl px-3 py-3 text-xs font-black ${selected.status === status ? "bg-[#d9b65d] text-[#171713]" : "bg-white/10 hover:bg-white/20"}`}>{status.replaceAll("_", " ")}</button>)}</div></div>
          </aside>
        </div>
      )}
    </main>
  );
}
