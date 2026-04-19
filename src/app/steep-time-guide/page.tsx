import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Clock, Thermometer, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tea Steep Times and Temperatures — Full Reference Guide | SteepLog',
  description:
    'Steep times and water temperatures for every type of tea. Green, black, oolong, white, pu-erh, herbal — how long to steep and at what temperature.',
};

const STEEP_DATA = [
  {
    type: 'White Tea',
    tempF: '160–175°F',
    tempC: '71–79°C',
    time: '2–3 min',
    ratio: '2g',
    notes: 'Delicate — do not over-steep. Silver Needle at the lower end.',
  },
  {
    type: 'Green Tea',
    tempF: '160–180°F',
    tempC: '71–82°C',
    time: '1–3 min',
    ratio: '2g',
    notes: 'Bitter if too hot or too long. Japanese greens at lower end, Chinese greens at higher end.',
  },
  {
    type: 'Yellow Tea',
    tempF: '170–185°F',
    tempC: '77–85°C',
    time: '2–3 min',
    ratio: '2–3g',
    notes: 'Rare and delicate. Similar to green tea brewing. Slightly sweeter and mellower.',
  },
  {
    type: 'Oolong — Light',
    tempF: '185–195°F',
    tempC: '85–90°C',
    time: '2–3 min',
    ratio: '3g',
    notes: 'Floral, orchid character. Tie Guan Yin, Alishan. Multiple re-steeps.',
  },
  {
    type: 'Oolong — Dark/Roasted',
    tempF: '195–205°F',
    tempC: '90–96°C',
    time: '3–5 min',
    ratio: '3–4g',
    notes: 'Wuyi rock oolongs, Dong Ding roasted. Can handle hotter water.',
  },
  {
    type: 'Black Tea',
    tempF: '200–212°F',
    tempC: '93–100°C',
    time: '3–5 min',
    ratio: '2–3g',
    notes: 'Full extraction. Darjeeling benefits from 195°F to preserve muscatel.',
  },
  {
    type: 'Pu-erh — Sheng (Raw)',
    tempF: '195–205°F',
    tempC: '90–96°C',
    time: '2–4 min',
    ratio: '4–5g',
    notes: 'Rinse leaves first. Young sheng can be astringent. Aged sheng is smoother.',
  },
  {
    type: 'Pu-erh — Shou (Ripe)',
    tempF: '205–212°F',
    tempC: '96–100°C',
    time: '3–5 min',
    ratio: '5g',
    notes: 'Rinse leaves first. Dark, earthy, smooth from day one. Tolerates full boiling.',
  },
  {
    type: 'Herbal / Tisane',
    tempF: '212°F',
    tempC: '100°C',
    time: '5–7 min',
    ratio: '2–3g',
    notes: 'Most herbals need full boiling. Rooibos nearly impossible to over-steep.',
  },
];

const TIPS = [
  {
    icon: <Thermometer className="text-green-700" size={20} />,
    title: 'Use filtered water',
    body: 'Tap water with heavy chlorine or minerals changes the flavor of delicate teas. Filtered water is especially noticeable with green and white teas.',
  },
  {
    icon: <Clock className="text-green-700" size={20} />,
    title: 'Pull the leaves out when time is up',
    body: 'Do not leave leaves sitting in hot water after the steep. The heat keeps extracting. For green and black teas especially, a 30-second overshoot adds real bitterness.',
  },
  {
    icon: <RefreshCw className="text-green-700" size={20} />,
    title: 'Re-steep quality loose leaf',
    body: 'Green teas and oolongs give 2–5 re-steeps. Add 30 seconds to each subsequent steep and raise the temperature by 5°F if needed. Pu-erh handles 6–10+ infusions gongfu style.',
  },
];

export default function SteepTimeGuidePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <Clock className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tea Steep Times and Temperatures
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Every major tea type, with the right water temperature and steep time for each one.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-4">
              Steep time and water temperature are the two variables that control everything in a cup of tea. Too hot or too long and you get bitterness. Too cool or too short and you get a thin, flat cup.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The ranges below work for western-style brewing: one longer steep in a standard mug or teapot. For gongfu brewing (small vessel, many short steeps), the leaf ratios go up and the steep times come way down.
            </p>
          </div>
        </section>

        {/* Reference Table */}
        <section className="py-12 px-4 bg-green-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Full Reference Table</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-8">
              Western brewing — one steep per session. Leaf ratio per 8 oz (240ml) of water.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Tea Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Temp (°F)</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Temp (°C)</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Steep Time</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Leaves / 8 oz</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {STEEP_DATA.map((row, i) => (
                    <tr
                      key={row.type}
                      className={`border-b border-gray-100 hover:bg-green-50 transition-colors ${
                        i === STEEP_DATA.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap">{row.type}</td>
                      <td className="py-3 px-3 text-green-700 font-medium whitespace-nowrap">{row.tempF}</td>
                      <td className="py-3 px-3 text-gray-600 whitespace-nowrap">{row.tempC}</td>
                      <td className="py-3 px-3 text-green-700 font-medium whitespace-nowrap">{row.time}</td>
                      <td className="py-3 px-3 text-gray-600">{row.ratio}</td>
                      <td className="py-3 px-4 text-gray-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Temperature callout */}
        <section className="py-10 px-4 bg-green-700">
          <div className="max-w-3xl mx-auto text-center">
            <Thermometer className="text-green-100 mx-auto mb-3" size={28} />
            <h2 className="text-xl font-bold text-white mb-2">Temperature is usually the problem</h2>
            <p className="text-green-100 text-sm leading-relaxed max-w-xl mx-auto">
              Most bitter tea is not over-steeped. It is over-temperatured. Pouring boiling water over green tea or white tea burns the leaves. The bitterness from that mistake does not go away by steeping less next time. Get the temperature right first.
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tips for better steep results</h2>
            <div className="space-y-5">
              {TIPS.map((tip) => (
                <div key={tip.title} className="bg-green-50 rounded-xl p-6 flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">{tip.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{tip.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gongfu quick note */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Gongfu steeping — quick note</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The table above is for western brewing. Gongfu uses much more leaf and much shorter steeps — 10 to 45 seconds per infusion, repeated 6–12 times. The same temperatures apply, but the steep times come way down.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Oolongs and pu-erh are the best candidates for gongfu. They hold up to many re-steeps and reward the attention.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Track your steep times in the app</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SteepLog logs every session: tea name, water temp, steep time, leaf ratio, and your tasting notes. Over time you find the exact parameters you actually like for each tea. Free to download.
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
              Or download the free brew temperature reference card <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
