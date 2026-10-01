import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface TopNavigationProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBackClick?: () => void;
  rightAction?: React.ReactNode;
  transparent?: boolean;
  className?: string;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  title,
  subtitle,
  showBack = true,
  onBackClick,
  rightAction,
  transparent = false,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <header
      className={`w-full px-6 py-3.5 flex items-center justify-between z-40 transition-colors ${
        transparent ? 'bg-transparent' : 'bg-white border-b border-slate-100 shadow-sm'
      } ${className}`}
    >
      <div className="flex items-center space-x-3">
        {showBack && (
          <button
            onClick={handleBack}
            className="p-2 -ml-2 rounded-full text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Go Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        {(title || subtitle) && (
          <div>
            {title && <h1 className="text-lg font-bold text-slate-900 leading-tight">{title}</h1>}
            {subtitle && <p className="text-xs text-slate-500 font-medium">{subtitle}</p>}
          </div>
        )}
      </div>

      {rightAction && <div className="flex items-center space-x-2">{rightAction}</div>}
    </header>
  );
};
