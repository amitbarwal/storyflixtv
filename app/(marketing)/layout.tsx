import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        default: "StoryFlix TV | Instant Entertainment",
        template: "%s | StoryFlix TV"
    },
    description: "Watch high-quality short movies and series anytime, anywhere.",
};

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
            >
                <SiteHeader />
                <main>
                    {children}
                </main>
                <SiteFooter />
            </body>
        </html>
    );
}
