"use client";

import { useState } from "react";

const faqs = [
  ["Where does Mr. Eggz deliver?", "Enter your delivery location during checkout and we will check the configured delivery zone."],
  ["How fresh are the eggs?", "Mr. Eggz is built around a farm-fresh, hygiene-focused everyday egg experience."],
  ["Can I order on WhatsApp?", "Yes. WhatsApp ordering is part of the customer experience roadmap and will be connected to the same order platform."],
  ["Need a bulk order?", "Gyms, restaurants, retailers and other businesses can use the bulk enquiry flow."],
];

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="border-b border-black/10 px-6 py-4 md:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between"><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><a href="/cart" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Cart</a></div></header>
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-12 md:py-20">
        <p className="text-xs font-black uppercase tracking-[.25em] text-[#8c6d21]">Customer care</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-.05em] md:text-7xl">How can we help?</h1>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-black/50">Questions about delivery, packs or your order? Start here.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {FAQS.map(([question, answer], index) => (
            <button key={question} type="button" onClick={() => setOpen(open === index ? null : index)} className="rounded-[1.75rem] border border-black/10 bg-white p-6 text-left transition hover:shadow-lg">
              <div className="flex items-center justify-between gap-4"><span className="text-lg font-black">{question}</span><span className="text-2xl font-light">{open === index ? "−" : "+"}</span></div>
              {open === index && <p className="mt-4 text-sm leading-6 text-black/55">{answer}</p>}
            </button>
          ))}
        </div>
        <div className="mt-8 rounded-[2rem] bg-[#171713] p-7 text-white md:p-10">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#d9b65d]">Need a human?</p>
          <h2 className="mt-3 text-3xl font-black">Talk to Mr. Eggz.</h2>
          <p className="mt-3 max-w-xl text-white/50">For order-specific help, keep your order ID ready. WhatsApp support can be connected to the same customer/order platform.</p>
          <a href="https://wa.me/" className="mt-6 inline-flex rounded-full bg-[#d9b65d] px-6 py-3.5 font-black text-[#171713]">Open WhatsApp</a>
        </div>
      </section>
    </main>
  );
}

const FAQS = faqs;
