import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Tag, Check, Calendar, MapPin, User, ShieldCheck } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';
import { mockPackages } from '../../mock/packages';

export const ReviewScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking, applyPromoCode } = useBooking();
  const [code, setCode] = useState<string>('SAFAR100');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const selectedPkg = mockPackages.find(p => p.id === booking.selectedPackageId) || mockPackages[1];

  const packageCost = booking.packageTotal;
  const serviceFee = booking.serviceFee;
  const taxes = booking.taxes;
  const discount = booking.discount;
  const totalAmount = packageCost + serviceFee + taxes - discount;

  const handleApply = () => {
    const success = applyPromoCode(code);
    if (!success) {
      setErrorMsg('Invalid promo code. Try SAFAR100');
    } else {
      setErrorMsg('');
    }
  };

  const handleProceed = () => {
    navigate('/set-safar/payment');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Review Your Safar"
        subtitle="Final Verification"
        onBackClick={() => navigate('/set-safar/packages')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Review Your Safar</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Please confirm details before proceeding to payment.</p>
        </div>

        {/* Journey Summary Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">JOURNEY SUMMARY</span>
            <span className="text-xs font-bold text-blue-600 flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" /> {booking.travelDate} • {booking.preferredTime}
            </span>
          </div>

          <div className="flex items-center justify-between font-black text-slate-900 text-lg">
            <span>{booking.fromLocation}</span>
            <span className="text-blue-600 text-xl font-normal">↓</span>
            <span>{booking.toLocation}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
            <div className="bg-slate-50 p-2.5 rounded-xl">
              <span className="text-[10px] text-slate-400 font-semibold block">PURPOSE</span>
              <span className="font-bold text-slate-800">{booking.purpose}</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl">
              <span className="text-[10px] text-slate-400 font-semibold block">TRAVELLER</span>
              <span className="font-bold text-slate-800">{booking.traveller.fullName}</span>
            </div>
          </div>

          <div className="bg-blue-50/70 p-3 rounded-xl flex items-center justify-between text-xs font-bold text-blue-800">
            <span>Package Selected:</span>
            <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-full">{selectedPkg.name}</span>
          </div>
        </div>

        {/* Promo Code Input */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
          <label className="text-xs font-bold text-slate-700 block">Have a promo code?</label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="SAFAR100"
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold rounded-xl py-2.5 pl-10 pr-3 focus:outline-none focus:border-blue-600"
              />
            </div>
            <button
              onClick={handleApply}
              className="py-2.5 px-4 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 active:scale-95 transition-all"
            >
              Apply
            </button>
          </div>
          {booking.promoApplied && (
            <p className="text-xs text-emerald-600 font-bold flex items-center mt-1">
              <Check className="w-3.5 h-3.5 mr-1" /> Promo SAFAR100 applied! (₹100 OFF)
            </p>
          )}
          {errorMsg && <p className="text-xs text-red-500 font-semibold mt-1">{errorMsg}</p>}
        </div>

        {/* Price Breakdown */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2.5">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-100">
            PRICE BREAKDOWN
          </h3>

          <div className="flex justify-between text-xs text-slate-600 font-medium">
            <span>Package Cost ({selectedPkg.name}):</span>
            <span className="font-bold text-slate-800">₹{packageCost.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-xs text-slate-600 font-medium">
            <span>Service Fee:</span>
            <span className="font-bold text-slate-800">₹{serviceFee.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-xs text-slate-600 font-medium">
            <span>Taxes & GST:</span>
            <span className="font-bold text-slate-800">₹{taxes.toLocaleString()}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-xs text-emerald-600 font-bold">
              <span>Promo Discount:</span>
              <span>-₹{discount.toLocaleString()}</span>
            </div>
          )}

          <div className="border-t border-slate-200 pt-2 flex justify-between items-baseline">
            <span className="text-sm font-black text-slate-900">Total Payable:</span>
            <span className="text-2xl font-black text-blue-600">₹{totalAmount.toLocaleString()}</span>
          </div>
        </div>

        <Button onClick={handleProceed} size="lg" icon={<ArrowRight className="w-4 h-4" />}>
          Proceed to Payment →
        </Button>
      </div>
    </div>
  );
};
