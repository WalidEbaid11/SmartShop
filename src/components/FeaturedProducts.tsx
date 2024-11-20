import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    price: 399.99,
    description: 'Advanced smartwatch with health monitoring and seamless connectivity.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    category: 'Wearables'
  },
  {
    id: '3',
    name: 'Premium Leather Backpack',
    price: 149.99,
    description: 'Handcrafted leather backpack with modern features and classic design.',
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    category: 'Accessories'
  }
];

export default function FeaturedProducts() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}