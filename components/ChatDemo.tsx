import React, { useState, useEffect, useRef } from 'react';
import { Instagram, MessageSquare, Globe, Send, Bot, Sparkles, CheckCheck, MoreHorizontal, Minus, X, Maximize2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { GoogleGenAI } from "@google/genai";

type Channel = 'instagram' | 'whatsapp' | 'widget';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

// Simple inline markdown renderer to support **bold** text in demo chat
const renderInlineMarkdown = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  const boldRegex = /\*\*([^*]+)\*\*/g;
  let match: RegExpExecArray | null;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong
        key={`bold-${match.index}`}
        className="font-bold text-primary dark:text-white"
      >
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
};

export const ChatDemo: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<Channel>('instagram');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hi! I’m GlamBot. I can help you book an appointment or answer any questions about our services. What can I do for you today?', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: inputValue,
        config: {
          systemInstruction: "You are GlamBot, a high-end, professional, and friendly AI salon assistant for GlamMate AI. Your goal is to help clients book beauty services (Hair, Nails, Facials) and answer questions about pricing. Be concise and use a tone that matches a premium beauty salon. Mention that Saturday slots are filling fast if appropriate.",
        },
      });

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text || "I'm sorry, I'm having a bit of trouble connecting. Could you try asking that again?",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsTyping(false);
    }
  };

  const ChatContent = () => (
    <div 
      ref={scrollRef}
      className={`h-full overflow-y-auto p-4 space-y-4 scroll-smooth ${
        activeChannel === 'widget' ? 'bg-white dark:bg-slate-900' : 'bg-background-light dark:bg-[#0a0a1f]'
      }`}
    >
      {messages.map((msg) => (
        <div 
          key={msg.id} 
          className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-fade-in-up`}
        >
          <div className={`max-w-[85%] p-3 text-sm font-medium ${
            msg.sender === 'user' 
              ? 'bg-primary text-white rounded-2xl rounded-tr-none shadow-md shadow-primary/10' 
              : 'bg-white dark:bg-slate-800 text-primary dark:text-white rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700'
          }`}>
            <span className="whitespace-pre-wrap">
              {renderInlineMarkdown(msg.text)}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1 px-1">
            <span className="text-[8px] opacity-40 font-bold uppercase text-charcoal dark:text-slate-400">
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            {msg.sender === 'bot' && <CheckCheck className="w-2.5 h-2.5 text-accent" />}
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none w-16 animate-pulse border border-slate-100 dark:border-slate-700">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      )}
    </div>
  );

  const ChatInput = () => (
    <div className={`p-4 ${activeChannel === 'widget' ? 'bg-slate-50 dark:bg-slate-800/50' : 'bg-white dark:bg-slate-900'} border-t border-slate-100 dark:border-white/10`}>
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about booking..."
          className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3 px-5 pr-12 text-sm focus:ring-2 focus:ring-accent transition-all text-primary dark:text-white"
        />
        <button 
          onClick={handleSend}
          disabled={isTyping}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white hover:bg-primary transition-all disabled:opacity-50 shadow-lg shadow-accent/20"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      <p className="text-[9px] text-center mt-3 text-slate-400 font-bold uppercase tracking-[0.2em]">Premium Salon Assistant</p>
    </div>
  );

  return (
    <section className="py-32 bg-white dark:bg-[#060614] overflow-hidden" id="integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content & Channel Selection */}
          <div className="space-y-12">
            <ScrollReveal animation="fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-6 border border-accent/20">
                <Sparkles className="w-3 h-3" /> Interactive Playground
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-primary dark:text-white">
                Works Seamlessly With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Every Channel You Use.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                Whether they find you on Instagram, message you on WhatsApp, or visit your website, GlamBot provides a consistent, high-end experience that closes more bookings.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'instagram' as Channel, icon: Instagram, label: 'Instagram DM', color: 'hover:border-accent hover:text-accent' },
                { id: 'whatsapp' as Channel, icon: MessageSquare, label: 'WhatsApp', color: 'hover:border-accent hover:text-accent' },
                { id: 'widget' as Channel, icon: Globe, label: 'Website Widget', color: 'hover:border-accent hover:text-accent' },
              ].map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => {
                    setActiveChannel(channel.id);
                    const welcome = channel.id === 'widget' 
                      ? "Hi! Welcome to GlamMate AI. I'm GlamBot, your personal salon concierge. How can I help you sparkle today?"
                      : `Hi! I’m GlamBot on ${channel.label}. How can I help?`;
                    setMessages([{ id: 'init', sender: 'bot', text: welcome, timestamp: new Date() }]);
                  }}
                  className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 group ${
                    activeChannel === channel.id 
                    ? 'bg-white dark:bg-slate-900 border-accent shadow-xl shadow-accent/10' 
                    : 'bg-transparent border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100'
                  } ${channel.color}`}
                >
                  <channel.icon className={`w-8 h-8 ${activeChannel === channel.id ? 'text-accent' : 'text-slate-400'}`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${activeChannel === channel.id ? 'text-accent' : 'text-slate-500'}`}>{channel.label}</span>
                  {activeChannel === channel.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                  )}
                </button>
              ))}
            </ScrollReveal>
          </div>

          {/* Right: Interactive Phone or Widget Mockup */}
          <div className="relative flex justify-center h-[700px] items-center">
            <ScrollReveal animation="zoom-in" delay={400} className="w-full h-full flex items-center justify-center">
              {activeChannel === 'widget' ? (
                /* Website Widget Mockup */
                <div className="relative w-full max-w-[400px] h-[600px] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 overflow-hidden animate-zoom-in">
                  {/* Widget Header */}
                  <div className="bg-primary px-6 py-6 flex items-center justify-between text-white shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-primary rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-sm font-black tracking-tight leading-none mb-1">GlamBot Concierge</h4>
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">We reply immediately</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-40">
                      <Minus className="w-4 h-4 cursor-pointer hover:opacity-100 transition-opacity" />
                      <X className="w-4 h-4 cursor-pointer hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  
                  {/* Widget Content Area */}
                  <div className="flex-1 overflow-hidden">
                    <ChatContent />
                  </div>
                  
                  {/* Widget Footer */}
                  <ChatInput />
                </div>
              ) : (
                /* Phone Mockup for IG/WA */
                <div className="relative w-[320px] h-[640px] bg-primary rounded-[3.5rem] border-[10px] border-primary shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden animate-zoom-in">
                  {/* Dynamic Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary rounded-b-2xl z-50"></div>
                  
                  {/* Phone Header */}
                  <div className={`px-4 pt-10 pb-4 flex items-center gap-3 border-b border-white/10 ${
                    activeChannel === 'whatsapp' ? 'bg-[#121b22] text-white' : 'bg-white dark:bg-slate-900 text-primary dark:text-white'
                  }`}>
                    <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center border border-accent/10">
                      <Bot className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black tracking-tight">GlamMate Assistant</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <p className="text-[9px] font-bold opacity-70 uppercase tracking-widest">Active Now</p>
                      </div>
                    </div>
                    <MoreHorizontal className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer" />
                  </div>

                  {/* Chat Area */}
                  <div className="h-[440px] overflow-hidden">
                    <ChatContent />
                  </div>

                  {/* Chat Input Area */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <ChatInput />
                  </div>
                </div>
              )}

              {/* Decorative elements around mockup */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};