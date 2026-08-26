"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { products } from "../../lib/catalogue";
import { readCart, writeCart, type CartItem } from "../../lib/cart";
import { createOrderDraft, saveOrder, type DeliveryLocation } from "../../lib/order";

type DeliveryCheck = { available: boolean; distanceKm?: number; radiusKm?: number; deliveryFee?: number | null; freeAbove?: number; eta?: string | null; error?: string };

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [location, setLocation] = useState<DeliveryLocation | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");
  const [delivery, setDelivery] = useState<DeliveryCheck | null>(null);
  const [checkingDelivery, setCheckingDelivery] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mrEggzDeliveryLocation");
      if (saved) setLocation(JSON.parse(saved));
      setCart(readCart());
    } catch {}
  }, []);

  const subtotal = useMemo(() => cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0), [cart]);

  const total = subtotal + (delivery?.deliveryFee ?? 0);

  async function checkDelivery(next: DeliveryLocation) {
    setCheckingDelivery(true);
    setDelivery(null);
    try {
      const res = await fetch(`/api/delivery/check?lat=${next.latitude}&lng=${next.longitude}&subtotal=${subtotal}`);
      const data = await res.json();
      setDelivery(data);
    } catch {
      setDelivery({ available: false, error: "Could not check delivery availability. Please try again." });
    } finally {
      setCheckingDelivery(false);
    }
  }

  function detectLocation() {
    if (!navigator.geolocation) {
      setLocationMessage("This browser does not support location detection.");
      return;
    }
    setLocating(true);
    setLocationMessage("");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const next: DeliveryLocation = { latitude: coords.latitude, longitude: coords.longitude, source: "GPS" };
        setLocation(next);
        localStorage.setItem("mrEggzDeliveryLocation", JSON.stringify(next));
        setLocationMessage("Delivery location detected. Checking availability…");
        setLocating(false);
        void checkDelivery(next);
      },
      () => { setLocationMessage("Location permission was not granted. Please enable location and try again."); setLocating(false); },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!location) { setLocationMessage("Please detect your delivery location before continuing."); return; }
    if (!delivery?.available) { setLocationMessage("Delivery is not available at this location yet."); return; }
    if (!cart.length) { setLocationMessage("Your cart is empty."); return; }

    const data = new FormData(event.currentTarget);
    const order = createOrderDraft(
      cart,
      {
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        address: String(data.get("address") ?? ""),
        city: String(data.get("city") ?? ""),
        pin: String(data.get("pin") ?? ""),
      },
      location,
      delivery.deliveryFee ?? 0,
    );

    saveOrder(order);
    writeCart([]);
    setOrderId(order.id);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
        <section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
          <div className="w-full rounded-[2.5rem] bg-white p-8 text-center shadow-xl md:p-12">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#dfe8cf] text-3xl">✓</div>
            <p className="mt-7 text-sm font-black uppercase tracking-[.25em] text-[#8c6d21]">Order placed</p>
            <h1 className="mt-3 text-5xl font-black">Thank you.</h1>
            <p className="mx-auto mt-4 max-w-md text-black/55">Your order has been recorded and is ready for the operations team.</p>
            <div className="mx-auto mt-7 max-w-sm rounded-2xl bg-[#f7f4ea] p-5 text-left">
              <div className="flex justify-between"><span className="text-black/50">Order ID</span><strong>{orderId}</strong></div>
              <div className="mt-3 flex justify-between"><span className="text-black/50">Total</span><strong>₹{total.toFixed(2)}</strong></div>
              <div className="mt-3 flex justify-between"><span className="text-black/50">Status</span><strong>PLACED</strong></div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href="/" className="rounded-full bg-[#171713] px-7 py-3 font-bold text-white">Back home</a>
              <a href="/admin/orders" className="rounded-full border border-black/10 px-7 py-3 font-bold">Open operations</a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="border-b border-black/10 bg-[#f7f4ea] px-6 py-4 md:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between"><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><a href="/cart" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Back to cart</a></div></header>
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-20">
        <p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Checkout</p><h1 className="mt-3 text-5xl font-black md:text-7xl">Almost there.</h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <form onSubmit={submit} className="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-black">Delivery details</h2><p className="mt-2 text-sm text-black/50">Confirm your location first. We calculate delivery availability and fee from it.</p>
            <div className="mt-7 rounded-[1.5rem] border border-[#8c6d21]/15 bg-[#f7f4ea] p-5"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#8c6d21]">Delivery location</p><p className="mt-2 text-sm font-semibold">{location ? `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}` : "Location not set"}</p>{location && <p className="mt-1 text-xs text-black/45">Source: {location.source}</p>}</div><button type="button" onClick={detectLocation} disabled={locating || checkingDelivery} className="rounded-full bg-[#171713] px-5 py-3 text-sm font-black text-white disabled:opacity-50">{locating ? "Detecting…" : checkingDelivery ? "Checking…" : location ? "Update location" : "Use my location"}</button></div>{locationMessage && <p className="mt-3 text-xs font-semibold text-[#8c6d21]">{locationMessage}</p>}</div>
            {delivery && <div className={`mt-4 rounded-2xl p-4 text-sm font-bold ${delivery.available ? "bg-[#dfe8cf] text-[#456032]" : "bg-red-50 text-red-700"}`}>{delivery.available ? `Delivery available · ${delivery.distanceKm} km away · ETA ${delivery.eta}` : delivery.error || `Outside ${delivery.radiusKm} km delivery zone.`}</div>}
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">Full name<input required name="name" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">Phone<input required name="phone" inputMode="tel" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold sm:col-span-2">Address<textarea required name="address" rows={3} className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">City<input required name="city" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
              <label className="text-sm font-bold">PIN code<input required name="pin" inputMode="numeric" className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label>
            </div>
            <button type="submit" disabled={!delivery?.available || checkingDelivery} className="mt-7 w-full rounded-full bg-[#171713] px-6 py-4 font-black text-white transition hover:bg-[#8c6d21] disabled:cursor-not-allowed disabled:opacity-40">Place order</button>
          </form>
          <aside className="h-fit rounded-[2rem] bg-[#171713] p-7 text-white lg:sticky lg:top-8"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d9b65d]">Order summary</p><div className="mt-7 flex justify-between border-b border-white/10 pb-5"><span className="text-white/60">Subtotal</span><span className="font-black">₹{subtotal.toFixed(2)}</span></div><div className="mt-5 flex justify-between"><span className="text-white/60">Delivery</span><span className="font-black">{delivery?.available ? (delivery.deliveryFee ? `₹${delivery.deliveryFee.toFixed(2)}` : "FREE") : "—"}</span></div><div className="mt-5 flex justify-between text-lg"><span className="font-bold">Total</span><span className="font-black">₹{total.toFixed(2)}</span></div></aside>
        </div>
      </section>
    </main>
  );
}
