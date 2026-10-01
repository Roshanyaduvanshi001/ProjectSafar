import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Compass, MapPin, Calendar, ArrowRight, ShieldAlert, Bot, Wallet, HelpCircle } from 'lucide-react';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { DestinationCard } from '../components/domain/DestinationCard';
import { mockDestinations } from '../mock/destinations';
import { StatusBadge } from '../components/common/StatusBadge';
import { useAuth } from '../context/AuthContext';

export const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const avatarUrl = user?.avatarUrl || '';
  const userName = user?.name || 'Guest';
  const userEmail = user?.email || '';
  const currentCity = user?.currentCity || '';
  const completedSafarsCount = user?.completedSafarsCount ?? 0;
  const citiesVisitedCount = user?.citiesVisitedCount ?? 0;
  const averageRating = user?.averageRating ?? 0;

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      {/* Scrollable Dashboard Body */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
        {/* Header Greeting */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Good Morning 👋</h1>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">Where are you going next?</p>
          </div>
          <div
            onClick={() => navigate('/profile')}
            className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden cursor-pointer shadow-sm active:scale-95 transition-all"
          >
            <img src={user?.avatarUrl || ''} alt={user?.name || 'Guest'} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Large Primary CTA: Set My Safar */}
        <div
          onClick={() => navigate('/set-safar/destination')}
          className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 rounded-3xl p-5 text-white shadow-xl shadow-blue-600/20 cursor-pointer group hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 relative overflow-hidden"
        >
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform"></div>

          <div className="flex items-center justify-between relative z-10">
            <div>
              <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider bg-white/15 px-2.5 py-0.5 rounded-full border border-white/10">
                Start Planning
              </span>
              <h2 className="text-2xl font-black mt-2 leading-tight">Set My Safar</h2>
              <p className="text-xs text-blue-100 font-medium mt-0.5">Plan, customize & book your full journey</p>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-lg group-hover:rotate-90 transition-transform duration-300 shrink-0">
              <Plus className="w-7 h-7 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Upcoming Journey Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <StatusBadge status="LIVE" />
              <span className="text-xs font-bold text-slate-700">Upcoming Journey</span>
            </div>
            <span className="text-[11px] font-bold text-blue-600">PNR: 2458901234</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <h3 className="text-lg font-black text-slate-900">Kolkata → Delhi</h3>
              <p className="text-xs font-semibold text-slate-500 flex items-center mt-0.5">
                <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" /> 20 May • 10:30 AM
              </p>
            </div>

            <button
              onClick={() => navigate('/my-safar')}
              className="py-2 px-3.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 active:scale-95 transition-all flex items-center space-x-1"
            >
              <span>View Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Companion Tools Actions */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Companion Tools</h3>
          <div className="grid grid-cols-4 gap-2.5">
            <button
              onClick={() => navigate('/my-safar/ai')}
              className="flex flex-col items-center p-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 active:scale-95 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-700">Safar AI</span>
            </button>

            <button
              onClick={() => navigate('/my-safar/sos')}
              className="flex flex-col items-center p-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-red-200 active:scale-95 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-1.5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-700">Emergency</span>
            </button>

            <button
              onClick={() => navigate('/my-safar/expenses')}
              className="flex flex-col items-center p-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-emerald-200 active:scale-95 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-700">Expenses</span>
            </button>

            <button
              onClick={() => navigate('/my-safar/documents')}
              className="flex flex-col items-center p-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-amber-200 active:scale-95 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
                <HelpCircle className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-slate-700">Vault</span>
            </button>
          </div>
        </div>

        {/* Recommended For You Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900">Recommended For You</h3>
            <span className="text-xs font-semibold text-blue-600 cursor-pointer hover:underline">Explore All</span>
          </div>

          <div className="flex space-x-3 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
            {mockDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onClick={() => navigate('/set-safar/destination')}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Shell */}
      <BottomNavigation />
    </div>
  );
};
