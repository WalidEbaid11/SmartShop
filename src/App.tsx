import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
    </div>
  );
}

export default App;