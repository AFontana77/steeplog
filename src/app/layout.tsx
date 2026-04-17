import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.steeplog.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SteepLog — Search 5,000+ teas",
    template: "%s | SteepLog",
  },
  description: "SteepLog has 5,000+ teas with origins, steep temps, times, and tasting notes. Log your sessions, track favorites, and build a tea knowledge base that grows with every cup.",
  keywords: ["tea journal app", "tea tracker", "steep log", "tea session log", "tea tasting notes app"],
  authors: [{ name: "Anvil Road LLC" }],
  creator: "Anvil Road LLC",
  publisher: "Anvil Road LLC",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SteepLog",
    title: "SteepLog — Search 5,000+ teas",
    description: "SteepLog has 5,000+ teas with origins, steep temps, times, and tasting notes. Log your sessions, track favorites, and build a tea knowledge base that grows with every cup.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SteepLog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SteepLog — Search 5,000+ teas",
    description: "SteepLog has 5,000+ teas with origins, steep temps, times, and tasting notes. Log your sessions, track favorites, and build a tea knowledge base that grows with every cup.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#065F46",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
