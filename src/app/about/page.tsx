import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Award, Users, Leaf } from 'lucide-react';

export const metadata: Metadata = { title: 'Our Story' };

const values = [
  { icon: Leaf, title: 'Natural & Clean', desc: 'Only natural soy wax, cotton wicks, and phthalate-free fragrance oils. Nothing synthetic, nothing harmful.' },
  { icon: Heart, title: 'Made with Heart', desc: 'Every candle is poured by hand in small batches. We care about quality far more than quantity.' },
  { icon: Award, title: 'Craftsmanship First', desc: 'Hours of scent testing, formulation refinement, and wick sizing go into every fragrance before it earns a label.' },
  { icon: Users, title: 'Community Rooted', desc: 'We source locally where we can, give back where possible, and love hearing from our customers.' },
];

const team = [
  {
    name: 'Jordan Mitchell',
    role: 'Founder & Head Chandler',
    bio: 'Started pouring candles in a tiny apartment kitchen eight years ago. Still pours every batch personally.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Riley Chen',
    role: 'Master Fragrance Blender',
    bio: 'With a background in aromatherapy, Riley creates all of our signature scent profiles from scratch.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612d5ca?w=400&q=80',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-20 animate-fade-in">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=1400&q=80"
          alt="Candle workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-stone-950/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Our Story</p>
            <h1 className="mt-3 text-5xl font-bold text-white tracking-tight sm:text-6xl">
              Born from a small kitchen,<br />
              <span className="text-amber-400">grown with love.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose prose-lg mx-auto text-stone-600">
            <p className="text-xl leading-8 text-stone-700 font-medium">
              CandleGuy started with a simple question: <em>why do so many candles smell
              amazing in the store, but disappointing at home?</em>
            </p>
            <p className="mt-6 leading-8">
              The answer, it turned out, was shortcuts. Cheap paraffin wax. Synthetic fillers.
              Wicks that couldn&apos;t distribute heat evenly. Our founder Jordan spent two years 
              learning the craft properly — chemistry, botanicals, fragrance science — before 
              the first CandleGuy candle was ready to share with the world.
            </p>
            <p className="mt-4 leading-8">
              Today, every candle is still hand-poured in small batches. We use 100% natural 
              soy wax, premium cotton and wood wicks, and fragrance oils that are free from 
              phthalates and parabens. We test every new scent for weeks before it goes on sale. 
              We obsess about burn quality the same way a chef obsesses about flavour.
            </p>
            <p className="mt-4 leading-8">
              The result is a candle that actually lives up to its promise — in your home, 
              on your terms, every single time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card bg-white rounded-2xl p-8 text-center flex flex-col items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
                  <Icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="font-bold text-stone-900">{title}</h3>
                <p className="text-sm text-stone-500 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#fdf8f2]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">The people behind the pour</h2>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="flex gap-6 items-start">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-lg">{member.name}</p>
                  <p className="text-sm text-amber-700 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-stone-500 leading-6">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-bold">Ready to experience the difference?</h2>
          <p className="mt-3 text-amber-100">Join thousands who&apos;ve made CandleGuy part of their daily ritual.</p>
          <Link href="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-amber-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
            Shop Our Candles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
