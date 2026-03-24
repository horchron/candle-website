import type { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import { Tag, Gift, Star } from 'lucide-react';

export const metadata: Metadata = { title: 'Bundles & Deals' };

const perks = [
  { icon: Tag, title: 'Save Up to 22%', desc: 'Every bundle offers significant savings vs buying individually.' },
  { icon: Gift, title: 'Gift-Ready', desc: 'All bundles arrive in beautiful, ready-to-give packaging.' },
  { icon: Star, title: 'Curated by Experts', desc: 'Scents chosen for perfect harmony and complementary moods.' },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-24 animate-fade-in">
      {/* Header */}
      <div className="bg-amber-950 py-20 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
          Bundles & Deals
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          More candles, less spend.
        </h1>
        <p className="mt-4 text-stone-300 max-w-lg mx-auto text-lg">
          Curated sets that go beautifully together — and save you money. Perfect for gifting or treating yourself.
        </p>
      </div>

      {/* Perks bar */}
      <div className="bg-stone-900 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-700/20">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs text-stone-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Custom order CTA */}
      <section className="bg-amber-50 border-t border-amber-100 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-2xl font-bold text-stone-900">Need a custom bundle?</h2>
          <p className="mt-3 text-stone-500">
            Building a corporate gift or want to mix and match your own set of candles? 
            We create bespoke bundles for special occasions.
          </p>
          <a href="/contact" className="btn-primary mt-8 inline-flex">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
