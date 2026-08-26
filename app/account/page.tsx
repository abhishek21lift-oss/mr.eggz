"use client";

import { useState } from "react";

export default function AccountPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [saved, setSaved] = useState(false);

  function save(event: React.FormEvent) {
    event.preventDefault();
    localStorage.setItem("mrEggzCustomerProfile", JSON.stringify({ name, phone }));
    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="border-b border-black/10 px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a>
          <a href="/cart" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Cart</a>
        </div>
      </header>
      <section className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-20">
        <p className="text-xs font-black uppercase tracking-[.25em] text-[#8c6d21]">My account</p>
        <h1 className="mt-3 text-5xl font-black tracking-[-.05em]">Your Mr. Eggz profile.</h1>
        <p className="mt-4 text-black/50">Save your basic details for a faster checkout. Authentication will be connected to the secure customer API in the platform migration.</p>
        <form onSubmit={save} className="mt-10 rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold">Full name<input value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
            <label className="text-sm font-bold">Phone<input value={phone} onChange={(e) => setPhone(e.target.value)} required inputMode="tel" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
          </div>
          {saved && <p className="mt-5 rounded-xl bg-[#dfe8cf] px-4 py-3 text-sm font-bold text-[#456032]">Profile saved on this device.</p>}
          <button className="mt-6 rounded-full bg-[#171713] px-6 py-3.5 font-black text-white">Save profile</button>
        </form>
      </section>
    </main>
  );
}
