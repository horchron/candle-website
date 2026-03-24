'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Flame } from 'lucide-react';
import { useCartStore } from '@/store/cart';

const navLinks = [
  { href: '/products', label: 'Shop All' },
  { href: '/packages', label: 'Bundles & Deals' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCartStore();
  const count = itemCount();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-sm backdrop-blur-md ring-1 ring-stone-100'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors"
            aria-label="Candle Guy home"
          >
            <Flame className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight text-stone-900">
              Candle<span className="text-amber-700">Guy</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-amber-50 hover:text-amber-700"
              aria-label={`Shopping cart, ${count} item${count !== 1 ? 's' : ''}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-stone-600 hover:bg-stone-100 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-stone-100 bg-white px-4 pb-6 pt-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
