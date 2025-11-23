import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: 'sweet' | 'savory' | 'bakery';
  popular?: boolean;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}
