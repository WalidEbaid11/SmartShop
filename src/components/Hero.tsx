import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Truck, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                Introducing SmartShop
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Shop Smarter with</span>
                <span className="block text-purple-600">AI-Powered Shopping</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Experience personalized shopping powered by artificial intelligence. Get smart recommendations, real-time price comparisons, and seamless checkout.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Start Shopping
                <ShoppingBag className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Shopping Experience"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-24">
          {[
            {
              icon: ShoppingBag,
              title: 'Smart Shopping',
              description: 'AI-powered recommendations tailored just for you'
            },
            {
              icon: Truck,
              title: 'Fast Delivery',
              description: 'Track your orders in real-time with our smart system'
            },
            {
              icon: Shield,
              title: 'Secure Payments',
              description: 'Multiple payment options with enhanced security'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative bg-white/60 backdrop-blur-lg rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <div>
                <feature.icon className="h-8 w-8 text-purple-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}