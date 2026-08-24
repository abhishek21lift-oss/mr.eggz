"use client";

import { products } from "../lib/catalogue";
import { addToCart } from "../lib/cart";
import { EggHero } from "../components/egg-hero";
import { ResponsiveNav } from "../components/responsive-nav";

const productNames: Record<string, string> = {
  "30": "MR. EGGZ — 30 White Eggs",
  "10": "MR. EGGZ — 10 White Eggs",
  "6": "MR. EGGZ — 6 White Eggs",
};

const productTags: Record<string, string> = {
  "30": "Family Pack",
  "10": "Smart Pack",
  "6": "Mini Pack",
};

export default function Home() {
  return <main className="min-h-screen overflow-hidden bg-[#f7f4ea] text-[#171713]">
    <ResponsiveNav />

    <section id="top" className="relative bg-[#171713] text-[#f7f4ea]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(217,182,93,.16),transparent_35%)]" />
      <div className="relative mx-auto grid min-h-[720px] max-w-7xl gap-6 px-5 pb-12 pt-24 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-10 md:pb-16 md:pt-28">
        <div className="relative z-10">
          <div className="mb-7 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-[#e7d38e]">Farm fresh · Kanpur</div>
          <h1 className="max-w-3xl text-6xl font-black leading-[.86] tracking-[-.075em] sm:text-7xl md:text-8xl">Healthy Eggs.<br /><span className="text-[#d9b65d]">Honest Eggs.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg">MR.EGGZ is a trusted premium egg brand built around clean, hygienic and farm-fresh eggs for athletes, families and health-conscious everyday customers.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#shop" className="rounded-full bg-[#d9b65d] px-6 py-4 font-black text-[#171713]">Order now →</a>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-4 font-bold text-white">Contact us</a>
          </div>
        </div>
        <EggHero />
      </div>
      <div className="relative border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 py-5 md:gap-10 md:px-10">
        {["Farm Fresh Daily", "Premium Eggs", "For Fitness", "For Families"].map((item, i) => <span key={item} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-white/55"><span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-[#4e8b42]" : i === 1 ? "bg-[#171713] ring-1 ring-white/30" : "bg-[#d9b65d]"}`} />{item}</span>)}
      </div></div>
    </section>

    <section className="border-b border-black/5 bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
        <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#8c6d21]">The MR.EGGZ promise</p><h2 className="mt-4 max-w-xl text-4xl font-black leading-[.95] tracking-[-.05em] sm:text-5xl md:text-6xl">Real strength starts with a source you can trust.</h2></div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[["01", "Farm Fresh Daily", "Freshness-led sourcing and a simple farm-to-table story."], ["02", "Quality Focused", "Premium presentation without unnecessary claims."], ["03", "Made for Everyday", "Packs designed around home, fitness and regular buyers."]].map(([n, title, copy]) => <article key={n} className="rounded-[1.75rem] border border-black/10 bg-[#f7f4ea] p-6"><span className="text-xs font-black text-[#8c6d21]">{n}</span><h3 className="mt-8 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-black/50">{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section id="shop" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#8c6d21]">MR.EGGZ Quality Products</p><h2 className="mt-3 max-w-3xl text-4xl font-black leading-none tracking-[-.05em] sm:text-5xl md:text-7xl">Pick the pack that fits your day.</h2></div><p className="max-w-sm text-sm leading-6 text-black/50 md:text-right">6, 10 and 30 egg packs for everyday orders, families, fitness-focused buyers and regular stock-ups.</p></div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">{products.map((product, index) => <article key={product.id} className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className={`relative flex aspect-[1.05] items-center justify-center overflow-hidden rounded-[1.5rem] ${index === 1 ? "bg-[#dfe8cf]" : "bg-[#efe8d2]"}`}><div className="absolute inset-5 rounded-[1.25rem] border border-black/5" /><div className="relative z-10 text-center"><div className="text-8xl font-black leading-none tracking-[-.08em]">{String(product.quantity).padStart(2, "0")}</div><div className="mt-2 text-xs font-black uppercase tracking-[.3em] text-[#8c6d21]">EGGS</div></div><span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-[#8c6d21]">{productTags[product.id]}</span></div>
        <div className="p-2 pt-5"><h3 className="text-2xl font-black">{productNames[product.id] ?? product.name}</h3><p className="mt-2 text-sm text-black/45">{product.description}</p><div className="mt-6 grid grid-cols-2 gap-3"><button onClick={() => { addToCart({ id: product.id, name: product.name, quantity: 1 }); window.location.href = "/cart"; }} className="rounded-full bg-[#171713] px-5 py-3.5 text-sm font-black text-white group-hover:bg-[#8c6d21]">Add to cart</button><a href={`/products/${product.id}`} className="rounded-full border border-black/10 px-5 py-3.5 text-center text-sm font-black">View pack</a></div></div>
      </article>)}</div>
    </section>

    <section id="story" className="bg-[#dfe8cf] px-5 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#456032]">Why choose MR.EGGZ</p><h2 className="mt-4 max-w-5xl text-4xl font-black leading-[.95] tracking-[-.05em] sm:text-5xl md:text-7xl">From a village farm to everyday tables.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">Mr. Eggz is rooted in Uttari Village, Kanpur. The brand is being built around a clear idea: make the journey from farm to customer easier to understand and easier to trust.</p></div></section>

    <section id="business" className="bg-[#171713] px-5 py-20 text-white md:px-10 md:py-28"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#d9b65d]">For business</p><h2 className="mt-4 max-w-4xl text-4xl font-black leading-[.95] tracking-[-.05em] sm:text-5xl md:text-7xl">Your gym. Your restaurant. Your supply.</h2><p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">Need eggs in bulk? Start a supply conversation for gyms, restaurants, retailers and other bulk buyers.</p></div><a href="/business" className="inline-flex w-fit rounded-full bg-[#d9b65d] px-7 py-4 font-black text-[#171713]">Bulk enquiry →</a></div></section>

    <footer id="contact" className="bg-[#171713] px-5 pb-10 text-white/35 md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 text-sm md:flex-row md:items-center md:justify-between"><div className="font-black text-white/70">MR. EGGZ</div><div>Farm fresh · Kanpur</div><div>Built for home, fitness & business</div></div></footer>
  </main>;
}
