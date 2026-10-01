import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, Stethoscope, PartyPopper, Sun, Heart, Compass, Check, HelpCircle } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ProgressIndicator } from '../../components/common/ProgressIndicator';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';
import { TravelPurpose } from '../../types/booking';

interface PurposeOption {
  label: TravelPurpose;
  icon: React.ReactNode;
  desc: string;
}

export const PurposeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking, updatePurpose, setCurrentStep } = useBooking();
  const [selectedPurpose, setSelectedPurpose] = useState<TravelPurpose>(booking.purpose);

  const options: PurposeOption[] = [
    { label: 'Work / Business', icon: <Briefcase className="w-5 h-5 text-blue-600" />, desc: 'Client visits, corporate trips' },
    { label: 'Interview', icon: <Briefcase className="w-5 h-5 text-purple-600" />, desc: 'Job interviews & assessments' },
    { label: 'Education', icon: <GraduationCap className="w-5 h-5 text-indigo-600" />, desc: 'Exams, college admissions' },
    { label: 'Health / Medical', icon: <Stethoscope className="w-5 h-5 text-emerald-600" />, desc: 'Doctor visits, treatment' },
    { label: 'Event', icon: <PartyPopper className="w-5 h-5 text-pink-600" />, desc: 'Weddings, conferences' },
    { label: 'Vacation', icon: <Sun className="w-5 h-5 text-amber-500" />, desc: 'Leisure, tourism & holiday' },
    { label: 'Family / Personal', icon: <Heart className="w-5 h-5 text-rose-500" />, desc: 'Visiting home & relatives' },
    { label: 'Pilgrimage', icon: <Compass className="w-5 h-5 text-cyan-600" />, desc: 'Spiritual & temple visits' },
    { label: 'Other', icon: <HelpCircle className="w-5 h-5 text-slate-500" />, desc: 'General travel needs' },
  ];

  const handleContinue = () => {
    updatePurpose(selectedPurpose);
    setCurrentStep(3);
    navigate('/set-safar/journey-details');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Purpose of Travel"
        subtitle="Step 2 of 5"
        onBackClick={() => navigate('/set-safar/destination')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <ProgressIndicator currentStep={2} />

        <div>
          <h1 className="text-xl font-black text-slate-900">What's the purpose of your Safar?</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Select one option to personalize your journey companion.</p>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {options.map((option) => {
            const isSelected = selectedPurpose === option.label;

            return (
              <div
                key={option.label}
                onClick={() => setSelectedPurpose(option.label)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-500/20 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{option.label}</h3>
                    <p className="text-[11px] font-medium text-slate-500">{option.desc}</p>
                  </div>
                </div>

                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-2">
          <Button onClick={handleContinue} size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
};
