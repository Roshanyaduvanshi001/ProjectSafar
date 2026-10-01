import React from 'react';

interface StatusBadgeProps {
  status: 'LIVE' | 'COMPLETED' | 'RECOMMENDED' | 'ACTIVE' | 'UPCOMING' | 'VERIFIED';
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm' }) => {
  const styles = {
    LIVE: 'bg-emerald-500 text-white font-bold animate-pulse-subtle',
    COMPLETED: 'bg-blue-100 text-blue-700 font-semibold',
    RECOMMENDED: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-sm',
    ACTIVE: 'bg-blue-600 text-white font-semibold',
    UPCOMING: 'bg-slate-100 text-slate-600 font-medium',
    VERIFIED: 'bg-emerald-100 text-emerald-700 font-semibold',
  };

  const padding = size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';

  return (
    <span className={`inline-flex items-center rounded-full tracking-wider uppercase ${padding} ${styles[status]}`}>
      {status === 'LIVE' && <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-ping"></span>}
      {status}
    </span>
  );
};
