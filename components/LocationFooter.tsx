import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import ContactForm from './ContactForm';

const LocationFooter: React.FC = () => {
  return (
    <footer id="location" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Contact & Map Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-extrabold text-3xl text-brand-gold mb-2">Visit Us Today</h2>
              <p className="text-gray-400 font-sans text-lg">We are open daily from 9:00 AM to 11:00 PM.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-accent mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed max-w-xs">{BUSINESS_INFO.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-brand-accent flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="text-brand-accent flex-shrink-0" />
                <a href={BUSINESS_INFO.whatsapp} className="text-gray-300 hover:text-white transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-brand-accent transition-colors">
                 <Instagram size={20} />
               </a>
               <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-brand-accent transition-colors">
                 <Facebook size={20} />
               </a>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-700">
              <iframe
                title="Zam Zam Foods Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.123456789!2d78.123456!3d17.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzM0LjQiTiA3OMKwMzAnMTIuMyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            <a href={BUSINESS_INFO.mapsLink} target="_blank" rel="noreferrer" className="inline-block text-brand-gold hover:underline text-sm font-bold">
              Get Directions on Google Maps &rarr;
            </a>
          </div>

          {/* Form Side */}
          <div className="lg:pl-8">
             <div className="bg-brand-brown/10 p-1 rounded-2xl">
                <ContactForm />
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm font-sans">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Made with &hearts; for the Barkas Community.</p>
        </div>
      </div>
    </footer>
  );
};

export default LocationFooter;