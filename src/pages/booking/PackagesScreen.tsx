import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ProgressIndicator } from '../../components/common/ProgressIndicator';
import { PackageCard } from '../../components/domain/PackageCard';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';
import { mockPackages } from '../../mock/packages';

export const PackagesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking, selectPackage } = useBooking();

  const handleContinue = () => {
    navigate('/set-safar/review');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Choose Your Safar"
        subtitle="Select Package"
        onBackClick={() => navigate('/set-safar/personalize')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <ProgressIndicator currentStep={5} />

        <div>
          <h1 className="text-2xl font-black text-slate-900">Choose Your Safar Package</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Select the level of companion support you desire.</p>
        </div>

        <div className="space-y-4">
          {mockPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isSelected={booking.selectedPackageId === pkg.id}
              onSelect={() => selectPackage(pkg.id)}
            />
          ))}
        </div>

        <div className="pt-2">
          <Button onClick={handleContinue} size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Proceed to Review →
          </Button>
        </div>
      </div>
    </div>
  );
};
