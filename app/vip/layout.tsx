import type { Metadata } from 'next';

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
        <div className="bg-black min-h-screen text-white">
            {/* 
        This layout intentionally does NOT include SiteHeader or SiteFooter.
        It isolates the VIP page content for a distraction-free landing page experience.
      */}
            {children}
        </div>
    );
}
