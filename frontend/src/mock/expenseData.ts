import { ExpenseItem } from '../types/common';

export interface SafarBudgetData {
  totalBudget: number;
  expenses: ExpenseItem[];
}

export const mockInitialExpenses: SafarBudgetData = {
  totalBudget: 10000,
  expenses: [
    {
      id: 'exp_1',
      title: 'Train Ticket (Rajdhani Express)',
      amount: 2100,
      category: 'Travel',
      date: '19 May 2026',
    },
    {
      id: 'exp_2',
      title: 'Hotel Booking Deposit',
      amount: 1200,
      category: 'Stay',
      date: '20 May 2026',
    },
    {
      id: 'exp_3',
      title: 'Dinner at Howrah Station',
      amount: 650,
      category: 'Food',
      date: '20 May 2026',
    },
    {
      id: 'exp_4',
      title: 'Uber Cab to Howrah Station',
      amount: 300,
      category: 'Cab',
      date: '20 May 2026',
    },
  ],
};
