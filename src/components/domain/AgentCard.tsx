import React from 'react';
import { Phone, MessageSquare, Star, Award, Globe } from 'lucide-react';
import { SafarAgentInfo } from '../../types/journey';

interface AgentCardProps {
  agent: SafarAgentInfo;
  onCall?: () => void;
  onChat?: () => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onCall, onChat }) => {
  return (
    <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col space-y-4">
      {/* Top Header: Avatar + Details */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={agent.avatarUrl}
            alt={agent.name}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50"
          />
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 shadow">
            <Award className="w-3 h-3" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">{agent.name}</h3>
            <div className="flex items-center space-x-1 bg-amber-50 px-2 py-0.5 rounded-full text-amber-700 font-bold text-xs border border-amber-200">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{agent.rating}</span>
            </div>
          </div>
          <p className="text-xs font-semibold text-blue-600 mt-0.5">"{agent.tagline}"</p>
          
          <div className="flex items-center space-x-3 mt-2 text-[11px] font-medium text-slate-500">
            <span className="flex items-center">
              <Globe className="w-3 h-3 mr-1 text-slate-400" />
              {agent.languages.join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Stats pill */}
      <div className="bg-slate-50 rounded-xl px-4 py-2 flex items-center justify-between text-xs font-semibold text-slate-700">
        <span>Verified Companion</span>
        <span className="text-blue-700 font-bold">{agent.completedSafars}+ completed Safars</span>
      </div>

      {/* Greeting Quote */}
      <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3 text-xs text-slate-700 font-medium italic">
        "{agent.greetingMessage}"
      </div>

      {/* Actions: Call & Chat */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <button
          onClick={onCall}
          className="flex items-center justify-center space-x-2 py-2.5 px-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold hover:bg-emerald-100 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>Call Agent</span>
        </button>
        <button
          onClick={onChat}
          className="flex items-center justify-center space-x-2 py-2.5 px-4 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat Agent</span>
        </button>
      </div>
    </div>
  );
};
