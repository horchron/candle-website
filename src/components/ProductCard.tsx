'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  return (
    <article className="card group flex flex-col overflow-hidden">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <span className="absolute left-3 top-3 badge bg-white/90 text-stone-700 backdrop-blur-sm shadow-sm">
          {product.category}
        </span>
        {product.originalPrice && (
          <span className="absolute right-3 top-3 badge bg-amber-600 text-white">
            Sale
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-stone-900 transition-colors group-hover:text-amber-700 leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-stone-400 line-clamp-2">{product.tagline}</p>

        {/* Details row */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-stone-50 px-2.5 py-1 text-xs text-stone-500">
            {product.scent}
          </span>
          <span className="rounded-full bg-stone-50 px-2.5 py-1 text-xs text-stone-500">
            {product.burnTime}
          </span>
          <span className="rounded-full bg-stone-50 px-2.5 py-1 text-xs text-stone-500">
            {product.size}
          </span>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-stone-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-stone-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addItem(product, 'product')}
            disabled={!product.inStock}
            className="btn-primary py-2 px-4 text-xs disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add
          </button>
        </div>

        {!product.inStock && (
          <p className="mt-2 text-center text-xs text-red-400">Out of stock</p>
        )}
      </div>
    </article>
  );
}
