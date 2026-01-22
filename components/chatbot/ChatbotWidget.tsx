import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CalendarClock, CalendarX, Search } from 'lucide-react';
import { ChatbotToggle } from './ChatbotToggle';
import { ChatbotWindow } from './ChatbotWindow';
import { sendChatMessage } from './api';
import { ChatMessage } from './chatbotTypes';

interface ChatbotWidgetProps {
  businessId?: string;
}

const getWelcomeMessage = (): ChatMessage => ({
  id: 'welcome',
  text: "Hi there! I'm your Glami AI. How can I help you today?",
  isBot: true,
  timestamp: new Date(),
});

const SUGGESTIONS = [
  {
    icon: <Search className="h-4 w-4" />,
    text: 'Want to know about our services?',
    query: 'Want to know about our services?',
  },
  {
    icon: <CalendarClock className="h-4 w-4" />,
    text: 'Want to reschedule booking',
    query: 'Want to reschedule booking',
  },
  {
    icon: <CalendarX className="h-4 w-4" />,
    text: 'Want to cancel a booking?',
    query: 'Want to cancel a booking ?',
  },
] as const;

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ businessId = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([getWelcomeMessage()]);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSessionId(null);
      setMessages([]);
      setInputValue('');
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handleSendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      if (!businessId) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: 'Error: Business ID not found. Please ensure you are logged in correctly.',
            isBot: true,
            timestamp: new Date(),
          },
        ]);
        return;
      }

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        text,
        isBot: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');
      setIsLoading(true);

      try {
        const response = await sendChatMessage({
          message: text,
          businessId,
          sessionId,
        });
        setSessionId(response?.session_id ?? null);
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: response?.response || "I'm sorry, I couldn't process that.",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch (_error) {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: "Sorry, I'm having trouble connecting. Please try again later.",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [businessId, isLoading, sessionId],
  );

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleQuickReply = (query: string) => {
    setInputValue(query);
    handleSendMessage(query);
  };

  return (
    <>
      {isOpen && (
        <ChatbotWindow
          messages={messages}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSend={() => handleSendMessage(inputValue)}
          onClose={() => setIsOpen(false)}
          isLoading={isLoading}
          scrollRef={scrollRef}
          suggestions={SUGGESTIONS}
          onQuickReply={handleQuickReply}
        />
      )}
      <ChatbotToggle isOpen={isOpen} onToggle={handleToggle} unreadCount={unreadCount} />
    </>
  );
};
