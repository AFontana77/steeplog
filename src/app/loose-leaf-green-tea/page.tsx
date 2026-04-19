import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Leaf, Thermometer, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loose Leaf Green Tea — Types, Temps & How to Brew | SteepLog',
  description:
    'Loose leaf green tea guide — Japanese vs. Chinese green teas, water temperature, steep time, and what to look for in good quality leaves.',
};

const VARIETIES = [
  {
    name: 'Sencha',
    origin: 'Japan',
    style: 'Steamed',
    temp: '165–175°F',
    time: '1–2 min',
    flavor: 'Grassy, slightly sweet, marine notes',
    notes:
      'The most common Japanese green tea. Thin, flat, bright green leaves. The backbone of everyday tea drinking in Japan. Use cooler water for higher-grade sencha.',
  },
  {
    name: 'Gyokuro',
    origin: 'Japan',
    style: 'Steamed, shaded',
    temp: '140–160°F',
    time: '2–3 min',
    flavor: 'Deep umami, rich, almost savory',
    notes:
      'Grown under shade cloth for 20+ days before harvest. Shade stress causes the leaf to produce more L-theanine, which gives gyokuro its intense umami character. The coolest brewing temperature of any tea.',
  },
  {
    name: 'Dragonwell (Longjing)',
    origin: 'China — Hangzhou',
    style: 'Pan-fired',
    temp: '175–185°F',
    time: '2–3 min',
    flavor: 'Nutty, sweet, buttery, smooth',
    notes:
      'Flat spear-shaped leaves. One of China\'s most famous teas. High-grade Longjing comes from West Lake. Pan-firing gives it a characteristic toasty sweetness you do not get from steamed greens.',
  },
  {
    name: 'Bi Luo Chun',
    origin: 'China — Jiangsu',
    style: 'Pan-fired',
    temp: '175–185°F',
    time: '2–3 min',
    flavor: 'Fruity, floral, delicate',
    notes:
      'Tightly curled, fuzzy leaves. Grows near fruit orchards, which some say influences its fruity character. One of the most delicate Chinese greens. Easy to over-steep.',
  },
  {
    name: 'Gunpowder',
    origin: 'China — Zhejiang',
    style: 'Pan-fired, rolled',
    temp: '175–185°F',
    time: '2–3 min',
    flavor: 'Bold, smoky, slightly earthy',
    notes:
      'Pellet-shaped leaves that open in hot water. Common base for Moroccan mint tea. More robust than most Chinese greens. Can handle slightly higher temperatures.',
  },
  {
    name: 'Genmaicha',
    origin: 'Japan',
    style: 'Steamed + roasted rice',
    temp: '175–185°F',
    time: '1–2 min',
    flavor: 'Toasty, nutty, savory',
    notes:
      'Sencha blended with roasted brown rice. Familiar and comforting. Lower caffeine than plain sencha. The roasted rice tolerates slightly higher temperatures than most Japanese greens.',
  },
];

export default function LooseLeafGreenTeaPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <Leaf className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loose Leaf Green Tea
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Japanese vs. Chinese styles, popular varieties, and how to brew green tea without bitterness.
            </p>
          </div>
        </section>

        {/* What makes green tea green */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why green tea is green</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All tea comes from the same plant — <em>Camellia sinensis</em>. What makes green tea different from black tea is oxidation, or the lack of it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              When a tea leaf is damaged or cut, it starts to oxidize. If you let it run, you get black tea. Green tea is made by stopping oxidation almost immediately — by applying heat to the fresh leaf. The heat deactivates the enzymes that drive oxidation, locking the leaf in its green state.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The result: a tea that is lighter, more delicate, higher in certain antioxidants, and much more sensitive to brewing temperature.
            </p>
          </div>
        </section>

        {/* Japanese vs Chinese */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Japanese vs. Chinese green tea</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The main difference is how the leaf is heated to stop oxidation. Japan uses steam. China uses a pan or wok over direct heat.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Japanese — Steamed</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Steaming locks in chlorophyll and produces a bright, vivid green color. The flavor profile is grassy, vegetal, and often marine or umami-forward. Brighter and more intense.
                </p>
                <p className="text-xs text-green-700 font-semibold">Examples: Sencha, Gyokuro, Matcha, Kabusecha, Hojicha</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-3">Chinese — Pan-Fired</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Pan-firing adds a nutty, toasty quality to the leaf. The color is often more olive or yellow-green. The flavor profile is sweeter, nuttier, and more varied. More forgiving to brew.
                </p>
                <p className="text-xs text-green-700 font-semibold">Examples: Dragonwell (Longjing), Bi Luo Chun, Gunpowder, Mao Feng</p>
              </div>
            </div>
          </div>
        </section>

        {/* Temperature callout */}
        <section className="py-10 px-4 bg-green-700">
          <div className="max-w-3xl mx-auto text-center">
            <Thermometer className="text-green-100 mx-auto mb-3" size={28} />
            <h2 className="text-xl font-bold text-white mb-2">Never use boiling water on green tea</h2>
            <p className="text-green-100 text-sm leading-relaxed max-w-xl mx-auto">
              Boiling water (212°F) burns green tea leaves. It releases harsh, bitter compounds that ruin the cup. The damage is permanent. The right range is 160–185°F depending on the variety. A temperature-controlled kettle makes this easy to get right every time.
            </p>
          </div>
        </section>

        {/* Varieties */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Popular loose leaf green tea varieties</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              Each variety has its own temperature range and steep time. The differences matter.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {VARIETIES.map((v) => (
                <div key={v.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{v.name}</h3>
                    <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-1 rounded-full ml-2 shrink-0">
                      {v.origin}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{v.style}</p>
                  <div className="flex gap-4 mb-3">
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Thermometer size={12} />
                      {v.temp}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Clock size={12} />
                      {v.time}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 italic mb-3">{v.flavor}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to brew */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to brew loose leaf green tea</h2>
            <div className="space-y-5">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Heat water to 160–185°F</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This is the most important step. Japanese greens like gyokuro and sencha need 140–175°F. Chinese greens like Longjing tolerate up to 185°F. Without a temperature kettle, bring water to a boil and let it sit for 3–5 minutes before pouring.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Use 2g of leaf per 8 oz of water</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      About 1 teaspoon. Green tea leaves are light and fluffy, so a teaspoon can vary quite a bit by weight. For consistent results with a new tea, weigh it once to calibrate your eye.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Steep 1–3 minutes, then pull the leaves</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Gyokuro and high-grade sencha: 1–2 minutes. Longjing and Bi Luo Chun: 2–3 minutes. Remove the infuser or strain immediately when time is up. Leaving green tea leaves in hot water over-extracts every time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Re-steep 2–3 times</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Good loose leaf green tea gives 2–3 steeps. Add 30 seconds to each subsequent steep. The second steep is often sweeter and more balanced than the first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Track every green tea session</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SteepLog logs water temperature, steep time, leaf ratio, and tasting notes for every cup. Find your ideal parameters for each variety — then repeat them exactly next time.
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
