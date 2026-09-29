import type { Metadata } from 'next';
import Script from 'next/script';
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FK Gornje Sinkovce",
    template: "%s | FK Gornje Sinkovce",
  },
  description:
    "Zvanična stranica FK Gornje Sinkovce - Crno-beli ponos Gornjeg Sinkovca od 1980. godine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F2SRVWCS19"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F2SRVWCS19');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />

        <main className="flex-grow pt-20 min-h-[calc(100vh-80px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}