import React from 'react';
import { Star } from 'lucide-react';
import { DestinationItem } from '../../mock/destinations';

interface DestinationCardProps {
  destination: DestinationItem;
  onClick: () => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative min-w-[200px] h-[240px] rounded-2xl overflow-hidden shadow-md cursor-pointer group active:scale-95 transition-all duration-200"
    >
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

      <div className="absolute top-3 right-3 bg-slate-900/60 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center space-x-1 text-white text-[11px] font-semibold">
        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
        <span>{destination.rating}</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-bold leading-tight">{destination.name}</h3>
        <p className="text-xs text-slate-200 font-medium line-clamp-1">{destination.tagline}</p>
      </div>
    </div>
  );
};
