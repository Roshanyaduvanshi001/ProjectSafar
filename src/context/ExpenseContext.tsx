import React, { createContext, useContext, useState } from 'react';
import { ExpenseItem, ExpenseCategory } from '../types/common';
import { mockInitialExpenses } from '../mock/expenseData';

interface ExpenseContextType {
  totalBudget: number;
  expenses: ExpenseItem[];
  addExpense: (title: string, amount: number, category: ExpenseCategory) => void;
  deleteExpense: (id: string) => void;
  totalSpent: number;
  remainingBudget: number;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalBudget] = useState<number>(mockInitialExpenses.totalBudget);
  const [expenses, setExpenses] = useState<ExpenseItem[]>(mockInitialExpenses.expenses);

  const addExpense = (title: string, amount: number, category: ExpenseCategory) => {
    const newExpense: ExpenseItem = {
      id: `exp_${Date.now()}`,
      title,
      amount,
      category,
      date: 'Today',
    };
    setExpenses(prev => [newExpense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBudget = totalBudget - totalSpent;

  return (
    <ExpenseContext.Provider
      value={{
        totalBudget,
        expenses,
        addExpense,
        deleteExpense,
        totalSpent,
        remainingBudget,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};
