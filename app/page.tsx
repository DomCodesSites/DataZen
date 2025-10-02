// app/page.tsx  (SERVER COMPONENT — no "use client")
export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-28">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          DataZen
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          Modern analytics, AI-assisted ops, and delightful UX. This is a static
          placeholder so we can deploy, then layer in interactions safely.
        </p>

        {/* Non-interactive placeholder button (no onClick) */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-cyan-400 transition"
            aria-disabled="true"
            onClick={undefined as any} // <— keeps TS quiet but does nothing
          >
            Schedule a free call (coming soon)
          </a>
        </div>
      </section>

      {/* Three simple static “pillars” */}
      <section className="mx-auto max-w-5xl px-6 pb-28 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Profit-first data model",
            desc: "Unify ads, store, and finance into one truth."
          },
          {
            title: "AI action layer",
            desc: "Flag anomalies and draft next steps automatically."
          },
          {
            title: "Weekly CFO view",
            desc: "Validate insights and set priorities quickly."
          }
        ].map((p, i) => (
          <div key={i} className="rounded-2xl border border-neutral-800 p-6">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-neutral-300">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-6 pb-16 text-sm text-neutral-400">
        © {new Date().getFullYear()} DataZen. All rights reserved.
      </footer>
    </main>
  );
}
