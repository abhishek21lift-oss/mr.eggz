"use client";

const links = [
  ["Home", "#top", "⌂"],
  ["Shop", "#shop", "◉"],
  ["Why", "#story", "✦"],
  ["About", "#story", "◎"],
  ["Contact", "#contact", "↗"],
] as const;

export function ResponsiveNav() {
  return <>
    <header className="mr-nav-landscape fixed inset-x-0 top-0 z-[60] border-b border-black/8 bg-white/80 px-5 py-3 text-[#171713] shadow-[0_8px_30px_rgba(20,18,10,.06)] backdrop-blur-2xl md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#top" className="shrink-0 text-xl font-black tracking-[-.06em]">MR. <span className="text-[#b47d1e]">EGGZ</span></a>
        <div className="flex flex-1 items-center justify-center gap-1.5">
          {links.map(([label, href], i) => <a key={`${label}-${href}`} href={href} className={`rounded-full px-4 py-2 text-sm font-bold transition hover:bg-[#f3ead4] hover:text-[#8c6d21] ${i === 0 ? "bg-[#f3ead4] text-[#8c6d21]" : "text-black/60"}`}>{label}</a>)}
        </div>
        <a href="#shop" className="shrink-0 rounded-full bg-[#c58d25] px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-[#a97517]">Shop eggs</a>
      </nav>
    </header>

    <aside className="mr-nav-portrait fixed inset-y-0 left-0 z-[60] flex w-[76px] flex-col items-center border-r border-black/8 bg-white/82 py-5 shadow-[8px_0_30px_rgba(20,18,10,.06)] backdrop-blur-2xl">
      <a href="#top" className="mb-7 text-center text-[11px] font-black leading-none tracking-[-.06em] text-[#171713]">MR.<br /><span className="text-[#b47d1e]">EGGZ</span></a>
      <nav className="flex w-full flex-1 flex-col items-center gap-2">
        {links.map(([label, href, icon], i) => <a key={`${label}-${href}`} href={href} className={`flex w-[60px] flex-col items-center gap-1 rounded-2xl px-1 py-3 text-center transition ${i === 0 ? "bg-[#f3ead4] text-[#8c6d21]" : "text-black/45 hover:bg-[#f7f4ea] hover:text-[#8c6d21]"}`}>
          <span className="text-lg font-black leading-none">{icon}</span><span className="text-[8px] font-black uppercase tracking-[.08em]">{label}</span>
        </a>)}
      </nav>
      <a href="#shop" className="mt-3 grid h-12 w-12 place-items-center rounded-2xl bg-[#c58d25] text-[9px] font-black uppercase tracking-[.08em] text-white shadow-md">Shop</a>
    </aside>
  </>;
}
