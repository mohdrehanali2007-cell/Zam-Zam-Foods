import React from 'react';
import { Gift, Calendar, Sparkles } from 'lucide-react';
import { IMAGES } from '../constants';

const BulkOrders: React.FC = () => {
  return (
    <section id="bulk-orders" className="py-20 bg-brand-brown relative overflow-hidden">
        {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#DAA520 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-brand-accent mb-4">
              <Sparkles size={20} />
              <span className="font-bold uppercase tracking-widest text-sm">Event Services</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900 mb-6">
              Make Every Occasion Sweeter
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
              Planning a wedding, birthday, or corporate event? Let Zam Zam Foods handle the sweetness. We offer customized sweet boxes, bulk catering, and take-away platters tailored to your needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light rounded-lg text-brand-brown">
                  <Gift size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Custom Boxes</h4>
                  <p className="text-sm text-gray-500">Elegant packaging for gifting.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light rounded-lg text-brand-brown">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Live Catering</h4>
                  <p className="text-sm text-gray-500">Fresh food served at your venue.</p>
                </div>
              </div>
            </div>

            <button className="bg-brand-accent hover:bg-red-700 text-white font-heading font-bold py-4 px-8 rounded-lg shadow-lg self-start transition-colors w-full sm:w-auto text-center">
              Enquire for Events
            </button>
          </div>
          
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <img 
              src={IMAGES.BULK_ORDERS} 
              alt="Catering Setup" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-brown/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;