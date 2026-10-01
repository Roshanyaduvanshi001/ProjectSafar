import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ProgressIndicator } from '../../components/common/ProgressIndicator';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';
import { BudgetTier, StayTypeOption, TransportPreference } from '../../types/booking';

export const PersonalizeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking, updatePersonalization, setCurrentStep } = useBooking();

  const [budget, setBudget] = useState<BudgetTier>(booking.personalization.budget);
  const [stay, setStay] = useState<StayTypeOption>(booking.personalization.stay);
  const [transportation, setTransportation] = useState<TransportPreference[]>(
    booking.personalization.transportation
  );
  const [preferences, setPreferences] = useState<string[]>(booking.personalization.preferences);

  const toggleTransport = (item: TransportPreference) => {
    if (transportation.includes(item)) {
      setTransportation(transportation.filter((t) => t !== item));
    } else {
      setTransportation([...transportation, item]);
    }
  };

  const togglePref = (item: string) => {
    if (preferences.includes(item)) {
      setPreferences(preferences.filter((p) => p !== item));
    } else {
      setPreferences([...preferences, item]);
    }
  };

  const handleContinue = () => {
    updatePersonalization({
      budget,
      stay,
      transportation,
      preferences,
    });
    setCurrentStep(5);
    navigate('/set-safar/packages');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Personalize Safar"
        subtitle="Preferences"
        onBackClick={() => navigate('/set-safar/traveller')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <ProgressIndicator currentStep={5} />

        <div>
          <h1 className="text-2xl font-black text-slate-900">Personalize Your Safar</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Tell us what matters to you for a perfect journey.</p>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Budget Category</label>
          <div className="grid grid-cols-3 gap-2">
            {(['Budget', 'Comfortable', 'Premium'] as BudgetTier[]).map((tier) => {
              const isSel = budget === tier;
              return (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setBudget(tier)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                    isSel ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {tier}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stay */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Stay Preference</label>
          <div className="grid grid-cols-2 gap-2">
            {(['Hotel', 'Hostel', 'Guest House', 'No Stay Needed'] as StayTypeOption[]).map((item) => {
              const isSel = stay === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStay(item)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between ${
                    isSel ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  <span>{item}</span>
                  {isSel && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Transportation */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Preferred Local Transport</label>
          <div className="flex flex-wrap gap-2">
            {(['Metro', 'Cab', 'Public Transport', 'Private Car'] as TransportPreference[]).map((mode) => {
              const isSel = transportation.includes(mode);
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => toggleTransport(mode)}
                  className={`py-2 px-3.5 rounded-full text-xs font-semibold border transition-all ${
                    isSel ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {isSel ? `✓ ${mode}` : mode}
                </button>
              );
            })}
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Specific Travel Needs</label>
          <div className="flex flex-wrap gap-2">
            {['Veg Food', 'Low Cost', 'Near Destination', 'Safe Travel', 'Accessibility'].map((pref) => {
              const isSel = preferences.includes(pref);
              return (
                <button
                  key={pref}
                  type="button"
                  onClick={() => togglePref(pref)}
                  className={`py-2 px-3 rounded-full text-xs font-semibold border transition-all ${
                    isSel ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {isSel ? `✓ ${pref}` : pref}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-4">
          <Button onClick={handleContinue} size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Find My Safar →
          </Button>
        </div>
      </div>
    </div>
  );
};
