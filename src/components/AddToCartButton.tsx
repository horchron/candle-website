'use client';

import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const handleAdd = () => {
    addItem(product, 'product');
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={!product.inStock}
      className={`btn-primary flex-1 py-4 text-base transition-all ${
        added ? 'bg-green-600 hover:bg-green-700' : ''
      } disabled:cursor-not-allowed disabled:opacity-50`}
      aria-label={added ? 'Added to cart' : `Add ${product.name} to cart`}
    >
      {added ? (
        <>
          <Check className="h-5 w-5" />
          Added to Cart!
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </>
      )}
    </button>
  );
}
