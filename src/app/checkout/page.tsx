'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CreditCard, Lock, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useCartStore } from '@/store/cart';

type Step = 'details' | 'payment' | 'confirmation';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const cartTotal = total();
  const shipping = cartTotal >= 50 ? 0 : 7.99;
  const orderTotal = cartTotal + shipping;
  const [step, setStep] = useState<Step>('details');
  const [processing, setProcessing] = useState(false);

  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [payment, setPayment] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const updateDetails = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setDetails((p) => ({ ...p, [field]: e.target.value }));

  const updatePayment = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setPayment((p) => ({ ...p, [field]: e.target.value }));

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Mock payment processing delay
    setTimeout(() => {
      setProcessing(false);
      clearCart();
      setStep('confirmation');
    }, 1800);
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen bg-[#fdf8f2] pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">🛒</p>
          <h1 className="text-2xl font-bold text-stone-900">Your cart is empty</h1>
          <p className="mt-2 text-stone-500">Add some candles before checking out!</p>
          <Link href="/products" className="btn-primary mt-6 inline-flex">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-[#fdf8f2] pt-24 flex items-center justify-center px-4">
        <div className="card bg-white rounded-3xl p-12 max-w-md w-full text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-stone-900">Order Confirmed!</h1>
          <p className="mt-3 text-stone-500">
            Thanks for your order, {details.firstName || 'there'}! 🕯️ Your candles are being 
            hand-poured and will be on their way within 1–2 business days.
          </p>
          <div className="mt-6 rounded-2xl bg-amber-50 px-5 py-4">
            <p className="text-sm text-amber-800 font-medium">Order #{Math.floor(Math.random() * 90000) + 10000}</p>
            <p className="text-xs text-amber-600 mt-1">A confirmation will be sent to {details.email || 'your email'}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/products" className="btn-primary">
              Continue Shopping
            </Link>
            <Link href="/" className="btn-ghost">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-24 animate-fade-in">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/products" className="flex items-center gap-2 text-sm text-stone-500 hover:text-amber-700 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <Lock className="h-3.5 w-3.5" />
            Secure Checkout
          </div>
        </div>

        {/* Step progress */}
        <div className="flex items-center gap-3 mb-10">
          {(['details', 'payment'] as const).map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all ${
                step === s ? 'bg-amber-700 text-white' : 'bg-stone-200 text-stone-400'
              }`}>
                {i + 1}
              </div>
              <span className={`text-sm font-medium capitalize ${step === s ? 'text-stone-900' : 'text-stone-400'}`}>
                {s === 'details' ? 'Shipping' : 'Payment'}
              </span>
              {i < 1 && <div className="h-px w-8 bg-stone-200" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Forms */}
          <div className="lg:col-span-2">
            {step === 'details' && (
              <form
                onSubmit={(e) => { e.preventDefault(); setStep('payment'); }}
                className="card bg-white rounded-2xl p-8"
              >
                <h2 className="text-xl font-bold text-stone-900 mb-6">Shipping Details</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone-700">First Name *</label>
                    <input type="text" required value={details.firstName} onChange={updateDetails('firstName')} placeholder="Jane" className="input-field" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone-700">Last Name *</label>
                    <input type="text" required value={details.lastName} onChange={updateDetails('lastName')} placeholder="Smith" className="input-field" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-stone-700">Email Address *</label>
                    <input type="email" required value={details.email} onChange={updateDetails('email')} placeholder="jane@example.com" className="input-field" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-stone-700">Street Address *</label>
                    <input type="text" required value={details.address} onChange={updateDetails('address')} placeholder="123 Main Street" className="input-field" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone-700">City *</label>
                    <input type="text" required value={details.city} onChange={updateDetails('city')} placeholder="New York" className="input-field" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-700">State *</label>
                      <input type="text" required value={details.state} onChange={updateDetails('state')} placeholder="NY" className="input-field" maxLength={2} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-700">ZIP *</label>
                      <input type="text" required value={details.zip} onChange={updateDetails('zip')} placeholder="10001" className="input-field" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary mt-8 w-full py-4 text-base">
                  Continue to Payment
                </button>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handlePlaceOrder} className="card bg-white rounded-2xl p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-stone-900">Payment</h2>
                  <button type="button" onClick={() => setStep('details')} className="text-sm text-amber-700 hover:underline">
                    ← Edit shipping
                  </button>
                </div>

                {/* Mock payment notice */}
                <div className="mb-6 flex items-start gap-3 rounded-xl bg-blue-50 px-4 py-3">
                  <AlertCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-700">
                    <strong>Demo mode:</strong> Payment processing is mocked. No real charges will occur. 
                    Enter any values to continue.
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-6 text-sm text-stone-500">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  <span>Your payment info is encrypted and secure.</span>
                </div>

                <div className="flex gap-2 mb-6">
                  {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((brand) => (
                    <span key={brand} className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-bold text-stone-500 bg-stone-50">
                      {brand}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone-700">Name on Card *</label>
                    <input type="text" required value={payment.cardName} onChange={updatePayment('cardName')} placeholder="Jane Smith" className="input-field" />
                  </div>
                  <div className="relative">
                    <label className="mb-1.5 block text-sm font-medium text-stone-700">Card Number *</label>
                    <CreditCard className="absolute left-3 bottom-3 h-4 w-4 text-stone-400" />
                    <input type="text" required value={payment.cardNumber} onChange={updatePayment('cardNumber')} placeholder="•••• •••• •••• ••••" maxLength={19} className="input-field pl-10" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-700">Expiry (MM/YY) *</label>
                      <input type="text" required value={payment.expiry} onChange={updatePayment('expiry')} placeholder="MM/YY" maxLength={5} className="input-field" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-700">CVV *</label>
                      <input type="text" required value={payment.cvv} onChange={updatePayment('cvv')} placeholder="•••" maxLength={4} className="input-field" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="btn-primary mt-8 w-full py-4 text-base disabled:cursor-wait disabled:opacity-70"
                >
                  {processing ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Processing…
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4" />
                      Place Order · ${orderTotal.toFixed(2)}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="card bg-white rounded-2xl p-6 sticky top-28">
              <h3 className="font-bold text-stone-900 mb-4">Order Summary</h3>
              <ul className="divide-y divide-stone-100 mb-5">
                {items.map((item) => (
                  <li key={item.product.id} className="flex items-center gap-3 py-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-stone-100">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-900 truncate">{item.product.name}</p>
                      <p className="text-xs text-stone-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-stone-900 shrink-0">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-stone-500">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between border-t border-stone-100 pt-3 font-bold text-stone-900">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
