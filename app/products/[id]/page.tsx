const productData: Record<string, { name: string; count: number; description: string }> = {
  "6": { name: "6 Egg Pack", count: 6, description: "A compact pack for quick, everyday orders." },
  "10": { name: "10 Egg Pack", count: 10, description: "The everyday family and fitness pack." },
  "30": { name: "30 Egg Pack", count: 30, description: "A stock-up pack for regular egg buyers." },
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productData[id] ?? productData["10"];

  return (
    <main className="min-h-screen bg-[#f7f4ea] text-[#171713]">
      <header className="border-b border-black/10 bg-[#f7f4ea] px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-black">MR. <span className="text-[#8c6d21]">EGGZ</span></a>
          <a href="/products" className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold">Back to shop</a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:px-12 md:py-20">
        <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-[#efe8d2]">
          <div className="text-center"><div className="text-[8rem] font-black leading-none md:text-[11rem]">{product.count}</div><div className="mt-3 text-sm font-black uppercase tracking-[.3em] text-[#8c6d21]">fresh eggs</div></div>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[.28em] text-[#8c6d21]">Mr. Eggz pack</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">{product.name}</h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-black/60">{product.description}</p>
          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6">
            <div className="flex items-center justify-between"><span className="font-bold">Pack quantity</span><span className="font-black">{product.count} eggs</span></div>
            <p className="mt-4 text-sm leading-6 text-black/50">Price and availability will be connected to the real product catalogue before checkout goes live.</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><button className="rounded-full bg-[#171713] px-8 py-4 font-black text-white">Add to cart</button><a href="/#business" className="rounded-full border border-black/15 px-8 py-4 text-center font-black">Bulk enquiry</a></div>
        </div>
      </section>
    </main>
  );
}
