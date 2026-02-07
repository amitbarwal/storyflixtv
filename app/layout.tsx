import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {

  metadataBase: new URL('https://storyflixtv.com'), // Replace with actual domain when deployed
  title: {
    default: "StoryFlix TV | Premium Short Content",
    template: "%s | StoryFlix TV"
  },
  description: "Discover, explore, and find your next favorite story with StoryFlix TV. Stream short movies, reels, and web series instantly.",
  keywords: ["movies", "streaming", "short films", "web series", "entertainment", "reels", "storyflixtv"],
  authors: [{ name: "StoryFlix TV Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://a2zmovie.com",
    title: "a2zmovie | Instant Entertainment",
    description: "Stream high-quality short movies and web series. Bite-sized entertainment for your busy lifestyle.",
    siteName: "a2zmovie",
    images: [
      {
        url: "/og-image.jpg", // We should probably ensure this exists or use a placeholder URL if we don't have one
        width: 1200,
        height: 630,
        alt: "a2zmovie - Instant Entertainment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "a2zmovie | Your Ultimate Movie Destination",
    description: "Discover the best short movies and web series.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased bg-gray-950 text-white min-h-screen flex flex-col`}>
        <SiteHeader />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
