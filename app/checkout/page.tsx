"use client";

import { FormEvent, useState } from "react";

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="border-b border-black/10 bg-[#f7f4ea] px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between"><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><a href="/cart" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Back to cart</a></div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-20">
        <p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Checkout</p>
        <h1 className="mt-3 text-5xl font-black md:text-7xl">Almost there.</h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <form onSubmit={submit} className="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-black">Delivery details</h2>
            <p className="mt-2 text-sm text-black/50">We will connect delivery zones and payment after the business rules are verified.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">Full name<input required name="name" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">Phone<input required name="phone" inputMode="tel" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold sm:col-span-2">Address<textarea required name="address" rows={3} className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">City<input required name="city" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">PIN code<input required name="pin" inputMode="numeric" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
            </div>
            {submitted && <div className="mt-6 rounded-2xl bg-[#dfe8cf] p-4 text-sm font-bold text-[#456032]">Details captured for the prototype. No order or payment has been created.</div>}
            <button type="submit" className="mt-7 w-full rounded-full bg-[#171713] px-6 py-4 font-black text-white transition hover:bg-[#8c6d21]">Continue</button>
          </form>

          <aside className="h-fit rounded-[2rem] bg-[#171713] p-7 text-white lg:sticky lg:top-8"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d9b65d]">Order summary</p><div className="mt-7 flex justify-between border-b border-white/10 pb-5"><span className="text-white/60">Selected packs</span><span className="font-black">From cart</span></div><div className="mt-5 flex justify-between"><span className="text-white/60">Total</span><span className="font-black">Price pending</span></div><div className="mt-7 rounded-2xl bg-white/5 p-4 text-xs leading-5 text-white/45">Payment is intentionally not enabled yet. Real payment processing will be added only after pricing, delivery and payment requirements are confirmed.</div></aside>
        </div>
      </section>
    </main>
  );
}
