import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Home, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';

export const PaymentSuccessScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking } = useBooking();

  return (
    <div className="w-full h-full min-h-[800px] bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white flex flex-col justify-between p-6 relative overflow-hidden">
      {/* Background celebration glowing Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="w-full flex justify-between items-center pt-4">
        <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center space-x-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Payment Verified</span>
        </span>
        <span className="text-xs text-slate-400 font-medium">Step 5 of 5</span>
      </div>

      {/* Main Success Banner */}
      <div className="my-auto flex flex-col items-center text-center space-y-5">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center animate-pulse-subtle">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 stroke-[2.2]" />
          </div>
          <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-amber-300 animate-bounce-gentle" />
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-wide text-white">Payment Successful!</h1>
          <p className="text-sm font-semibold text-emerald-200">Your Safar has been confirmed.</p>
        </div>

        {/* Receipt Box */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 text-left space-y-3 shadow-2xl">
          <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2.5">
            <span className="text-slate-300 font-medium">Booking ID</span>
            <span className="font-bold text-white tracking-wider">SAFAR202610234</span>
          </div>

          <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2.5">
            <span className="text-slate-300 font-medium">Payment ID</span>
            <span className="font-bold text-white tracking-wider">PAY-TXN-998201</span>
          </div>

          <div className="flex justify-between items-center text-xs pt-1">
            <span className="text-slate-300 font-medium">Journey</span>
            <span className="font-bold text-emerald-300">Kolkata → Delhi (20 May)</span>
          </div>
        </div>
      </div>

      {/* Action CTAs */}
      <div className="space-y-3 pb-4">
        <Button
          onClick={() => navigate('/set-safar/agent')}
          size="lg"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          View My Safar →
        </Button>

        <button
          onClick={() => navigate('/home')}
          className="w-full py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl text-xs font-bold text-slate-200 flex items-center justify-center space-x-2 transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};
