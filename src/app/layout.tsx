import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arriana's Crinkle Cookies",
  description: "Crinkle Cookies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex items-center justify-between px-8 py-4 bg-[rgb(51.4% 0.222 16.935)]-100 text-white shadow-md">
          <span className="font-bold text-2xl">
            Arianna&#39;s Crinkle Cookies
          </span>
          <div className="flex gap-6 text-md font-semibold">
            <Link href="/">Home</Link>
            <Link href="/order">Order</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
