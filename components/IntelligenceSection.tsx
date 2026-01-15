
import React, { useState } from 'react';
import { 
  FileText, Database, Table, BookOpen, FileCode,
  Phone, MessageSquare, Instagram, Mail, MessageCircle,
  ShieldCheck, Zap
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface NodeProps {
  icon: any;
  label: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  side: 'left' | 'right';
}

const IntelligenceNode: React.FC<NodeProps> = ({ icon: Icon, label, side, isActive, onHover, onLeave }) => {
  return (
    <div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative flex items-center gap-4 cursor-pointer transition-all duration-300 ${side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className={`
        relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-20
        ${isActive 
          ? 'bg-accent border-accent shadow-[0_0_20px_rgba(188,156,107,0.5)] scale-110' 
          : 'bg-[#12122b] border-slate-800 text-slate-400 hover:border-accent hover:text-white'
        }
      `}>
        <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-white' : ''}`} />
        {isActive && (
          <div className="absolute inset-0 rounded-full animate-ping bg-accent/20 pointer-events-none"></div>
        )}
      </div>
      <div className={`${side === 'right' ? 'text-right' : 'text-left'} transition-all duration-300 ${isActive ? 'translate-x-1' : ''}`}>
        <p className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 whitespace-nowrap ${isActive ? 'text-white' : 'text-slate-500'}`}>
          {label}
        </p>
      </div>
    </div>
  );
};

export const IntelligenceSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const leftNodes = [
    { id: 'menu', icon: FileCode, label: 'Service Menu' },
    { id: 'docs', icon: FileText, label: 'Staff Handbooks' },
    { id: 'crm', icon: Database, label: 'Client History' },
    { id: 'table', icon: Table, label: 'Inventory Data' },
    { id: 'manuals', icon: BookOpen, label: 'Training Manuals' },
  ];

  const rightNodes = [
    { id: 'voice', icon: Phone, label: 'Business Voice' },
    { id: 'ig', icon: Instagram, label: 'Instagram DM' },
    { id: 'wa', icon: MessageCircle, label: 'WhatsApp Biz' },
    { id: 'sms', icon: MessageSquare, label: 'AI SMS Bot' },
    { id: 'email', icon: Mail, label: 'Smart Email' },
  ];

  const getActiveDesc = () => {
    const all = [
      ...leftNodes.map(n => ({ ...n, desc: `Analyzing ${n.label} to generate intelligent salon insights.` })),
      ...rightNodes.map(n => ({ ...n, desc: `Deploying real-time automations to your ${n.label} channels.` }))
    ];
    return all.find(n => n.id === activeNode)?.desc || "Integrate your salon's unique knowledge to unlock world-class customer support and selling capabilities.";
  };

  return (
    <section className="py-32 bg-[#050510] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Redefine Customer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Experience with GlamMate.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed opacity-70">
            Integrate your service menu, CRMs, historical sales data, and other systems to unlock selling, recommendation, and support capabilities.
          </p>
        </ScrollReveal>

        <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
          
          {/* SVG Connector Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(188,156,107,0.05)" />
                <stop offset="50%" stopColor="rgba(188,156,107,0.2)" />
                <stop offset="100%" stopColor="rgba(188,156,107,0.05)" />
              </linearGradient>
            </defs>

            {/* Path generation */}
            {[70, 185, 300, 415, 530].map((y, i) => (
              <React.Fragment key={`paths-${i}`}>
                {/* Left to Center */}
                <path
                  d={`M 250 ${y} C 450 ${y} 500 300 600 300`}
                  fill="none"
                  stroke={activeNode === leftNodes[i].id ? '#BC9C6B' : 'rgba(255,255,255,0.08)'}
                  strokeWidth={activeNode === leftNodes[i].id ? "2" : "1"}
                  className="transition-all duration-700"
                />
                {/* Center to Right */}
                <path
                  d={`M 600 300 C 700 300 750 ${y} 950 ${y}`}
                  fill="none"
                  stroke={activeNode === rightNodes[i].id ? '#BC9C6B' : 'rgba(255,255,255,0.08)'}
                  strokeWidth={activeNode === rightNodes[i].id ? "2" : "1"}
                  className="transition-all duration-700"
                />
              </React.Fragment>
            ))}

            {/* Active Flow Animation */}
            {activeNode && (
              <circle r="3" fill="#BC9C6B" className="animate-flow-particle shadow-[0_0_8px_#BC9C6B]">
                <animateMotion 
                  dur="1.5s" 
                  repeatCount="indefinite" 
                  path={
                    leftNodes.some(n => n.id === activeNode) 
                    ? `M 250 ${[70, 185, 300, 415, 530][leftNodes.findIndex(n => n.id === activeNode)]} C 450 ${[70, 185, 300, 415, 530][leftNodes.findIndex(n => n.id === activeNode)]} 500 300 600 300`
                    : `M 600 300 C 700 300 750 ${[70, 185, 300, 415, 530][rightNodes.findIndex(n => n.id === activeNode)]} 950 ${[70, 185, 300, 415, 530][rightNodes.findIndex(n => n.id === activeNode)]}`
                  }
                />
              </circle>
            )}
          </svg>

          {/* Node Columns */}
          <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-24">
            <div className="flex flex-col gap-16">
              {leftNodes.map((node) => (
                <IntelligenceNode 
                  key={node.id} side="left" {...node}
                  isActive={activeNode === node.id}
                  onHover={() => setActiveNode(node.id)} onLeave={() => setActiveNode(null)}
                />
              ))}
            </div>
            <div className="flex flex-col gap-16">
              {rightNodes.map((node) => (
                <IntelligenceNode 
                  key={node.id} side="right" {...node}
                  isActive={activeNode === node.id}
                  onHover={() => setActiveNode(node.id)} onLeave={() => setActiveNode(null)}
                />
              ))}
            </div>
          </div>

          {/* Central Orchestrator Core */}
          <div className="relative z-30 flex flex-col items-center">
            {/* Top Label with decorative lines */}
            <div className="mb-8 flex flex-col items-center gap-3">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-accent">GlamMate LLM Orchestrator</span>
              <div className="flex gap-2.5">
                <div className="w-[1.5px] h-6 bg-accent/30 rounded-full"></div>
                <div className="w-[1.5px] h-6 bg-accent/30 rounded-full"></div>
                <div className="w-[1.5px] h-6 bg-accent/30 rounded-full"></div>
              </div>
            </div>
            
            {/* Central Glass Orb */}
            <div className="relative group">
              {/* Outer Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full border border-white/5 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full border border-white/10"></div>
              
              {/* Main Container */}
              <div className={`
                relative w-72 h-72 rounded-full flex flex-col items-center justify-center p-12 text-center transition-all duration-700
                bg-gradient-to-br from-[#12122b] to-[#050510] border border-white/10 shadow-2xl
                ${activeNode ? 'border-accent shadow-[0_0_60px_rgba(188,156,107,0.2)]' : 'shadow-black/50'}
              `}>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                
                <h3 className="relative z-10 text-xl font-black tracking-tight text-white mb-4 leading-tight uppercase">
                  GlamMate <br /> Intelligence
                </h3>
                <p className={`relative z-10 text-[10px] text-slate-300 font-bold uppercase leading-relaxed tracking-wider transition-opacity duration-300 ${activeNode ? 'opacity-100' : 'opacity-60'}`}>
                  {getActiveDesc()}
                </p>
              </div>
            </div>

            {/* Bottom Footer Details */}
            <div className="mt-10 flex items-center gap-12">
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest group-hover:text-accent transition-colors">Data Privacy & Security</span>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-all"></div>
                   <div className="w-8 h-px bg-slate-800 group-hover:w-12 group-hover:bg-accent transition-all"></div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest group-hover:text-accent transition-colors">GlamMate Platform V2.5</span>
                <div className="flex items-center gap-2">
                   <div className="w-8 h-px bg-slate-800 group-hover:w-12 group-hover:bg-accent transition-all"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-all"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .animate-flow-particle {
          filter: drop-shadow(0 0 5px #BC9C6B);
        }
      `}</style>
    </section>
  );
};
