export interface DestinationItem {
  id: string;
  name: string;
  state: string;
  tagline: string;
  imageUrl: string;
  rating: number;
}

export const mockDestinations: DestinationItem[] = [
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'National Capital Territory',
    tagline: 'Capital Heritage & Modern Bustle',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Western Coast',
    tagline: 'Sun, Beaches & Portuguese Charm',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    tagline: 'Royal Palaces & Pink City Culture',
    imageUrl: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tagline: 'Financial Capital & Coastal Skyline',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    tagline: 'Silicon Valley & Garden City Vibes',
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
  },
];
