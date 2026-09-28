import React, { useState, useRef } from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface SosButtonProps {
  onActivated: () => void;
}

export const SosButton: React.FC<SosButtonProps> = ({ onActivated }) => {
  const [holding, setHolding] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [activated, setActivated] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startHold = () => {
    if (activated) return;
    setHolding(true);
    setProgress(0);

    const startTime = Date.now();
    const duration = 3000; // 3 seconds hold

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(intervalRef.current!);
        setActivated(true);
        setHolding(false);
        onActivated();
      }
    }, 50);
  };

  const endHold = () => {
    if (activated) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setHolding(false);
    setProgress(0);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4 my-6">
      {/* Interactive 3-second hold button */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing warning ring when holding */}
        {holding && (
          <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
        )}

        <button
          onMouseDown={startHold}
          onMouseUp={endHold}
          onMouseLeave={endHold}
          onTouchStart={startHold}
          onTouchEnd={endHold}
          className={`relative w-44 h-44 rounded-full flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-300 ${
            activated
              ? 'bg-emerald-600 shadow-emerald-500/40 scale-105'
              : holding
              ? 'bg-red-700 shadow-red-600/50 scale-95'
              : 'bg-gradient-to-tr from-red-600 via-red-500 to-rose-600 shadow-red-500/35 hover:scale-105 active:scale-95'
          }`}
        >
          {/* Progress Ring Overlay */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="88"
              cy="88"
              r="80"
              className="stroke-red-300/30 fill-none stroke-[8]"
            />
            <circle
              cx="88"
              cy="88"
              r="80"
              className="stroke-white fill-none stroke-[8] transition-all duration-75"
              strokeDasharray={502}
              strokeDashoffset={502 - (502 * progress) / 100}
              strokeLinecap="round"
            />
          </svg>

          {activated ? (
            <div className="flex flex-col items-center animate-fade-in">
              <CheckCircle2 className="w-12 h-12 mb-1" />
              <span className="text-base font-black uppercase tracking-wider">SOS SENT</span>
              <span className="text-[10px] opacity-90">Alerting Agent</span>
            </div>
          ) : (
            <div className="flex flex-col items-center select-none">
              <ShieldAlert className="w-12 h-12 mb-1 animate-bounce-gentle" />
              <span className="text-xl font-black tracking-wider">SOS</span>
              <span className="text-[10px] opacity-90 font-bold uppercase mt-0.5">
                {holding ? `HOLD ${Math.ceil((100 - progress) / 33.3)}s` : 'HOLD 3 SECONDS'}
              </span>
            </div>
          )}
        </button>
      </div>

      <p className="text-xs font-semibold text-slate-500 text-center max-w-[260px]">
        {activated
          ? 'Emergency signal activated! Safar agent Arjun & registered contacts are being notified.'
          : 'Hold button for 3 seconds to activate Safar Emergency Protocol.'}
      </p>
    </div>
  );
};
