export type TimelineStatus = 'completed' | 'active' | 'upcoming';

export interface TimelineItemNode {
  id: string;
  title: string;
  subtitle?: string;
  time?: string;
  status: TimelineStatus;
  iconName?: string;
}

export interface SafarAgentInfo {
  id: string;
  name: string;
  rating: number;
  tagline: string;
  languages: string[];
  completedSafars: number;
  avatarUrl: string;
  phone: string;
  greetingMessage: string;
}

export interface StayInfo {
  id: string;
  hotelName: string;
  rating: number;
  city: string;
  address: string;
  checkInDate: string;
  checkOutDate: string;
  imageUrl: string;
  phone: string;
  bookingReference: string;
}

export interface ScheduleEventItem {
  id: string;
  time: string;
  title: string;
  category: 'meal' | 'travel' | 'meeting' | 'explore' | 'hotel';
  location?: string;
  completed?: boolean;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: 'ticket' | 'hotel' | 'letter' | 'id' | 'insurance';
  issuedFor: string;
  fileSize: string;
  documentNumber: string;
  downloadUrl?: string;
}

export interface ActiveJourneyState {
  id: string;
  status: 'LIVE' | 'COMPLETED';
  fromCity: string;
  toCity: string;
  departureDate: string;
  departureTime: string;
  timeline: TimelineItemNode[];
  agent: SafarAgentInfo;
  stay: StayInfo;
  schedule: ScheduleEventItem[];
  documents: DocumentItem[];
}
