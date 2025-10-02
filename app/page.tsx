// app/page.tsx  (Server Component – no "use client")
import FloatingBits from "../components/FloatingBits";
import Spotlight from "../components/Spotlight";
import ScrollProgress from "../components/ScrollProgress";
import { Reveal } from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import CountUp from "../components/CountUp";
import FloatingCTA from "../components/FloatingCTA";

export default function Page() {
  const pillars = [
    { title: "Profit first data model", desc: "Unify ads, store, and finance into one truth that maps to cash flow." },
    { title: "AI action layer", desc: "Agents flag anomalies and draft steps to pause losers or reallocate budget." },
    { title: "Weekly marketing CFO call", desc: "Validate insights, set priorities, keep execution accountable." },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Spotlight />
      <ScrollProgress />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-900/70 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="font-semibold tracking-tight">
            <span className="text-cyan-400">DATA</span> ZEN
          </div>
          {/* Non-interactive placeholder CTA for now */}
          <div className="rounded-xl bg-cyan-500/80 px-4 py-2 text-sm font-semibold text-neutral-900/90 opacity-90">
            Book a free consultation (soon)
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <FloatingBits count={28} />
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-24 text-center">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.35em] text-emerald-400/80">
              MARKETING CFO FOR ECOMMERCE
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-balance text-5xl font-black leading-tight sm:text-6xl">
              STOP GUESSING. <span className="text-cyan-400">GROW PROFITABLY.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto max-w-2xl text-pretty text-neutral-300">
              We combine an AI-driven data model with a dedicated Marketing CFO to give you clear,
              profit-aligned weekly priorities.
            </p>
          </Reveal>

          {/* simple metrics row */}
          <div className="mx-auto mt-6 grid w-full max-w-3xl grid-cols-3 gap-3">
            <Reveal delay={0.18}>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                <div className="text-2xl font-bold">
                  <CountUp to={7} suffix="d" /> 
                </div>
                <div className="text-xs text-neutral-400">Time to first insights</div>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                <div className="text-2xl font-bold">
                  <CountUp to={32} suffix="%" />
                </div>
                <div className="text-xs text-neutral-400">Avg. wasted spend trimmed</div>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                <div className="text-2xl font-bold">
                  <CountUp to={12} suffix="w" />
                </div>
                <div className="text-xs text-neutral-400">Payback window</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <Reveal>
          <h2 className="mb-6 text-2xl font-semibold">How Data Zen helps</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Reveal key={p.title}>
              <TiltCard>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">★</div>
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-neutral-300">{p.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Floating bottom-right CTA (client side – no click yet) */}
      <FloatingCTA label="Schedule a FREE call" />
    </main>
  );
}
