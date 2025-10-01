"use client";
import React, { useEffect, useState } from "react";

type Bit = { left: number; top: number; length: number; delay: number; rotate: number; speed: number };

export default function FloatingBits({ count = 24 }: { count?: number }) {
  const [bits, setBits] = useState<Bit[]>([]);
  useEffect(() => {
    const arr: Bit[] = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      length: 16 + Math.random() * 28,
      delay: Math.random() * 4,
      rotate: Math.random() * 360,
      speed: 8 + Math.random() * 10,
    }));
    setBits(arr);
  }, [count]);

  return (
    <>
      <style>{`
        @keyframes drift {
          0%   { transform: translateY(0) translateX(0) rotate(var(--rot)); opacity: .75; }
          50%  { transform: translateY(-18px) translateX(6px) rotate(calc(var(--rot) + 5deg)); opacity: .9; }
          100% { transform: translateY(0) translateX(0) rotate(var(--rot)); opacity: .75; }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(34,211,238,.08),transparent_60%)]" />
        {bits.map((b, i) => (
          <i
            key={i}
            style={
              {
                position: "absolute",
                left: `${b.left}%`,
                top: `${b.top}%`,
                width: `${b.length}px`,
                height: "2px",
                background:
                  i % 3 === 0
                    ? "linear-gradient(90deg, rgba(34,211,238,.8), rgba(139,92,246,.8))"
                    : "linear-gradient(90deg, rgba(139,92,246,.8), rgba(34,211,238,.8))",
                borderRadius: "2px",
                opacity: 0.8,
                animation: `drift ${b.speed}s ease-in-out ${b.delay}s infinite`,
                transform: `rotate(${b.rotate}deg)`,
                ["--rot" as any]: `${b.rotate}deg`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}
