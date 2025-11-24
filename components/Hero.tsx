import React from 'react';
import { ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.HERO_BACKGROUND}
          alt="Zam Zam Foods Building"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/30 font-bold tracking-wider text-xs mb-4 uppercase">
            Shaheen Nagar's Favourite
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Indulge in <span className="text-brand-gold">Heritage Sweets</span> & Vibrant Dining
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
            From handcrafted Gulab Jamun to gourmet meals, welcome to Zam Zam Foods. Serving Barkas with authentic flavours, open late every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-accent hover:bg-red-600 text-white font-heading font-bold text-lg py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Order Sweets Now
              <ChevronRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white hover:border-brand-gold hover:text-brand-gold text-white font-heading font-bold text-lg py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              Book a Table
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-gray-300 font-sans">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Open until 11:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span>4.3★ Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;