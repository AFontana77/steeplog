import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About SteepLog",
  description: "The story behind SteepLog. Search 173+ teas. Log your sessions. Build your tea knowledge.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="py-20 px-4" style={{ backgroundColor: '#ECFDF5' }}>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About SteepLog</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              SteepLog was built for tea drinkers who want to learn from every cup but have no system for remembering what they learned. A spectacular Dong Ding is hard to replicate if you don't know the vendor, the water temp, or how long you steeped it. SteepLog pairs a curated tea database with a session log so you can look up a tea before you buy and record what worked before you forget. The companion app for iPhone and Android adds gong fu timing, steep counting for re-steeping, and daily brewing reminders.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              SteepLog is published by Anvil Road LLC, a small product studio building practical apps and reference tools for hobbyists, professionals, and makers. Every product in the portfolio follows the same principle: a curated, searchable database paired with a personal log. Search what the experts know. Record what you discover.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-emerald-800 text-white font-semibold px-8 py-3 rounded-xl hover:bg-emerald-900 transition-colors press-feedback min-h-[48px]">
                Browse the Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                Free Download
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Built by Anvil Road LLC</h2>
            <p className="text-gray-600 leading-relaxed">
              Anvil Road is an independent publisher and app studio based in New Jersey. We build reference databases, log apps, KDP books, and companion print products across a range of hobby and professional categories. SteepLog is one of 20+ apps in the Anvil Road portfolio. All apps are free to start, with one-time unlocks for unlimited features. No subscriptions.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
