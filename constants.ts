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
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800',
    popular: true
  },
  {
    id: '2',
    name: 'Kaju Katli',
    description: 'Diamond-shaped classics made with premium cashews and pure ghee.',
    category: 'sweet',
    image: 'https://images.unsplash.com/photo-1589947938363-22858a74e64e?auto=format&fit=crop&w=800'
  },
  {
    id: '3',
    name: 'Hyderabadi Chicken Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken and authentic spices.',
    category: 'savory',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800',
    popular: true
  },
  {
    id: '4',
    name: 'Assorted Bakery Platter',
    description: 'Freshly baked biscuits, rusks, and puffs straight from our oven.',
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800'
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