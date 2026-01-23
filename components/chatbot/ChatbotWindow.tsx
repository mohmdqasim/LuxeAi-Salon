import React from 'react';
import { X } from 'lucide-react';
import ladyImage from '../../assets/images/lady2.png';
import { ChatMessage } from './chatbotTypes';
import { ChatbotMessageList } from './ChatbotMessageList';
import { ChatbotInput } from './ChatbotInput';

interface ChatbotWindowProps {
  messages: ChatMessage[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onClose: () => void;
  isLoading: boolean;
  scrollRef: React.RefObject<HTMLDivElement>;
  suggestions?: { icon?: React.ReactNode; text: string; query: string }[];
  onQuickReply?: (query: string) => void;
}

export const ChatbotWindow: React.FC<ChatbotWindowProps> = ({
  messages,
  inputValue,
  onInputChange,
  onSend,
  onClose,
  isLoading,
  scrollRef,
  suggestions,
  onQuickReply,
}) => {
  return (
    <div className="fixed bottom-24 left-4 right-4 z-50 flex h-[560px] flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] dark:border-slate-800 dark:bg-slate-900 sm:left-auto sm:right-6 sm:w-[380px] sm:h-[600px]">
      <div className="flex items-center justify-between bg-primary px-5 py-4 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/20">
              <img src={ladyImage} alt="Judith" className="object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-emerald-500" />
          </div>
          <div>
            <h4 className="text-sm font-black tracking-tight leading-none">Glami AI</h4>
            <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">We reply immediately</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-full p-1 text-white/70 transition hover:text-white"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        <ChatbotMessageList
          messages={messages}
          isLoading={isLoading}
          scrollRef={scrollRef}
          suggestions={suggestions}
          onQuickReply={onQuickReply}
        />
      </div>
      <ChatbotInput value={inputValue} onChange={onInputChange} onSend={onSend} isLoading={isLoading} />
    </div>
  );
};
