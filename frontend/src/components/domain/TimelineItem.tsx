import React from 'react';
import { TimelineItemNode } from '../../types/journey';

interface TimelineItemProps {
  item: TimelineItemNode;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast = false }) => {
  const isCompleted = item.status === 'completed';
  const isActive = item.status === 'active';

  return (
    <div className="flex items-start space-x-3.5 group">
      {/* Node indicator with vertical line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
            isCompleted
              ? 'bg-emerald-500 text-white shadow-sm'
              : isActive
              ? 'bg-blue-600 text-white ring-4 ring-blue-100 shadow-md animate-pulse-subtle'
              : 'bg-slate-200 text-slate-400'
          }`}
        >
          {isCompleted ? '✓' : isActive ? '●' : '○'}
        </div>
        {!isLast && (
          <div
            className={`w-0.5 h-10 my-1 rounded-full ${
              isCompleted ? 'bg-emerald-400' : 'bg-slate-200'
            }`}
          ></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-4">
        <div className="flex items-center justify-between">
          <h4
            className={`text-sm font-bold ${
              isActive ? 'text-blue-700' : isCompleted ? 'text-slate-900' : 'text-slate-400'
            }`}
          >
            {item.title}
          </h4>
          {isActive && (
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              In Progress
            </span>
          )}
        </div>
        {item.subtitle && (
          <p className="text-xs text-slate-500 font-medium mt-0.5">{item.subtitle}</p>
        )}
      </div>
    </div>
  );
};
