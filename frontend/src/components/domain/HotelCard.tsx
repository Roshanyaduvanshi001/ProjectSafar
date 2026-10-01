import React from 'react';
import { Star, MapPin, Phone, Navigation, FileText } from 'lucide-react';
import { StayInfo } from '../../types/journey';

interface HotelCardProps {
  stay: StayInfo;
  onDirections?: () => void;
  onCall?: () => void;
  onBookingDetails?: () => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({
  stay,
  onDirections,
  onCall,
  onBookingDetails,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
      <div className="relative h-44 w-full">
        <img src={stay.imageUrl} alt={stay.hotelName} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center space-x-1 text-white text-xs font-bold">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{stay.rating}</span>
        </div>
        <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-medium">
          Check-in: {stay.checkInDate}
        </div>
      </div>

      <div className="p-4 flex flex-col space-y-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{stay.hotelName}</h3>
          <p className="text-xs font-medium text-slate-500 flex items-center mt-1">
            <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
            {stay.address}
          </p>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-slate-400 font-medium block text-[10px]">CHECK-IN</span>
            <span className="font-bold text-slate-800">{stay.checkInDate}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block text-[10px]">CHECK-OUT</span>
            <span className="font-bold text-slate-800">{stay.checkOutDate}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-1">
          <button
            onClick={onDirections}
            className="py-2.5 px-2 bg-blue-50 text-blue-700 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 hover:bg-blue-100 transition-all"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Directions</span>
          </button>
          <button
            onClick={onCall}
            className="py-2.5 px-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 hover:bg-slate-200 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Hotel</span>
          </button>
          <button
            onClick={onBookingDetails}
            className="py-2.5 px-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 hover:bg-slate-200 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Voucher</span>
          </button>
        </div>
      </div>
    </div>
  );
};
