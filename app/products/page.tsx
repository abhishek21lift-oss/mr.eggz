const products = [
  { id: "6", name: "6 Egg Pack", count: 6, description: "A compact pack for quick, everyday orders." },
  { id: "10", name: "10 Egg Pack", count: 10, description: "The everyday family and fitness pack." },
  { id: "30", name: "30 Egg Pack", count: 30, description: "A stock-up pack for regular egg buyers." },
];

function EggVisual({ count }: { count: number }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] bg-[#efe8d2]">
      <div className="relative h-44 w-56">
        <div className="absolute bottom-0 left-1/2 h-20 w-52 -translate-x-1/2 rounded-[2rem] bg-[#d2c39a] shadow-[inset_0_-10px_0_rgba(0,0,0,.08)]" />
        {Array.from({ length: Math.min(count, 10) }).map((_, i) => (
          <span key={i} className="absolute h-16 w-14 rounded-[50%] bg-[#fffaf0] shadow-[0_10px_20px_rgba(0,0,0,.14)]" style={{ left: `${18 + (i % 5) * 34}px`, top: `${48 + Math.floor(i / 5) * 38}px` }} />
        ))}
        <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-[#171713] px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-[#d9b65d]">{count} eggs</span>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f4ea]/90 px-6 py-4 backdrop-blur-xl md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-black tracking-tight">MR. <span className="text-[#8c6d21]">EGGZ</span></a>
          <a href="/" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Home</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-12 md:pt-24">
        <p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">The Mr. Eggz shop</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Pick your pack.</h1>
          <p className="max-w-md text-lg leading-7 text-black/55">Simple pack sizes for everyday customers, families and fitness-focused buyers.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3 md:px-12">
        {products.map((product) => (
          <article key={product.id} className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <EggVisual count={product.count} />
            <div className="px-2 pb-2 pt-7">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-black">{product.name}</h2>
                <span className="rounded-full bg-[#dfe8cf] px-3 py-1 text-xs font-black text-[#456032]">{product.count} eggs</span>
              </div>
              <p className="mt-3 min-h-14 text-black/55">{product.description}</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <button className="rounded-full bg-[#171713] px-5 py-3 font-bold text-white transition hover:bg-[#8c6d21]">Add to cart</button>
                <button className="rounded-full border border-black/10 px-5 py-3 font-bold transition hover:bg-[#f7f4ea]">Details</button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#171713] px-6 py-16 text-white md:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-black uppercase tracking-[.25em] text-[#d9b65d]">Buying in bulk?</p>
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><h2 className="text-4xl font-black md:text-5xl">Need regular supply?</h2><p className="mt-4 max-w-2xl text-white/55">Gyms, restaurants, retailers and other businesses can enquire about bulk requirements.</p></div>
            <a href="/#business" className="shrink-0 rounded-full bg-[#d9b65d] px-7 py-4 font-black text-[#171713]">Bulk enquiry</a>
          </div>
        </div>
      </section>
    </main>
  );
}
