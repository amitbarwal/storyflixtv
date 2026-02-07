import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://storyflixtv.vercel.app'),
  title: {
    default: "StoryFlix TV | Premium Short Content",
    template: "%s | StoryFlix TV"
  },
  description: "Stream high-quality short movies, web series, and exclusive originals. Instant entertainment for the modern generation.",
  keywords: ["short movies", "web series", "streaming", "storyflixtv", "mini series", "drama", "thriller"],
  authors: [{ name: "StoryFlix TV Team" }],
  creator: "Next Gen Agency",
  openGraph: {
    title: "StoryFlix TV | Premium Short Content",
    description: "Your platform for instant entertainment. Watch award-winning short films and series.",
    url: 'https://storyflixtv.vercel.app',
    siteName: "StoryFlix TV",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop', // Hero image as default OG
        width: 1200,
        height: 630,
        alt: 'StoryFlix TV Hero Image',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryFlix TV | Premium Short Content",
    description: "Stream high-quality short movies, web series, and exclusive originals.",
    creator: "@storyflixtv",
    images: ['https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
