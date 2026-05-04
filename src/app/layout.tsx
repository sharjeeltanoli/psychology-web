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
  title: {
    default: "Ms. Ayman Yamin | Clinical Psychologist",
    template: "%s | Ms. Ayman Yamin",
  },
  description:
    "Ms. Ayman Yamin is a Clinical Psychologist offering online therapy for anxiety, depression, trauma, addiction & more. Sessions available worldwide in Urdu & English.",
  keywords: [
    "clinical psychologist Pakistan",
    "online therapy Pakistan",
    "anxiety treatment",
    "depression counseling",
    "psychologist Islamabad",
    "online psychologist",
    "mental health Pakistan",
    "CBT therapy",
    "trauma therapy",
    "addiction recovery",
  ],
  authors: [{ name: "Ms. Ayman Yamin" }],
  creator: "Ms. Ayman Yamin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aymanyamin.vercel.app",
    title: "Ms. Ayman Yamin | Clinical Psychologist",
    description:
      "Online therapy for anxiety, depression, trauma & more. Available worldwide.",
    siteName: "Ms. Ayman Yamin",
    images: [
      {
        url: "/images/ayman.jpg",
        width: 1200,
        height: 630,
        alt: "Ms. Ayman Yamin - Clinical Psychologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ms. Ayman Yamin | Clinical Psychologist",
    description:
      "Online therapy for anxiety, depression, trauma & more. Available worldwide.",
    images: ["/images/ayman.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ms. Ayman Yamin",
    "jobTitle": "Clinical Psychologist",
    "description": "Clinical Psychologist offering online therapy for anxiety, depression, trauma, addiction and more.",
    "url": "https://aymanyamin.vercel.app",
    "image": "https://aymanyamin.vercel.app/images/ayman.jpg",
    "email": "aymanyamin427@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    },
    "knowsAbout": [
      "Anxiety", "Depression", "Trauma", "PTSD", "OCD",
      "Addiction", "Psychosis", "Couples Therapy", "CBT"
    ],
    "knowsLanguage": ["Urdu", "English"],
    "memberOf": {
      "@type": "Organization",
      "name": "American Psychological Association"
    },
    "sameAs": [
      "https://www.linkedin.com/in/ayman-yamin-17184b29b/"
    ]
  }

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
