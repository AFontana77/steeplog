import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tea Tasting Journal — What to Track and How to Start | SteepLog',
  description:
    'How to keep a tea tasting journal. What to log for every cup — tea name, water temp, steep time, flavor notes, and rating. SteepLog does it all in your pocket.',
};

const LOG_FIELDS = [
  {
    field: 'Tea name and origin',
    why: 'The most basic entry. Name, producer, and where it is from. A Darjeeling First Flush from different estates tastes very different — origin matters.',
  },
  {
    field: 'Vendor and purchase date',
    why: 'Tea is freshest in the first 6–12 months after production. Logging when you bought it tells you how old the tea is when you drink it.',
  },
  {
    field: 'Dry leaf appearance',
    why: 'Color, size, shape, texture, and dry aroma. This tells you a lot before the water goes in. Dark green and flat? Probably Longjing. Tight brown pellets? Gunpowder.',
  },
  {
    field: 'Water temperature',
    why: 'The most important brewing variable. Log it every session. If a green tea tasted bitter, check the temperature — that is almost always the cause.',
  },
  {
    field: 'Steep time',
    why: 'How long you steeped it. This and temperature together explain 90% of flavor outcomes.',
  },
  {
    field: 'Infusion number',
    why: 'First steep, second, third. The character changes with each infusion. Logging infusion number helps you find which steep you like best for each tea.',
  },
  {
    field: 'Liquor color',
    why: 'What the brewed tea looks like in the cup. Pale yellow, golden amber, deep brown, rusty orange. Color gives context before you taste.',
  },
  {
    field: 'Aroma when wet',
    why: 'The smell of the wet leaves and the brewed liquor. Often different from the dry aroma. This is where the real character shows.',
  },
  {
    field: 'Flavor notes',
    why: 'First sip, mid-palate, and finish. What hits you first? What lingers? Even basic notes ("floral up front, slightly bitter finish") help enormously when you return to the same tea.',
  },
  {
    field: 'Overall rating',
    why: 'A simple 1–5 or 1–10 rating. Keeps you honest. Over time, patterns in your ratings reveal what you actually like.',
  },
];

const FLAVOR_CATEGORIES = [
  { category: 'Floral', examples: 'Jasmine, rose, orchid, lilac, lavender' },
  { category: 'Fruity', examples: 'Peach, apricot, citrus, berry, melon, raisin' },
  { category: 'Vegetal', examples: 'Grassy, hay, seaweed, spinach, artichoke' },
  { category: 'Nutty', examples: 'Roasted chestnuts, almonds, toasted grain' },
  { category: 'Earthy', examples: 'Soil, mushroom, forest floor, wet leaves' },
  { category: 'Roasted', examples: 'Charcoal, coffee, dark chocolate, smoke' },
  { category: 'Sweet', examples: 'Honey, caramel, vanilla, malt, brown sugar' },
  { category: 'Bitter / Astringent', examples: 'Drying mouthfeel, tannin, dark greens' },
];

export default function TeaTastingJournalPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <BookOpen className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tea Tasting Journal
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              What to log, how to describe flavor, and why keeping notes makes every cup better.
            </p>
          </div>
        </section>

        {/* Why keep a journal */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why keep a tea journal?</h2>
            <div className="space-y-5">
              <div className="bg-green-50 rounded-xl p-6">
                <p className="font-semibold text-gray-900 mb-2">You will forget what worked</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  That Taiwanese oolong you brewed perfectly last month — what temperature did you use? How long did you steep it? Without a log, you are starting from scratch every time. With one, you can recreate your best cup exactly.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="font-semibold text-gray-900 mb-2">You find patterns in what you actually like</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Over 20 or 30 logged sessions, patterns become clear. Maybe every tea you rated 5 stars has floral or stone fruit notes. Maybe you consistently rate grassy greens lower. The log reveals your palate to you — without you having to think about it.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="font-semibold text-gray-900 mb-2">You build a palate faster</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Writing flavor notes forces you to pay attention. Even basic notes make you a more attentive drinker. Attention builds a palate. After six months of logging, you will notice things in tea that were invisible to you before.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="font-semibold text-gray-900 mb-2">You track vendors and sources</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Which vendor had the best Darjeeling? Did that tea from last spring taste better or worse than this year's? A journal with vendor and purchase date turns into a buying guide over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to log */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">What to log for every session</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              You do not need to fill in every field every time. Even five fields per session builds up into something useful.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {LOG_FIELDS.map((item, i) => (
                <div key={item.field} className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.field}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flavor wheel */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Flavor wheel basics</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              You do not need to write a novel for each session. Start by picking a category, then get more specific as you get more practice. Here are the main flavor families in tea:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {FLAVOR_CATEGORIES.map((fc) => (
                <div key={fc.category} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="text-green-700 shrink-0" size={16} />
                    <p className="font-semibold text-gray-900">{fc.category}</p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{fc.examples}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-6 p-4 bg-green-50 rounded-xl">
              Start simple. "Floral and sweet" is a valid note. Over time you will get more specific: "orchid on the nose, honey in the mid-palate, light astringency on the finish." The first step is just paying attention.
            </p>
          </div>
        </section>

        {/* Paper vs app */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Paper vs. app</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Paper notebook</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Satisfying to write in. No battery. No screen. A dedicated tea journal feels ceremonial — which is part of the point.
                </p>
                <p className="text-sm text-gray-500">
                  Downside: hard to search, hard to compare across sessions, no way to filter by rating or tea type.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Dedicated app</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Search across every session instantly. Filter by tea type, rating, or vendor. See all your notes on one tea side-by-side. Compare how the same tea tasted six months apart.
                </p>
                <p className="text-sm text-gray-500">
                  Downside: a phone in your tea session. Worth it for serious tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <BookOpen className="text-green-700 mx-auto mb-4" size={32} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SteepLog is your tea journal</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SteepLog tracks water temp, steep time, infusion number, tasting notes, and rating for every session. Search across all your entries. Your entire tea history in one place. Free to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]"
              >
                App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]"
              >
                Google Play
              </a>
            </div>
            <Link
              href="/free-download"
              className="inline-flex items-center gap-1 text-sm text-green-700 hover:underline"
            >
              Or start with the free brew reference download <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
