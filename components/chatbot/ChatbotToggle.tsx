import React from 'react';
import sidebarLogoLight from '../../assets/logos/logo-small-light.svg';
import sidebarLogoDark from '../../assets/logos/logo-small-dark.svg';

interface ChatbotToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  unreadCount?: number;
}

export const ChatbotToggle: React.FC<ChatbotToggleProps> = ({ isOpen, onToggle, unreadCount = 0 }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95"
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      <img src={sidebarLogoDark} alt="LuxeAi" className="h-8 w-8 dark:hidden" />
      <img src={sidebarLogoLight} alt="LuxeAi" className="hidden h-8 w-8 dark:block" />
      {unreadCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-black text-white shadow-md">
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </button>
  );
};
