import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Leaf, Clock, Package } from 'lucide-react';
import { products } from '@/data/products';
import { packages } from '@/data/packages';
import ProductCard from '@/components/ProductCard';
import PackageCard from '@/components/PackageCard';
import StarRating from '@/components/StarRating';

export const metadata: Metadata = {
  title: 'CandleGuy — Hand-Poured Soy Candles',
};

const featured = products.filter((p) => p.featured).slice(0, 4);
const topPackage = packages.find((p) => p.popular) ?? packages[0];

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    comment:
      'I ordered three and burned through them in three weeks — that is how good they smell. My house has never felt more like a home.',
  },
  {
    id: 2,
    name: 'James T.',
    rating: 5,
    comment:
      'Bought the Calm Trio as a gift and my partner was absolutely obsessed. Arrived beautifully packaged. Will order again.',
  },
  {
    id: 3,
    name: 'Priya K.',
    rating: 5,
    comment:
      'The Rose & Oud is next-level. It smells like a designer boutique. Burns so cleanly too — no black smoke at all.',
  },
];

const features = [
  {
    icon: Leaf,
    title: '100% Natural Soy Wax',
    desc: 'Sustainably sourced, clean-burning, and eco-friendly.',
  },
  {
    icon: Clock,
    title: '45–65 Hour Burn Time',
    desc: 'Long-lasting enjoyment in every single pour.',
  },
  {
    icon: Package,
    title: 'Gift-Ready Packaging',
    desc: 'Every candle arrives in beautiful, recyclable packaging.',
  },
  {
    icon: ShieldCheck,
    title: 'Satisfaction Guarantee',
    desc: "Not happy? We'll make it right. No questions asked.",
  },
];

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=1600&q=85"
            alt="Warm candle ambience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/55 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-40 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-300 ring-1 ring-amber-500/30 backdrop-blur-sm">
              ✦ Hand-poured with Love
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Light up every
              <br />
              <span className="text-amber-400">moment.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-200 max-w-lg">
              Natural soy candles hand-poured in small batches using the finest fragrance oils.
              Fill your home with warmth, calm, and beauty — one flicker at a time.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/products" className="btn-primary text-base px-8 py-4">
                Shop All Candles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
              >
                View Bundle Deals
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-stone-300">
              <span className="flex items-center gap-2">
                <StarRating rating={4.9} />
                <span>4.9 avg rating</span>
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span>🌿 100% Natural Soy</span>
              <span className="h-4 w-px bg-white/20" />
              <span>📦 Free shipping over $50</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY US ═══════════════════ */}
      <section className="bg-stone-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-700/20">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs text-stone-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PRODUCTS ═══════════════════ */}
      <section className="py-24 bg-[#fdf8f2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Best Loved
            </p>
            <h2 className="section-title mt-2">Featured Candles</h2>
            <p className="section-subtitle">
              Our most-loved scents, hand-picked for their warmth, complexity, and staying power.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products" className="btn-secondary">
              See All Candles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ LIFESTYLE SPLIT ═══════════════════ */}
      <section className="overflow-hidden bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
                alt="Candle lifestyle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-stone-900">
                  &ldquo;The lavender one has genuinely changed my sleep routine.&rdquo;
                </p>
                <p className="mt-1 text-xs text-stone-500">— Emma R., verified buyer</p>
              </div>
            </div>

            <div className="lg:pl-8">
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                Our Craft
              </span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 lg:text-5xl">
                Made slow,<br />
                <span className="text-amber-700">on purpose.</span>
              </h2>
              <p className="mt-6 text-stone-500 leading-7">
                Every CandleGuy candle is poured by hand in small batches using natural soy
                wax and cotton wicks. We source only premium fragrance oils — no synthetic
                fillers, no shortcuts.
              </p>
              <p className="mt-4 text-stone-500 leading-7">
                The result? Candles that burn longer, smell truer, and leave your space
                feeling genuinely serene — not just scented.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Natural soy wax — clean-burning & renewable',
                  'Premium-grade, phthalate-free fragrance oils',
                  'Cotton or wooden wicks — no metal cores',
                  'Reusable, recyclable vessels',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-stone-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-primary mt-10 inline-flex">
                Our Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BUNDLE SPOTLIGHT ═══════════════════ */}
      <section className="bg-amber-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-300 ring-1 ring-amber-500/30">
                ✦ Bundle & Save
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
                More candles,<br />
                <span className="text-amber-400">less spend.</span>
              </h2>
              <p className="mt-5 text-stone-300 leading-7 max-w-md">
                Our curated bundles let you experience multiple scents at a significant
                saving. Perfect for gifting, sampling, or stocking up on favourites.
              </p>
              <div className="mt-8 flex items-center gap-6 text-sm text-stone-400">
                <span className="font-semibold text-white text-2xl">Save up to 22%</span>
                <span>vs. buying individually</span>
              </div>
              <Link
                href="/packages"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold text-stone-900 transition-all hover:bg-amber-400 active:scale-95"
              >
                Browse All Bundles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <PackageCard pkg={topPackage} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="bg-[#fdf8f2] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Real Reviews
            </p>
            <h2 className="section-title mt-2">What our customers say</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.id}
                className="card rounded-2xl bg-white p-8 flex flex-col gap-4"
              >
                <StarRating rating={t.rating} size="md" />
                <p className="text-stone-600 leading-6 italic flex-1">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <footer className="text-sm font-semibold text-stone-900">
                  — {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="relative overflow-hidden bg-amber-700 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to transform your space?
          </h2>
          <p className="mt-5 text-lg text-amber-100">
            Join thousands of happy customers and discover your perfect scent today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-amber-700 shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              Shop All Candles
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
            >
              View Bundles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
