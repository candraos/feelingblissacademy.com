import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { seoConfig, siteConfig } from "@/lib/site-config";

const candaraArabic = localFont({
  src: "./fonts/Candarab.ttf",
  variable: "--font-candara-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  applicationName: siteConfig.englishName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.englishName,
    locale: "ar_LB",
    type: "website",
    images: [
      {
        url: siteConfig.logoUrl,
        width: 1258,
        height: 1254,
        alt: "شعار Feeling Bliss Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [siteConfig.logoUrl],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d6664",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={candaraArabic.variable}
    >
      <body>{children}</body>
    </html>
  );
}
