import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Train, Plane, Bus, Building2, MapPin } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ProgressIndicator } from '../../components/common/ProgressIndicator';
import { InputField } from '../../components/common/InputField';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';
import { TravelMode, BookingStatusOption } from '../../types/booking';

export const JourneyDetailsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking, updateDetails, setCurrentStep } = useBooking();

  const [travelMode, setTravelMode] = useState<TravelMode>(booking.travelMode);
  const [bookingStatus, setBookingStatus] = useState<BookingStatusOption>(booking.bookingStatus);
  const [companyName, setCompanyName] = useState<string>(booking.companyName);
  const [destinationInfo, setDestinationInfo] = useState<string>(booking.destinationInfo);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    updateDetails(travelMode, bookingStatus, companyName, destinationInfo);
    setCurrentStep(4);
    navigate('/set-safar/traveller');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Journey Details"
        subtitle="Step 3 of 5"
        onBackClick={() => navigate('/set-safar/purpose')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <ProgressIndicator currentStep={3} />

        {/* Route Summary Pill */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>ROUTE SUMMARY</span>
            <span className="text-blue-600 font-bold">{booking.travelDate} • {booking.preferredTime}</span>
          </div>
          <div className="flex items-center justify-between font-black text-base text-slate-900">
            <span>{booking.fromLocation}</span>
            <span className="text-blue-600 text-xl font-normal">→</span>
            <span>{booking.toLocation}</span>
          </div>
          <div className="text-[11px] font-bold text-slate-400">
            Purpose: <span className="text-slate-700">{booking.purpose}</span>
          </div>
        </div>

        <form onSubmit={handleContinue} className="space-y-5">
          {/* Travel Mode Selector */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-2">Travel Mode</label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { mode: 'Train' as TravelMode, icon: <Train className="w-5 h-5 mb-1" /> },
                { mode: 'Flight' as TravelMode, icon: <Plane className="w-5 h-5 mb-1" /> },
                { mode: 'Bus' as TravelMode, icon: <Bus className="w-5 h-5 mb-1" /> },
              ].map(({ mode, icon }) => {
                const isSelected = travelMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setTravelMode(mode)}
                    className={`py-3 px-2 rounded-2xl border flex flex-col items-center justify-center font-bold text-xs transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {icon}
                    <span>{mode}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Booking Status Selector */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-2">Booking Status</label>
            <div className="space-y-2">
              {[
                'Already booked my ticket',
                'Help me book my travel',
              ].map((status) => {
                const isSelected = bookingStatus === status;
                return (
                  <label
                    key={status}
                    onClick={() => setBookingStatus(status as BookingStatusOption)}
                    className={`flex items-center space-x-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="bookingStatus"
                      checked={isSelected}
                      onChange={() => {}}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-xs font-bold text-slate-800">{status}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Optional Destination/Event Info */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Destination / Event Information (Optional)
            </h3>

            <InputField
              label="Company / College / Event Name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. ABC Technologies"
              icon={<Building2 className="w-4 h-4" />}
            />

            <InputField
              label="Specific Destination Location"
              type="text"
              value={destinationInfo}
              onChange={(e) => setDestinationInfo(e.target.value)}
              placeholder="e.g. Barakhamba Road, New Delhi"
              icon={<MapPin className="w-4 h-4" />}
            />
          </div>

          <Button type="submit" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Continue →
          </Button>
        </form>
      </div>
    </div>
  );
};
