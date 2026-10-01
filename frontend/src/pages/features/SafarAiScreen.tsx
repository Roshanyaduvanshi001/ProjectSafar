import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ChatBubble } from '../../components/domain/ChatBubble';
import { ChatMessageItem } from '../../types/common';
import { mockSuggestedPrompts } from '../../mock/aiResponses';
import { Sparkles, Send } from 'lucide-react';

export const SafarAiScreen: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessageItem[]>([
    {
      id: 'msg_1',
      sender: 'ai',
      text: "Namaste Roshan! ✨ I am Safar AI, your personal travel assistant. How can I help with your trip to Delhi today?",
      timestamp: '10:30 AM',
    },
  ]);

  const [input, setInput] = useState<string>('');

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessageItem = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Simulate AI reply response logic
    setTimeout(() => {
      const match = mockSuggestedPrompts.find(
        (p) => p.promptText.toLowerCase() === query.toLowerCase()
      );

      const aiReplyText = match
        ? match.replyText
        : `I've analyzed your query regarding "${query}". For your stay at Hotel XYZ in Connaught Place, Delhi, your agent Arjun Sharma and I recommend checking your schedule tab or visiting Central Park (400m away)!`;

      const aiMsg: ChatMessageItem = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Safar AI ✨"
        subtitle="AI Companion Assistant"
        showBack={true}
        onBackClick={() => navigate('/my-safar')}
        rightAction={
          <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-1">
            <Sparkles className="w-3 h-3" />
            <span>Smart AI</span>
          </span>
        }
      />

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* Suggested Prompts Pills */}
      <div className="px-4 py-2 bg-slate-100/70 border-t border-slate-200/60 overflow-x-auto flex space-x-2 no-scrollbar shrink-0">
        {mockSuggestedPrompts.map((p) => (
          <button
            key={p.id}
            onClick={() => handleSend(p.promptText)}
            className="py-1.5 px-3 bg-white text-slate-700 text-xs font-semibold rounded-full border border-slate-200 hover:border-purple-300 hover:text-purple-700 active:scale-95 transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            {p.promptText}
          </button>
        ))}
      </div>

      {/* Text Input Footer */}
      <div className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2 shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask Safar anything..."
          className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-3 px-4 focus:outline-none focus:border-purple-600 focus:bg-white"
        />
        <button
          onClick={() => handleSend()}
          className="w-11 h-11 bg-gradient-to-tr from-purple-700 to-blue-600 text-white rounded-xl flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
