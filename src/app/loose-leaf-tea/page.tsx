import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Leaf, Thermometer, Clock, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loose Leaf Tea — Guide to Types, Brewing & What Makes It Different | SteepLog',
  description:
    'Loose leaf tea guide — what it is, how it differs from tea bags, the main types (green, black, oolong, white, pu-erh, herbal), and how to brew each one.',
};

const TEA_TYPES = [
  {
    name: 'Green Tea',
    oxidation: 'Unoxidized',
    temp: '160–180°F',
    time: '1–3 min',
    ratio: '2g per 8 oz',
    flavor: 'Grassy, vegetal, sweet',
    notes:
      'The most temperature-sensitive type. Boiling water turns green tea harsh and bitter — that bitterness is permanent, not fixable by steeping less. Keep it under 185°F.',
  },
  {
    name: 'White Tea',
    oxidation: 'Minimally processed',
    temp: '160–180°F',
    time: '2–3 min',
    ratio: '2g per 8 oz',
    flavor: 'Delicate, floral, honey-sweet',
    notes:
      'Young leaves and buds dried with almost no processing. Very light and gentle. Silver Needle (Bai Hao Yinzhen) is the most prized variety. Easy to over-steep.',
  },
  {
    name: 'Oolong Tea',
    oxidation: 'Partial — 15% to 85%',
    temp: '185–205°F',
    time: '2–4 min',
    ratio: '2–3g per 8 oz',
    flavor: 'Huge range — floral to roasted',
    notes:
      'The most complex category. Light oolongs taste almost like green tea. Dark oolongs taste almost like black tea. Same leaf type, wildly different results based on how much it was oxidized.',
  },
  {
    name: 'Black Tea',
    oxidation: 'Fully oxidized',
    temp: '200–212°F',
    time: '3–5 min',
    ratio: '2–3g per 8 oz',
    flavor: 'Bold, malty, robust',
    notes:
      'Handles full boiling water without issue. Great with milk. Darjeeling is the exception — its delicate muscatel character is better at 195°F.',
  },
  {
    name: 'Pu-erh Tea',
    oxidation: 'Fermented and aged',
    temp: '195–212°F',
    time: '2–5 min',
    ratio: '4–5g per 8 oz',
    flavor: 'Earthy, complex, smooth',
    notes:
      'The only tea category where aging is intentional. Sheng (raw) pu-erh takes years to develop. Shou (ripe) is earthy and smooth from the start.',
  },
  {
    name: 'Herbal Tisane',
    oxidation: 'Not true tea',
    temp: '200–212°F',
    time: '5–7 min',
    ratio: '2–3g per 8 oz',
    flavor: 'Varies by plant — sweet, tart, floral, savory',
    notes:
      'No Camellia sinensis. No caffeine. Chamomile, peppermint, rooibos, hibiscus — all brewed the same way, but not technically tea.',
  },
];

export default function LooseLeafTeaPage() {
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
              Loose Leaf Tea
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              A guide to what it is, why it tastes better, and how to brew every type right.
            </p>
          </div>
        </section>

        {/* What is loose leaf tea */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is loose leaf tea?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Loose leaf tea is made from whole leaves or large pieces of leaf. It brews in a strainer, infuser, or teapot — not a bag.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most tea bags are filled with "dust and fannings" — the smallest particles left after whole leaves are sorted and processed. These particles release flavor fast, which is why a tea bag steeps in two minutes. But fast extraction is not the same as good extraction. You get a flat, one-note cup with no depth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whole loose leaves open up slowly in hot water. The oils, amino acids, and aromatic compounds release in layers. You get a more complex, more nuanced cup. And you can re-steep the same leaves multiple times — something tea bags cannot do.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Almost every high-quality tea in the world is sold loose. If you have only ever drunk tea from bags, loose leaf is a real upgrade.
            </p>
          </div>
        </section>

        {/* Where tea comes from */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">One plant. Many teas.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Green tea, black tea, white tea, oolong, and pu-erh all come from the same plant: <em>Camellia sinensis</em>. What makes them different is how the leaves are processed after picking.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">Oxidation</p>
                <p className="text-sm text-gray-600">
                  When a tea leaf is damaged or cut, it starts to oxidize — the same process that browns an apple. Controlling oxidation is the main difference between green tea (none) and black tea (full).
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">Processing</p>
                <p className="text-sm text-gray-600">
                  Leaves are steamed or pan-fired (to stop oxidation), rolled, dried, aged, or fermented depending on the type. Each step changes the flavor.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">Origin</p>
                <p className="text-sm text-gray-600">
                  Where the tea grows — altitude, soil, climate, season — affects flavor too. A Darjeeling and an Assam are both black teas, but they taste completely different.
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-6">
              Herbal tisanes are the exception. Chamomile, peppermint, rooibos, and hibiscus are not Camellia sinensis. They have no caffeine. They are brewed the same way, but they are not technically tea.
            </p>
          </div>
        </section>

        {/* Tea types table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">The main types of loose leaf tea</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              Each type needs different water temperature and steep time. Getting these right is the biggest factor in a good cup.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {TEA_TYPES.map((tea) => (
                <div key={tea.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{tea.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green-700 ml-2 shrink-0">
                      {tea.oxidation}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-3">
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Thermometer size={12} />
                      {tea.temp}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                      <Clock size={12} />
                      {tea.time}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">{tea.ratio}</p>
                  <p className="text-xs text-gray-500 mb-3 italic">{tea.flavor}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{tea.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to brew */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to brew loose leaf tea</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Measure your leaves</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Use about 1 teaspoon (2–3g) of loose leaf per 8 oz of water. A gram scale gives more consistent results than a spoon, since different teas pack differently. Pu-erh and oolong in gongfu style use more leaf — 4–8g per 100ml.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Heat water to the right temperature</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This is the most common mistake. Green and white teas need 160–180°F. Oolong needs 185–205°F. Black tea and pu-erh need 200–212°F. A temperature-controlled kettle makes this easy. Without one, bring water to a boil and let it cool for a few minutes before pouring.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Steep for the right time</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Green tea: 1–3 minutes. White tea: 2–3 minutes. Oolong: 2–4 minutes. Black tea: 3–5 minutes. Herbal: 5–7 minutes. Pull the leaves out when the time is up. Leaving them in causes bitterness, especially for green tea and black tea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Re-steep the leaves</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Good loose leaf gives 2–3 re-steeps western style, more in gongfu. Add 30 seconds to a minute for each subsequent steep. The second or third steep is often the best — the leaves have opened fully and release flavor more evenly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What you need to get started</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You do not need much. Three things cover most situations:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">A strainer or infuser</p>
                <p className="text-sm text-gray-600">
                  A simple mesh basket infuser works fine. A gaiwan (Chinese lidded bowl) is the classic gongfu vessel. A teapot with a built-in strainer is great for larger amounts.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">A temperature-controlled kettle</p>
                <p className="text-sm text-gray-600">
                  This one thing prevents most brewing mistakes. Variable temperature kettles run $30–$60 and last for years. Worth it if you drink green tea regularly.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">A gram scale (optional)</p>
                <p className="text-sm text-gray-600">
                  A small kitchen scale gives consistent results. Spooning tea works fine for everyday brewing, but a scale helps when you are dialing in a new tea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gongfu section */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The gongfu way</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gongfu brewing uses a small vessel (100–150ml), a large amount of leaf, and many short steeps — often 10 or more from a single session.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Each steep lasts 10–45 seconds. The first is short. Each one gets a bit longer. You watch the leaves slowly unfurl, and the flavor shifts with each pour — lighter, then richer, then mellow, then fading.
            </p>
            <p className="text-gray-600 leading-relaxed">
              It takes more attention than dropping a bag in a mug. But the experience is different. You are not just drinking tea. You are watching it change.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <Star className="text-green-700 mx-auto mb-4" size={32} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log every session. Find what you love.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SteepLog tracks your water temperature, steep time, leaf ratio, and tasting notes for every cup. You will find what works — and remember it next time.
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
              Or grab the free brew temperature reference first <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
