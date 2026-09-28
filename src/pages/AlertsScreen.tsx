import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { TopNavigation } from '../components/layout/TopNavigation';
import { BottomNavigation } from '../components/layout/BottomNavigation';
import { Button } from '../components/common/Button';

export const AlertsScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation title="Alerts" showBack={true} onBackClick={() => navigate('/home')} />

      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
          <Bell className="w-8 h-8 stroke-[2]" />
        </div>

        <div className="space-y-1">
          <h1 className="text-xl font-black text-slate-900">Alerts</h1>
          <p className="text-xs font-semibold text-slate-500">No new alerts right now.</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm w-full max-w-xs text-left flex items-center space-x-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <span className="text-xs font-semibold text-slate-700">All journey notifications and travel alerts are up to date.</span>
        </div>

        <div className="pt-4 w-full max-w-xs">
          <Button onClick={() => navigate('/home')} size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Home
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default AlertsScreen;
