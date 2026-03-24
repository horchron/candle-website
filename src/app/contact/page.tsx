'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission — replace with real API call
    setSubmitted(true);
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-24 animate-fade-in">
      {/* Header */}
      <div className="bg-stone-900 py-16 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Get in Touch</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">We&apos;d love to hear from you</h1>
        <p className="mt-3 text-stone-400 max-w-md mx-auto">
          Questions, custom orders, bulk enquiries — we&apos;re always happy to chat.
        </p>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-stone-900">Contact Details</h2>
              <p className="mt-2 text-stone-500 text-sm leading-6">
                Our team typically responds within one business day. For urgent orders, 
                give us a call.
              </p>
            </div>

            {[
              { icon: Mail, label: 'Email', value: 'hello@candleguy.com', href: 'mailto:hello@candleguy.com' },
              { icon: Phone, label: 'Phone', value: '1-800-CANDLES', href: 'tel:+18002263537' },
              { icon: MapPin, label: 'Location', value: 'Handcrafted in the USA', href: '#' },
              { icon: Clock, label: 'Hours', value: 'Mon–Fri · 9am–5pm EST', href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="group flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 transition-colors group-hover:bg-amber-100">
                  <Icon className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide">{label}</p>
                  <p className="font-medium text-stone-800">{value}</p>
                </div>
              </a>
            ))}

            {/* FAQ note */}
            <div className="rounded-2xl bg-amber-50 p-5 mt-2">
              <p className="text-sm font-semibold text-amber-900">Before you write…</p>
              <p className="mt-1 text-xs text-amber-700 leading-5">
                Check our FAQ — most questions about shipping, returns, and ingredients 
                are answered there instantly.
              </p>
              <a href="#" className="mt-3 inline-block text-xs font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-900">
                Visit FAQ →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card rounded-2xl bg-white p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle className="h-14 w-14 text-green-500" />
                  <h3 className="text-xl font-bold text-stone-900">Message sent!</h3>
                  <p className="text-stone-500 text-sm max-w-sm">
                    Thanks for reaching out. Our team will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn-secondary mt-4"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="text-xl font-bold text-stone-900">Send us a message</h2>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Jane Smith"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        placeholder="jane@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-stone-700">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={update('subject')}
                      className="input-field"
                    >
                      <option value="">Select a topic</option>
                      <option value="order">Order / Shipping</option>
                      <option value="product">Product Question</option>
                      <option value="custom">Custom / Bulk Order</option>
                      <option value="return">Return / Refund</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us how we can help..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary py-4">
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
