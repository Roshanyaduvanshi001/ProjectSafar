import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../components/layout/TopNavigation';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { useAuth } from '../context/AuthContext';
import { User, FileText, Bookmark, CreditCard, ShieldAlert, Bell, Lock, HelpCircle, Settings, LogOut, ChevronRight, CheckCircle2 } from 'lucide-react';

export const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const avatarUrl = user?.avatarUrl || '';
  const userName = user?.name || 'Guest';
  const userEmail = user?.email || '';
  const currentCity = user?.currentCity || '';
  const completedSafarsCount = user?.completedSafarsCount ?? 0;
  const citiesVisitedCount = user?.citiesVisitedCount ?? 0;
  const averageRating = user?.averageRating ?? 0;

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const menuItems = [
    { label: 'Personal Information', icon: <User className="w-4 h-4 text-blue-600" />, path: '/profile' },
    { label: 'Documents Vault', icon: <FileText className="w-4 h-4 text-purple-600" />, path: '/my-safar/documents' },
    { label: 'Saved Places', icon: <Bookmark className="w-4 h-4 text-amber-600" />, path: '/my-safar/explore' },
    { label: 'Payments & Cards', icon: <CreditCard className="w-4 h-4 text-emerald-600" />, path: '/my-safar/expenses' },
    { label: 'Emergency Contacts', icon: <ShieldAlert className="w-4 h-4 text-red-600" />, path: '/my-safar/sos' },
    { label: 'Notifications & Alerts', icon: <Bell className="w-4 h-4 text-cyan-600" />, path: '/profile' },
    { label: 'Privacy & Security', icon: <Lock className="w-4 h-4 text-indigo-600" />, path: '/profile' },
    { label: 'Help & Support', icon: <HelpCircle className="w-4 h-4 text-slate-600" />, path: '/profile' },
    { label: 'Settings', icon: <Settings className="w-4 h-4 text-slate-600" />, path: '/profile' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation title="Profile" showBack={false} />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center space-x-4">
          <img
            src={user?.avatarUrl || ''}
            alt={user?.name || ''}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-black text-slate-900">{userName}</h2>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center">
                <CheckCircle2 className="w-3 h-3 mr-0.5 text-emerald-600" /> Verified
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">{userEmail}</p>
            <p className="text-[11px] font-bold text-blue-600 mt-1">{currentCity}</p>
          </div>
        </div>

        {/* User Stats Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center">
            <span className="text-lg font-black text-slate-900 block">{completedSafarsCount}</span>
            <span className="text-[10px] font-semibold text-slate-400">Safars Completed</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center">
            <span className="text-lg font-black text-slate-900 block">{citiesVisitedCount}</span>
            <span className="text-[10px] font-semibold text-slate-400">Cities Visited</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center">
            <span className="text-lg font-black text-emerald-600 block">⭐ {averageRating}</span>
            <span className="text-[10px] font-semibold text-slate-400">User Rating</span>
          </div>
        </div>

        {/* Menu Items List */}
        <div className="bg-white rounded-3xl border border-slate-100 divide-y divide-slate-100 overflow-hidden shadow-sm">
          {menuItems.map((item) => (
            <div
              key={item.label}
              onClick={() => navigate(item.path)}
              className="p-3.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-slate-50">{item.icon}</div>
                <span className="text-xs font-bold text-slate-800">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-2xl text-xs font-bold flex items-center justify-center space-x-2 transition-all active:scale-98"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};
