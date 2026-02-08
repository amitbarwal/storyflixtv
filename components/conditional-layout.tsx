'use client';

import { usePathname } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // Hide header/footer only on /vip route
    const isVipPage = pathname === '/vip';

    return (
        <>
            {!isVipPage && <SiteHeader />}
            <main className={`flex-grow ${!isVipPage ? 'pt-20' : ''}`}>
                {children}
            </main>
            {!isVipPage && <SiteFooter />}
        </>
    );
}
