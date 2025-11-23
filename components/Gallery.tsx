import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

// NOTE: Replace these URLs with the actual image addresses from your Google Maps listing.
// Right-click the image in Google Maps and select "Copy Image Address".
const images = [
  { url: 'https://images.unsplash.com/photo-1624323914556-db7a4c27af05?auto=format&fit=crop&w=800', title: 'Sweet Shop Display' },
  { url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800', title: 'Special Biryani' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800', title: 'Dining Area' },
  { url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800', title: 'Fresh Snacks' },
  { url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800', title: 'Gulab Jamun' },
  { url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800', title: 'Family Seating' },
  { url: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800', title: 'Traditional Sweets' },
  { url: 'https://images.unsplash.com/photo-1567188040754-5835b2d2c610?auto=format&fit=crop&w=800', title: 'Celebration Orders' },
];

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
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-xl overflow-hidden group h-64 ${
                // Make specific items span 2 rows or cols for visual interest
                idx === 1 ? 'md:col-span-2' : 
                idx === 4 ? 'md:row-span-2 h-full' : ''
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