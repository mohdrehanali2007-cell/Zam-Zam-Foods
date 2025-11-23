import React, { useState } from 'react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Bulk Orders', href: '#bulk-orders' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl text-brand-brown tracking-tight">
                ZAM ZAM
              </span>
              <span className="font-heading font-bold text-sm text-brand-gold -mt-1 tracking-widest uppercase">
                Foods
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-gray-700 hover:text-brand-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 font-heading font-bold text-brand-brown hover:text-brand-gold transition-colors"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
            <button className="bg-brand-accent hover:bg-red-700 text-white font-heading font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
              <ShoppingBag size={18} />
              Order Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-accent focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 py-4 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 space-y-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-sans font-medium text-lg text-gray-700 hover:text-brand-accent hover:bg-gray-50 px-3 py-2 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
             <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full text-center border-2 border-brand-brown text-brand-brown font-heading font-bold py-3 rounded-lg hover:bg-brand-brown hover:text-white transition-colors"
            >
              Call Us
            </a>
            <button className="w-full bg-brand-accent text-white font-heading font-bold py-3 rounded-lg shadow-md">
              Order Online
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
