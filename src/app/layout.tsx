import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartSlider from "@/components/CartSlider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zohaibglobal.com'),
  title: {
    default: "Zohaib Global Enterprises",
    template: "%s | Zohaib Global Enterprises",
  },
  description: "Zohaib Global Enterprises delivers enterprise-grade software development, mobile applications, SaaS platforms, and IT consulting worldwide.",
  keywords: ["software development", "mobile app development", "SaaS", "IT consulting", "ERP", "CRM", "web design", "ecommerce development", "Zohaib Global Enterprises", "SMC private limited"],
  authors: [{ name: "Zohaib Global Enterprises" }],
  creator: "Zohaib Global Enterprises",
  publisher: "Zohaib Global Enterprises",
  openGraph: {
    title: "Zohaib Global Enterprises",
    description: "Enterprise-grade software development and IT infrastructure solutions.",
    url: "https://zohaibglobal.com",
    siteName: "Zohaib Global Enterprises",
    images: [
      {
        url: "/logo-new.webp",
        width: 1200,
        height: 630,
        alt: "Zohaib Global Enterprises Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zohaib Global Enterprises",
    description: "Enterprise-grade software development and IT infrastructure solutions.",
    images: ["/logo-new.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://zohaibglobal.com",
  },
  icons: {
    icon: "/icon.png",
  },
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
        <CartProvider>
          {children}
          <CartSlider />
        </CartProvider>
      </body>
    </html>
  );
}
