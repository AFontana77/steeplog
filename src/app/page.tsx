import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, ArrowRight, Download, CheckCircle, Thermometer, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SteepLog — Tea Reference + Session Log App",
  description: "SteepLog has 173+ teas with brew temp, steep time, leaf ratio, and tasting notes. Log every session, track your collection, and discover your preferences. Free on iPhone and Android.",
};

const FEATURES = [
  {
    icon: Database,
    title: "173+ teas catalogued",
    body: "Green, white, oolong, black, pu-erh, and herbal — 173+ teas with brew temperature, steep time, leaf-to-water ratio, number of steeps, and tasting notes. Single-estate teas, regional varieties, and widely available brands all included.",
  },
  {
    icon: Thermometer,
    title: "Brew parameters for every tea",
    body: "Temperature matters more than most people realize. Delicate greens need 160–175°F — boiling water burns them. Robust blacks want 200–212°F. SteepLog gives you the right temp, time, and ratio for every tea in the database — no guessing, no bitter cups.",
  },
  {
    icon: BookOpen,
    title: "Session log built for tea drinkers",
    body: "Log every session with the tea, brew parameters you used, number of steeps, vessel, and your tasting notes. Rate it 1–5. Track what time of day you drank it. Build a personal record that shows your evolving palate over months and years.",
  },
  {
    icon: BarChart3,
    title: "Collection and restock tracker",
    body: "Log teas in your collection with quantity and purchase date. Mark teas as finished. See what you have on hand and what you're running low on. Get a clear view of your collection without pulling every tin and bag from the shelf.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Find the tea",
    body: "Search by name, type, or origin. Get brew temperature, steep time, leaf ratio, and expected number of steeps before you start heating water. The right parameters before you brew, not after.",
  },
  {
    step: "2",
    title: "Log the session",
    body: "After steeping, record the brew parameters you used, how many steeps you pulled, and your tasting notes. Rate it. Note what you'd adjust. 30 seconds of logging tells you more than memory will.",
  },
  {
    step: "3",
    title: "Build your collection",
    body: "Every session adds to your tea history. Your highest-rated teas, most-revisited types, and preferred origins emerge from your own data — not someone else's recommendations.",
  },
];

const DB_CATEGORIES = [
  { label: "Dragon Well (Longjing)", type: "Green", temp: "165–175°F", time: "2–3 min", notes: "Grassy, vegetal, sweet" },
  { label: "Darjeeling First Flush", type: "Black", temp: "195–200°F", time: "3–4 min", notes: "Muscatel, floral, delicate" },
  { label: "Tie Guan Yin", type: "Oolong", temp: "195°F", time: "1–3 min (gongfu)", notes: "Orchid, butter, roasted" },
  { label: "Silver Needle (Bai Hao Yinzhen)", type: "White", temp: "160–170°F", time: "4–5 min", notes: "Honey, melon, subtle floral" },
  { label: "2010 Yunnan Ripe Pu-erh", type: "Pu-erh", temp: "212°F", time: "20 sec (gongfu)", notes: "Earth, wood, dark fruit" },
  { label: "Chamomile Flowers", type: "Herbal", temp: "200°F", time: "5 min", notes: "Apple-like, floral, calming" },
];

const FAQS = [
  {
    q: "Is SteepLog free?",
    a: "Yes. The app and tea library are free. The $6.99 one-time unlock adds unlimited session logging, collection tracking, and full search. No subscription, no renewal.",
  },
  {
    q: "What's in the tea database?",
    a: "173+ teas spanning all major categories — green, white, oolong, black, pu-erh, and herbal. Each entry includes brew temperature, steep time, leaf-to-water ratio, number of steeps, origin, and tasting notes.",
  },
  {
    q: "Does SteepLog support gongfu brewing?",
    a: "Yes. Entries that are commonly brewed gongfu-style include short steep times and expected number of steeps for the gongfu method alongside western brew parameters.",
  },
  {
    q: "Can I add teas not in the database?",
    a: "Yes. Custom entries let you add any tea with your own brew parameters and notes. Good for small-production teas, samples from tea shops, or blends you've created.",
  },
  {
    q: "Does SteepLog work offline?",
    a: "Yes. The full tea library is built into the app and works without an internet connection. Session logs are stored on your device.",
  },
  {
    q: "Can I track how many times I've steeped a specific session?",
    a: "Yes. Each session log includes a steeps field — you can record how many steeps you pulled from a single measure of leaves, which helps you evaluate value and flavor across the gongfu resteeping process.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SteepLog",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Reference data for 5,000+ teas with brew parameters. Log your sessions, track tasting notes, and build a personal tea library.",
            "url": "https://www.steeplog.com"
          })
        }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 px-3 py-1 rounded-full mb-6">
              173+ teas. Right temperature. Every session logged.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Brew it right.
              <br />
              <span className="text-green-700">Log every session. Know your teas.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              SteepLog gives you 173+ teas with brew temperature, steep time, leaf ratio, and tasting notes built in. Log every session, track your collection, and discover what you actually like — not just what gets recommended. Free on iPhone and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-800 transition-colors press-feedback min-h-[48px]">
                Browse the Tea Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Brew Temp Reference
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free app. No credit card. 173+ teas included.</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Temperature makes the cup.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Most bitter tea is over-brewed, over-temperatured, or both. A delicate Japanese green at boiling water doesn't give you a bad tea — it gives you a ruined one. SteepLog gives you the right parameters for every tea before you start the kettle, not after the first awful sip.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-6 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-green-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How SteepLog works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Find the tea. Brew it right. Log the session.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map(({ step, title, body }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 font-bold text-lg mb-4">{step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Sample teas from the library</h2>
              <p className="text-gray-600 max-w-xl mx-auto">173+ teas total — browse and search the full library in the app.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Tea</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Temperature</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Steep time</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Tasting notes</th>
                  </tr>
                </thead>
                <tbody>
                  {DB_CATEGORIES.map(({ label, type, temp, time, notes }) => (
                    <tr key={label} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-gray-900">{label}</td>
                      <td className="py-3 pr-4 text-gray-600 text-xs">{type}</td>
                      <td className="py-3 pr-4 text-green-700 font-medium">{temp}</td>
                      <td className="py-3 pr-4 text-gray-600">{time}</td>
                      <td className="py-3 text-gray-500 text-xs">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-6 text-sm text-gray-400">Green, white, oolong, black, pu-erh, and herbal teas — all categories covered.</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Free app. One-time unlock.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Download SteepLog free. The tea library is free. Unlock session logging, collection tracking, and full search for a one-time $6.99.</p>
            <div className="bg-white rounded-2xl p-8 border border-green-100 mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-1">$6.99</div>
              <div className="text-sm text-gray-400 mb-6">One-time. Yours forever.</div>
              <ul className="text-left space-y-3 mb-6">
                {["Unlimited session log entries","Collection and restock tracker","Custom tea entries","Gongfu steep counter","Works fully offline","All future updates included"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">Download on App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">Get it on Google Play</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Common questions</h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Start with the free brew temp reference.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">Download the printable brew temperature guide — every tea category with temperature ranges, steep times, and common mistakes. One page that solves most bad cups.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-800 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free Guide
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-green-200 text-green-700 font-medium px-8 py-3 rounded-xl hover:bg-green-50 transition-colors min-h-[48px]">
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
