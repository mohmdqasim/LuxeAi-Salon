import React from 'react';
import { Send } from 'lucide-react';

interface ChatbotInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export const ChatbotInput: React.FC<ChatbotInputProps> = ({ value, onChange, onSend, isLoading }) => {
  const handleSend = () => {
    if (!isLoading && value.trim()) {
      onSend();
    }
  };

  return (
    <div className="border-t border-slate-100 bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-slate-900">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSend();
            }
          }}
          placeholder={isLoading ? 'Glami AI is typing…' : 'Type here...'}
          className="w-full rounded-full bg-slate-100 py-3 pl-4 pr-12 text-sm text-primary shadow-sm outline-none ring-1 ring-transparent transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-accent disabled:bg-slate-100/60 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !value.trim()}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/20 transition-all hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-slate-900"
          aria-label="Send message"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-[2px]">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-pulse delay-150" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30 animate-pulse delay-300" />
            </span>
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </div>
      <p className="mt-1 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
        Glami AI
      </p>
    </div>
  );
};
