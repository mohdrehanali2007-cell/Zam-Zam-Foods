import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
           <div>
              <span className="font-script text-3xl text-brand-gold block mb-1">A peek inside</span>
              <h2 className="font-heading font-bold text-3xl text-gray-900">The Zam Zam Atmosphere</h2>
           </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.GALLERY.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-xl overflow-hidden group h-64 ${
                // Make specific items span 2 rows or cols for visual interest
                idx === 0 ? 'md:col-span-2 md:row-span-2 h-full' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold font-heading">{img.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href={BUSINESS_INFO.mapsLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
          >
            View More Photos on Google Maps
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;