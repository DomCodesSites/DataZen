export const metadata = {
  title: "Data Zen",
  description: "Profit first analytics and action",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#0a0a0a", color: "white", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
