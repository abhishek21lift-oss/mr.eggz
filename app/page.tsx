export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <section className="relative overflow-hidden bg-[#171713] px-6 py-24 text-[#f7f4ea] md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b65d]">Farm fresh. Built for everyday protein.</p>
          <h1 className="max-w-5xl text-5xl font-black tracking-tight md:text-8xl">Good eggs. <span className="text-[#d9b65d]">Better energy.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">Mr. Eggz brings farm-fresh eggs from our farm story to your table — with simple packs for families, fitness and everyday nutrition.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#shop" className="rounded-full bg-[#d9b65d] px-7 py-4 font-bold text-[#171713] transition hover:scale-105">Shop Eggs</a>
            <a href="#business" className="rounded-full border border-white/20 px-7 py-4 font-bold transition hover:bg-white/10">Bulk / B2B</a>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8c6d21]">Pick your pack</p><h2 className="mt-3 text-4xl font-black md:text-6xl">Fresh eggs, your way.</h2></div>
          <p className="max-w-md text-black/60">Start small, stock the week, or order for the whole family.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[['06','6 Eggs','Quick & easy'],['10','10 Eggs','Everyday pack'],['30','30 Eggs','Stock-up pack']].map(([count,title,desc]) => (
            <article key={count} className="group rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-[#efe8d2]">
                <div className="text-center"><div className="text-8xl font-black tracking-tighter text-[#171713]">{count}</div><div className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-[#8c6d21]">EGGS</div></div>
              </div>
              <h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-2 text-black/55">{desc}</p>
              <button className="mt-6 w-full rounded-full bg-[#171713] px-5 py-3 font-bold text-white transition group-hover:bg-[#8c6d21]">View Pack</button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#dfe8cf] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[0.25em] text-[#456032]">From farm to you</p><h2 className="mt-4 text-4xl font-black md:text-6xl">Know where your eggs come from.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-black/65">A simple, transparent brand story built around freshness, quality and reliable supply.</p></div>
          <div className="grid grid-cols-2 gap-4"><div className="rounded-3xl bg-white/80 p-6"><div className="text-3xl font-black">FARM</div><p className="mt-2 text-sm text-black/55">Uttari Village, Kanpur</p></div><div className="rounded-3xl bg-white/80 p-6"><div className="text-3xl font-black">FRESH</div><p className="mt-2 text-sm text-black/55">Packed for everyday use</p></div><div className="rounded-3xl bg-white/80 p-6"><div className="text-3xl font-black">FIT</div><p className="mt-2 text-sm text-black/55">Made for active lifestyles</p></div><div className="rounded-3xl bg-white/80 p-6"><div className="text-3xl font-black">TRUST</div><p className="mt-2 text-sm text-black/55">A brand you can return to</p></div></div>
        </div>
      </section>

      <section id="business" className="bg-[#171713] px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d9b65d]">For businesses</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">Need eggs for your gym, restaurant or store?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Talk to Mr. Eggz about bulk requirements and reliable supply.</p>
          <a href="https://wa.me/919999999999" className="mt-8 inline-flex rounded-full bg-[#d9b65d] px-7 py-4 font-bold text-[#171713]">Talk on WhatsApp</a>
        </div>
      </section>

      <footer className="bg-[#171713] px-6 pb-10 text-center text-sm text-white/40">MR. EGGZ — Farm fresh, made simple.</footer>
    </main>
  );
}
