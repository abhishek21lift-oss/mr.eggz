"use client";

import { useEffect, useRef } from "react";

export function EggHero() {
  const eggRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = eggRef.current;
    if (!node) return;
    let raf = 0;
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * -8;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { node.style.setProperty("--rx", `${y}deg`); node.style.setProperty("--ry", `${x}deg`); });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); };
  }, []);

  return <div className="relative mx-auto h-[460px] w-full max-w-[560px] [perspective:1200px] md:h-[600px]" aria-label="Mr. Eggz premium egg visual"><div className="absolute inset-8 rounded-full bg-[#d9b65d]/20 blur-[70px]"/><div className="absolute bottom-7 left-1/2 h-12 w-72 -translate-x-1/2 rounded-[50%] bg-black/40 blur-2xl"/><div ref={eggRef} className="absolute left-1/2 top-1/2 h-[330px] w-[245px] -translate-x-1/2 -translate-y-1/2 [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_rotateZ(-7deg)] transition-transform duration-500 ease-out md:h-[430px] md:w-[315px]"><div className="absolute inset-0 overflow-hidden rounded-[54%_46%_49%_51%/57%_57%_43%_43%] border border-white/80 bg-[radial-gradient(circle_at_35%_22%,#fffef8_0%,#f8f0d9_32%,#e3d3aa_68%,#a99262_100%)] shadow-[inset_-28px_-34px_50px_rgba(84,65,29,.28),inset_24px_20px_45px_rgba(255,255,255,.75),18px_35px_50px_rgba(0,0,0,.28)]"><div className="absolute -left-12 top-16 h-52 w-40 rotate-[20deg] rounded-full bg-white/50 blur-3xl"/><div className="absolute right-3 top-1/3 h-44 w-20 rounded-full bg-[#b59b65]/20 blur-2xl"/></div><div className="absolute -right-8 top-12 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[.25em] text-[#171713] shadow-xl backdrop-blur">Farm fresh</div><div className="absolute -bottom-4 -left-10 rounded-2xl border border-white/30 bg-[#171713]/90 px-5 py-3 text-white shadow-xl backdrop-blur"><div className="text-lg font-black">MR. EGGZ</div><div className="text-[8px] font-bold uppercase tracking-[.25em] text-[#d9b65d]">Uttari Village · Kanpur</div></div></div></div>;
}
