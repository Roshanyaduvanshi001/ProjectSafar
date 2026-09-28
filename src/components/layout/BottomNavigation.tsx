import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Compass, Plus, Bell, User } from 'lucide-react';

export const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full bg-white border-t border-slate-100 px-4 py-2 flex items-center justify-around relative z-40 shadow-lg shrink-0">
      {/* Tab 1: Home */}
      <button
        onClick={() => navigate('/home')}
        className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
          isActive('/home') ? 'text-blue-600 font-semibold' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[11px]">Home</span>
      </button>

      {/* Tab 2: My Safar */}
      <button
        onClick={() => navigate('/my-safar')}
        className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
          location.pathname.startsWith('/my-safar') ? 'text-blue-600 font-semibold' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <Compass className="w-5 h-5 mb-0.5" />
        <span className="text-[11px]">My Safar</span>
      </button>

      {/* Central Floating Plus CTA: Set My Safar */}
      <div className="relative -top-5 flex flex-col items-center">
        <button
          onClick={() => navigate('/set-safar/destination')}
          className="w-14 h-14 bg-gradient-to-tr from-blue-700 to-blue-500 text-white rounded-full shadow-lg shadow-blue-500/35 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          title="Set My Safar"
        >
          <Plus className="w-7 h-7 stroke-[2.5]" />
        </button>
        <span className="text-[11px] font-bold text-blue-600 mt-1">Set Safar</span>
      </div>

      {/* Tab 4: Alerts */}
      <button
        onClick={() => navigate('/alerts')}
        className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
          isActive('/alerts') ? 'text-blue-600 font-semibold' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <Bell className="w-5 h-5 mb-0.5" />
        <span className="text-[11px]">Alerts</span>
      </button>

      {/* Tab 5: Profile */}
      <button
        onClick={() => navigate('/profile')}
        className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
          isActive('/profile') ? 'text-blue-600 font-semibold' : 'text-slate-400 hover:text-slate-600'
        }`}
      >
        <User className="w-5 h-5 mb-0.5" />
        <span className="text-[11px]">Profile</span>
      </button>
    </nav>
  );
};
