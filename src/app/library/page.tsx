import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, Search, CheckCircle, Thermometer } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SteepLog Library — Tea Reference Database",
  description: "Browse 173+ teas with brew temperature, steep time, leaf ratio, and tasting notes. Includes a brewing method comparison guide. Full search available in the free SteepLog app.",
};

const TEA_CATEGORIES = [
  {
    name: "Green Tea",
    count: 38,
    highlights: ["Dragon Well (Longjing)", "Gyokuro", "Sencha", "Genmaicha", "Bi Luo Chun"],
    notes: "The most temperature-sensitive category in the database. Green teas need 160–180°F — boiling water burns the leaves and produces harsh bitterness that no steep time adjustment can fix. Japanese greens (Gyokuro, Sencha) sit at the lower end of that range. Chinese greens (Longjing, Bi Luo Chun) tolerate up to 180°F. Every entry in SteepLog includes a recommended temperature window, not a single target.",
  },
  {
    name: "White Tea",
    count: 14,
    highlights: ["Silver Needle (Bai Hao Yinzhen)", "White Peony (Bai Mu Dan)", "Shou Mei", "Gong Mei", "Darjeeling White"],
    notes: "The least processed tea category — young leaves and buds dried with minimal oxidation. White teas steep low and slow: 160–170°F for 4–6 minutes. Silver Needle, made only from the unopened bud, produces a honey-melon sweetness that disappears at higher temperatures. Aged white teas (3+ years) tolerate higher temperatures and develop earthier, more complex notes worth logging separately.",
  },
  {
    name: "Oolong",
    count: 28,
    highlights: ["Tie Guan Yin", "Da Hong Pao", "Phoenix Dan Cong", "Li Shan", "Dong Ding"],
    notes: "The most diverse category by oxidation level — from 15% (nearly green) to 85% (nearly black). Lightly oxidized oolongs like Tie Guan Yin brew like green teas: 185–190°F. Heavily oxidized rock oolongs like Da Hong Pao use near-boiling water: 205–210°F. All major oolongs in SteepLog include gongfu parameters alongside western brew times — most oolongs are better suited to gongfu.",
  },
  {
    name: "Black Tea",
    count: 42,
    highlights: ["Darjeeling First Flush", "Assam TGFOP", "Ceylon Orange Pekoe", "Keemun", "Yunnan Gold"],
    notes: "Fully oxidized teas that tolerate high temperatures: 195–212°F depending on origin. Darjeeling First Flush is the exception — its delicate muscatel character benefits from 195°F rather than boiling. Assam and Ceylon entries include milk and steep time guidance. Yunnan Gold, made from golden-tip buds, notes its smooth low-astringency character compared to typical black tea at the same temperature.",
  },
  {
    name: "Pu-erh",
    count: 22,
    highlights: ["Yunnan Ripe Shou Pu-erh", "2015 Menghai Raw Sheng", "Tuo Cha", "Pu-erh Brick", "Mini Tuo"],
    notes: "A fermented and aged category divided into shou (cooked, earthy, immediate) and sheng (raw, aged for years, complex and variable). Pu-erh brews at full boiling: 212°F. Shou entries are approachable from day one. Sheng entries include estimated peak drinking windows — a 2015 sheng is still young. SteepLog's gongfu steep counter is especially useful for tracking how many steeps a compressed cake yields.",
  },
  {
    name: "Herbal & Tisane",
    count: 29,
    highlights: ["Chamomile", "Rooibos", "Peppermint", "Hibiscus", "Lavender"],
    notes: "Caffeine-free infusions of herbs, flowers, roots, and fruit — technically not tea (no Camellia sinensis), but brewed identically. Most herbals brew at 200–210°F for 5–7 minutes. Hibiscus brews tart and vivid at any temperature. Rooibos is nearly impossible to over-steep. Every entry notes caffeine content (all zero) and any known interactions with common medications for medicinal herbs.",
  },
];

const BREWING_METHODS = [
  { method: "Western", vessel: "Mug or teapot", leaf: "2–3g per 8 oz", steep: "2–5 min", resteeps: "1–2", notes: "The most common method. Forgiving, low-effort, good for everyday drinking." },
  { method: "Gongfu", vessel: "Gaiwan or small teapot (100–150ml)", leaf: "5–8g per 100ml", steep: "10–30 sec", resteeps: "5–10+", notes: "Short, fast, repeated steeps reveal layers. Best for oolongs and pu-erh." },
  { method: "Cold Brew", vessel: "Pitcher or mason jar", leaf: "4–5g per 8 oz", steep: "8–12 hrs in fridge", resteeps: "1", notes: "Lower extraction means natural sweetness, minimal bitterness. Works well with green tea and oolongs." },
  { method: "Grandpa Style", vessel: "Tall glass or travel mug", leaf: "3–4g", steep: "Continuous — leaves stay in", resteeps: "N/A — top off with water", notes: "Common in China. No strainer. Works best with full-leaf teas that sink to the bottom." },
];

export default function LibraryPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-green-50 rounded-2xl items-center justify-center mb-6">
              <Database className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">SteepLog Tea Library</h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed mb-4">
              173+ teas from every major category with brew temperature, steep time, leaf-to-water ratio, gongfu parameters, and tasting notes. Browse by type below. Full-text search is in the app.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-2 rounded-full">
              <Search size={14} /> Full tea search available in the free SteepLog app
            </div>
          </div>
        </section>

        {/* Tea Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Teas by Category</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              173+ teas organized by processing method. Each category requires different brew parameters — temperature, steep time, and leaf ratio all shift between types.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {TEA_CATEGORIES.map((cat) => (
                <div key={cat.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{cat.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green-700">{cat.count} teas</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 mb-2">Includes: {cat.highlights.join(", ")}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.notes}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-sm text-gray-400">
              Single-estate teas, regional varieties, and widely available brands all covered. Custom entries can be added in the app.
            </p>
          </div>
        </section>

        {/* Temperature Banner */}
        <section className="py-10 px-4 bg-green-700">
          <div className="max-w-3xl mx-auto text-center">
            <Thermometer className="text-green-100 mx-auto mb-3" size={28} />
            <h2 className="text-xl font-bold text-white mb-2">Temperature is the most common mistake</h2>
            <p className="text-green-100 text-sm leading-relaxed max-w-xl mx-auto">
              Most bitter tea isn't over-steeped — it's over-temperatured. Delicate greens at boiling water produce harsh, irreversible bitterness. Every entry in SteepLog includes the correct temperature range so the kettle is set right before the leaves go in.
            </p>
          </div>
        </section>

        {/* Brewing Methods */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Brewing method comparison</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              Four methods — all valid, all producing different results from the same leaf. SteepLog's session log tracks which method you used alongside your parameters and rating.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Method</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Vessel</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Leaf ratio</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Steep time</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {BREWING_METHODS.map(({ method, vessel, leaf, steep, notes }) => (
                    <tr key={method} className="border-b border-gray-100 hover:bg-white transition-colors">
                      <td className="py-3 pr-4 font-medium text-gray-900">{method}</td>
                      <td className="py-3 pr-4 text-gray-600 text-xs">{vessel}</td>
                      <td className="py-3 pr-4 text-green-700 font-medium text-xs">{leaf}</td>
                      <td className="py-3 pr-4 text-gray-600 text-xs">{steep}</td>
                      <td className="py-3 text-gray-500 text-xs">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search 173+ teas. Log every session.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The SteepLog app has all 173+ teas with full-text search, plus a session log with brew parameters, tasting notes, and a gongfu steep counter. Track your collection and discover what you actually like. Free to download. $6.99 one-time for the full log.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Google Play
              </a>
            </div>
            <p className="text-sm text-gray-400">Free. No subscription. No credit card.</p>
            <div className="mt-6">
              <Link href="/free-download" className="text-sm text-green-700 hover:underline">
                Or download the free brew temperature reference first
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
