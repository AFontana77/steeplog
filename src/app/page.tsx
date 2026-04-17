import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, Star, ArrowRight, Download, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SteepLog — Search 5,000+ teas",
  description: "SteepLog has 5,000+ teas with origins, steep temps, times, and tasting notes. Log your sessions, track favorites, and build a tea knowledge base that grows with every cup.",
};

const FEATURES = [
  { icon: Database, title: "Tea database", body: "5,000+ teas with origin, steep temperature, time, and tasting notes." },
  { icon: BookOpen, title: "Session log", body: "Log tea, water temp, steep time, vessel, and your tasting notes." },
  { icon: BarChart3, title: "Steep parameters", body: "Optimal temperature and time for every tea type — stop guessing." },
  { icon: Star, title: "Flavor journal", body: "Build your personal vocabulary for what you taste and what you love." },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#ECFDF5' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-6">
              Search 5,000+ teas. Log your own.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Search 5,000+ teas.
              <br />
              <span className="text-emerald-900">Log your sessions.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              SteepLog combines a curated database of teas from Steepster and TeaDB with a personal session log. Search by type, origin, or flavor. Find optimal steep temperatures and times. Log your sessions with notes and ratings. Build the tea knowledge base your palate actually needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-emerald-800 text-white font-semibold px-8 py-3 rounded-xl hover:bg-emerald-900 transition-colors press-feedback min-h-[48px]">
                Browse the SteepLog Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Download
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Free app. No credit card. 5,000+ teas from Steepster + TeaDB.
            </p>
          </div>
        </section>

        {/* Database pitch */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              The database IS the app.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Most log apps give you a blank screen. SteepLog gives you 5,000+ teas from Steepster + TeaDB — searchable, organized, and ready to use. Log what you do. Build your personal collection alongside the reference library.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-emerald-800" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-emerald-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Get the free download first.
            </h2>
            <p className="text-gray-600 mb-6">
              Start with the printable reference sheet. Use it today, no app required. When you want the searchable database and log, get the app free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-emerald-800 text-white font-semibold px-8 py-3 rounded-xl hover:bg-emerald-900 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free PDF
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-emerald-200 text-emerald-900 font-medium px-8 py-3 rounded-xl hover:bg-emerald-50 transition-colors min-h-[48px]">
                Browse the Library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
