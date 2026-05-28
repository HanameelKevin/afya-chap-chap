import React from 'react';
import { motion } from 'framer-motion';
import { MetricCard, Card, RiskPill } from '../ui/Cards';
import AICard from '../ui/AICard';
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

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Good morning, {name} 👋</h1>
        <div className="text-[12px] text-text3">Wednesday, 27 May 2026</div>
      </div>

      <motion.div variants={item} className="bg-red-light border border-[#F09595] rounded-lg p-3 flex items-center gap-3">
        <IconAlertTriangle className="text-red shrink-0" size={20} />
        <div className="text-[13px] text-red flex-1">
          2 patients flagged <strong>CRITICAL</strong> — Kisumu North session starting at 10:00 AM
        </div>
        <div className="text-[12px] font-bold text-red underline cursor-pointer">Review now →</div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard value="247" label="Active patients" badge={{ text: "+12 this week", color: 'green' }} />
        <MetricCard value="3" label="Sessions today" badge={{ text: "1 in progress", color: 'amber' }} />
        <MetricCard value="18" label="High-risk cases" badge={{ text: "2 critical", color: 'red' }} />
        <MetricCard value="94%" label="SMS delivery rate" badge={{ text: "Swahili + EN", color: 'green' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="High-risk maternal patients" link="View all">
            <div className="divide-y divide-black/5">
              {[
                { name: 'Aisha Wanjiku', sub: '32 wks · BP 148/96', risk: 'CRITICAL', initial: 'AW', color: '#993C1D', bg: '#FAECE7' },
                { name: 'Fatuma Mwangi', sub: '38 wks · Hb 7.2 g/dL', risk: 'CRITICAL', initial: 'FM', color: '#854F0B', bg: '#FAEEDA' },
                { name: 'Grace Njeri', sub: '28 wks · Prev. C-section', risk: 'HIGH', initial: 'GN', color: '#854F0B', bg: '#FAEEDA' },
                { name: 'Mary Otieno', sub: '20 wks · MUAC 20cm', risk: 'MEDIUM', initial: 'MO', color: '#185FA5', bg: '#E6F1FB' },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold" style={{ backgroundColor: p.bg, color: p.color }}>
                    {p.initial}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-text">{p.name}</div>
                    <div className="text-[11px] text-text3">{p.sub}</div>
                  </div>
                  <RiskPill level={p.risk} />
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="space-y-4">
          <Card title="Today's sessions" link="Manage →">
            <div className="divide-y divide-black/5">
              {[
                { name: 'Kisumu North', sub: 'In progress · 14 checked in', stat: '18 booked', dot: 'bg-green' },
                { name: 'Kakamega East', sub: 'Starts 2:00 PM', stat: '11 booked', dot: 'bg-amber' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${s.dot}`} />
                  <div>
                    <div className="text-[13px] font-medium text-text">{s.name}</div>
                    <div className="text-[11px] text-text3">{s.sub}</div>
                  </div>
                  <div className="ml-auto text-[12px] text-text2">{s.stat}</div>
                </div>
              ))}
            </div>
          </Card>
          
          <AICard 
            title="AI session briefing" 
            body="Kisumu North — 2 critical cases need escalation. Prepare BP kit + IV fluids. 78% attendance predicted based on SMS confirms." 
            action="Get full briefing ↗"
            color="teal"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HWDashboard;
