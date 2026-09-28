export type TravelPurpose = 
  | 'Work / Business'
  | 'Interview'
  | 'Education'
  | 'Health / Medical'
  | 'Event'
  | 'Vacation'
  | 'Family / Personal'
  | 'Pilgrimage'
  | 'Other';

export type TravelMode = 'Train' | 'Flight' | 'Bus';

export type BookingStatusOption = 'Already booked my ticket' | 'Help me book my travel';

export type IdTypeOption = 'Aadhaar' | 'Passport' | 'Driving Licence';

export type BudgetTier = 'Budget' | 'Comfortable' | 'Premium';

export type StayTypeOption = 'Hotel' | 'Hostel' | 'Guest House' | 'No Stay Needed';

export type TransportPreference = 'Metro' | 'Cab' | 'Public Transport' | 'Private Car';

export interface PackageOption {
  id: string;
  name: string;
  pricePerDay: number;
  isRecommended?: boolean;
  features: string[];
}

export interface TravellerDetailsState {
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  emergencyContact: string;
  currentCity: string;
  idType: IdTypeOption;
  idUploaded: boolean;
}

export interface PersonalizationState {
  budget: BudgetTier;
  stay: StayTypeOption;
  transportation: TransportPreference[];
  preferences: string[];
}

export interface JourneyBookingState {
  fromLocation: string;
  toLocation: string;
  travelDate: string;
  preferredTime: string;
  purpose: TravelPurpose;
  travelMode: TravelMode;
  bookingStatus: BookingStatusOption;
  companyName: string;
  destinationInfo: string;
  traveller: TravellerDetailsState;
  personalization: PersonalizationState;
  selectedPackageId: string;
  packageTotal: number;
  serviceFee: number;
  taxes: number;
  discount: number;
  promoCode: string;
  promoApplied: boolean;
  paymentMethod: 'upi' | 'card' | 'netbanking' | 'wallet';
  bookingId?: string;
  paymentId?: string;
}
