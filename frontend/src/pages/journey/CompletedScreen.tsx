import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, Trophy, Calendar, MapPin, Wallet } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const CompletedScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full min-h-[800px] bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white flex flex-col justify-between p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="w-full flex justify-between items-center pt-4">
        <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-3 py-1 rounded-full border border-amber-500/30 flex items-center space-x-1">
          <Trophy className="w-3.5 h-3.5" />
          <span>Safar Journey Complete</span>
        </span>
        <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
      </div>

      {/* Main Celebration Content */}
      <div className="my-auto flex flex-col items-center text-center space-y-5">
        <div className="text-6xl animate-bounce-gentle">🎉</div>

        <div className="space-y-1">
          <h1 className="text-3xl font-black text-white">Safar Completed!</h1>
          <p className="text-sm font-semibold text-blue-200">Kolkata → Delhi (20 May – 22 May)</p>
        </div>

        {/* Trip Stats Grid */}
        <div className="w-full grid grid-cols-2 gap-3 pt-2">
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-left">
            <span className="text-[10px] text-slate-300 font-medium block">DURATION</span>
            <span className="text-xl font-black text-white">2 Days</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-left">
            <span className="text-[10px] text-slate-300 font-medium block">CITIES VISITED</span>
            <span className="text-xl font-black text-white">1 City</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-left">
            <span className="text-[10px] text-slate-300 font-medium block">PLACES EXPLORED</span>
            <span className="text-xl font-black text-emerald-300">12 Places</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-left">
            <span className="text-[10px] text-slate-300 font-medium block">TOTAL SPENT</span>
            <span className="text-xl font-black text-emerald-300">₹8,420</span>
          </div>
        </div>

        <p className="text-xs font-semibold text-blue-100 max-w-[240px]">
          "Hope you had a great Safar. We were honored to stay with you."
        </p>
      </div>

      {/* CTAs */}
      <div className="space-y-3 pb-4">
        <Button
          onClick={() => navigate('/my-safar/rate')}
          size="lg"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Rate Your Safar →
        </Button>

        <button
          onClick={() => navigate('/home')}
          className="w-full py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl text-xs font-bold text-slate-200 flex items-center justify-center space-x-2 transition-all active:scale-95"
        >
          <Compass className="w-4 h-4" />
          <span>Plan My Next Safar</span>
        </button>
      </div>
    </div>
  );
};
