
import React from 'react';
import { 
  FileText, Database, Table, BookOpen, FileCode,
  Phone, MessageSquare, Instagram, Mail, MessageCircle,
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface NodeProps {
  icon: any;
  label: string;
  side: 'left' | 'right';
  index: number;
}

const IntelligenceNode: React.FC<NodeProps> = ({ icon: Icon, label, side }) => {
  return (
    <div 
      className={`group relative flex items-center gap-4 transition-all duration-300 ${side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className={`
        relative w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-500 z-20
        bg-[#12122b] border-slate-800 text-slate-400 group-hover:border-accent group-hover:text-white group-hover:shadow-[0_0_15px_rgba(188,156,107,0.3)]
      `}>
        <Icon className="w-4 h-4 transition-colors duration-300" />
      </div>
      <div className={`${side === 'right' ? 'text-right' : 'text-left'}`}>
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  );
};

export const IntelligenceSection: React.FC = () => {
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

  // Path coordinates for the flow particles
  const yCoords = [70, 185, 300, 415, 530];

  return (
    <section className="py-32 bg-[#050510] relative overflow-hidden flex flex-col items-center justify-center" id="intelligence">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">
            Redefine Customer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary italic">Experience with GlamMate.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 leading-relaxed">
            Integrate your service menu, CRMs, historical sales data, and other systems to unlock <br />
            selling, recommendation, and support capabilities.
          </p>
        </ScrollReveal>

        <div className="relative h-[650px] w-full flex items-center justify-center perspective-1000">
          
          {/* SVG Connector Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
            {/* Path generation with persistent glow */}
            {yCoords.map((y, i) => (
              <React.Fragment key={`paths-${i}`}>
                {/* Left to Center */}
                <path
                  d={`M 280 ${y} C 450 ${y} 500 300 600 300`}
                  fill="none"
                  stroke="rgba(188,156,107,0.1)"
                  strokeWidth="1.5"
                />
                {/* Center to Right */}
                <path
                  d={`M 600 300 C 700 300 750 ${y} 920 ${y}`}
                  fill="none"
                  stroke="rgba(188,156,107,0.1)"
                  strokeWidth="1.5"
                />
                
                {/* Flow Particles - Always active */}
                <circle r="2" fill="#BC9C6B" className="animate-flow-particle shadow-[0_0_8px_#BC9C6B]">
                  <animateMotion 
                    dur={`${2.5 + Math.random() * 2}s`} 
                    repeatCount="indefinite" 
                    begin={`${i * 0.4}s`}
                    path={`M 280 ${y} C 450 ${y} 500 300 600 300`}
                  />
                </circle>
                <circle r="2" fill="#BC9C6B" className="animate-flow-particle shadow-[0_0_8px_#BC9C6B]">
                  <animateMotion 
                    dur={`${2.5 + Math.random() * 2}s`} 
                    repeatCount="indefinite" 
                    begin={`${i * 0.4 + 1}s`}
                    path={`M 600 300 C 700 300 750 ${y} 920 ${y}`}
                  />
                </circle>
              </React.Fragment>
            ))}
          </svg>

          {/* Node Columns */}
          <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-24">
            <div className="flex flex-col gap-16">
              {leftNodes.map((node, i) => (
                <IntelligenceNode 
                  key={node.id} side="left" {...node} index={i}
                />
              ))}
            </div>
            <div className="flex flex-col gap-16">
              {rightNodes.map((node, i) => (
                <IntelligenceNode 
                  key={node.id} side="right" {...node} index={i}
                />
              ))}
            </div>
          </div>

          {/* Central Orchestrator Core */}
          <div className="relative z-30 flex flex-col items-center">
            {/* Top Label */}
            <div className="mb-10 flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent/80">GlamMate LLM Orchestrator</span>
              <div className="flex gap-2.5">
                <div className="w-[2px] h-8 bg-gradient-to-b from-accent/40 to-transparent rounded-full"></div>
                <div className="w-[2px] h-8 bg-gradient-to-b from-accent/60 to-transparent rounded-full"></div>
                <div className="w-[2px] h-8 bg-gradient-to-b from-accent/40 to-transparent rounded-full"></div>
              </div>
            </div>
            
            {/* Central Hub */}
            <div className="relative group">
              {/* Outer Pulsing Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-accent/5 rounded-full border border-white/5 animate-pulse-soft"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-accent/10 rounded-full border border-white/10 shadow-[0_0_40px_rgba(188,156,107,0.1)]"></div>
              
              {/* Main Container Orb */}
              <div className="relative w-72 h-72 rounded-full flex flex-col items-center justify-center p-12 text-center transition-all duration-700 bg-gradient-to-br from-[#12122b] to-[#050510] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] border-accent/30">
                <div className="absolute inset-0 bg-accent/[0.03] rounded-full animate-pulse-soft"></div>
                
                <h3 className="relative z-10 text-2xl font-black tracking-tight text-white mb-6 leading-tight uppercase">
                  GlamMate <br /> Intelligence
                </h3>
                <p className="relative z-10 text-[10px] text-slate-300 font-bold uppercase leading-relaxed tracking-wider opacity-80">
                  Integrate your salon's unique knowledge to unlock world-class customer support and selling capabilities.
                </p>
              </div>
            </div>

            {/* Bottom Footer Labels */}
            <div className="mt-14 flex items-center gap-16">
              <div className="flex flex-col items-center gap-3 group">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover:text-accent transition-colors">Data Privacy & Security</span>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent group-hover:shadow-[0_0_8px_#BC9C6B] transition-all"></div>
                   <div className="w-10 h-px bg-slate-800 group-hover:bg-accent/40 transition-all"></div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover:text-accent transition-colors">GlamMate Platform V2.5</span>
                <div className="flex items-center gap-2">
                   <div className="w-10 h-px bg-slate-800 group-hover:bg-accent/40 transition-all"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent group-hover:shadow-[0_0_8px_#BC9C6B] transition-all"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .animate-flow-particle {
          filter: drop-shadow(0 0 4px #BC9C6B);
        }
      `}</style>
    </section>
  );
};
