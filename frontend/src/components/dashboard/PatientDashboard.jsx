import React from 'react';
import { motion } from 'framer-motion';
import { MetricCard, Card } from '../ui/Cards';
import AICard from '../ui/AICard';
import { IconInfoCircle, IconCalendarEvent } from '@tabler/icons-react';

const PatientDashboard = ({ name }) => {
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
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Habari, {name}</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Personal Maternal Health Journey</p>
        </div>
        <div className="text-[12px] font-bold text-text2 bg-surface2 px-3 py-1 rounded-full">Wednesday, 27 May 2026</div>
      </div>

      <motion.div 
        variants={item} 
        className="bg-[#F5F8FB] border border-blue/10 rounded-2xl p-4 flex items-center gap-4 shadow-sm"
      >
        <div className="w-10 h-10 bg-blue-light rounded-full flex items-center justify-center text-blue shrink-0 shadow-sm">
          <IconCalendarEvent size={20} stroke={2} />
        </div>
        <div className="text-[14px] text-blue-900 flex-1 font-medium">
          Your next clinical visit is scheduled for <strong className="font-bold underline">Thursday 29 May</strong> — Kisumu North Hub.
        </div>
        <button className="text-[11px] font-bold text-blue bg-white px-4 py-2 rounded-lg shadow-sm border border-blue/5 hover:bg-blue-light transition-all uppercase tracking-widest">
          Check Details
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard value="32" label="Weeks Pregnant" badge={{ text: "Due 14 Aug", color: 'blue' }} />
        <MetricCard value="04" label="Visits Completed" badge={{ text: "On Schedule", color: 'green' }} />
        <MetricCard value="02" label="Visits Remaining" badge={{ text: "Next in 2 days", color: 'amber' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div variants={item} className="space-y-6">
          <Card title="Latest Clinical Vitals" link="Historical Trends">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="bg-[#FFF8F8] rounded-2xl p-4 text-center border border-red/5">
                <div className="text-xl font-black text-red tracking-tighter">148/96</div>
                <div className="text-[9px] text-red/60 uppercase font-black tracking-widest mt-1">BP (mmHg)</div>
              </div>
              <div className="bg-[#FFFBF2] rounded-2xl p-4 text-center border border-amber/5">
                <div className="text-xl font-black text-amber tracking-tighter">7.2</div>
                <div className="text-[9px] text-amber/60 uppercase font-black tracking-widest mt-1">Hb (g/dL)</div>
              </div>
              <div className="bg-[#F6FBF8] rounded-2xl p-4 text-center border border-green/5">
                <div className="text-xl font-black text-green tracking-tighter">142</div>
                <div className="text-[9px] text-green/60 uppercase font-black tracking-widest mt-1">Fetal HR</div>
              </div>
            </div>
            <div className="text-[11px] text-text3 mt-4 text-center font-editorial italic">
              "Recorded 2 days ago at Kisumu North Frontline Unit"
            </div>
          </Card>

          <Card title="Gestation Progress">
            <div className="flex justify-between items-end mb-3">
              <div className="text-[13px] font-bold text-text">Week 32 <span className="text-text3 font-medium">of 40</span></div>
              <div className="text-[11px] font-black text-blue uppercase tracking-widest">80% Milestone</div>
            </div>
            <div className="h-2.5 bg-surface2 rounded-full overflow-hidden shadow-inner border border-black/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-light to-blue shadow-[0_0_10px_rgba(24,95,165,0.3)]" 
              />
            </div>
            <div className="flex justify-between text-[9px] text-text3 mt-3 font-black uppercase tracking-[0.2em] opacity-60">
              <span>Conception</span>
              <span>Viability</span>
              <span>Full Term</span>
            </div>
          </Card>

          <button className="w-full py-4 bg-blue text-white rounded-xl font-bold text-[14px] shadow-xl shadow-blue/15 hover:bg-[#0C447C] transition-all active:scale-[0.98] uppercase tracking-widest">
            Book Next Appointment
          </button>
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <Card title="Clinical Timeline" link="Registry">
            <div className="space-y-6 relative mt-4 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-black/5">
              {[
                { date: '12 Mar', title: 'First ANC visit', sub: 'Kisumu North · Authenticated', dot: 'bg-teal' },
                { date: '8 Apr', title: 'Second ANC visit', sub: 'Kakamega East · Authenticated', dot: 'bg-teal' },
                { date: '10 May', title: 'Third ANC visit', sub: 'Kisumu North · Authenticated', dot: 'bg-teal' },
                { date: '29 May', title: 'Fourth ANC visit', sub: 'Kisumu North · Pending Dispatch', dot: 'bg-blue', active: true },
              ].map((t, i) => (
                <div key={i} className="flex gap-6 items-start relative pl-2 group">
                  <div className="w-14 text-[11px] font-bold text-text3 mt-0.5 uppercase tracking-tighter">{t.date}</div>
                  <div className={`w-[11px] h-[11px] rounded-full mt-1.5 shrink-0 z-10 border-2 border-white shadow-sm ${t.dot} ${t.active ? 'animate-pulse' : ''}`} />
                  <div>
                    <div className="text-[15px] font-bold text-text group-hover:text-blue transition-colors">{t.title}</div>
                    <div className={`text-[12px] font-medium mt-0.5 italic font-editorial ${t.active ? 'text-blue' : 'text-text3'}`}>{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <AICard 
            title="Clinical Health Advisory" 
            body="Based on your elevated BP, we recommend reducing physical exertion today. Your assigned nurse will perform a diagnostic re-evaluation on Thursday." 
            action="Clinical Guidelines"
            color="blue"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PatientDashboard;
