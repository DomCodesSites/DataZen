"use client";
import React, { useRef } from "react";

export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const max = 10;
  function move(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * max;
    const ry = (px - 0.5) * -max;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }
  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "rotateX(0deg) rotateY(0deg)";
  }
  return (
    <div onMouseMove={move} onMouseLeave={reset} className={`[perspective:800px] ${className}`}>
      <div ref={ref} className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-xl transition-transform duration-150">
        {children}
      </div>
    </div>
  );
}
