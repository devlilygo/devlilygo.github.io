import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dailily — Daily Lily 🩵",
  description: "Daily Lily, softly growing 🩵",
  openGraph: {
    title: "🩵 Dailily — Daily Lily",
    description:
      "Welcome to Dailily — Daily Lily’s personal space for tiny wins.",
    url: "https://lilygo.vercel.app",
    siteName: "Dailily",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dailily by Lily",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🩵 Dailily — Daily Lily",
    description: "Daily Lily, softly growing 🩵",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://lilygo.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
