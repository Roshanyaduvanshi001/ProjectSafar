import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { BottomNavigation } from '../../components/layout/BottomNavigation';
import { useJourney } from '../../context/JourneyContext';
import { Clock, CheckCircle, Circle, MapPin, Briefcase, Utensils, Compass, Home } from 'lucide-react';

export const ScheduleScreen: React.FC = () => {
  const navigate = useNavigate();
  const { journey, toggleScheduleItem } = useJourney();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meal':
        return <Utensils className="w-4 h-4 text-emerald-600" />;
      case 'travel':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'meeting':
        return <Briefcase className="w-4 h-4 text-purple-600" />;
      case 'explore':
        return <Compass className="w-4 h-4 text-amber-600" />;
      default:
        return <Home className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation 
        title="Journey Schedule" 
        subtitle="Itinerary & Timings" 
        showBack={true}
        onBackClick={() => navigate('/my-safar')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Schedule</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Tap activities as you complete them throughout the day.</p>
        </div>

        <div className="space-y-3">
          {journey.schedule.length === 0 ? (
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 space-y-1">
              <p className="text-xs font-bold text-slate-700">No activities scheduled</p>
              <p className="text-[11px] text-slate-400 font-medium">Your itinerary for the day will appear here.</p>
            </div>
          ) : (
            journey.schedule.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleScheduleItem(item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  item.completed
                    ? 'bg-emerald-50/70 border-emerald-300 opacity-80'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    {getCategoryIcon(item.category)}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-black text-blue-600">{item.time}</span>
                      <h3 className={`text-sm font-bold ${item.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {item.title}
                      </h3>
                    </div>
                    {item.location && (
                      <p className="text-xs text-slate-400 font-medium flex items-center mt-0.5">
                        <MapPin className="w-3 h-3 mr-1" /> {item.location}
                      </p>
                    )}
                  </div>
                </div>

                <div className="shrink-0">
                  {item.completed ? (
                    <CheckCircle className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-300" />
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
