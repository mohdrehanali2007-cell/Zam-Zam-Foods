import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-brown mb-4">
            Loved by Shaheen Nagar
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
             <div className="flex text-brand-gold">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={24} fill="currentColor" />
                ))}
             </div>
             <span className="font-bold text-xl text-gray-900">{BUSINESS_INFO.rating}</span>
          </div>
          <p className="text-gray-500 font-sans">Based on {BUSINESS_INFO.reviewCount.toLocaleString()}+ reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-brand-light p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-brand-gold/20" size={48} />
              
              <div className="flex items-center gap-1 text-brand-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="font-sans text-gray-700 italic mb-6 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="font-bold text-brand-brown font-heading">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
