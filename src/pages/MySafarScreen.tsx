import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Navigation, 
  Hotel as HotelIcon, 
  Clock, 
  FileText, 
  ShieldAlert, 
  Bot, 
  Wallet, 
  Compass, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { TopNavigation } from '../components/layout/TopNavigation';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { StatusBadge } from '../components/common/StatusBadge';
import { useJourney } from '../context/JourneyContext';

export const MySafarScreen: React.FC = () => {
  const navigate = useNavigate();
  const { journey } = useJourney();

  const journeyCards = [
    {
      id: 'live',
      title: 'Live Journey',
      subtitle: 'Real-time tracking & updates',
      icon: Navigation,
      color: 'bg-blue-50 text-blue-600',
      route: '/my-safar/live',
    },
    {
      id: 'stay',
      title: 'Stay',
      subtitle: `${journey.stay.hotelName} • Check-in details`,
      icon: HotelIcon,
      color: 'bg-amber-50 text-amber-600',
      route: '/my-safar/stay',
    },
    {
      id: 'schedule',
      title: 'Schedule',
      subtitle: `${journey.schedule.length} Activities planned`,
      icon: Clock,
      color: 'bg-purple-50 text-purple-600',
      route: '/my-safar/schedule',
    },
    {
      id: 'documents',
      title: 'Documents',
      subtitle: `${journey.documents.length} Tickets & Vouchers`,
      icon: FileText,
      color: 'bg-emerald-50 text-emerald-600',
      route: '/my-safar/documents',
    },
    {
      id: 'sos',
      title: 'SOS / Emergency',
      subtitle: '24x7 Safety & Helpline support',
      icon: ShieldAlert,
      color: 'bg-red-50 text-red-600',
      route: '/my-safar/sos',
    },
    {
      id: 'ai',
      title: 'Safar AI',
      subtitle: 'Smart AI Travel Assistant',
      icon: Bot,
      color: 'bg-indigo-50 text-indigo-600',
      route: '/my-safar/ai',
    },
    {
      id: 'expenses',
      title: 'Expenses',
      subtitle: 'Track budget & spending',
      icon: Wallet,
      color: 'bg-teal-50 text-teal-600',
      route: '/my-safar/expenses',
    },
    {
      id: 'explore',
      title: 'Explore Nearby',
      subtitle: 'Attractions, Cafes & Food',
      icon: Compass,
      color: 'bg-orange-50 text-orange-600',
      route: '/my-safar/explore',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="My Safar"
        showBack={false}
        rightAction={<StatusBadge status={journey.status} />}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Active Journey Header Card */}
        <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-5 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
                Active Safar
              </span>
              <h2 className="text-2xl font-black mt-2 leading-none">
                {journey.fromCity} → {journey.toCity}
              </h2>
              <div className="flex items-center space-x-3 text-xs text-blue-100 font-medium mt-2">
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1" /> {journey.departureDate}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1" /> {journey.departureTime}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider block">PNR</span>
              <span className="text-sm font-black text-white font-mono bg-white/10 px-2 py-0.5 rounded-lg border border-white/15">
                2458901234
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={journey.agent.avatarUrl}
                alt={journey.agent.name}
                className="w-7 h-7 rounded-full object-cover border border-white/30"
              />
              <span className="text-xs font-semibold text-blue-100">
                Agent: <strong className="text-white">{journey.agent.name}</strong>
              </span>
            </div>

            <button
              onClick={() => navigate('/my-safar/live')}
              className="text-xs font-bold text-amber-300 hover:text-white flex items-center space-x-1"
            >
              <span>Live Tracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Journey Progress / Timeline */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Journey Timeline</h3>
            <span className="text-xs font-bold text-blue-600">6 Stages</span>
          </div>

          <div className="space-y-3 pt-1">
            {journey.timeline.map((step) => (
              <div key={step.id} className="flex items-start space-x-3">
                <div className="mt-0.5 shrink-0">
                  {step.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  ) : step.status === 'active' ? (
                    <div className="w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4
                      className={`text-xs font-bold ${
                        step.status === 'completed'
                          ? 'text-emerald-900'
                          : step.status === 'active'
                          ? 'text-blue-600'
                          : 'text-slate-500'
                      }`}
                    >
                      {step.title}
                    </h4>
                    {step.status === 'completed' && (
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Done
                      </span>
                    )}
                    {step.status === 'active' && (
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                  {step.subtitle && (
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">{step.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Feature Cards Navigation Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">My Safar Hub</h3>

          <div className="grid grid-cols-2 gap-3">
            {journeyCards.map((card) => {
              const IconComp = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => navigate(card.route)}
                  className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-left hover:border-blue-300 hover:shadow-md active:scale-95 transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-[10px] font-semibold text-slate-400 line-clamp-1 mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Emergency Agent Help Banner */}
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
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Agent</span>
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default MySafarScreen;
