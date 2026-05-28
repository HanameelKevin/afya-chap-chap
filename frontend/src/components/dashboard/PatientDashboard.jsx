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
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Habari, {name} 👋</h1>
        <div className="text-[12px] text-text3">Wednesday, 27 May 2026</div>
      </div>

      <motion.div variants={item} className="bg-blue-light border border-[#85B7EB] rounded-lg p-3 flex items-center gap-3">
        <IconCalendarEvent className="text-blue shrink-0" size={20} />
        <div className="text-[13px] text-blue flex-1">
          Your next clinic visit is <strong>Thursday 29 May</strong> at Kisumu North — 10:00 AM.
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard value="32" label="Weeks pregnant" badge={{ text: "Due 14 Aug", color: 'blue' }} />
        <MetricCard value="4" label="Visits completed" badge={{ text: "On schedule", color: 'green' }} />
        <MetricCard value="2" label="Visits remaining" badge={{ text: "Next in 2 days", color: 'amber' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Card title="My latest vitals" link="Full history">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-surface2 rounded-lg p-2.5 text-center border border-black/5">
                <div className="text-lg font-bold text-red">148/96</div>
                <div className="text-[10px] text-text2 uppercase">BP</div>
                <div className="text-[9px] text-red mt-1">High</div>
              </div>
              <div className="bg-surface2 rounded-lg p-2.5 text-center border border-black/5">
                <div className="text-lg font-bold text-amber">7.2</div>
                <div className="text-[10px] text-text2 uppercase">Hb</div>
                <div className="text-[9px] text-amber mt-1">g/dL</div>
              </div>
              <div className="bg-surface2 rounded-lg p-2.5 text-center border border-black/5">
                <div className="text-lg font-bold text-green">142</div>
                <div className="text-[10px] text-text2 uppercase">Fetal HR</div>
                <div className="text-[9px] text-green mt-1">bpm</div>
              </div>
            </div>
            <div className="text-[10px] text-text3 mt-3 text-center">Last recorded 25 May · Kisumu North</div>
          </Card>

          <Card title="Pregnancy progress">
            <div className="text-[12px] text-text3 mb-2">Week 32 of 40</div>
            <div className="h-2 bg-surface2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-blue" 
              />
            </div>
            <div className="flex justify-between text-[10px] text-text3 mt-2 font-medium">
              <span>Week 1</span>
              <span>Week 20</span>
              <span>Week 40</span>
            </div>
          </Card>

          <button className="w-full py-3 bg-blue text-white rounded-lg font-semibold text-[14px] shadow-sm hover:bg-blue-mid transition-all">
            Book my next visit →
          </button>
        </div>

        <div className="space-y-4">
          <Card title="Visit timeline" link="Book next">
            <div className="space-y-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-black/10">
              {[
                { date: '12 Mar', title: 'First ANC visit', sub: 'Kisumu North · Done', dot: 'bg-teal' },
                { date: '8 Apr', title: 'Second ANC visit', sub: 'Kakamega East · Done', dot: 'bg-teal' },
                { date: '10 May', title: 'Third ANC visit', sub: 'Kisumu North · Done', dot: 'bg-teal' },
                { date: '29 May', title: 'Fourth ANC visit', sub: 'Kisumu North · Upcoming', dot: 'bg-blue', active: true },
              ].map((t, i) => (
                <div key={i} className="flex gap-4 items-start relative pl-2">
                  <div className="w-12 text-[11px] text-text3 mt-0.5">{t.date}</div>
                  <div className={`w-[9px] h-[9px] rounded-full mt-1.5 shrink-0 z-10 ${t.dot}`} />
                  <div>
                    <div className="text-[13px] font-medium text-text">{t.title}</div>
                    <div className={`text-[11px] ${t.active ? 'text-blue font-medium' : 'text-text3'}`}>{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <AICard 
            title="Health tip for you" 
            body="Your blood pressure is elevated. Rest, reduce salt, and drink more water. Tell your health worker on Thursday." 
            action="Learn more ↗"
            color="blue"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PatientDashboard;
