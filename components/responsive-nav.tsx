"use client";

import { useState } from "react";

const links = [["Home", "#top"], ["Shop", "#shop"], ["Why choose MR.EGGZ", "#why"], ["About Us", "#story"], ["Contact Us", "#contact"]] as const;

export function ResponsiveNav() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="mr-nav-landscape fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-[#171713]/75 px-6 py-3 text-white shadow-lg backdrop-blur-2xl md:px-10"><nav className="mx-auto flex max-w-7xl items-center justify-between gap-8"><a href="#top" className="shrink-0 text-xl font-black tracking-[-.06em]">MR. <span className="text-[#d9b65d]">EGGZ</span></a><div className="flex flex-1 items-center justify-center gap-2">{links.map(([label, href], i) => <a key={href} href={href} className={`rounded-full px-4 py-2 text-sm font-bold transition hover:bg-white/10 hover:text-[#d9b65d] ${i === 0 ? "bg-white/10 text-[#d9b65d]" : "text-white/75"}`}>{label}</a>)}</div><a href="#shop" className="shrink-0 rounded-full bg-[#d9b65d] px-5 py-2.5 text-sm font-black text-[#171713]">Shop eggs</a></nav></header>
    <button aria-label="Open navigation" onClick={() => setOpen(true)} className="mr-nav-portrait-trigger fixed right-4 top-4 z-[60] rounded-2xl border border-black/10 bg-[#f7f4ea]/90 px-4 py-3 shadow-xl backdrop-blur-xl"><span className="block h-0.5 w-6 bg-[#171713]"/><span className="mt-1.5 block h-0.5 w-4 bg-[#171713]"/></button>
    {open && <div className="mr-nav-portrait fixed inset-0 z-[70] bg-black/25 backdrop-blur-[2px]" onClick={() => setOpen(false)}><aside className="ml-auto flex h-full w-[min(86vw,360px)] flex-col bg-[#f7f4ea] px-7 py-8 shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="flex items-center justify-between border-b border-black/10 pb-7"><a href="#top" onClick={() => setOpen(false)} className="text-xl font-black tracking-[-.06em]">MR. <span className="text-[#8c6d21]">EGGZ</span></a><button aria-label="Close navigation" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 text-2xl leading-none">×</button></div><nav className="flex flex-col pt-5">{links.map(([label, href], i) => <a key={href} href={href} onClick={() => setOpen(false)} className={`border-b border-black/[.06] py-6 text-lg font-bold transition ${i === 0 ? "text-[#8c6d21]" : "text-[#171713]"}`}>{label}</a>)}</nav><a href="#shop" onClick={() => setOpen(false)} className="mt-auto rounded-full bg-[#171713] px-6 py-4 text-center font-black text-white">Shop eggs →</a></aside></div>}
  </>;
}
