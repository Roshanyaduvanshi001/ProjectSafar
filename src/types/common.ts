export type PlaceCategory = 
  | 'Food'
  | 'Cafes'
  | 'Hotels'
  | 'Hospitals'
  | 'Transport'
  | 'ATM'
  | 'Attractions'
  | 'Shopping';

export interface NearbyPlaceItem {
  id: string;
  name: string;
  category: PlaceCategory;
  rating: number;
  distance: string;
  address: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
}

export interface ChatMessageItem {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export type ExpenseCategory = 'Travel' | 'Stay' | 'Food' | 'Cab' | 'Shopping' | 'Other';

export interface ExpenseItem {
  id: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
}
