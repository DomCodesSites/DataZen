import FloatingBits from "@/components/FloatingBits";
import Spotlight from "@/components/Spotlight";
import ScrollProgress from "@/components/ScrollProgress";
import { Reveal } from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CountUp from "@/components/CountUp";

export default function Page() {
  const pillars = [
    { title: "Profit first data model", desc: "Unify ads, store, and finance into one truth that maps to cash flow.", icon: "★" },
    { title: "AI action layer", desc: "Agents flag anomalies and draft steps like pause losers or reallocate budget.", icon: "⚙︎" },
    { title: "Weekly marketing CFO call", desc: "Validate insights, set priorities, keep execution accountable.", icon: "✔︎" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Spotlight />
      <ScrollProgress />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="font-semibold tracking-tight">
            <span className="text-cyan-400">DATA</span> ZEN
          </div>
          <button
            onClick={() => (document.getElementById("calendly-modal") as HTMLDialogElement)?.showModal()}
            className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-neutral-900 hover:bg-cyan-400"
          >
            Book a free consultation
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <FloatingBits count={28} />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400">
              MARKETING CFO SERVICE FOR ECOMMERCE BRANDS
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              STOP GUESSING, <br className="hidden sm:inline" />
              START EXECUTING (placeholder) with <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Profit First</span> AI
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-neutral-300">
              We combine an AI driven data model with a dedicated Marketing CFO to give you clear, actionable, profit aligned weekly priorities.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex items-center justify-center gap-3">
              <a
                href="#assessment"
                className="rounded-full bg-white px-6 py-3 font-semibold text-neutral-900 shadow-xl hover:scale-[1.03] transition"
              >
                Get your free 20 min profit assessment
              </a>
              <a href="#features" className="rounded-full border border-neutral-800 px-6 py-3 font-semibold hover:border-neutral-700">
                Explore features
              </a>
            </div>
          </Reveal>

          {/* Disclaimer */}
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-yellow-400/40 bg-neutral-800/60 p-5 text-yellow-400 shadow-lg shadow-yellow-400/10">
            <div className="text-lg font-semibold">
              ⚠️ DISCLAIMER: If we do not make you more money than we cost, we send your money back plus 200 dollars.
            </div>
          </div>

          {/* Metric */}
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-emerald-400 p-8 text-neutral-900 shadow-2xl shadow-emerald-400/40">
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div className="text-7xl font-extrabold leading-none"><CountUp end={42} /></div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-extrabold">Average increase in new customer revenue</div>
                <div className="text-sm font-medium">90 days after signing with Data Zen</div>
              </div>
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="mx-auto mt-16 max-w-6xl rounded-2xl border border-cyan-400/40 bg-neutral-900 p-4 shadow-2xl shadow-cyan-400/20">
            <div className="mb-2 flex items-center justify-between text-neutral-300">
              <div className="font-semibold">Real time profitability dashboard</div>
              <div className="text-sm text-emerald-400">Updated daily</div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg bg-neutral-950">
              <div className="absolute inset-0 flex items-end gap-1 p-3">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-full w-full rounded"
                    style={{
                      height: `${Math.floor(20 + Math.random() * 70)}%`,
                      background: i % 2 ? "rgba(34,211,238,.7)" : "rgba(16,185,129,.7)",
                    }}
                  />
                ))}
              </div>
              <svg className="pointer-events-none absolute inset-0 opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 80 C 20 60, 40 90, 60 70 C 80 50, 100 65" stroke="#8b5cf6" strokeWidth="2" fill="none"
                  style={{ strokeDasharray: 1000, strokeDashoffset: 0, animation: "dash 5s linear infinite" }} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="features" className="border-t border-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">What Data Zen does</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((it) => (
              <TiltCard key={it.title}>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">{it.icon}</div>
                <div className="text-lg font-semibold">{it.title}</div>
                <p className="mt-2 text-sm text-neutral-300">{it.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-neutral-900 bg-neutral-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-3xl font-extrabold sm:text-5xl">
            The complexity of ecommerce data is the <span className="text-cyan-300">most expensive hidden cost</span> for DTC brands.
          </p>
          <p className="mt-6 text-neutral-400">Data Zen 2025 market assessment</p>
        </div>
      </section>

      {/* Open letter */}
      <section className="bg-[#eeecf6] py-20 text-[#0f172a]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-sm font-medium text-[#374151]">
            Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>
          <div className="mt-2 h-0.5 w-24 bg-[#8b5cf6]" />
          <h3 className="mt-8 text-2xl font-extrabold">Dear Business Builder,</h3>
          <div className="mt-8 space-y-6">
            <p className="text-xl leading-9 text-[#111827]">We see you.</p>
            <p className="text-xl leading-9 text-[#111827]">You are working late every night to make your business work.</p>
            <p className="text-xl leading-9 text-[#111827]">Visitors flood your website but they leave without purchasing.</p>
            <p className="text-xl leading-9 text-[#111827]">Money goes into ads but you are not sure what moves the needle.</p>
            <p className="text-xl leading-9 text-[#111827]">Dashboards everywhere but no single place that tells you what to do next.</p>
          </div>
          <button
            onClick={() => (document.getElementById("calendly-modal") as HTMLDialogElement)?.showModal()}
            className="mt-10 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-xl hover:bg-emerald-400"
          >
            Schedule my free call now
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-neutral-900 bg-neutral-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h4 className="text-2xl font-semibold">Get the weekly profit memo</h4>
          <p className="mt-2 text-neutral-400">No spam, only decisions worth making.</p>
          <div className="mt-6">
            {/* Replace your-substack with your publication handle */}
            <iframe
              src="https://your-substack.substack.com/embed"
              width="100%"
              height="320"
              style={{ background: "#111827", borderRadius: 12, border: "1px solid #262626" }}
            />
          </div>
        </div>
      </section>

      {/* Calendly modal */}
      <dialog id="calendly-modal" className="rounded-2xl p-0 backdrop:bg-black/70">
        <div className="w-[90vw] max-w-2xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
          <div className="flex items-center justify-between border-b border-neutral-900 p-3">
            <div className="text-sm font-medium text-neutral-300">Book a call</div>
            <button onClick={() => (document.getElementById("calendly-modal") as HTMLDialogElement)?.close()}
              className="rounded-md border border-neutral-800 px-2 py-1 text-sm text-neutral-300 hover:bg-neutral-900">Close</button>
          </div>
          {/* Replace with your real Calendly link */}
          <iframe src="https://calendly.com/your-username/30min" className="h-[70vh] w-full" frameBorder={0} />
        </div>
      </dialog>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-cyan-400" />
            <span>© {new Date().getFullYear()} Data Zen</span>
          </div>
          <div className="flex gap-5 text-sm text-neutral-400">
            <a href="#" className="hover:text-neutral-200">Privacy</a>
            <a href="#" className="hover:text-neutral-200">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
