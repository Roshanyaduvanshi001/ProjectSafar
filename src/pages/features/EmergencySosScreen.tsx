import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { BottomNavigation } from '../../components/layout/BottomNavigation';
import { SosButton } from '../../components/domain/SosButton';
import { Phone, ShieldAlert, Building2, Share2, MapPin, CheckCircle2 } from 'lucide-react';
import { useJourney } from '../../context/JourneyContext';

export const EmergencySosScreen: React.FC = () => {
  const navigate = useNavigate();
  const { journey } = useJourney();
  const [sosActive, setSosActive] = useState<boolean>(false);

  const handleCall = (title: string, number: string) => {
    alert(`Prototype Simulation: Initiating emergency call to ${title} (${number}). No real call is placed.`);
  };

  const handleShare = () => {
    alert('Prototype Simulation: Live travel location link shared with Emergency Contacts!');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation 
        title="Emergency SOS" 
        subtitle="Safety Companion" 
        showBack={true}
        onBackClick={() => navigate('/my-safar')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Current Journey Info Header */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Current Journey</span>
            <span className="text-xs font-bold text-slate-900">{journey.fromCity} → {journey.toCity} ({journey.departureDate})</span>
          </div>
          <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full">
            Active Tracking
          </span>
        </div>

        <div>
          <h1 className="text-2xl font-black text-red-600 flex items-center space-x-2">
            <ShieldAlert className="w-7 h-7 text-red-600" />
            <span>Need Help?</span>
          </h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Instant 24x7 emergency response protocol for Indian travel.</p>
        </div>

        {/* SOS Hold Button Component */}
        <SosButton onActivated={() => setSosActive(true)} />

        {sosActive && (
          <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-2xl text-emerald-800 text-xs font-semibold flex items-center space-x-3 animate-fade-in shadow-md">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold">SOS Signal Broadcast Active</h4>
              <p className="text-[11px] text-emerald-700">Agent {journey.agent.name} & emergency contact have received your real-time coordinates.</p>
            </div>
          </div>
        )}

        {/* Emergency Quick Action Buttons */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Emergency Actions</h3>

          <div className="grid grid-cols-1 gap-2.5">
            <button
              onClick={() => handleCall(`Safar Agent (${journey.agent.name})`, journey.agent.phone)}
              className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-center justify-between hover:border-red-300 active:scale-98 transition-all shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-900">Call Safar Agent</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">{journey.agent.name} • 24x7 Priority Line</p>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-600">Call</span>
            </button>

            <button
              onClick={() => handleCall('Emergency Contact', '+91 98111 22334')}
              className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-center justify-between hover:border-red-300 active:scale-98 transition-all shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-50 text-red-600 rounded-xl">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-900">Emergency Contact</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">+91 98111 22334 (Family)</p>
                </div>
              </div>
              <span className="text-xs font-bold text-red-600">Call</span>
            </button>

            <button
              onClick={() => handleCall('Nearby Hospital (Apollo)', '102')}
              className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-center justify-between hover:border-red-300 active:scale-98 transition-all shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-900">Nearby Hospital</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">Apollo Medical (1.2 km away)</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600">Call 102</span>
            </button>

            <button
              onClick={() => handleCall('Nearby Police Station', '112')}
              className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-center justify-between hover:border-red-300 active:scale-98 transition-all shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-900">Nearby Police Station</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">CP Police Station (600m away)</p>
                </div>
              </div>
              <span className="text-xs font-bold text-indigo-600">Call 112</span>
            </button>

            <button
              onClick={handleShare}
              className="p-3.5 bg-slate-900 text-white rounded-2xl flex items-center justify-between hover:bg-slate-800 active:scale-98 transition-all shadow-md"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 text-white rounded-xl">
                  <Share2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white">Share Live Location</h4>
                  <p className="text-[10px] text-slate-300 font-semibold">Share tracking link with trusted contacts</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400">Share</span>
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
