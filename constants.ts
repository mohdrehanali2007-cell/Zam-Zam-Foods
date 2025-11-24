import { Star, Clock, Utensils, Users } from 'lucide-react';
import { Feature, MenuItem, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: "Zam Zam Foods",
  phone: "+91 40 1234 5678", // Placeholder
  address: "No 7/30, Shaheen Nagar, Barkas, Hyderabad, Telangana 500005",
  whatsapp: "https://wa.me/919000000000", // Placeholder
  mapsLink: "https://maps.app.goo.gl/fE1A3AZazhffufh29?g_st=awb",
  instagram: "https://www.instagram.com/zam_zam.foods?igsh=eDk5d2xpbnJ0bjBh",
  rating: 4.3,
  reviewCount: 1300
};

// ==========================================
// IMAGE CONFIGURATION
// ==========================================
export const IMAGES = {
  // The main large image at the top of the page
  // PLEASE SAVE YOUR IMAGE AS 'hero-image.jpg' IN YOUR PROJECT FOLDER
  HERO_BACKGROUND: "./hero-image.jpg",
  
  // The image shown in the 'Why Choose Us' / Features section (Your storefront)
  STOREFRONT: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
  
  // The image for the Events/Bulk Orders section
  BULK_ORDERS: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800",

  // Menu Item Images
  MENU: {
    GULAB_JAMUN: "https://images.unsplash.com/photo-1605197582570-5b08c62c262e?auto=format&fit=crop&w=800",
    KAJU_KATLI: "https://images.unsplash.com/photo-1575482361772-91f9737f5904?auto=format&fit=crop&w=800",
    BIRYANI: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800",
    BAKERY: "https://images.unsplash.com/photo-1509365463985-25d6d5b9d303?auto=format&fit=crop&w=800",
  },

  // Gallery Images (Grid)
  GALLERY: [
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800", title: 'Our Storefront' },
    { url: 'https://images.unsplash.com/photo-1631515243343-04a80e4b4458?auto=format&fit=crop&w=800', title: 'Hyderabadi Biryani' },
    { url: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=800', title: 'Dining Atmosphere' },
    { url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800', title: 'Fresh Snacks' },
    { url: 'https://images.unsplash.com/photo-1536304445888-06a928236d10?auto=format&fit=crop&w=800', title: 'Jalebi & Sweets' },
    { url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800', title: 'Family Seating' },
    { url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800', title: 'Traditional Ladoo' },
    { url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800', title: 'Catering Service' },
  ]
};

export const FEATURES: Feature[] = [
  {
    icon: Star,
    title: "Trusted Heritage",
    description: "4.3★ rating from over 1,300 reviews in the Barkas community."
  },
  {
    icon: Clock,
    title: "Open Late",
    description: "Fresh sweets & baked items, made daily and serving until 11 pm."
  },
  {
    icon: Utensils,
    title: "Full Dining",
    description: "Authentic Hyderabadi cuisine & family dining alongside our famous sweets."
  },
  {
    icon: Users,
    title: "Event Specialists",
    description: "Bulk orders for weddings, festivals, and corporate gatherings."
  }
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: '1',
    name: 'Special Gulab Jamun',
    description: 'Soft, melt-in-your-mouth khoya dumplings soaked in rose-saffron syrup.',
    category: 'sweet',
    image: IMAGES.MENU.GULAB_JAMUN,
    popular: true
  },
  {
    id: '2',
    name: 'Kaju Katli',
    description: 'Diamond-shaped classics made with premium cashews and pure ghee.',
    category: 'sweet',
    image: IMAGES.MENU.KAJU_KATLI
  },
  {
    id: '3',
    name: 'Hyderabadi Chicken Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken and authentic spices.',
    category: 'savory',
    image: IMAGES.MENU.BIRYANI,
    popular: true
  },
  {
    id: '4',
    name: 'Assorted Bakery Platter',
    description: 'Freshly baked biscuits, rusks, and puffs straight from our oven.',
    category: 'bakery',
    image: IMAGES.MENU.BAKERY
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mohammed A.",
    date: "2 weeks ago",
    text: "Great variety of sweets. The staff are good and the store is clean and hygienic. The best spot in Shaheen Nagar.",
    rating: 5
  },
  {
    id: 2,
    name: "Fatima S.",
    date: "1 month ago",
    text: "Ordered bulk sweets for my sister's wedding. Excellent packaging and the taste was authentic Hyderabadi.",
    rating: 5
  },
  {
    id: 3,
    name: "Rahul K.",
    date: "3 months ago",
    text: "Good place for a quick dinner with family. Biryani was tasty and reasonably priced.",
    rating: 4
  }
];