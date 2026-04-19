import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Layers, Thermometer, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pu-Erh Tea — What It Is, Types & How to Brew | SteepLog',
  description:
    'Pu-erh tea guide — the difference between sheng (raw) and shou (ripe), how it\'s aged, how to brew it, and why it tastes so different from other teas.',
};

const FORMS = [
  {
    name: 'Bing Cha (Cake)',
    desc: 'A flat round disc, usually 100–357g. The most common form. Cakes stack easily and age predictably. The outer leaves protect the inner ones.',
  },
  {
    name: 'Zhuan Cha (Brick)',
    desc: 'A rectangular compressed brick. Common in older productions. Dense compression slows aging slightly compared to cakes.',
  },
  {
    name: 'Tuo Cha (Bowl / Nest)',
    desc: 'A bowl or bird\'s nest shape. Smaller than a cake — often 3–10g per tuo. Good for sampling or travel.',
  },
  {
    name: 'Loose Leaf',
    desc: 'Uncompressed pu-erh. Easier to brew but ages faster since the leaves are exposed to more air. Less common for sheng aging.',
  },
];

export default function PuErhTeaPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <Layers className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pu-Erh Tea
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              The only tea that gets better with age. What it is, how sheng differs from shou, and how to brew it right.
            </p>
          </div>
        </section>

        {/* What is pu-erh */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is pu-erh?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pu-erh comes from Yunnan province in southwest China. Like all tea, it starts as leaves from the Camellia sinensis plant. What makes pu-erh different is fermentation and aging.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pu-erh is the only tea category where intentional aging is part of the process. The right storage conditions let microbial activity transform the leaves over years or decades. The flavor deepens, mellow, and develops in ways that fresh tea cannot.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Think of it like wine. A young pu-erh and a 20-year-old pu-erh are completely different experiences. The age does not just mellow it — it changes the character entirely.
            </p>
          </div>
        </section>

        {/* Sheng vs Shou */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sheng vs. Shou — the key distinction</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Sheng (Raw)</h3>
                  <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-1 rounded-full">Also called green pu-erh</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Sheng pu-erh is naturally aged over years or decades. A fresh sheng cake is grassy, sometimes astringent, and quite active — not unlike a green tea. As it ages, the flavor transforms. At 5–10 years it mellows. At 15–20+ years it can be extraordinarily smooth, earthy, and complex.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <Thermometer size={12} />
                    195–205°F (90–96°C)
                  </div>
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <Clock size={12} />
                    2–4 min (gongfu: 20–40 sec)
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Shou (Ripe)</h3>
                  <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-1 rounded-full">Also called cooked pu-erh</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Shou pu-erh was invented in the 1970s to speed up aging. Wet-pile fermentation — heaping the leaves and maintaining humidity and heat — compresses decades of natural aging into months. The result is earthy, dark, and smooth from the start. No waiting required.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <Thermometer size={12} />
                    205–212°F (96–100°C)
                  </div>
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <Clock size={12} />
                    3–5 min (gongfu: 20–45 sec)
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-6 p-4 bg-green-100 rounded-xl">
              <strong>Quick rule:</strong> If you want pu-erh today that is smooth and approachable, start with shou. If you want to explore what pu-erh can become over time, learn about sheng.
            </p>
          </div>
        </section>

        {/* Forms */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Forms of pu-erh</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pu-erh is most often compressed into shapes. Compression helps control airflow, which slows down aging in a predictable way. You break off a portion to brew.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {FORMS.map((form) => (
                <div key={form.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="font-semibold text-gray-900 mb-2">{form.name}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{form.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to brew */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to brew pu-erh</h2>
            <div className="space-y-5">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Break off a portion of leaf</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Use a pu-erh pick or knife to pry apart the compressed leaves. Work from the side or edge, not straight down. Aim for 4–6g per 100ml of water in a gaiwan or small teapot. For a standard mug, use 4–5g.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Rinse the leaves first</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Pour hot water over the leaves, wait 10 seconds, and discard. This is called the rinse or "awakening" steep. For compressed pu-erh, it cleans the leaves and helps them open up. The rinse also carries off any dust or surface compounds from storage. Always rinse, then start counting steeps from the next pour.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Steep at high temperature</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sheng: 195–205°F. Shou: 205–212°F. Pu-erh is a fully fermented tea — it can handle the heat. Western style: 3–5 minutes per steep. Gongfu: start at 20–30 seconds, add 5–10 seconds each infusion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Re-steep many times</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Quality pu-erh can be steeped 6–12 times or more in gongfu. The character changes across steeps — the first is bold, later steeps become mellow and sweet. Tracking steep number and time in the app helps you find the best window for each tea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Storage and quality */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to look for in quality pu-erh</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Storage conditions are everything in pu-erh. Pu-erh ages through microbial activity — that activity needs air, moderate humidity, and stable temperature. Bad storage produces a damp, musty smell that you cannot brew out.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2 shrink-0"></span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-900">Dry storage:</strong> The standard for most collectors. Clean environment, 60–70% relative humidity. No musty or "wet cellar" smell. The tea smells clean, earthy, sometimes a little floral.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2 shrink-0"></span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-900">Reputable vendors:</strong> Buy pu-erh from vendors who can tell you the storage history and production year. Good sources: Yunnan Sourcing, White2Tea, Crimson Lotus Tea.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2 shrink-0"></span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-900">Age claims:</strong> Be skeptical of very cheap "aged" pu-erh. Real aged storage costs money. A 20-year cake for $15 is almost certainly not what it says.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Track your pu-erh sessions</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SteepLog's gongfu steep counter tracks infusion number, time, and notes session by session. Log a cake's first session at 2 years, then revisit it at 5 — and compare exactly what changed.
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
