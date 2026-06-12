import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, RiskPill } from '../../components/ui/Cards';
import { patients } from '../../mockData';
import { IconSearch, IconFilter, IconUserPlus, IconActivity, IconCalendar, IconChevronRight } from '@tabler/icons-react';

const HWPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Patient Directory</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Manage and monitor active clinical cases</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-teal text-white rounded-xl font-bold text-[13px] shadow-lg shadow-teal/20 hover:bg-teal-dark transition-all active:scale-95">
          <IconUserPlus size={18} /> Add New Patient
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative group">
           <IconSearch size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text3 group-focus-within:text-teal transition-colors" />
           <input 
             type="text" 
             placeholder="Search by name, patient ID or phone number..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full pl-12 pr-4 py-3.5 bg-white border border-black/10 rounded-2xl focus:border-teal/30 focus:shadow-[0_0_0_4px_rgba(15,110,86,0.03)] outline-none text-[14px] transition-all"
           />
        </div>
        <button className="px-6 py-3.5 bg-white border border-black/10 rounded-2xl text-text2 hover:bg-surface2 transition-all flex items-center gap-2 text-[14px] font-semibold shadow-sm">
           <IconFilter size={20} /> Advanced Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredPatients.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="hover:shadow-xl hover:shadow-black/5 transition-all group cursor-pointer border-l-4 overflow-hidden relative" style={{ borderLeftColor: p.color }}>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[13px] font-bold shadow-sm shrink-0" style={{ backgroundColor: p.bg, color: p.color }}>
                  {p.initial}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                     <div className="text-[16px] font-bold text-text group-hover:text-teal transition-colors">{p.name}</div>
                     <div className="text-[10px] text-text3 bg-surface2 px-2 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider">{p.id}</div>
                  </div>
                  <div className="flex items-center gap-6 mt-2 text-[12px] text-text3 font-medium">
                    <span className="flex items-center gap-1.5"><IconCalendar size={14} className="opacity-60" /> {p.weeks} weeks gestation</span>
                    <span className="flex items-center gap-1.5"><IconActivity size={14} className="opacity-60" /> Vitals: {p.bp} · Hb {p.hb}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-3 shrink-0">
                  <RiskPill level={p.risk} />
                  <div className="flex items-center gap-1 text-[11px] text-text3 font-medium uppercase tracking-tighter italic">
                    Last visit {p.lastVisit} <IconChevronRight size={14} />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {filteredPatients.length === 0 && (
        <div className="py-20 text-center space-y-4 bg-surface2/30 rounded-3xl border border-dashed border-black/10">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-text3 shadow-sm">
              <IconSearch size={32} />
           </div>
           <div>
              <p className="text-[16px] font-bold text-text">No patients found</p>
              <p className="text-[13px] text-text3 mt-1 italic font-editorial">"Try adjusting your search or filters to find the patient record."</p>
           </div>
        </div>
      )}
    </motion.div>
  );
};

export default HWPatients;
