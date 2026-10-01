import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-0 md:py-6 bg-slate-950 font-sans">
      {/* Mobile Device Frame Container */}
      <div className="relative w-full md:w-[390px] h-screen md:h-[844px] bg-slate-50 md:rounded-[48px] shadow-2xl overflow-hidden flex flex-col border-0 md:border-[8px] md:border-slate-800 transition-all duration-300">
        
        {/* Mobile Phone Status Bar (Simulated) */}
        <div className="w-full h-11 bg-transparent px-6 pt-3 flex items-center justify-between text-slate-800 text-xs font-semibold select-none z-50 shrink-0">
          <span>10:30</span>
          
          {/* Dynamic Island / Notch Simulation */}
          <div className="hidden md:block w-24 h-4 bg-slate-900 rounded-full shadow-inner"></div>

          <div className="flex items-center space-x-1.5 text-slate-700">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Dynamic Screen Viewport Content */}
        <div className="flex-1 flex flex-col overflow-y-auto relative bg-slate-50">
          {children}
        </div>

        {/* Bottom Home Indicator Bar (iOS style) */}
        <div className="w-full h-4 bg-slate-50 flex items-center justify-center shrink-0 py-1">
          <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
