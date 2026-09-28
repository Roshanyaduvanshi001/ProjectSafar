import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ProgressIndicator } from '../../components/common/ProgressIndicator';
import { LocationField } from '../../components/common/LocationField';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';

export const DestinationScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking, updateRoute, setCurrentStep } = useBooking();

  const [fromLocation, setFromLocation] = useState<string>(booking.fromLocation);
  const [toLocation, setToLocation] = useState<string>(booking.toLocation);
  const [travelDate, setTravelDate] = useState<string>(booking.travelDate);
  const [preferredTime, setPreferredTime] = useState<string>(booking.preferredTime);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    updateRoute(fromLocation, toLocation, travelDate, preferredTime);
    setCurrentStep(2);
    navigate('/set-safar/purpose');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Set My Safar"
        subtitle="Step 1 of 5"
        onBackClick={() => navigate('/home')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <ProgressIndicator currentStep={1} />

        <div>
          <h1 className="text-2xl font-black text-slate-900">Where to next?</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Tell us where you're heading.</p>
        </div>

        <form onSubmit={handleContinue} className="space-y-4">
          <LocationField
            label="FROM"
            value={fromLocation}
            onChange={setFromLocation}
            isCurrentLocation={true}
          />

          <LocationField
            label="TO"
            value={toLocation}
            onChange={setToLocation}
            placeholder="Where are you going?"
          />

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Travel Date</label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-3 pl-10 pr-3 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Preferred Time</label>
              <div className="relative flex items-center">
                <Clock className="absolute left-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-3 pl-10 pr-3 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Continue →
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
