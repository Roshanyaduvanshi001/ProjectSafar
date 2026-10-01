import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  isCurrentLocation?: boolean;
}

export const LocationField: React.FC<LocationFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Enter city or place...',
  isCurrentLocation = false,
}) => {
  return (
    <div className="w-full flex flex-col space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-700">{label}</label>
        {isCurrentLocation && (
          <span className="text-[11px] font-semibold text-blue-600 flex items-center">
            <Navigation className="w-3 h-3 mr-1" /> Current Location
          </span>
        )}
      </div>
      <div className="relative flex items-center">
        <MapPin className={`absolute left-3.5 w-4 h-4 ${isCurrentLocation ? 'text-blue-600' : 'text-slate-400'}`} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-semibold rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
        />
      </div>
    </div>
  );
};
