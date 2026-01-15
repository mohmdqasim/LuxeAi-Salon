
import React, { useEffect, useState, useMemo } from 'react';
import { TrendingUp, Users, Calendar, DollarSign, ArrowUpRight } from 'lucide-react';

export const LiveLineChart: React.FC = () => {
  const initialPath = "M0,80 Q25,40 50,60 T100,20 T150,50 T200,30 T250,70 T300,10";
  const [points, setPoints] = useState(initialPath);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const h1 = 30 + Math.random() * 40;
      const h2 = 20 + Math.random() * 50;
      const h3 = 10 + Math.random() * 60;
      setPoints(`M0,80 Q25,${h1} 50,60 T100,${h2} T150,50 T200,${h3} T250,70 T300,10`);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-40 relative group will-animate">
      <svg viewBox="0 0 300 100" className="w-full h-full drop-shadow-md overflow-visible">
        <path
          d={points}
          fill="none"
          stroke="#BC9C6B"
          strokeWidth="3"
          strokeLinecap="round"
          className="transition-all duration-[2000ms] ease-in-out"
          style={{ 
            strokeDasharray: 1000, 
            strokeDashoffset: 1000, 
            animation: 'draw 2.5s forwards cubic-bezier(0.16, 1, 0.3, 1)' 
          }}
        />
        <path
          d={`${points} L300,100 L0,100 Z`}
          fill="url(#chartGradient)"
          className="opacity-10 transition-all duration-[2000ms] ease-in-out"
        />
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BC9C6B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BC9C6B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="10" r="4" fill="#BC9C6B" className="animate-pulse" />
      </svg>
    </div>
  );
};

export const MiniBarChart: React.FC = () => {
  const [heights, setHeights] = useState([40, 70, 55, 90, 65, 80, 50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(h => h.map(val => Math.max(25, Math.min(95, val + (Math.random() - 0.5) * 15))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-between gap-1.5 h-32 w-full px-1">
      {heights.map((h, i) => (
        <div 
          key={i} 
          className="w-full bg-accent/5 dark:bg-accent/5 rounded-t-md relative overflow-hidden"
          style={{ height: '100%' }}
        >
          <div 
            className="absolute bottom-0 left-0 right-0 bg-accent/30 rounded-t-md transition-all duration-[1000ms] ease-out will-animate"
            style={{ height: `${h}%` }}
          />
        </div>
      ))}
    </div>
  );
};

export const Counter: React.FC<{ value: number; prefix?: string }> = ({ value, prefix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const startTime = performance.now();
    
    let frame: number;
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easedProgress * end);
      
      setDisplayValue(currentCount);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span>{prefix}{displayValue.toLocaleString()}</span>;
};

export const LiveMetricCard: React.FC<{
  title: string;
  value: number;
  prefix?: string;
  trend: string;
  icon: any;
  color: string;
}> = ({ title, value, prefix, trend, icon: Icon, color }) => (
  <div className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group will-animate">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2.5 rounded-xl ${color} bg-opacity-10 dark:bg-opacity-20 transition-transform group-hover:scale-110 duration-300`}>
        <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div className="flex items-center gap-1 text-[10px] font-black text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
        <ArrowUpRight className="w-3 h-3" />
        {trend}
      </div>
    </div>
    <h4 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">{title}</h4>
    <div className="text-3xl font-black tracking-tight font-display text-primary dark:text-white">
      <Counter value={value} prefix={prefix} />
    </div>
  </div>
);
