"use client";

import { useMemo, useState } from "react";

const packs = [
  { id: "6", name: "6 Egg Pack", price: null },
  { id: "10", name: "10 Egg Pack", price: null },
  { id: "30", name: "30 Egg Pack", price: null },
];

export default function CartPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({ "6": 1, "10": 0, "30": 0 });
  const items = useMemo(() => packs.filter((p) => (quantities[p.id] ?? 0) > 0), [quantities]);
  const totalItems = Object.values(quantities).reduce((sum, value) => sum + value, 0);

  const change = (id: string, delta: number) => {
    setQuantities((current) => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + delta) }));
  };

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f4ea]/90 px-6 py-4 backdrop-blur-xl md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a>
          <a href="/products" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Continue shopping</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-20">
        <div className="flex items-end justify-between gap-6"><div><p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Your order</p><h1 className="mt-3 text-5xl font-black md:text-7xl">Cart</h1></div><div className="rounded-full bg-[#dfe8cf] px-4 py-2 text-sm font-black">{totalItems} {totalItems === 1 ? "pack" : "packs"}</div></div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {items.length === 0 ? (
              <div className="rounded-[2rem] border border-black/10 bg-white p-10 text-center"><h2 className="text-2xl font-black">Your cart is empty.</h2><p className="mt-2 text-black/50">Pick a pack and come back here when you are ready.</p><a href="/products" className="mt-6 inline-flex rounded-full bg-[#171713] px-7 py-3 font-bold text-white">Shop packs</a></div>
            ) : items.map((item) => (
              <div key={item.id} className="flex flex-col gap-5 rounded-[2rem] border border-black/10 bg-white p-5 sm:flex-row sm:items-center">
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-[#efe8d2]"><span className="text-4xl font-black">{item.id}</span></div>
                <div className="flex-1"><h2 className="text-xl font-black">{item.name}</h2><p className="mt-1 text-sm text-black/50">Price will appear once the verified catalogue price is configured.</p></div>
                <div className="flex items-center gap-3"><button onClick={() => change(item.id, -1)} className="h-10 w-10 rounded-full border border-black/10 font-black">−</button><span className="w-5 text-center font-black">{quantities[item.id]}</span><button onClick={() => change(item.id, 1)} className="h-10 w-10 rounded-full bg-[#171713] font-black text-white">+</button></div>
                <button onClick={() => change(item.id, -quantities[item.id])} className="text-sm font-bold text-[#8c6d21]">Remove</button>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-[2rem] bg-[#171713] p-7 text-white lg:sticky lg:top-24"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d9b65d]">Order summary</p><div className="mt-7 flex items-center justify-between border-b border-white/10 pb-5"><span className="text-white/60">Items</span><span className="font-black">{totalItems} packs</span></div><div className="mt-5 flex items-center justify-between"><span className="text-white/60">Total</span><span className="text-lg font-black">Price pending</span></div><button disabled className="mt-7 w-full cursor-not-allowed rounded-full bg-white/10 px-6 py-4 font-black text-white/40">Checkout coming next</button><p className="mt-4 text-xs leading-5 text-white/35">Checkout will be activated after real product pricing, delivery rules and payment requirements are verified.</p></aside>
        </div>
      </section>
    </main>
  );
}
