import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { AgentCard } from '../../components/domain/AgentCard';
import { Button } from '../../components/common/Button';
import { mockAgentData } from '../../mock/agentData';

export const AgentAssignedScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation title="Your Safar Agent" subtitle="Companion Assigned" />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Verification Success Pill */}
        <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl flex items-center space-x-3 text-emerald-800">
          <UserCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <h4 className="text-xs font-bold">Dedicated Travel Agent Assigned!</h4>
            <p className="text-[11px] font-medium text-emerald-700">Arjun Sharma is ready to assist your journey from Kolkata to Delhi.</p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-black text-slate-900">Meet Your Safar Agent</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Your trusted local companion for instant assistance.</p>
        </div>

        {/* Agent Card */}
        <AgentCard
          agent={mockAgentData}
          onCall={() => alert('📞 Simulated call to Arjun Sharma (+91 98112 34567)\n\nIn production this would connect via VoIP.')}
          onChat={() => navigate('/my-safar/ai')}
        />

        <div className="pt-2">
          <Button
            onClick={() => navigate('/my-safar')}
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Go to My Safar →
          </Button>
        </div>
      </div>
    </div>
  );
};
