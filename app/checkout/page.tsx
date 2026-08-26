"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { products } from "../../lib/catalogue";
import { readCart, writeCart, type CartItem } from "../../lib/cart";
import { createOrderDraft, saveOrder, type DeliveryLocation } from "../../lib/order";

type DeliveryCheck = { available: boolean; distanceKm?: number; radiusKm?: number; deliveryFee?: number | null; freeAbove?: number; eta?: string | null; error?: string };

type Customer = { name: string; phone: string; address: string; city: string; pin: string };

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [location, setLocation] = useState<DeliveryLocation | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");
  const [delivery, setDelivery] = useState<DeliveryCheck | null>(null);
  const [checkingDelivery, setCheckingDelivery] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customer, setCustomer] = useState<Customer>({ name: "", phone: "", address: "", city: "", pin: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const savedLocation = localStorage.getItem("mrEggzDeliveryLocation");
      const savedCustomer = localStorage.getItem("mrEggzCustomerProfile");
      if (savedLocation) setLocation(JSON.parse(savedLocation));
      if (savedCustomer) setCustomer((current) => ({ ...current, ...JSON.parse(savedCustomer) }));
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
    if (!navigator.geolocation) return setLocationMessage("This browser does not support location detection.");
    setLocating(true); setLocationMessage("");
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const next: DeliveryLocation = { latitude: coords.latitude, longitude: coords.longitude, source: "GPS" };
      setLocation(next);
      localStorage.setItem("mrEggzDeliveryLocation", JSON.stringify(next));
      setLocationMessage("Location detected. Checking delivery availability…");
      setLocating(false); void checkDelivery(next);
    }, () => { setLocationMessage("Location permission was not granted. Please enable location and try again."); setLocating(false); }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
  }

  function useSavedLocation() {
    try {
      const raw = localStorage.getItem("mrEggzDeliveryLocation");
      if (raw) { const next = JSON.parse(raw) as DeliveryLocation; setLocation(next); void checkDelivery(next); }
      else setLocationMessage("No saved location found. Use GPS to detect your location.");
    } catch { setLocationMessage("Saved location could not be loaded."); }
  }

  function handleCustomer(field: keyof Customer, value: string) {
    setCustomer((current) => ({ ...current, [field]: value }));
    setSaved(false);
  }

  function saveCustomer() {
    localStorage.setItem("mrEggzCustomerProfile", JSON.stringify(customer));
    setSaved(true);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!location) return setLocationMessage("Please select or detect your delivery location first.");
    if (!delivery?.available) return setLocationMessage("Delivery is not available at this location yet.");
    if (!cart.length) return setLocationMessage("Your cart is empty.");
    if (!/^[6-9]\d{9}$/.test(customer.phone.replace(/\D/g, ""))) return setLocationMessage("Please enter a valid 10-digit Indian mobile number.");
    if (!/^\d{6}$/.test(customer.pin)) return setLocationMessage("Please enter a valid 6-digit PIN code.");

    const order = createOrderDraft(cart, customer, location, delivery.deliveryFee ?? 0);
    saveOrder(order);
    writeCart([]);
    setOrderId(order.id);
    setSubmitted(true);
  }

  if (submitted) return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]"><section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16"><div className="w-full rounded-[2.5rem] bg-white p-8 text-center shadow-xl md:p-12"><div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#dfe8cf] text-3xl">✓</div><p className="mt-7 text-sm font-black uppercase tracking-[.25em] text-[#8c6d21]">Order placed</p><h1 className="mt-3 text-5xl font-black">Thank you.</h1><p className="mx-auto mt-4 max-w-md text-black/55">Your order has been recorded. Keep your order ID for support and tracking.</p><div className="mx-auto mt-7 max-w-sm rounded-2xl bg-[#f7f4ea] p-5 text-left"><div className="flex justify-between"><span className="text-black/50">Order ID</span><strong>{orderId}</strong></div><div className="mt-3 flex justify-between"><span className="text-black/50">Total</span><strong>₹{total.toFixed(2)}</strong></div><div className="mt-3 flex justify-between"><span className="text-black/50">Status</span><strong>PLACED</strong></div></div><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center"><a href={`/orders`} className="rounded-full bg-[#171713] px-7 py-3 font-bold text-white">View my orders</a><a href="/support" className="rounded-full border border-black/10 px-7 py-3 font-bold">Get support</a></div></div></section></main>
  );

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]"><header className="border-b border-black/10 bg-[#f7f4ea] px-6 py-4 md:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between"><a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a><a href="/cart" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Back to cart</a></div></header>
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-20"><p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Checkout</p><h1 className="mt-3 text-5xl font-black md:text-7xl">Almost there.</h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <form onSubmit={submit} className="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-black">Delivery details</h2><p className="mt-2 text-sm text-black/50">Choose a saved location or detect your current location. We check the delivery zone before allowing the order.</p>
            <div className="mt-7 rounded-[1.5rem] border border-[#8c6d21]/15 bg-[#f7f4ea] p-5"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#8c6d21]">Delivery location</p><p className="mt-2 text-sm font-semibold">{location ? `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}` : "Location not set"}</p>{location && <p className="mt-1 text-xs text-black/45">Source: {location.source}</p>}</div><div className="flex flex-wrap gap-2"><button type="button" onClick={useSavedLocation} disabled={checkingDelivery} className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-black disabled:opacity-50">Saved location</button><button type="button" onClick={detectLocation} disabled={locating || checkingDelivery} className="rounded-full bg-[#171713] px-5 py-3 text-sm font-black text-white disabled:opacity-50">{locating ? "Detecting…" : checkingDelivery ? "Checking…" : "Use my location"}</button></div></div>{locationMessage && <p className="mt-3 text-xs font-semibold text-[#8c6d21]">{locationMessage}</p>}</div>
            {delivery && <div className={`mt-4 rounded-2xl p-4 text-sm font-bold ${delivery.available ? "bg-[#dfe8cf] text-[#456032]" : "bg-red-50 text-red-700"}`}>{delivery.available ? `Delivery available · ${delivery.distanceKm} km away · ETA ${delivery.eta}` : delivery.error || `Outside ${delivery.radiusKm} km delivery zone.`}</div>}
            <div className="mt-7 flex items-center justify-between"><div><h2 className="text-xl font-black">Your details</h2><p className="text-xs text-black/45">Used for delivery and order support.</p></div><button type="button" onClick={saveCustomer} className="text-xs font-black text-[#8c6d21]">{saved ? "Saved ✓" : "Save details"}</button></div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Full name<input value={customer.name} onChange={(e) => handleCustomer("name", e.target.value)} required className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label><label className="text-sm font-bold">Phone<input value={customer.phone} onChange={(e) => handleCustomer("phone", e.target.value)} required inputMode="tel" maxLength={10} className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label><label className="text-sm font-bold sm:col-span-2">Address<textarea value={customer.address} onChange={(e) => handleCustomer("address", e.target.value)} required rows={3} className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label><label className="text-sm font-bold">City<input value={customer.city} onChange={(e) => handleCustomer("city", e.target.value)} required className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label><label className="text-sm font-bold">PIN code<input value={customer.pin} onChange={(e) => handleCustomer("pin", e.target.value.replace(/\D/g, "").slice(0, 6))} required inputMode="numeric" maxLength={6} className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ea] px-4 py-3 outline-none focus:border-[#8c6d21]" /></label></div>
            <button type="submit" disabled={!delivery?.available || checkingDelivery || !cart.length} className="mt-7 w-full rounded-full bg-[#171713] px-6 py-4 font-black text-white transition hover:bg-[#8c6d21] disabled:cursor-not-allowed disabled:opacity-40">Place order · ₹{total.toFixed(2)}</button>
          </form>
          <aside className="h-fit rounded-[2rem] bg-[#171713] p-7 text-white lg:sticky lg:top-8"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d9b65d]">Order summary</p><div className="mt-7 space-y-3">{cart.map((item) => { const product = products.find((p) => p.id === item.id); return <div key={item.id} className="flex justify-between gap-4 text-sm"><span className="text-white/60">{product?.name ?? item.name} × {item.quantity}</span><span className="font-bold">₹{((product?.price ?? 0) * item.quantity).toFixed(2)}</span></div>; })}</div><div className="mt-6 flex justify-between border-t border-white/10 pt-5"><span className="text-white/60">Subtotal</span><span className="font-black">₹{subtotal.toFixed(2)}</span></div><div className="mt-4 flex justify-between"><span className="text-white/60">Delivery</span><span className="font-black">{delivery?.available ? (delivery.deliveryFee ? `₹${delivery.deliveryFee.toFixed(2)}` : "FREE") : "—"}</span></div><div className="mt-5 flex justify-between border-t border-white/10 pt-5 text-lg"><span className="font-bold">Total</span><span className="font-black">₹{total.toFixed(2)}</span></div></aside>
        </div>
      </section>
    </main>
  );
}
