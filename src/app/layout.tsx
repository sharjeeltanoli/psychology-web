import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ms. Ayman Yamin | Clinical Psychologist",
  description: "Professional psychology services for anxiety, depression, relationships and more. Online sessions available worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
  lang="en"
  className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
>
  <body className="min-h-full flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </body>
</html>
  );
}