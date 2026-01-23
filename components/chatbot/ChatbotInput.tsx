import React from 'react';
import { Send } from 'lucide-react';

interface ChatbotInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export const ChatbotInput: React.FC<ChatbotInputProps> = ({ value, onChange, onSend, isLoading }) => {
  return (
    <div className="border-t border-slate-100 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSend();
            }
          }}
          placeholder="Type here..."
          className="w-full rounded-full bg-slate-100 py-3 pl-4 pr-12 text-sm text-primary shadow-sm outline-none ring-1 ring-transparent transition-all focus:ring-2 focus:ring-accent dark:bg-slate-800 dark:text-white"
          disabled={isLoading}
        />
        <button
          onClick={onSend}
          disabled={isLoading || !value.trim()}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/20 transition-all hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-3 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
        Glami AI
      </p>
    </div>
  );
};
