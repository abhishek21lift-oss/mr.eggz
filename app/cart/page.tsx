"use client";

import { useEffect, useMemo, useState } from "react";
import { products } from "../../lib/catalogue";
import { addToCart, readCart, writeCart, type CartItem } from "../../lib/cart";

const packs = products.map(({ id, name }) => ({ id, name }));

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => { setItems(readCart()); setReady(true); }, []);
  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0), [items]);

  const change = (id: string, delta: number) => {
    const next = items.map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item).filter((item) => item.quantity > 0);
    writeCart(next); setItems(next);
  };

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f4ea]/90 px-6 py-4 backdrop-blur-xl md:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between"><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><a href="/products" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Continue shopping</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-20">
        <div className="flex items-end justify-between gap-6"><div><p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Your order</p><h1 className="mt-3 text-5xl font-black md:text-7xl">Cart</h1></div><div className="rounded-full bg-[#dfe8cf] px-4 py-2 text-sm font-black">{totalItems} {totalItems === 1 ? "pack" : "packs"}</div></div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {!ready ? null : items.length === 0 ? <div className="rounded-[2rem] border border-black/10 bg-white p-10 text-center"><h2 className="text-2xl font-black">Your cart is empty.</h2><p className="mt-2 text-black/50">Pick a pack and come back here when you are ready.</p><a href="/products" className="mt-6 inline-flex rounded-full bg-[#171713] px-7 py-3 font-bold text-white">Shop packs</a></div> : items.map((item) => { const product = products.find((p) => p.id === item.id); const lineTotal = (product?.price ?? 0) * item.quantity; return <div key={item.id} className="flex flex-col gap-5 rounded-[2rem] border border-black/10 bg-white p-5 sm:flex-row sm:items-center"><div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-[#efe8d2]"><span className="text-4xl font-black">{item.id}</span></div><div className="flex-1"><h2 className="text-xl font-black">{item.name}</h2><div className="mt-2 flex items-center gap-3"><span className="font-black">₹{product?.price ?? 0}</span>{product && <span className="text-sm text-black/40 line-through">MRP ₹{product.mrp}</span>}</div><p className="mt-1 text-xs font-bold text-red-600">{product?.discountLabel}</p></div><div className="flex items-center gap-3"><button onClick={() => change(item.id, -1)} className="h-10 w-10 rounded-full border border-black/10 font-black">−</button><span className="w-5 text-center font-black">{item.quantity}</span><button onClick={() => change(item.id, 1)} className="h-10 w-10 rounded-full bg-[#171713] font-black text-white">+</button></div><div className="min-w-24 text-right"><div className="font-black">₹{lineTotal}</div><button onClick={() => change(item.id, -item.quantity)} className="mt-2 text-sm font-bold text-[#8c6d21]">Remove</button></div></div>; })}
            <div className="rounded-[2rem] border border-black/10 bg-white p-6"><p className="text-sm font-black uppercase tracking-[.2em] text-[#8c6d21]">Quick add</p><div className="mt-4 flex flex-wrap gap-3">{packs.map((pack) => <button key={pack.id} onClick={() => { const next = addToCart({ ...pack, quantity: 1 }); setItems(next); }} className="rounded-full border border-black/10 px-5 py-3 text-sm font-bold hover:bg-[#f7f4ea]">+ {pack.name}</button>)}</div></div>
          </div>
          <aside className="h-fit rounded-[2rem] bg-[#171713] p-7 text-white lg:sticky lg:top-24"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d9b65d]">Order summary</p><div className="mt-7 flex items-center justify-between border-b border-white/10 pb-5"><span className="text-white/60">Items</span><span className="font-black">{totalItems} packs</span></div><div className="mt-5 flex items-center justify-between"><span className="text-white/60">Subtotal</span><span className="font-black">₹{subtotal.toFixed(2)}</span></div><div className="mt-5 flex items-center justify-between"><span className="text-white/60">Delivery</span><span className="font-black">Calculated at checkout</span></div><div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-lg"><span className="font-bold">Total before delivery</span><span className="font-black">₹{subtotal.toFixed(2)}</span></div><a href={items.length ? "/checkout" : "/products"} className="mt-7 block w-full rounded-full bg-[#d9b65d] px-6 py-4 text-center font-black text-[#171713]">{items.length ? "Continue to checkout" : "Shop packs"}</a></aside>
        </div>
      </section>
    </main>
  );
}
