
import React from 'react';
import { Play, MoreHorizontal, Search, Bell, Settings } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { LiveLineChart, MiniBarChart, LiveMetricCard } from './LiveCharts';
import { Calendar, Users, DollarSign, TrendingUp } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-background-dark/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up" className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Real-time Intelligence at your Fingertips</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Monitor your salon's pulse with live data visualizations that update as bookings roll in.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <ScrollReveal animation="fade-in-up" delay={0}>
            <LiveMetricCard 
              title="Today's Revenue" 
              value={12450} 
              prefix="$" 
              trend="+12%" 
              icon={DollarSign} 
              color="bg-emerald-500" 
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={100}>
            <LiveMetricCard 
              title="Active Bookings" 
              value={48} 
              trend="+5%" 
              icon={Calendar} 
              color="bg-primary" 
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={200}>
            <LiveMetricCard 
              title="New Clients" 
              value={124} 
              trend="+18%" 
              icon={Users} 
              color="bg-purple-500" 
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={300}>
            <LiveMetricCard 
              title="Conversion Rate" 
              value={84} 
              trend="+2%" 
              icon={TrendingUp} 
              color="bg-orange-500" 
            />
          </ScrollReveal>
        </div>

        <ScrollReveal animation="zoom-in" threshold={0.1}>
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] bg-white dark:bg-card-dark border border-slate-100 dark:border-slate-800">
            {/* Window Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="text-primary dark:text-blue-400 border-b-2 border-primary pb-5 mt-5">Overview</span>
                  <span>Calendar</span>
                  <span>Staff</span>
                  <span>Marketing</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-slate-400" />
                <Bell className="w-4 h-4 text-slate-400" />
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"></div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold">Revenue Growth (Live)</h4>
                      <select className="bg-transparent text-xs font-bold border-none focus:ring-0 text-slate-400 cursor-pointer">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                      </select>
                    </div>
                    <LiveLineChart />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <h4 className="font-bold mb-6 text-sm">Appointments per Day</h4>
                      <MiniBarChart />
                    </div>
                    <div className="p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <h4 className="font-bold mb-4 text-sm">Staff Performance</h4>
                      <div className="space-y-4">
                        {[
                          { name: 'Sarah J.', color: 'bg-emerald-500', val: 95 },
                          { name: 'Michael K.', color: 'bg-primary', val: 78 },
                          { name: 'Emily R.', color: 'bg-purple-500', val: 86 },
                        ].map((s, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-[11px] font-bold uppercase text-slate-400">
                              <span>{s.name}</span>
                              <span>{s.val}% Occupancy</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                              <div className={`h-full ${s.color} transition-all duration-1000`} style={{ width: `${s.val}%` }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-primary dark:bg-blue-600 rounded-2xl text-white shadow-xl shadow-primary/20">
                    <h4 className="font-bold mb-1">System Health</h4>
                    <p className="text-white/70 text-xs mb-4">LuxeBot AI is performing at optimal efficiency.</p>
                    <div className="flex items-center justify-center py-4">
                      <div className="relative">
                        <svg className="w-24 h-24 transform -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                          <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="25.12" className="text-white transition-all duration-1000" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-xl font-black">92%</span>
                          <span className="text-[10px] font-bold uppercase opacity-60">Score</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold mb-4 text-sm">Recent Activity</h4>
                    <div className="space-y-4">
                      {[
                        { text: 'New booking: Balayage w/ Sarah', time: '2m ago' },
                        { text: 'Deposit paid: $50 by Jane D.', time: '12m ago' },
                        { text: 'AI resolved inquiry: Pricing', time: '25m ago' },
                        { text: 'Schedule sync complete', time: '1h ago' },
                      ].map((act, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                          <div>
                            <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight">{act.text}</p>
                            <span className="text-[10px] text-slate-400">{act.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
