import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { PackageOption } from '../../types/booking';
import { StatusBadge } from '../common/StatusBadge';

interface PackageCardProps {
  pkg: PackageOption;
  isSelected: boolean;
  onSelect: () => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`relative w-full rounded-2xl p-5 transition-all duration-200 cursor-pointer border ${
        isSelected
          ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10'
          : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
      }`}
    >
      {pkg.isRecommended && (
        <div className="absolute -top-3 right-4">
          <StatusBadge status="RECOMMENDED" />
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{pkg.name}</h3>
          <div className="flex items-baseline space-x-1 mt-1">
            <span className="text-2xl font-black text-blue-600">₹{pkg.pricePerDay}</span>
            <span className="text-xs text-slate-500 font-semibold">/ day</span>
          </div>
        </div>

        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
            isSelected ? 'bg-blue-600 text-white' : 'border-2 border-slate-300'
          }`}
        >
          {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
        {pkg.features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        className={`w-full mt-4 py-2.5 rounded-xl font-semibold text-xs transition-all ${
          isSelected
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        {isSelected ? 'Package Selected ✓' : 'Select Package'}
      </button>
    </div>
  );
};
