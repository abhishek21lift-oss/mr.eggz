const packs = [
  { size: '06', name: '6 Egg Pack', note: 'Quick everyday pack' },
  { size: '10', name: '10 Egg Pack', note: 'Made for the week' },
  { size: '30', name: '30 Egg Pack', note: 'Stock-up for home & fitness' },
];

function EggMark({ className = '' }: { className?: string }) {
  return (
    <div className={`relative h-16 w-12 ${className}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-[55%_45%_48%_52%/58%_54%_46%_42%] border-[3px] border-[#171713] bg-[#fffdf5] shadow-[5px_6px_0_#d9b65d]" />
      <div className="absolute left-3 top-5 h-5 w-5 rounded-full bg-[#f0b936] shadow-[inset_2px_2px_0_rgba(255,255,255,.5)]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ea] text-[#171713]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f4ea]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Mr. Eggz home">
            <div className="flex -space-x-3"><EggMark className="scale-75" /><EggMark className="scale-75" /></div>
            <div><div className="text-xl font-black tracking-[-0.06em]">MR. EGGZ</div><div className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#8c6d21]">farm fresh</div></div>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a className="transition hover:text-[#8c6d21]" href="#shop">Shop</a>
            <a className="transition hover:text-[#8c6d21]" href="#story">Our story</a>
            <a className="transition hover:text-[#8c6d21]" href="#business">For business</a>
          </div>
          <a href="#shop" className="rounded-full bg-[#171713] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#8c6d21]">Shop eggs</a>
        </nav>
      </header>

      <section id="top" className="relative bg-[#171713] text-[#f7f4ea]">
        <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#d9b65d]/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#6e8b52]/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center md:px-10 md:py-28">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#e7d38e]">Farm fresh · Kanpur</div>
            <h1 className="max-w-4xl text-5xl font-black leading-[.92] tracking-[-0.065em] sm:text-6xl md:text-8xl">Good eggs.<br /><span className="text-[#d9b65d]">Better everyday.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">From Uttari Village to your kitchen, Mr. Eggz is building a simple, trusted way to buy eggs for home, fitness and business.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#shop" className="rounded-full bg-[#d9b65d] px-6 py-4 font-black text-[#171713] transition hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(217,182,93,.2)]">Explore packs →</a>
              <a href="#business" className="rounded-full border border-white/15 px-6 py-4 font-bold text-white transition hover:bg-white/10">Bulk supply</a>
            </div>
          </div>

          <div className="relative mx-auto h-[390px] w-full max-w-[520px] md:h-[500px]">
            <div className="absolute inset-x-8 bottom-4 top-8 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[.02] shadow-2xl backdrop-blur-sm" />
            <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] items-center justify-center rounded-[2.7rem] border border-black/10 bg-[#f7f4ea] shadow-[18px_22px_0_rgba(217,182,93,.35)] sm:h-64 sm:w-64">
              <div className="text-center"><div className="text-[7rem] font-black leading-none tracking-[-.08em] text-[#171713]">30</div><div className="mt-2 text-xs font-black uppercase tracking-[.35em] text-[#8c6d21]">EGGS</div><div className="mt-4 text-[10px] font-bold uppercase tracking-[.22em] text-black/40">MR. EGGZ</div></div>
            </div>
            <div className="absolute left-2 top-14 rotate-[9deg] rounded-2xl bg-[#dfe8cf] p-4 text-[#171713] shadow-xl sm:left-5"><EggMark /><div className="mt-2 text-[10px] font-black uppercase tracking-widest">fresh</div></div>
            <div className="absolute bottom-9 right-0 rotate-[6deg] rounded-2xl border border-white/10 bg-[#efe8d2] p-4 text-[#171713] shadow-xl sm:right-3"><div className="text-3xl font-black">FARM</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[.2em] text-black/45">Uttari Village</div></div>
          </div>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-3 px-5 py-5 text-xs font-bold uppercase tracking-[.18em] text-white/40 md:px-10"><span>Home</span><span>Fitness</span><span>Families</span><span>Gyms</span><span>Restaurants</span><span>Retail</span></div></div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#8c6d21]">Choose your pack</p><h2 className="mt-3 max-w-3xl text-4xl font-black leading-none tracking-[-.05em] sm:text-5xl md:text-7xl">Eggs for the way you live.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-black/50 md:text-right">Simple packs for everyday meals, active lifestyles and stocking up at home.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {packs.map((pack, index) => (
            <article key={pack.size} className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(23,23,19,.10)]">
              <div className={`relative flex aspect-[1.05] items-center justify-center overflow-hidden rounded-[1.5rem] ${index === 1 ? 'bg-[#dfe8cf]' : 'bg-[#efe8d2]'}`}>
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-[18px] border-white/30" />
                <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border-[22px] border-white/25" />
                <div className="relative z-10 text-center"><div className="text-8xl font-black leading-none tracking-[-.08em]">{pack.size}</div><div className="mt-2 text-xs font-black uppercase tracking-[.3em] text-[#8c6d21]">EGGS</div></div>
              </div>
              <div className="p-2 pt-5"><div className="flex items-start justify-between gap-4"><div><h3 className="text-2xl font-black tracking-tight">{pack.name}</h3><p className="mt-1 text-sm text-black/45">{pack.note}</p></div><span className="rounded-full bg-[#f7f4ea] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#8c6d21]">Pack</span></div><button className="mt-6 w-full rounded-full bg-[#171713] px-5 py-3.5 text-sm font-black text-white transition group-hover:bg-[#8c6d21]">View pack</button></div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="bg-[#dfe8cf] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#456032]">Our starting point</p><h2 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.05em] sm:text-5xl md:text-7xl">From a village farm to everyday tables.</h2><p className="mt-6 max-w-xl text-base leading-7 text-black/60 sm:text-lg">Mr. Eggz is rooted in Uttari Village, Kanpur. The brand is being built around a clear idea: make the journey from farm to customer easier to understand and easier to trust.</p></div>
          <div className="grid grid-cols-2 gap-4"><div className="rounded-[1.8rem] bg-white/75 p-6 md:p-8"><div className="text-xs font-black uppercase tracking-widest text-black/40">01</div><div className="mt-12 text-2xl font-black">FARM</div><p className="mt-2 text-sm text-black/50">Uttari Village, Kanpur</p></div><div className="mt-8 rounded-[1.8rem] bg-[#171713] p-6 text-white md:p-8"><div className="text-xs font-black uppercase tracking-widest text-white/40">02</div><div className="mt-12 text-2xl font-black">FRESH</div><p className="mt-2 text-sm text-white/45">A focused farm-fresh proposition</p></div><div className="-mt-8 rounded-[1.8rem] bg-[#d9b65d] p-6 md:p-8"><div className="text-xs font-black uppercase tracking-widest text-black/40">03</div><div className="mt-12 text-2xl font-black">FIT</div><p className="mt-2 text-sm text-black/55">Built for active lifestyles too</p></div><div className="rounded-[1.8rem] bg-white/75 p-6 md:p-8"><div className="text-xs font-black uppercase tracking-widest text-black/40">04</div><div className="mt-12 text-2xl font-black">TRUST</div><p className="mt-2 text-sm text-black/50">Clear products. Clear ordering.</p></div></div>
        </div>
      </section>

      <section id="business" className="bg-[#171713] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="text-xs font-black uppercase tracking-[.28em] text-[#d9b65d]">For business</p><h2 className="mt-4 max-w-4xl text-4xl font-black leading-[.95] tracking-[-.05em] sm:text-5xl md:text-7xl">Your gym. Your restaurant. Your supply.</h2><p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">Need eggs in bulk? Mr. Eggz is building a direct route for gyms, restaurants, retailers and other bulk buyers to start a supply conversation.</p></div>
          <a href="#contact" className="inline-flex w-fit rounded-full bg-[#d9b65d] px-7 py-4 font-black text-[#171713] transition hover:-translate-y-1">Start a bulk enquiry →</a>
        </div>
      </section>

      <footer id="contact" className="bg-[#171713] px-5 pb-10 text-white/35 md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 text-sm md:flex-row md:items-center md:justify-between"><div className="font-black tracking-[-.03em] text-white/70">MR. EGGZ</div><div>Farm fresh · Kanpur</div><div>Built for home, fitness & business</div></div></footer>
    </main>
  );
}
