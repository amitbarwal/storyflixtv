import type { Metadata } from 'next';
import { Outfit } from "next/font/google";
import "../../globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'StoryFlixTV Premium Membership – ₹2 Free Trial',
    description: 'Unlock all shows and exclusive content on StoryFlixTV. Start for free with a ₹2 membership plan.',
    openGraph: {
        title: 'StoryFlixTV Premium Membership – ₹2 Free Trial',
        description: 'Unlock all shows and exclusive content on StoryFlixTV. Start for free with a ₹2 membership plan.',
        url: '/vip',
        siteName: 'StoryFlix TV',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'StoryFlixTV Premium Membership – ₹2 Free Trial',
        description: 'Unlock all shows and exclusive content on StoryFlixTV.',
    },
};

export default function VipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased bg-black text-white min-h-screen`}>
                {children}
            </body>
        </html>
    );
}
