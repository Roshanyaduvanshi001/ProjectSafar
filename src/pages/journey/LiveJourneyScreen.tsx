import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home as HotelIcon, Clock, FileText, Navigation, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { BottomNavigation } from '../../components/layout/BottomNavigation';
import { TimelineItem } from '../../components/domain/TimelineItem';
import { StatusBadge } from '../../components/common/StatusBadge';
import { useJourney } from '../../context/JourneyContext';

export const LiveJourneyScreen: React.FC = () => {
  const navigate = useNavigate();
  const { journey, markJourneyCompleted } = useJourney();

  const handleFinishTrip = () => {
    markJourneyCompleted();
    navigate('/my-safar/completed');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Live Journey"
        subtitle="Real-time Tracking"
        showBack={true}
        onBackClick={() => navigate('/my-safar')}
        rightAction={<StatusBadge status="LIVE" />}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Active Journey Banner Card */}
        <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-5 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
                Active Safar
              </span>
              <h2 className="text-2xl font-black mt-2 leading-none">
                {journey.fromCity} → {journey.toCity}
              </h2>
              <p className="text-xs text-blue-100 font-medium mt-1">
                Departure: {journey.departureDate} • {journey.departureTime}
              </p>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-bold text-emerald-300 block">Agent Assigned</span>
              <span className="text-xs font-bold text-white">{journey.agent.name}</span>
            </div>
          </div>

          {/* Trigger to test completed trip */}
          <div className="mt-4 pt-3 border-t border-white/15 flex justify-end">
            <button
              onClick={handleFinishTrip}
              className="text-xs font-bold text-amber-200 hover:text-white flex items-center space-x-1"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Complete Trip Simulation</span>
            </button>
          </div>
        </div>

        {/* Action Grid Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/my-safar/stay')}
            className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-between hover:border-blue-300 active:scale-95 transition-all group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <HotelIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">View Stay</h4>
                <p className="text-[10px] font-medium text-slate-400">Hotel XYZ</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
          </button>

          <button
            onClick={() => navigate('/my-safar/schedule')}
            className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-between hover:border-blue-300 active:scale-95 transition-all group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Schedule</h4>
                <p className="text-[10px] font-medium text-slate-400">7 Activities</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
          </button>

          <button
            onClick={() => navigate('/my-safar/documents')}
            className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-between hover:border-blue-300 active:scale-95 transition-all group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Documents</h4>
                <p className="text-[10px] font-medium text-slate-400">5 Cards</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
          </button>

          <button
            onClick={() => navigate('/my-safar/explore')}
            className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-between hover:border-blue-300 active:scale-95 transition-all group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Track Journey</h4>
                <p className="text-[10px] font-medium text-slate-400">Live Map</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Live Timeline Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">Journey Progress Timeline</h3>
            <span className="text-xs font-bold text-blue-600">6 Stages</span>
          </div>

          <div className="space-y-1">
            {journey.timeline.map((node, index) => (
              <TimelineItem
                key={node.id}
                item={node}
                isLast={index === journey.timeline.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Quick Agent Call Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-3">
            <img
              src={journey.agent.avatarUrl}
              alt={journey.agent.name}
              className="w-10 h-10 rounded-full object-cover border border-white/20"
            />
            <div>
              <h4 className="text-xs font-bold text-white">{journey.agent.name}</h4>
              <p className="text-[10px] text-slate-400 font-medium">Assigned Safar Agent ⭐ 4.9</p>
            </div>
          </div>
          <button
            onClick={() => alert(`Calling ${journey.agent.name} at ${journey.agent.phone}`)}
            className="py-2 px-3 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center space-x-1 hover:bg-emerald-700 active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Agent</span>
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
