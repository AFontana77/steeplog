import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Thermometer, Clock, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Steep Oolong Tea — Temps, Times & Gongfu Guide | SteepLog',
  description:
    'How to steep oolong tea. The right water temperature and steep time for light and dark oolongs, plus a guide to brewing gongfu style.',
};

const LIGHT_OOLONGS = [
  {
    name: 'Tie Guan Yin (Iron Goddess)',
    origin: 'Fujian, China',
    oxidation: '20–30%',
    temp: '185–195°F',
    time: '2–3 min',
    flavor: 'Orchid, lilac, light cream',
    notes: 'One of the most famous light oolongs. The floral character is delicate — use the lower end of the temperature range to preserve it.',
  },
  {
    name: 'Alishan',
    origin: 'Taiwan (high mountain)',
    oxidation: '20–25%',
    temp: '185–195°F',
    time: '2–3 min',
    flavor: 'Floral, creamy, buttery',
    notes: 'Grown at 1,000–1,400m elevation in Taiwan. High-altitude teas are slower-growing, which concentrates flavor. Often described as creamy or milky without any additives.',
  },
  {
    name: 'Dong Ding (Frozen Summit)',
    origin: 'Taiwan',
    oxidation: '20–40%',
    temp: '190–200°F',
    time: '2–3 min',
    flavor: 'Floral, light honey, smooth',
    notes: 'Can range from lightly to moderately oxidized. Lighter versions brew like Alishan. Roasted versions (see dark oolongs below) need higher temperature.',
  },
];

const DARK_OOLONGS = [
  {
    name: 'Da Hong Pao (Big Red Robe)',
    origin: 'Wuyi Mountains, Fujian, China',
    oxidation: '60–80%',
    temp: '200–210°F',
    time: '3–4 min',
    flavor: 'Roasted, woody, mineral, dark fruit',
    notes: 'The most famous Wuyi rock oolong. Grown in mineral-rich rocky soil. Complex roasted character. Modern commercial Da Hong Pao is a blend — original bushes are historic artifacts.',
  },
  {
    name: 'Rou Gui (Cinnamon)',
    origin: 'Wuyi Mountains, Fujian, China',
    oxidation: '65–80%',
    temp: '200–210°F',
    time: '3–4 min',
    flavor: 'Spicy, cinnamon-like, roasted',
    notes: 'Named for its distinctive spicy character. A Wuyi rock oolong with a warming, almost cinnamon spice note that comes from the terroir, not additives.',
  },
  {
    name: 'Shui Xian (Narcissus)',
    origin: 'Wuyi Mountains, Fujian, China',
    oxidation: '60–75%',
    temp: '200–210°F',
    time: '3–4 min',
    flavor: 'Rich, earthy, roasted, sometimes floral',
    notes: 'A reliable Wuyi workhorse. Deeper and earthier than Da Hong Pao. Good everyday option in the Wuyi style.',
  },
  {
    name: 'Dong Ding — Roasted',
    origin: 'Taiwan',
    oxidation: '40–60%',
    temp: '195–205°F',
    time: '3–4 min',
    flavor: 'Toasty, nutty, warm, caramel',
    notes: 'Traditional Dong Ding is roasted over charcoal. The roasting adds a warm toasty character on top of the oolong base. Very approachable for new oolong drinkers.',
  },
];

const GONGFU_STEPS = [
  {
    step: '1',
    title: 'Fill the vessel with leaf',
    body: 'Use a gaiwan (100–150ml) or small teapot. Fill about 1/3 to 1/2 full of dry leaves. That is roughly 5–8g per 100ml. More leaf = more infusions.',
  },
  {
    step: '2',
    title: 'Rinse (optional but recommended)',
    body: 'Pour hot water over the leaves, swirl gently, and discard after 5–10 seconds. This opens up compressed leaves and brings out aroma on the lid of the gaiwan.',
  },
  {
    step: '3',
    title: 'First steep: 30–45 seconds',
    body: 'Light oolongs at 185–195°F, dark oolongs at 200–210°F. Pour completely into a pitcher or directly into cups. Do not let the liquor sit on the leaves.',
  },
  {
    step: '4',
    title: 'Add 5–10 seconds per steep',
    body: 'Steep 2 at 40–55 seconds. Steep 3 at 50–65 seconds. And so on. The leaves open gradually — the flavor changes with each pour.',
  },
  {
    step: '5',
    title: 'Keep going',
    body: 'Quality oolong gives 6–12 steeps gongfu. The first few are complex and forward. The middle steeps are often the sweetest. The final steeps are lighter and more delicate.',
  },
];

export default function HowToSteepOolongPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <RefreshCw className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to Steep Oolong Tea
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              The right temperature and steep time for light and dark oolongs, plus how to brew gongfu style.
            </p>
          </div>
        </section>

        {/* What is oolong */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Oolong is the most complex tea category</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All tea comes from Camellia sinensis. What separates the types is oxidation — how much the leaf is allowed to brown before processing stops it. Green tea: almost none. Black tea: complete.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Oolong sits in the middle: anywhere from 15% to 85% oxidation. That is an enormous range. A lightly oxidized oolong tastes more like a floral green tea. A heavily oxidized oolong tastes almost like a black tea. The same plant, the same leaf, processed differently — and the flavor is completely different.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This range means you need to know what kind of oolong you have before you can brew it well. Light oolongs need lower temperatures. Dark oolongs need higher ones.
            </p>
          </div>
        </section>

        {/* Quick parameters */}
        <section className="py-10 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Quick brewing parameters</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Light Oolong (15–40% oxidation)</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Thermometer className="text-green-700 shrink-0" size={16} />
                    <div>
                      <p className="text-xs text-gray-500">Western</p>
                      <p className="text-sm font-semibold text-gray-900">185–195°F (85–90°C), 2–3 min, 2–3g per 8 oz</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-green-700 shrink-0" size={16} />
                    <div>
                      <p className="text-xs text-gray-500">Gongfu</p>
                      <p className="text-sm font-semibold text-gray-900">185–195°F, 30–45 sec, 5–7g per 100ml</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Dark Oolong (60–85% oxidation)</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Thermometer className="text-green-700 shrink-0" size={16} />
                    <div>
                      <p className="text-xs text-gray-500">Western</p>
                      <p className="text-sm font-semibold text-gray-900">195–205°F (90–96°C), 3–5 min, 3–4g per 8 oz</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-green-700 shrink-0" size={16} />
                    <div>
                      <p className="text-xs text-gray-500">Gongfu</p>
                      <p className="text-sm font-semibold text-gray-900">200–210°F, 30–45 sec, 6–8g per 100ml</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Light oolongs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Light oolongs — floral and high-mountain</h2>
            <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
              These are the most delicate oolongs. Use the lower end of the temperature range to preserve their floral and fruity character. Boiling water will flatten them.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {LIGHT_OOLONGS.map((t) => (
                <div key={t.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{t.name}</h3>
                    <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-1 rounded-full ml-2 shrink-0">
                      {t.oxidation}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{t.origin}</p>
                  <div className="flex gap-4 mb-3">
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Thermometer size={11} />
                      {t.temp}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Clock size={11} />
                      {t.time}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 italic mb-3">{t.flavor}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark oolongs */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dark and roasted oolongs — Wuyi rock teas</h2>
            <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
              Heavily oxidized and often roasted. These handle high temperatures without bitterness. The mineral, roasted, and fruity notes come from Wuyi's rocky terroir.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {DARK_OOLONGS.map((t) => (
                <div key={t.name} className="rounded-xl border border-gray-100 bg-white p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{t.name}</h3>
                    <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-1 rounded-full ml-2 shrink-0">
                      {t.oxidation}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{t.origin}</p>
                  <div className="flex gap-4 mb-3">
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Thermometer size={11} />
                      {t.temp}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Clock size={11} />
                      {t.time}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 italic mb-3">{t.flavor}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gongfu guide */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gongfu brewing — the oolong way</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Oolong is the tea category best suited to gongfu. Many short steeps from the same leaves reveal how the flavor changes as the leaves slowly open. You are not just drinking a cup — you are watching it evolve.
            </p>
            <div className="space-y-5">
              {GONGFU_STEPS.map((s) => (
                <div key={s.step} className="bg-green-50 rounded-xl p-6 flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{s.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-green-100 rounded-xl">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Why gongfu?</strong> The leaves open gradually over 6–12 steeps. The first pour is forward and complex. The middle steeps are often the sweetest and most balanced. The last steeps are lighter and more delicate. You get a completely different experience from the same leaves than you would from one long western steep.
              </p>
            </div>
          </div>
        </section>

        {/* Temperature reminder */}
        <section className="py-10 px-4 bg-green-700">
          <div className="max-w-3xl mx-auto text-center">
            <Thermometer className="text-green-100 mx-auto mb-3" size={28} />
            <h2 className="text-xl font-bold text-white mb-2">Know what oolong you have before you brew</h2>
            <p className="text-green-100 text-sm leading-relaxed max-w-xl mx-auto">
              Light oolong at 210°F will taste flat and slightly harsh. Dark oolong at 180°F will taste thin and under-extracted. The 20-degree difference in temperature produces a completely different cup. When in doubt, check oxidation level first.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Track your oolong sessions in SteepLog</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SteepLog's gongfu steep counter tracks infusion number, time, and notes. Log each steep separately to find the infusion you like best for each oolong. Free to download.
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
