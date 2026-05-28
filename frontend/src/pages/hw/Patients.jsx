import React from 'react';
import { motion } from 'framer-motion';
import { Card, RiskPill } from '../../components/ui/Cards';
import { IconSearch, IconFilter, IconUserPlus, IconActivity, IconCalendar } from '@tabler/icons-react';

const HWPatients = () => {
  const patients = [
    { name: 'Aisha Wanjiku', id: 'P-9021', weeks: 32, risk: 'CRITICAL', bp: '148/96', lastVisit: '25 May', initial: 'AW', color: '#993C1D', bg: '#FAECE7' },
    { name: 'Fatuma Mwangi', id: 'P-4432', weeks: 38, risk: 'CRITICAL', bp: '120/80', hb: '7.2', lastVisit: '20 May', initial: 'FM', color: '#854F0B', bg: '#FAEEDA' },
    { name: 'Grace Njeri', id: 'P-1102', weeks: 28, risk: 'HIGH', bp: '135/85', lastVisit: '18 May', initial: 'GN', color: '#854F0B', bg: '#FAEEDA' },
    { name: 'Mary Otieno', id: 'P-8871', weeks: 20, risk: 'MEDIUM', bp: '118/75', lastVisit: '10 May', initial: 'MO', color: '#185FA5', bg: '#E6F1FB' },
    { name: 'Beatrice Kamau', id: 'P-5521', weeks: 16, risk: 'LOW', bp: '110/70', lastVisit: '05 May', initial: 'BK', color: '#3B6D11', bg: '#EAF3DE' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Patient Directory</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-teal text-white rounded-lg font-semibold text-xs hover:bg-teal-dark transition-all">
          <IconUserPlus size={16} /> Add Patient
        </button>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 relative">
           <IconSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text3" />
           <input 
             type="text" 
             placeholder="Search by name, ID or phone..."
             className="w-full pl-10 pr-4 py-2 bg-surface border border-black/8 rounded-lg focus:border-teal outline-none text-[13px]"
           />
        </div>
        <button className="px-4 py-2 bg-surface border border-black/8 rounded-lg text-text2 hover:bg-surface2 flex items-center gap-2 text-[13px]">
           <IconFilter size={18} /> Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {patients.map((p, i) => (
          <Card key={i} className="hover:bg-bg/50 transition-colors group cursor-pointer border-l-4" style={{ borderLeftColor: p.color }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: p.bg, color: p.color }}>
                {p.initial}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                   <div className="text-[14px] font-bold text-text">{p.name}</div>
                   <div className="text-[10px] text-text3 bg-surface2 px-1.5 py-0.5 rounded font-mono">{p.id}</div>
                </div>
                <div className="flex items-center gap-4 mt-1 text-[11px] text-text3">
                  <span className="flex items-center gap-1"><IconCalendar size={12} /> {p.weeks} weeks pregnant</span>
                  <span className="flex items-center gap-1"><IconActivity size={12} /> Last vitals: {p.bp}</span>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <RiskPill level={p.risk} />
                <div className="text-[10px] text-text3">Last visit: {p.lastVisit}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default HWPatients;
