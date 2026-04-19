import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Star, Thermometer, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Earl Grey Tea — Loose Leaf Picks & Brew Guide | SteepLog',
  description:
    'The best loose leaf Earl Grey teas — what makes a great Earl Grey, how to brew it, and top picks from trusted brands.',
};

const VARIATIONS = [
  {
    name: 'Classic Earl Grey',
    base: 'Black tea',
    desc: 'Bold black tea with bergamot oil. The original. Full-bodied, citrusy, slightly floral. Works well with milk.',
    temp: '200–212°F',
    time: '3–4 min',
  },
  {
    name: 'Lady Grey',
    base: 'Black tea',
    desc: 'Lighter than classic Earl Grey. Additional citrus flavors — lemon peel, sometimes orange. More delicate. Twinings popularized it.',
    temp: '200–212°F',
    time: '3 min',
  },
  {
    name: 'French Earl Grey',
    base: 'Black tea',
    desc: 'Earl Grey with rose petals added. Floral and romantic. The bergamot and rose work well together. Good cold.',
    temp: '200–212°F',
    time: '3–4 min',
  },
  {
    name: 'Russian Earl Grey',
    base: 'Black tea',
    desc: 'Earl Grey with lemongrass, orange peel, and other citrus elements. More complex and layered than classic.',
    temp: '200–212°F',
    time: '3–4 min',
  },
  {
    name: 'Earl Grey Green',
    base: 'Green tea',
    desc: 'A green tea base instead of black tea. Lighter, more delicate, lower caffeine. The bergamot shows through differently — more subtle and fresh.',
    temp: '170–180°F',
    time: '2–3 min',
  },
];

const BRANDS = [
  {
    name: 'Harney & Sons',
    tier: 'Great starting point',
    notes:
      'Tower of London Earl Grey is their signature. Real bergamot oil, consistent quality, widely available. Loose leaf or sachets — the loose is noticeably better.',
  },
  {
    name: 'Mariage Frères',
    tier: 'Premium',
    notes:
      'French tea house. Earl Grey Impérial is the standout — black tea from Darjeeling and Ceylon with natural bergamot. Exceptional quality. Higher price.',
  },
  {
    name: 'Fortnum & Mason',
    tier: 'Premium',
    notes:
      'Classic British institution. Royal Blend and their Earl Grey loose leaf are consistently good. The bergamot is well-balanced — present but not sharp.',
  },
  {
    name: 'Upton Tea Imports',
    tier: 'Best value loose leaf',
    notes:
      'Specialty importer with multiple Earl Grey offerings. Reasonable prices, real bergamot oil, good variety. Good for exploring different Earl Grey styles.',
  },
  {
    name: 'Ahmad Tea',
    tier: 'Everyday quality',
    notes:
      'British-Iranian brand. Their loose leaf Earl Grey is dependable, real bergamot, and affordable. A solid everyday option.',
  },
  {
    name: 'Twinings Loose Leaf',
    tier: 'Accessible upgrade',
    notes:
      'Much better than their bags. The loose leaf Earl Grey has real bergamot character that the bags hide under dust and fannings.',
  },
];

export default function BestEarlGreyTeaPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <Star className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Best Earl Grey Tea
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              What makes a great Earl Grey, how to brew it, and which loose leaf brands are worth buying.
            </p>
          </div>
        </section>

        {/* What is Earl Grey */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Earl Grey tea?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Earl Grey is black tea scented with bergamot oil. Bergamot is a citrus fruit — it looks like a small green orange and grows mainly in Calabria, in southern Italy. The oil is pressed from the peel, not the juice.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The bergamot scent is what makes Earl Grey distinctive. It is citrusy but floral — different from lemon or orange. A well-made Earl Grey smells and tastes clean, not sharp.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The biggest quality difference between good Earl Grey and bad Earl Grey is simple: real bergamot oil vs. synthetic bergamot flavoring. Artificial bergamot is sharper, sometimes soapy, and flat. Real bergamot oil has nuance and complexity. Check the ingredient list before buying.
            </p>
          </div>
        </section>

        {/* Bergamot callout */}
        <section className="py-10 px-4 bg-green-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-white mb-2">Look for real bergamot oil</h2>
            <p className="text-green-100 text-sm leading-relaxed max-w-xl mx-auto">
              The ingredient list should say "bergamot oil" or "natural bergamot flavoring." If it says "artificial flavoring" or just "flavoring," that is a red flag. Good loose leaf Earl Grey from a reputable vendor will always use real bergamot.
            </p>
          </div>
        </section>

        {/* How to brew */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to brew Earl Grey</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-5 text-center">
                <Thermometer className="text-green-700 mx-auto mb-2" size={22} />
                <p className="font-semibold text-gray-900 text-sm mb-1">Temperature</p>
                <p className="text-green-700 font-bold">200–212°F</p>
                <p className="text-xs text-gray-500 mt-1">Green base: 170–180°F</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 text-center">
                <Clock className="text-green-700 mx-auto mb-2" size={22} />
                <p className="font-semibold text-gray-900 text-sm mb-1">Steep Time</p>
                <p className="text-green-700 font-bold">3–4 min</p>
                <p className="text-xs text-gray-500 mt-1">Do not over-steep</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 text-center">
                <Star className="text-green-700 mx-auto mb-2" size={22} />
                <p className="font-semibold text-gray-900 text-sm mb-1">Leaf ratio</p>
                <p className="text-green-700 font-bold">2g per 8 oz</p>
                <p className="text-xs text-gray-500 mt-1">About 1 teaspoon</p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">Do not over-steep Earl Grey</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                At 3–4 minutes, Earl Grey is clean and balanced. Past 5 minutes, the bergamot starts to taste sharp and soapy — a sign of over-extraction. If you are adding milk, stay closer to 4 minutes. Black, go closer to 3.
              </p>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Earl Grey variations</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              The classic formula has inspired dozens of variations. These are the main ones worth knowing.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {VARIATIONS.map((v) => (
                <div key={v.name} className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{v.name}</h3>
                    <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-1 rounded-full ml-2 shrink-0">
                      {v.base}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{v.desc}</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Thermometer size={11} />
                      {v.temp}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Clock size={11} />
                      {v.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Loose leaf Earl Grey brands worth buying</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              These brands use real bergamot oil and sell loose leaf you can actually taste. All have a meaningful step up from tea bags.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {BRANDS.map((brand) => (
                <div key={brand.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{brand.name}</h3>
                    <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-1 rounded-full ml-2 shrink-0">
                      {brand.tier}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{brand.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to look for */}
        <section className="py-12 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-5">What to look for before you buy</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2 shrink-0"></span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Real bergamot oil:</strong> Listed as "bergamot oil" or "natural bergamot flavoring" in the ingredients. Not "artificial flavoring."
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2 shrink-0"></span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Whole leaf or large broken leaf:</strong> Dust and fannings extract too fast and produce a flat cup. Look for full leaves or large pieces.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2 shrink-0"></span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">No artificial flavoring listed:</strong> If you see "flavoring" without "natural" in front of it, move on. Real bergamot is not a budget ingredient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log your Earl Grey sessions</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SteepLog tracks steep time, temperature, and tasting notes. Compare your loose leaf Earl Grey side-by-side with a new brand — and remember exactly what you thought of each one.
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
              Or grab the free brew temperature reference <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
