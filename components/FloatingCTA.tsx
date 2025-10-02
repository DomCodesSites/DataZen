// components/FloatingCTA.tsx
"use client";
import React, { useRef } from "react";

export default function FloatingCTA({ label = "Schedule a FREE call" }: { label?: string }) {
  const ref = useRef<HTMLButtonElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    // clamp a subtle magnetic pull
    const dx = Math.max(-12, Math.min(12, mx * 0.2));
    const dy = Math.max(-12, Math.min(12, my * 0.2));
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }
  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = `translate(0, 0)`;
  }

  return (
    <div
      className="pointer-events-none fixed bottom-6 right-6 z-[60]"
      aria-hidden
    >
      <button
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        // no onClick yet
        className="pointer-events-auto rounded-full px-5 py-3 text-sm font-semibold
                   text-neutral-900 shadow-xl transition
                   bg-gradient-to-r from-cyan-400 to-violet-400
                   hover:shadow-2xl"
      >
        {label}
      </button>
    </div>
  );
}
