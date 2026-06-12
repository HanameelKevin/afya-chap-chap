import React from 'react';
import { motion } from 'framer-motion';
import { MetricCard, Card, RiskPill } from '../ui/Cards';
import AICard from '../ui/AICard';
import { patients, sessions } from '../../mockData';
import { IconAlertTriangle, IconActivity, IconUsers, IconCalendarEvent, IconSend } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";

const HWDashboard = ({ name }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  const highRiskPatients = patients.filter(p => p.risk === 'CRITICAL' || p.risk === 'HIGH');

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">
      <div className="flex items-end justify-between border-b border-border/40 pb-8">
        <div className="space-y-1">
          <h1 className="text-4xl journal-title text-foreground tracking-tight italic">Good morning, {name}</h1>
          <p className="text-[12px] text-muted-foreground font-black uppercase tracking-[0.2em] opacity-60 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Clinical Command & Frontline Briefing
          </p>
        </div>
        <div className="text-[11px] font-black text-muted-foreground bg-secondary/80 px-4 py-1.5 rounded-full uppercase tracking-widest border border-border/50">
          Wednesday, 12 June 2026
        </div>
      </div>

      <motion.div 
        variants={item} 
        className="bg-red-light/30 border border-red/10 rounded-2xl p-6 flex items-center gap-6 shadow-[0_8px_32px_rgba(163,45,45,0.03)] backdrop-blur-sm"
      >
        <div className="w-14 h-14 bg-red-light rounded-2xl flex items-center justify-center text-red shrink-0 shadow-sm border border-red/5">
          <IconAlertTriangle size={28} stroke={2} />
        </div>
        <div className="flex-1 space-y-1">
          <div className="text-[12px] font-black text-red uppercase tracking-widest opacity-80">Urgent Intervention Required</div>
          <div className="text-[15px] text-red-900 font-medium leading-relaxed">
            {highRiskPatients.length} patients flagged <strong className="font-bold underline decoration-red/30">CRITICAL</strong> — Emergency unit dispatch recommended for Kisumu North facilities.
          </div>
        </div>
        <Button variant="destructive" className="rounded-xl px-6 py-6 h-auto font-bold uppercase tracking-widest text-[11px] shadow-lg shadow-red/20">
          Deploy Protocol <IconSend size={16} className="ml-2" />
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <MetricCard value="247" label="Active Patients" badge={{ text: "+12 this week", color: 'green' }} />
        <MetricCard value="03" label="Today's Sessions" badge={{ text: "1 in progress", color: 'amber' }} />
        <MetricCard value="18" label="Risk Escalations" badge={{ text: "2 critical", color: 'red' }} />
        <MetricCard value="94%" label="SMS Delivery" badge={{ text: "Registry Sync", color: 'green' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div variants={item} className="lg:col-span-2">
          <Card title="High-Risk Maternal Registry" link="Full Directory">
            <div className="divide-y divide-border/30 mt-4">
              {patients.slice(0, 4).map((p, i) => (
                <div key={i} className="flex items-center gap-6 py-6 first:pt-2 last:pb-0 group cursor-pointer hover:translate-x-1 transition-all">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[15px] font-black shadow-sm border border-black/5" style={{ backgroundColor: p.bg, color: p.color }}>
                    {p.initial}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-[16px] font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{p.name}</div>
                    <div className="text-[12px] text-muted-foreground font-medium flex items-center gap-2">
                      <IconActivity size={14} className="opacity-40" />
                      {p.weeks} wks · BP {p.bp} · Hb {p.hb}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <RiskPill level={p.risk} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
        
        <motion.div variants={item} className="space-y-10">
          <Card title="Operational Pipeline" link="Schedule">
            <div className="divide-y divide-border/30 mt-4">
              {sessions.slice(0, 2).map((s, i) => (
                <div key={i} className="flex items-center gap-5 py-6 first:pt-2 last:pb-0">
                  <div className={`w-3 h-3 rounded-full shrink-0 shadow-sm ${s.dot} ${s.sub.includes('Active') ? 'animate-pulse' : ''}`} />
                  <div className="flex-1">
                    <div className="text-[15px] font-bold text-foreground tracking-tight">{s.name}</div>
                    <div className="text-[12px] text-muted-foreground font-medium mt-1 flex items-center gap-1.5">
                      <IconCalendarEvent size={14} className="opacity-40" />
                      {s.sub}
                    </div>
                  </div>
                  <div className="ml-auto text-[9px] font-black text-foreground bg-secondary px-3 py-1.5 rounded-full uppercase tracking-tighter border border-border/50">{s.stat}</div>
                </div>
              ))}
            </div>
          </Card>
          
          <AICard 
            title="Session Insight" 
            body="Priority for Kisumu North: Coordinate with Dr. Omolo for 2 pre-eclampsia reviews. Expected attendance 78% based on SMS confirmations." 
            action="Briefing Detail"
            color="teal"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HWDashboard;
