import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Smartphone, CreditCard, Landmark, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';

export const PaymentScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking, setPaymentMethod } = useBooking();

  const [method, setMethod] = useState<'upi' | 'card' | 'netbanking' | 'wallet'>(booking.paymentMethod);

  const totalAmount = booking.packageTotal + booking.serviceFee + booking.taxes - booking.discount;

  const handlePay = () => {
    setPaymentMethod(method);
    navigate('/set-safar/success');
  };

  const paymentOptions = [
    { id: 'upi', label: 'UPI (GPay / PhonePe / Paytm)', icon: <Smartphone className="w-5 h-5 text-emerald-600" />, sub: 'Instant zero-fee transfer' },
    { id: 'card', label: 'Credit / Debit Card', icon: <CreditCard className="w-5 h-5 text-blue-600" />, sub: 'Visa, Mastercard, RuPay' },
    { id: 'netbanking', label: 'Net Banking', icon: <Landmark className="w-5 h-5 text-purple-600" />, sub: 'All major Indian banks' },
    { id: 'wallet', label: 'Wallets', icon: <Wallet className="w-5 h-5 text-amber-600" />, sub: 'Amazon Pay, Paytm Wallet' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Secure Payment 🔒"
        subtitle="256-Bit Encrypted"
        onBackClick={() => navigate('/set-safar/review')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Total Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Standard Safar Booking</span>
            <span className="text-xs text-blue-300 font-bold">SAFAR202610234</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 font-semibold block">Total Amount</span>
            <span className="text-2xl font-black text-emerald-400">₹{totalAmount.toLocaleString()}</span>
          </div>
        </div>

        {/* Security Badge */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center space-x-2.5 text-xs text-emerald-800 font-semibold">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Safe & encrypted prototype simulation. No real financial data is processed.</span>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Select Payment Method</label>
          <div className="space-y-2.5">
            {paymentOptions.map((opt) => {
              const isSelected = method === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setMethod(opt.id as any)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-500/20 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{opt.label}</h4>
                      <p className="text-[11px] font-medium text-slate-500">{opt.sub}</p>
                    </div>
                  </div>

                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={isSelected}
                    onChange={() => {}}
                    className="w-4 h-4 text-blue-600"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <Button onClick={handlePay} size="lg" icon={<Lock className="w-4 h-4" />}>
          Pay ₹{totalAmount.toLocaleString()} →
        </Button>
      </div>
    </div>
  );
};
