import { Package } from '@/types';

export const packages: Package[] = [
  {
    id: 'pkg-1',
    name: 'The Calm Trio',
    tagline: 'Three scents, one perfect evening',
    description:
      'Curated for relaxation lovers. Lavender Dreams, Eucalyptus Mint Spa, and Amber Vanilla Serenity — three of our best-loved calming scents bundled together. Perfect as a self-care gift or personal treat.',
    price: 59.99,
    originalPrice: 71.97,
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=600&q=80',
    products: ['lavender-dreams', 'eucalyptus-mint-spa', 'amber-vanilla-serenity'],
    savings: 11.98,
    badge: 'Best Seller',
    popular: true,
  },
  {
    id: 'pkg-2',
    name: 'The Explorer Set',
    tagline: 'Sample every mood, every moment',
    description:
      'Can\'t decide? Don\'t. Get four of our most distinct scents: Cedarwood & Smoke, Citrus Burst, Rose & Oud Luxury, and Ocean Breeze. A journey through our entire scent universe.',
    price: 89.99,
    originalPrice: 111.96,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&q=80',
    products: ['cedarwood-smoke', 'citrus-burst', 'rose-oud-luxury', 'ocean-breeze'],
    savings: 21.97,
    badge: 'Most Value',
    popular: false,
  },
  {
    id: 'pkg-3',
    name: 'Gift of Light',
    tagline: 'The gift they will never forget',
    description:
      'Our signature gift set — two best-sellers wrapped in a kraft gift box with a handwritten card option. Includes Amber Vanilla Serenity and Rose & Oud Luxury. Arrives gift-ready.',
    price: 54.99,
    originalPrice: 64.98,
    image: 'https://images.unsplash.com/photo-1603905620723-8b276a785b8e?w=600&q=80',
    products: ['amber-vanilla-serenity', 'rose-oud-luxury'],
    savings: 9.99,
    badge: 'Gift Ready',
    popular: false,
  },
  {
    id: 'pkg-4',
    name: 'Seasonal Mood Bundle',
    tagline: 'Every season deserves a story',
    description:
      'Four candles chosen to reflect the ever-changing year: the warmth of Pumpkin Spice Harvest, the freshness of Citrus Burst, the romance of Rose & Oud, and the grounding of Cedarwood & Smoke.',
    price: 84.99,
    originalPrice: 103.96,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    products: ['pumpkin-spice-harvest', 'citrus-burst', 'rose-oud-luxury', 'cedarwood-smoke'],
    savings: 18.97,
    badge: 'New',
    popular: false,
  },
];
