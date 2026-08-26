"use client";

import { FormEvent, useEffect, useState } from "react";

type DeliveryLocation = {
  latitude: number;
  longitude: number;
  source: "GPS" | "MANUAL";
};

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState<DeliveryLocation | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mrEggzDeliveryLocation");
      if (saved) setLocation(JSON.parse(saved));
    } catch {}
  }, []);

  function detectLocation() {
    if (!navigator.geolocation) {
      setLocationMessage("This browser does not support location detection.");
      return;
    }
    setLocating(true);
    setLocationMessage("");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const next = { latitude: coords.latitude, longitude: coords.longitude, source: "GPS" as const };
        setLocation(next);
        localStorage.setItem("mrEggzDeliveryLocation", JSON.stringify(next));
        setLocationMessage("Delivery location detected successfully.");
        setLocating(false);
      },
      () => {
        setLocationMessage("Location permission was not granted. You can enter your address manually.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!location) {
      setLocationMessage("Please detect your delivery location before continuing.");
      return;
    }
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
            <p className="mt-2 text-sm text-black/50">First we confirm where the eggs need to be delivered.</p>

            <div className="mt-7 rounded-[1.5rem] border border-[#8c6d21]/15 bg-[#f7f4ea] p-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.2em] text-[#8c6d21]">Delivery location</p>
                  <p className="mt-2 text-sm font-semibold">{location ? `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}` : "Location not set"}</p>
                  {location && <p className="mt-1 text-xs text-black/45">Source: {location.source === "GPS" ? "GPS" : "Manual"}</p>}
                </div>
                <button type="button" onClick={detectLocation} disabled={locating} className="rounded-full bg-[#171713] px-5 py-3 text-sm font-black text-white disabled:opacity-50">{locating ? "Detecting…" : location ? "Update location" : "Use my location"}</button>
              </div>
              {locationMessage && <p className="mt-3 text-xs font-semibold text-[#8c6d21]">{locationMessage}</p>}
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">Full name<input required name="name" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">Phone<input required name="phone" inputMode="tel" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold sm:col-span-2">Address<textarea required name="address" rows={3} className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">City<input required name="city" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">PIN code<input required name="pin" inputMode="numeric" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
            </div>
            {submitted && <div className="mt-6 rounded-2xl bg-[#dfe8cf] p-4 text-sm font-bold text-[#456032]">Delivery details captured. Next step is connecting this location to delivery-zone pricing and payment.</div>}
            <button type="submit" className="mt-7 w-full rounded-full bg-[#171713] px-6 py-4 font-black text-white transition hover:bg-[#8c6d21]">Continue</button>
          </form>

          <aside className="h-fit rounded-[2rem] bg-[#171713] p-7 text-white lg:sticky lg:top-8"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d9b65d]">Order summary</p><div className="mt-7 flex justify-between border-b border-white/10 pb-5"><span className="text-white/60">Selected packs</span><span className="font-black">From cart</span></div><div className="mt-5 flex justify-between"><span className="text-white/60">Delivery</span><span className="font-black">Checking location</span></div><div className="mt-5 flex justify-between"><span className="text-white/60">Total</span><span className="font-black">Price pending</span></div><div className="mt-7 rounded-2xl bg-white/5 p-4 text-xs leading-5 text-white/45">Your exact GPS coordinates are kept in the checkout session for the next delivery-zone validation step.</div></aside>
        </div>
      </section>
    </main>
  );
}
