import type { Metadata } from "next";
import { Sora, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js WP Blog",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
