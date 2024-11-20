import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl bg-gray-200 group-hover:opacity-75">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-medium text-gray-900">${product.price}</span>
          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}