import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Leaf, Clock, Package, Award } from 'lucide-react';
import { products } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | CandleGuy`,
    description: product.description,
  };
}

const reviews = [
  { id: '1', author: 'Melissa H.', rating: 5, comment: 'Absolutely beautiful scent — fills the whole room without being overpowering. My favourite candle yet.', date: 'March 2026' },
  { id: '2', author: 'Tom B.', rating: 5, comment: 'Great burn time and arrived in beautiful packaging. Will definitely be ordering again.', date: 'February 2026' },
  { id: '3', author: 'Kayla F.', rating: 4, comment: 'Lovely scent, burns evenly. Would love an even larger size option!', date: 'January 2026' },
];

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 4);
  const displayRelated = related.length >= 2 ? related : fallbackRelated;

  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-20 animate-fade-in">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-stone-400">
            <li><Link href="/" className="hover:text-amber-700 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-amber-700 transition-colors">Candles</Link></li>
            <li>/</li>
            <li className="text-stone-700 font-medium truncate">{product.name}</li>
          </ol>
        </nav>
      </div>

      {/* Main product section */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-stone-100 shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.originalPrice && (
                  <span className="absolute left-4 top-4 badge bg-amber-600 text-white text-sm px-3 py-1">
                    Sale
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge bg-amber-100 text-amber-800 text-xs">{product.category}</span>
              {product.inStock ? (
                <span className="badge bg-green-100 text-green-700 text-xs">In Stock</span>
              ) : (
                <span className="badge bg-red-100 text-red-600 text-xs">Out of Stock</span>
              )}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-stone-900 lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-amber-700 font-medium">{product.tagline}</p>

            <div className="mt-4">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
            </div>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-stone-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xl text-stone-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-stone-600 leading-7">{product.description}</p>

            {/* Specs grid */}
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Package, label: 'Size', value: product.size },
                { icon: Clock, label: 'Burn Time', value: product.burnTime },
                { icon: Leaf, label: 'Scent', value: product.scent },
                { icon: Award, label: 'Wax', value: 'Natural Soy' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col items-center gap-2 rounded-2xl bg-stone-50 p-4 text-center">
                  <Icon className="h-5 w-5 text-amber-600" />
                  <span className="text-xs text-stone-400 uppercase tracking-wide">{label}</span>
                  <span className="text-sm font-semibold text-stone-900">{value}</span>
                </div>
              ))}
            </dl>

            {/* Ingredients */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-stone-700 mb-2">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span key={ing} className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-800 ring-1 ring-amber-100">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AddToCartButton product={product} />
              <Link href="/products" className="btn-ghost flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </div>

            {/* Free shipping notice */}
            <div className="mt-6 rounded-2xl bg-amber-50 px-5 py-4 text-sm text-amber-800">
              📦 Free shipping on orders over $50 · Arrives in 3–5 business days
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Customer Reviews</h2>
          <div className="flex items-center gap-3 mb-8">
            <StarRating rating={product.rating} size="md" />
            <span className="text-sm text-stone-500">Based on {product.reviewCount} reviews</span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {reviews.map((r) => (
              <blockquote key={r.id} className="card bg-white rounded-2xl p-6 flex flex-col gap-3">
                <StarRating rating={r.rating} />
                <p className="text-stone-600 text-sm leading-6 italic flex-1">&ldquo;{r.comment}&rdquo;</p>
                <footer className="text-xs text-stone-400">{r.author} · {r.date}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {displayRelated.length > 0 && (
        <section className="py-16 bg-[#fdf8f2]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">You may also like</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {displayRelated.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
