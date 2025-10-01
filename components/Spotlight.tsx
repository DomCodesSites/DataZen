"use client";
import React, { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(200px 200px at ${pos.x}px ${pos.y}px, rgba(34,211,238,.18), transparent 60%)`,
        mixBlendMode: "screen",
      }}
    />
  );
}
