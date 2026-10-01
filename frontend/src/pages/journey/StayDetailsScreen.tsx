import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { BottomNavigation } from '../../components/layout/BottomNavigation';
import { HotelCard } from '../../components/domain/HotelCard';
import { useJourney } from '../../context/JourneyContext';
import { ShieldCheck } from 'lucide-react';

export const StayDetailsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { journey } = useJourney();

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation 
        title="Stay Details" 
        subtitle="Hotel Reservation" 
        showBack={true}
        onBackClick={() => navigate('/my-safar')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Your Stay</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Verified hotel reservation details & assistance.</p>
        </div>

        {/* Primary Hotel Card Component */}
        <HotelCard
          stay={journey.stay}
          onDirections={() => navigate('/my-safar/explore')}
          onCall={() => alert(`Calling ${journey.stay.hotelName} at ${journey.stay.phone}`)}
          onBookingDetails={() => navigate('/my-safar/documents')}
        />

        {/* Stay Inclusions Box */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Stay Features & Inclusions</h3>
          <div className="space-y-2 text-xs font-semibold text-slate-700">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Complimentary Breakfast included</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Free High-Speed 5G Wi-Fi</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Air Conditioned Executive Room</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>24x7 Safar Desk Support at Reception</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
