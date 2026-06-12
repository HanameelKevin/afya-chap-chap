import React from 'react';
import { motion } from 'framer-motion';
import { MetricCard, Card, RiskPill } from '../ui/Cards';
import AICard from '../ui/AICard';
import { patients, sessions } from '../../mockData';
import { IconAlertTriangle } from '@tabler/icons-react';

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
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Good morning, {name}</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Clinical Command & Frontline Briefing</p>
        </div>
        <div className="text-[12px] font-bold text-text2 bg-surface2 px-3 py-1 rounded-full">Wednesday, 27 May 2026</div>
      </div>

      <motion.div 
        variants={item} 
        className="bg-[#FFF8F8] border border-red/10 rounded-2xl p-4 flex items-center gap-4 shadow-sm"
      >
        <div className="w-10 h-10 bg-red-light rounded-full flex items-center justify-center text-red shrink-0 shadow-sm">
          <IconAlertTriangle size={20} stroke={2} />
        </div>
        <div className="text-[14px] text-red-900 flex-1 font-medium">
          {highRiskPatients.length} patients flagged <strong className="font-bold underline">HIGH RISK</strong> — Emergency unit dispatch recommended for Kisumu North.
        </div>
        <button className="text-[11px] font-bold text-red bg-white px-4 py-2 rounded-lg shadow-sm border border-red/5 hover:bg-red-light transition-all uppercase tracking-widest">
          Deploy Protocol
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard value="247" label="Active Patients" badge={{ text: "+12 this week", color: 'green' }} />
        <MetricCard value="03" label="Today's Sessions" badge={{ text: "1 in progress", color: 'amber' }} />
        <MetricCard value="18" label="Risk Escalations" badge={{ text: "2 critical", color: 'red' }} />
        <MetricCard value="94%" label="SMS Delivery" badge={{ text: "Registry Sync", color: 'green' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <motion.div variants={item} className="lg:col-span-2">
          <Card title="High-Risk Maternal Registry" link="Full Directory">
            <div className="divide-y divide-black/5 mt-4">
              {patients.slice(0, 4).map((p, i) => (
                <div key={i} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0 group cursor-pointer hover:bg-surface2/30 transition-all px-2 -mx-2 rounded-xl">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-bold shadow-sm" style={{ backgroundColor: p.bg, color: p.color }}>
                    {p.initial}
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-bold text-text group-hover:text-teal transition-colors">{p.name}</div>
                    <div className="text-[11px] text-text3 font-medium mt-0.5">{p.weeks} wks · BP {p.bp} · Hb {p.hb}</div>
                  </div>
                  <div className="shrink-0">
                    <RiskPill level={p.risk} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
        
        <motion.div variants={item} className="space-y-8">
          <Card title="Operational Pipeline" link="Schedule">
            <div className="divide-y divide-black/5 mt-4">
              {sessions.slice(0, 2).map((s, i) => (
                <div key={i} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                  <div className={`w-3 h-3 rounded-full shrink-0 shadow-sm ${s.dot} ${s.sub.includes('Active') ? 'animate-pulse' : ''}`} />
                  <div>
                    <div className="text-[15px] font-bold text-text">{s.name}</div>
                    <div className="text-[11px] text-text3 font-medium mt-0.5">{s.sub}</div>
                  </div>
                  <div className="ml-auto text-[10px] font-black text-text2 bg-surface2 px-2.5 py-1 rounded-full uppercase tracking-tighter">{s.stat}</div>
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
