export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: "40px"
    }}>
      <div style={{ maxWidth: 760 }}>
        <div style={{ letterSpacing: "0.2em", color: "#34d399", fontSize: 12, fontWeight: 700 }}>
          MARKETING CFO FOR ECOMMERCE
        </div>
        <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: "12px 0 8px", fontWeight: 900 }}>
          DATA ZEN
        </h1>
        <p style={{ color: "#9ca3af" }}>
          We combine an AI driven data model with a dedicated Marketing CFO to give you clear, profit aligned weekly priorities.
        </p>
      </div>
    </main>
  );
}
