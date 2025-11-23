import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuHighlights from './components/MenuHighlights';
import BulkOrders from './components/BulkOrders';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import LocationFooter from './components/LocationFooter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <MenuHighlights />
      <BulkOrders />
      <Testimonials />
      <Gallery />
      <LocationFooter />
    </div>
  );
}

export default App;
