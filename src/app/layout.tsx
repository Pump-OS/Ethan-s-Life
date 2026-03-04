import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethan's Life | A Short Series",
  description:
    "A quiet suburb. A secret group. A teenager who wanted more and got more than he bargained for. Watch Ethan's Life, a cinematic short series about pressure, ambition, and the price of easy money.",
  keywords: ["Ethan's Life", "short series", "web series", "drama", "teen"],
  openGraph: {
    title: "Ethan's Life | A Short Series",
    description:
      "A quiet suburb. A secret group. A teenager who wanted more and got more than he bargained for.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-surface antialiased">{children}</body>
    </html>
  );
}
