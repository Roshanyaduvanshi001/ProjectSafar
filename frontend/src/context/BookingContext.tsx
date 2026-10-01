import React, { createContext, useContext, useState } from 'react';
import { JourneyBookingState, TravelPurpose, TravelMode, BookingStatusOption, IdTypeOption, BudgetTier, StayTypeOption, TransportPreference } from '../types/booking';
import { mockPackages } from '../mock/packages';

const initialBookingState: JourneyBookingState = {
  fromLocation: 'Kolkata, West Bengal',
  toLocation: 'Delhi',
  travelDate: '20 May 2026',
  preferredTime: '10:30 AM',
  purpose: 'Interview',
  travelMode: 'Train',
  bookingStatus: 'Already booked my ticket',
  companyName: 'ABC Technologies',
  destinationInfo: 'New Delhi',
  traveller: {
    fullName: 'Roshan Kumar',
    phone: '+91 98765 43210',
    email: 'roshan.kumar@gmail.com',
    dob: '15/08/1998',
    gender: 'Male',
    emergencyContact: '+91 98111 22334',
    currentCity: 'Kolkata',
    idType: 'Aadhaar',
    idUploaded: true,
  },
  personalization: {
    budget: 'Comfortable',
    stay: 'Hotel',
    transportation: ['Metro', 'Cab'],
    preferences: ['Veg Food', 'Safe Travel', 'Near Destination'],
  },
  selectedPackageId: 'standard-safar',
  packageTotal: 1598, // 2 days @ 799/day
  serviceFee: 100,
  taxes: 90,
  discount: 0,
  promoCode: '',
  promoApplied: false,
  paymentMethod: 'upi',
  bookingId: 'SAFAR202610234',
  paymentId: 'PAY-TXN-998201',
};

interface BookingContextType {
  booking: JourneyBookingState;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  updateRoute: (from: string, to: string, date: string, time: string) => void;
  updatePurpose: (purpose: TravelPurpose) => void;
  updateDetails: (mode: TravelMode, status: BookingStatusOption, company: string, dest: string) => void;
  updateTraveller: (traveller: Partial<JourneyBookingState['traveller']>) => void;
  updatePersonalization: (personalization: JourneyBookingState['personalization']) => void;
  selectPackage: (packageId: string) => void;
  applyPromoCode: (code: string) => boolean;
  setPaymentMethod: (method: JourneyBookingState['paymentMethod']) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [booking, setBooking] = useState<JourneyBookingState>(initialBookingState);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const updateRoute = (fromLocation: string, toLocation: string, travelDate: string, preferredTime: string) => {
    setBooking(prev => ({ ...prev, fromLocation, toLocation, travelDate, preferredTime }));
  };

  const updatePurpose = (purpose: TravelPurpose) => {
    setBooking(prev => ({ ...prev, purpose }));
  };

  const updateDetails = (travelMode: TravelMode, bookingStatus: BookingStatusOption, companyName: string, destinationInfo: string) => {
    setBooking(prev => ({ ...prev, travelMode, bookingStatus, companyName, destinationInfo }));
  };

  const updateTraveller = (fields: Partial<JourneyBookingState['traveller']>) => {
    setBooking(prev => ({
      ...prev,
      traveller: { ...prev.traveller, ...fields },
    }));
  };

  const updatePersonalization = (personalization: JourneyBookingState['personalization']) => {
    setBooking(prev => ({ ...prev, personalization }));
  };

  const selectPackage = (packageId: string) => {
    const pkg = mockPackages.find(p => p.id === packageId) || mockPackages[1];
    const packageTotal = pkg.pricePerDay * 2; // 2 days trip
    setBooking(prev => ({
      ...prev,
      selectedPackageId: packageId,
      packageTotal,
    }));
  };

  const applyPromoCode = (code: string): boolean => {
    if (code.trim().toUpperCase() === 'SAFAR100') {
      setBooking(prev => ({
        ...prev,
        promoCode: 'SAFAR100',
        promoApplied: true,
        discount: 100,
      }));
      return true;
    }
    return false;
  };

  const setPaymentMethod = (paymentMethod: JourneyBookingState['paymentMethod']) => {
    setBooking(prev => ({ ...prev, paymentMethod }));
  };

  const resetBooking = () => {
    setBooking(initialBookingState);
    setCurrentStep(1);
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        currentStep,
        setCurrentStep,
        updateRoute,
        updatePurpose,
        updateDetails,
        updateTraveller,
        updatePersonalization,
        selectPackage,
        applyPromoCode,
        setPaymentMethod,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
