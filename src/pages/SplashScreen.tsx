import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Airplay } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-safar-primary to-safar-primary-hover text-white p-6">
      {/* Placeholder logo - replace with actual SVG if available */}
      <div className="mb-6">{/* Logo */}</div>
      <h1 className="text-4xl font-bold mb-2">Set My Safar</h1>
      <p className="text-lg">Your journey, simplified.</p>
      {/* Minimal travel‑inspired icon */}
      <div className="mt-8">
        <Airplay size={48} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default SplashScreen;
