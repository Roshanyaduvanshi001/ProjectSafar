import React from 'react';
import { MapPin, Navigation, Layers } from 'lucide-react';
import { NearbyPlaceItem } from '../../types/common';

interface MapCardProps {
  places?: NearbyPlaceItem[];
  selectedCategory?: string;
  onSelectPlace?: (place: NearbyPlaceItem) => void;
}

export const MapCard: React.FC<MapCardProps> = ({ places = [], selectedCategory, onSelectPlace }) => {
  return (
    <div className="relative w-full h-56 bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-300/60 group">
      {/* Simulated Map Styling Background */}
      <div
        className="w-full h-full bg-cover bg-center filter brightness-[0.97] contrast-[1.02]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')`,
        }}
      ></div>

      {/* Dark overlay grid overlay for map aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30"></div>

      {/* Top Map Layer Indicator */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1.5 text-xs font-bold text-slate-800 shadow">
        <Navigation className="w-3.5 h-3.5 text-blue-600" />
        <span>New Delhi • CP Region</span>
      </div>

      {/* Map Control Buttons */}
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-1.5 rounded-full text-slate-700 shadow hover:bg-white cursor-pointer">
        <Layers className="w-4 h-4" />
      </div>

      {/* Simulated Map Pin Markers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* User Current Location Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-400 opacity-75"></span>
              <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white shadow-lg">
                <Navigation className="w-3 h-3 fill-white" />
              </div>
            </div>
            <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-md mt-1 shadow-md">
              Hotel XYZ (You)
            </span>
          </div>

          {/* Dynamic Pin Markers for Nearby Places */}
          {places.slice(0, 4).map((place, idx) => {
            const positions = [
              'top-1/4 left-1/4',
              'top-1/3 right-1/4',
              'bottom-1/3 left-1/3',
              'bottom-1/4 right-1/3',
            ];

            return (
              <div
                key={place.id}
                onClick={() => onSelectPlace && onSelectPlace(place)}
                className={`absolute ${positions[idx % positions.length]} cursor-pointer transform hover:scale-125 transition-all group/pin`}
              >
                <div className="bg-red-600 text-white p-1.5 rounded-full shadow-lg border border-white flex items-center justify-center">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
                <span className="hidden group-hover/pin:block absolute top-7 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-30">
                  {place.name} ({place.distance})
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Map Status Bar */}
      <div className="absolute bottom-2 left-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center justify-between text-white text-[11px] font-medium">
        <span>Interactive Map View</span>
        <span className="text-blue-300 font-bold">{places.length} places mapped</span>
      </div>
    </div>
  );
};
