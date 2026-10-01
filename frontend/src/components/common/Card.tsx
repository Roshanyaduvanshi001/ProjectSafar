import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  selected = false,
  hoverable = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-4 transition-all duration-200 border ${
        selected
          ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10'
          : 'border-slate-100 shadow-sm'
      } ${
        hoverable && onClick ? 'cursor-pointer hover:border-slate-200 hover:shadow-md active:scale-[0.99]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
