'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCartStore();
  const cartTotal = total();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 animate-fade-overlay"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-amber-700" />
            <h2 className="text-lg font-semibold text-stone-900">Your Cart</h2>
            {items.length > 0 && (
              <span className="badge bg-amber-100 text-amber-800">
                {items.reduce((s, i) => s + i.quantity, 0)} item{items.reduce((s, i) => s + i.quantity, 0) !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="flex h-8 w-8 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-600"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <ShoppingBag className="h-12 w-12 text-stone-200" />
              <div>
                <p className="font-semibold text-stone-700">Your cart is empty</p>
                <p className="mt-1 text-sm text-stone-400">Add some beautiful candles!</p>
              </div>
              <Link href="/products" onClick={closeCart} className="btn-primary mt-2">
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-stone-100">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-4 py-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-stone-100">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-stone-900 leading-tight">
                          {item.product.name}
                        </p>
                        {'scent' in item.product && (
                          <p className="mt-0.5 text-xs text-stone-400">{item.product.scent}</p>
                        )}
                        {item.type === 'package' && (
                          <span className="mt-1 badge bg-amber-100 text-amber-700">Bundle</span>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="shrink-0 text-stone-300 transition-colors hover:text-red-400"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 rounded-full border border-stone-200 px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-stone-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-stone-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-stone-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-100 px-6 py-6">
            <div className="flex items-center justify-between text-sm text-stone-500 mb-1">
              <span>Subtotal</span>
              <span className="font-medium text-stone-900">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-stone-500 mb-4">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">
                {cartTotal >= 50 ? 'FREE' : 'Calculated at checkout'}
              </span>
            </div>
            {cartTotal >= 50 && (
              <p className="mb-4 rounded-xl bg-green-50 px-4 py-2 text-center text-xs text-green-700">
                🎉 You&apos;ve unlocked free shipping!
              </p>
            )}
            {cartTotal < 50 && (
              <p className="mb-4 rounded-xl bg-amber-50 px-4 py-2 text-center text-xs text-amber-700">
                Add ${(50 - cartTotal).toFixed(2)} more for free shipping
              </p>
            )}
            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-primary w-full text-center text-base py-4"
            >
              Checkout · ${cartTotal.toFixed(2)}
            </Link>
            <button
              onClick={closeCart}
              className="mt-3 w-full text-center text-sm text-stone-400 hover:text-stone-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
