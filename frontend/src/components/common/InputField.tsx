import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full flex flex-col space-y-1.5">
      {label && <label className="text-xs font-semibold text-slate-700">{label}</label>}
      <div className="relative flex items-center">
        {icon && <span className="absolute left-3.5 text-slate-400 pointer-events-none">{icon}</span>}
        <input
          className={`w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl py-3 ${
            icon ? 'pl-10' : 'pl-4'
          } pr-4 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all ${
            error ? 'border-red-500 bg-red-50/50' : ''
          } ${className}`}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};
