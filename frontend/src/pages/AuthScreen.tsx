import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { InputField } from '../components/common/InputField';
import { Button } from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

export const AuthScreen: React.FC<{ mode: 'login' | 'signup' }> = ({ mode }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState<boolean>(mode === 'signup');
  const [email, setEmail] = useState<string>('roshan.kumar@gmail.com');
  const [password, setPassword] = useState<string>('••••••••••••');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/home');
  };

  return (
    <div className="w-full h-full min-h-[800px] bg-slate-50 flex flex-col justify-between p-6 overflow-y-auto">
      {/* Top Brand Logo Header */}
      <div className="pt-6 pb-2 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
          <Compass className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-wider">SAFAR</h2>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Set My Safar</span>
        </div>
      </div>

      {/* Main Form Box */}
      <div className="my-auto py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900 leading-tight">
            {isSignUp ? 'Create your Safar Account' : 'Welcome to Safar'}
          </h1>
          <p className="text-sm font-semibold text-slate-500 mt-1">
            "Wherever you go, feel at home."
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <InputField
              label="Full Name"
              type="text"
              placeholder="Roshan Kumar"
              defaultValue="Roshan Kumar"
              icon={<User className="w-4 h-4" />}
            />
          )}

          <InputField
            label="Email or Phone Number"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            icon={<Mail className="w-4 h-4" />}
          />

          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            icon={<Lock className="w-4 h-4" />}
          />

          {!isSignUp && (
            <div className="flex justify-end">
              <button type="button" className="text-xs font-semibold text-blue-600 hover:underline">
                Forgot Password?
              </button>
            </div>
          )}

          <Button type="submit" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            {isSignUp ? 'Create Account' : 'Login'}
          </Button>
        </form>

        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-slate-200 w-full"></div>
          <span className="bg-slate-50 px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">OR</span>
        </div>

        {/* Social Google Login */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-white border border-slate-200 rounded-2xl flex items-center justify-center space-x-3 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-all active:scale-98"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="text-center pt-2">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs font-semibold text-slate-600 hover:text-blue-600"
          >
            {isSignUp ? (
              <span>Already have an account? <strong className="text-blue-600">Login</strong></span>
            ) : (
              <span>New to Safar? <strong className="text-blue-600">Create Account</strong></span>
            )}
          </button>
        </div>
      </div>

      <div className="text-center text-[11px] text-slate-400 font-medium pb-2">
        By continuing, you agree to Safar's Terms of Service & Privacy Policy.
      </div>
    </div>
  );
};
