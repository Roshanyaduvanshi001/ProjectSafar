import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
  avatarUrl?: string;
  currentCity?: string;
  completedSafarsCount?: number;
  citiesVisitedCount?: number;
  averageRating?: number;
}

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    email: 'roshan.kumar@gmail.com',
    name: 'Roshan Kumar',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    currentCity: 'Kolkata, WB',
    completedSafarsCount: 12,
    citiesVisitedCount: 8,
    averageRating: 4.9,
  });

  const login = (email: string, password: string) => {
    // Mock login: accept any non‑empty credentials
    if (email && password) {
      setUser({
        email,
        name: email.split('@')[0] || 'Roshan Kumar',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        currentCity: 'Kolkata, WB',
        completedSafarsCount: 12,
        citiesVisitedCount: 8,
        averageRating: 4.9,
      });
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
