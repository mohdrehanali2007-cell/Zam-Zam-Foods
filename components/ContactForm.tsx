import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="font-heading font-bold text-2xl text-brand-brown mb-6">Send us a Message</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-shadow"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-shadow"
            placeholder="Enter your number"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            id="message" 
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-shadow"
            placeholder="Bulk order inquiry, reservation, etc."
          ></textarea>
        </div>
        <button type="button" className="w-full bg-brand-brown hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors shadow-md">
          Submit Enquiry
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
