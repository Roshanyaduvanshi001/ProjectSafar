import React from 'react';
import { Trash2, TrendingUp, ShoppingBag, Car, Home, Utensils, Plane } from 'lucide-react';
import { ExpenseItem } from '../../types/common';

interface ExpenseCardProps {
  expense: ExpenseItem;
  onDelete?: () => void;
}

export const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense, onDelete }) => {
  const categoryIcons = {
    Travel: <Plane className="w-4 h-4 text-blue-600" />,
    Stay: <Home className="w-4 h-4 text-amber-600" />,
    Food: <Utensils className="w-4 h-4 text-emerald-600" />,
    Cab: <Car className="w-4 h-4 text-purple-600" />,
    Shopping: <ShoppingBag className="w-4 h-4 text-pink-600" />,
    Other: <TrendingUp className="w-4 h-4 text-slate-600" />,
  };

  const bgColors = {
    Travel: 'bg-blue-50',
    Stay: 'bg-amber-50',
    Food: 'bg-emerald-50',
    Cab: 'bg-purple-50',
    Shopping: 'bg-pink-50',
    Other: 'bg-slate-100',
  };

  return (
    <div className="w-full bg-white rounded-2xl p-3.5 shadow-sm border border-slate-100 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${bgColors[expense.category]}`}>
          {categoryIcons[expense.category]}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 leading-tight">{expense.title}</h4>
          <span className="text-[11px] font-semibold text-slate-400">{expense.category} • {expense.date}</span>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <span className="text-sm font-black text-slate-900">₹{expense.amount.toLocaleString()}</span>
        {onDelete && (
          <button
            onClick={onDelete}
            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            title="Delete Expense"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
