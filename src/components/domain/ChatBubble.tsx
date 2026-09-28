import React from 'react';
import { Bot, User } from 'lucide-react';
import { ChatMessageItem } from '../../types/common';

interface ChatBubbleProps {
  message: ChatMessageItem;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={`flex space-x-2 max-w-[85%] ${isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs ${
            isUser ? 'bg-slate-700' : 'bg-gradient-to-tr from-blue-700 to-blue-500 shadow-sm'
          }`}
        >
          {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </div>

        {/* Message bubble */}
        <div
          className={`rounded-2xl px-4 py-3 text-xs leading-relaxed ${
            isUser
              ? 'bg-blue-600 text-white font-medium rounded-tr-none shadow-md shadow-blue-500/10'
              : 'bg-white text-slate-800 font-normal border border-slate-100 shadow-sm rounded-tl-none'
          }`}
        >
          <p className="whitespace-pre-line">{message.text}</p>
          <span
            className={`text-[9px] block mt-1.5 font-medium ${
              isUser ? 'text-blue-200 text-right' : 'text-slate-400'
            }`}
          >
            {message.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};
