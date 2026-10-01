import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { BottomNavigation } from '../../components/layout/BottomNavigation';
import { ExpenseCard } from '../../components/domain/ExpenseCard';
import { useExpense } from '../../context/ExpenseContext';
import { ExpenseCategory } from '../../types/common';
import { Plus, X } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const ExpenseTrackerScreen: React.FC = () => {
  const navigate = useNavigate();
  const { totalBudget, expenses, addExpense, deleteExpense, totalSpent, remainingBudget } = useExpense();
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<ExpenseCategory>('Food');

  const spentPercentage = Math.min(100, Math.round((totalSpent / totalBudget) * 100));

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;
    addExpense(title, parseFloat(amount), category);
    setTitle('');
    setAmount('');
    setShowAddModal(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden relative">
      <TopNavigation 
        title="Safar Budget" 
        subtitle="Expense Tracker" 
        showBack={true}
        onBackClick={() => navigate('/my-safar')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Budget Overview Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-5 shadow-xl space-y-4">
          <div className="flex justify-between items-center border-b border-slate-700 pb-3">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Total Trip Budget</span>
              <span className="text-2xl font-black text-white">₹{totalBudget.toLocaleString()}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Remaining</span>
              <span className="text-2xl font-black text-emerald-400">₹{remainingBudget.toLocaleString()}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
              <span>Spent: ₹{totalSpent.toLocaleString()}</span>
              <span>{spentPercentage}% of budget</span>
            </div>
            <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${spentPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Add Expense Action Button */}
        <Button
          onClick={() => setShowAddModal(true)}
          size="lg"
          icon={<Plus className="w-5 h-5 stroke-[3]" />}
        >
          + Add Expense
        </Button>

        {/* Expense List */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Expense Log ({expenses.length})
            </h3>
            <span className="text-xs font-bold text-blue-600">Categorized</span>
          </div>

          <div className="space-y-2.5">
            {expenses.length === 0 ? (
              <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 space-y-1">
                <p className="text-xs font-bold text-slate-700">No expenses logged yet</p>
                <p className="text-[11px] text-slate-400 font-medium">Tap "+ Add Expense" above to log your trip spending.</p>
              </div>
            ) : (
              expenses.map((item) => (
                <ExpenseCard
                  key={item.id}
                  expense={item}
                  onDelete={() => deleteExpense(item.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <BottomNavigation />

      {/* Add Expense Modal */}
      {showAddModal && (
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full rounded-3xl p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-slate-900">Add New Expense</h3>

            <form onSubmit={handleAdd} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Expense Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Metro Pass / Lunch"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-3 px-3 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Amount (₹)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 250"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-3 px-3 focus:outline-none focus:border-blue-600"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ExpenseCategory)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-3 px-3 focus:outline-none focus:border-blue-600"
                >
                  <option value="Travel">Travel</option>
                  <option value="Stay">Stay</option>
                  <option value="Food">Food</option>
                  <option value="Cab">Cab</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-2">
                <Button type="submit" size="md">
                  Save Expense
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
