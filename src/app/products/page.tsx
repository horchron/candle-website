'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.scent.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [search, activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-24 animate-fade-in">
      {/* Page header */}
      <div className="bg-stone-900 py-16 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
          Shop
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          All Candles
        </h1>
        <p className="mt-3 text-stone-400 max-w-md mx-auto">
          {products.length} hand-poured scents, crafted with love and natural soy wax.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Filters bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="search"
              placeholder="Search by name or scent..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-10"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-stone-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
            >
              <option value="featured">Featured First</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-700 text-white shadow-sm'
                  : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:ring-amber-300 hover:text-amber-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-stone-400">
          {filtered.length} candle{filtered.length !== 1 ? 's' : ''} found
          {activeCategory !== 'All' && ` in ${activeCategory}`}
          {search && ` matching "${search}"`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-4xl mb-4">🕯️</p>
            <p className="font-semibold text-stone-700">No candles found</p>
            <p className="mt-1 text-sm text-stone-400">Try adjusting your search or filters.</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="btn-secondary mt-6"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
