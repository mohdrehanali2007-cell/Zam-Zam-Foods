import React from 'react';
import { MENU_HIGHLIGHTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const MenuHighlights: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="font-script text-3xl text-brand-accent block mb-2">Taste the tradition</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900">
              Our Menu Highlights
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-brown font-bold hover:text-brand-accent transition-colors mt-4 md:mt-0">
            See Full Menu <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_HIGHLIGHTS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-3 right-3 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    item.category === 'sweet' ? 'bg-orange-100 text-orange-800' : 
                    item.category === 'savory' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 leading-tight">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-gray-600 line-clamp-2 mb-4">
                  {item.description}
                </p>
                <button className="w-full py-2 rounded border border-brand-brown text-brand-brown font-bold text-sm hover:bg-brand-brown hover:text-white transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-full font-bold text-gray-800 shadow-sm">
            See Full Menu <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
