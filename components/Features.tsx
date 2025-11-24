import React from 'react';
import { FEATURES, IMAGES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text & Grid Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="mb-10 text-center lg:text-left">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Promise</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-brown mb-4">
                Why Barkas Loves Zam Zam Foods
              </h2>
              <p className="text-gray-600 font-sans text-lg">
                We are more than just a sweet shop. We are a part of the Shaheen Nagar family, serving tradition on a plate every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FEATURES.map((feature, index) => (
                <div 
                  key={index} 
                  className="group p-6 rounded-xl bg-brand-light border border-transparent hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 text-left flex flex-col items-start"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 text-brand-gold">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side - Feature Image */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-brand-gold/10 pointer-events-none z-10"></div>
              {/* Using the centralized Storefront Image */}
              <img 
                src={IMAGES.STOREFRONT} 
                alt="Zam Zam Foods Storefront" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 z-20">
                <p className="text-white font-heading font-bold text-xl">The New Face of Flavour</p>
                <p className="text-gray-200 text-sm">Visit our outlet in Shaheen Nagar today.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;