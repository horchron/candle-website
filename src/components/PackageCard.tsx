'use client';

import Image from 'next/image';
import { ShoppingCart, Tag, Star } from 'lucide-react';
import { Package } from '@/types';
import { useCartStore } from '@/store/cart';

interface PackageCardProps {
  pkg: Package;
}

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-amber-600 text-white',
  'Most Value': 'bg-emerald-600 text-white',
  'Gift Ready': 'bg-rose-500 text-white',
  'New': 'bg-blue-600 text-white',
};

export default function PackageCard({ pkg }: PackageCardProps) {
  const { addItem } = useCartStore();
  const discountPct = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <article className="card group flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          {pkg.badge && (
            <span className={`badge ${badgeColors[pkg.badge] ?? 'bg-stone-700 text-white'}`}>
              {pkg.badge === 'Best Seller' && <Star className="mr-1 h-3 w-3 fill-current" />}
              {pkg.badge}
            </span>
          )}
          <span className="badge bg-white/90 text-amber-700 backdrop-blur-sm font-bold shadow-sm">
            Save {discountPct}%
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
          {pkg.name}
        </h3>
        <p className="mt-1 text-sm text-amber-700 font-medium">{pkg.tagline}</p>
        <p className="mt-2 text-sm text-stone-500 line-clamp-2">{pkg.description}</p>

        {/* Includes */}
        <div className="mt-4 rounded-xl bg-amber-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-800 mb-2">
            Bundle includes {pkg.products.length} candles
          </p>
          <div className="flex flex-wrap gap-1.5">
            {pkg.products.map((slug) => (
              <span
                key={slug}
                className="rounded-full bg-white px-2.5 py-0.5 text-xs text-stone-600 shadow-sm ring-1 ring-stone-100 capitalize"
              >
                {slug.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </div>

        {/* Savings callout */}
        <div className="mt-4 flex items-center gap-2 text-sm text-green-700">
          <Tag className="h-4 w-4 shrink-0" />
          <span className="font-medium">You save ${pkg.savings.toFixed(2)} vs. buying individually</span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto pt-5 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-stone-900">${pkg.price.toFixed(2)}</span>
            <span className="ml-2 text-sm text-stone-400 line-through">
              ${pkg.originalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => addItem(pkg, 'package')}
            className="btn-primary py-2.5 px-5"
            aria-label={`Add ${pkg.name} bundle to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
            Add Bundle
          </button>
        </div>
      </div>
    </article>
  );
}
