
import React, { useState, useEffect, useRef } from 'react';
import { Instagram, MessageSquare, Phone, Send, User, Bot, Sparkles, CheckCheck, MoreHorizontal } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { GoogleGenAI } from "@google/genai";

type Channel = 'instagram' | 'whatsapp' | 'sms';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const ChatDemo: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<Channel>('instagram');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hi! I’m LuxeBot. I can help you book an appointment or answer any questions about our services. What can I do for you today?', timestamp: new Date() }
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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: inputValue,
        config: {
          systemInstruction: "You are LuxeBot, a high-end, professional, and friendly AI salon assistant for 'Glow Bar NYC'. Your goal is to help clients book beauty services (Hair, Nails, Facials) and answer questions about pricing. Be concise and use a tone that matches a premium beauty salon. Mention that Saturday slots are filling fast if appropriate.",
          maxOutputTokens: 100,
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

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#060614] overflow-hidden" id="integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content & Channel Selection */}
          <div className="space-y-12">
            <ScrollReveal animation="fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20">
                <Sparkles className="w-3 h-3" /> Live Demo
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                Works Seamlessly With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Every Channel You Use.</span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                Whether they find you on Instagram, message you on WhatsApp, or text your business line, LuxeBot provides a consistent, high-end experience that closes more bookings.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'instagram' as Channel, icon: Instagram, label: 'Instagram DM', color: 'hover:border-pink-500 hover:text-pink-500' },
                { id: 'whatsapp' as Channel, icon: MessageSquare, label: 'WhatsApp', color: 'hover:border-emerald-500 hover:text-emerald-500' },
                { id: 'sms' as Channel, icon: Phone, label: 'Business SMS', color: 'hover:border-blue-500 hover:text-blue-500' },
              ].map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => {
                    setActiveChannel(channel.id);
                    setMessages([{ id: 'init', sender: 'bot', text: `Hi! I’m LuxeBot on ${channel.label}. How can I help?`, timestamp: new Date() }]);
                  }}
                  className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 group ${
                    activeChannel === channel.id 
                    ? 'bg-white dark:bg-slate-900 border-primary shadow-xl shadow-primary/5' 
                    : 'bg-transparent border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100'
                  } ${channel.color}`}
                >
                  <channel.icon className={`w-8 h-8 ${activeChannel === channel.id ? 'text-primary' : ''}`} />
                  <span className="text-xs font-black uppercase tracking-widest">{channel.label}</span>
                  {activeChannel === channel.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  )}
                </button>
              ))}
            </ScrollReveal>
          </div>

          {/* Right: Interactive Phone Mockup */}
          <div className="relative flex justify-center">
            <ScrollReveal animation="zoom-in" delay={400}>
              <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Phone Header */}
                <div className={`px-4 pt-10 pb-4 flex items-center gap-3 border-b border-white/10 ${
                  activeChannel === 'instagram' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white' : 
                  activeChannel === 'whatsapp' ? 'bg-[#075e54] text-white' : 
                  'bg-slate-100 text-slate-900'
                }`}>
                  {activeChannel === 'instagram' && <Instagram className="w-5 h-5 text-pink-500" />}
                  {activeChannel === 'whatsapp' && <MessageSquare className="w-5 h-5" />}
                  <div className="flex-1">
                    <p className="text-sm font-black tracking-tight">Glow Bar NYC</p>
                    <p className="text-[10px] opacity-70">LuxeBot AI Assistant</p>
                  </div>
                  <MoreHorizontal className="w-5 h-5 opacity-50" />
                </div>

                {/* Chat Area */}
                <div 
                  ref={scrollRef}
                  className={`h-[450px] overflow-y-auto p-4 space-y-4 scroll-smooth ${
                    activeChannel === 'whatsapp' ? 'bg-[#e5ddd5] dark:bg-slate-950 bg-[url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")] bg-repeat bg-[length:400px]' : 
                    activeChannel === 'instagram' ? 'bg-white dark:bg-[#0a0a1f]' : 
                    'bg-white'
                  }`}
                >
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-fade-in-up`}
                    >
                      <div className={`max-w-[85%] p-3 text-sm font-medium ${
                        msg.sender === 'user' 
                          ? 'bg-primary text-white rounded-2xl rounded-tr-none' 
                          : activeChannel === 'whatsapp' 
                            ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl rounded-tl-none shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[8px] opacity-40 font-bold uppercase">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        {msg.sender === 'bot' && <CheckCheck className="w-2 h-2 text-primary" />}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none w-16 animate-pulse">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  )}
                </div>

                {/* Chat Input Area */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-900 border-t border-white/10">
                  <div className="relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type a question..."
                      className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3 px-5 pr-12 text-sm focus:ring-2 focus:ring-primary transition-all text-slate-900 dark:text-white"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={isTyping}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[9px] text-center mt-3 text-slate-400 font-bold uppercase tracking-widest">Powered by LuxeSalon AI</p>
                </div>
              </div>

              {/* Decorative elements around phone */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
