import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number; // 1 to 5
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  const steps = ['Route', 'Purpose', 'Details', 'Traveller', 'Package'];

  return (
    <div className="w-full px-2 py-2 flex items-center justify-between">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white ring-4 ring-blue-100 scale-110'
                    : isCompleted
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {isCompleted ? '✓' : stepNum}
              </div>
              <span
                className={`text-[10px] mt-1 font-semibold ${
                  isActive ? 'text-blue-600' : isCompleted ? 'text-emerald-700' : 'text-slate-400'
                }`}
              >
                {label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 w-6 sm:w-8 mx-1 mb-4 rounded-full transition-all ${
                  stepNum < currentStep ? 'bg-emerald-500' : 'bg-slate-200'
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
