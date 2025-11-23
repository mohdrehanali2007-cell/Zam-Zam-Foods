import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-brown mb-4">
            Why Barkas Loves Zam Zam Foods
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-brand-light border border-transparent hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 text-brand-gold">
                <feature.icon size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3 group-hover:text-brand-brown transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
