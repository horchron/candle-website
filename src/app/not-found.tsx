import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fdf8f2] px-4 text-center">
      <Flame className="h-16 w-16 text-amber-300 mb-6" />
      <h1 className="text-7xl font-bold text-stone-900 mb-3">404</h1>
      <h2 className="text-2xl font-bold text-stone-700 mb-3">Page not found</h2>
      <p className="text-stone-400 max-w-sm mb-10 leading-6">
        Looks like this page has burned out. Let&apos;s get you back to the warmth.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to Home
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/products" className="btn-secondary">
          Shop Candles
        </Link>
      </div>
    </div>
  );
}
