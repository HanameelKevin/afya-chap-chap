import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { records } from '../../mockData';
import { IconFileSpreadsheet, IconSearch, IconFilter, IconArrowUpRight, IconClock, IconArchive } from '@tabler/icons-react';

const HWRecords = () => {
  const filings = [
    { id: 'FR-8821', patient: 'Aisha Wanjiku', type: 'Clinical Note', date: 'Today, 09:30 AM', status: 'Pending Review' },
    { id: 'FR-8819', patient: 'Mary Otieno', type: 'Lab Results', date: 'Today, 08:15 AM', status: 'Synced' },
    { id: 'FR-8790', patient: 'Grace Njeri', type: 'ANC Form', date: 'Yesterday', status: 'Synced' },
    { id: 'FR-8788', patient: 'Fatuma Mwangi', type: 'Referral', date: '2 days ago', status: 'Archived' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Clinical Archives</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Digital filing system for maternal health records</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-6 py-2.5 bg-white border border-black/10 rounded-xl text-text2 text-[13px] font-bold hover:bg-surface2 transition-all shadow-sm">Export Registry</button>
           <button className="px-6 py-2.5 bg-teal text-white rounded-xl text-[13px] font-bold hover:bg-teal-dark transition-all shadow-lg shadow-teal/20">Bulk MoH Sync</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
           <Card className="bg-[#F4F9F7] border-teal/10 !p-6 shadow-sm">
              <div className="text-3xl font-black text-teal tracking-tighter">14</div>
              <div className="text-[10px] font-bold text-teal/70 uppercase tracking-[0.2em] mt-2">Awaiting Validation</div>
           </Card>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
           <Card className="bg-white border-black/5 !p-6 shadow-sm">
              <div className="text-3xl font-black text-text tracking-tighter">2,487</div>
              <div className="text-[10px] font-bold text-text3 uppercase tracking-[0.2em] mt-2">Digitalized Files</div>
           </Card>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
           <Card className="bg-white border-black/5 !p-6 shadow-sm">
              <div className="text-3xl font-black text-blue tracking-tighter">98.2%</div>
              <div className="text-[10px] font-bold text-text3 uppercase tracking-[0.2em] mt-2">MoH Compliance</div>
           </Card>
         </motion.div>
      </div>

      <Card className="!p-0 overflow-hidden border-black/5 shadow-sm">
         <div className="px-6 py-4 border-b border-black/5 bg-surface2/30 flex items-center gap-2 text-[12px] font-bold text-text3 uppercase tracking-widest">
            <IconArchive size={16} /> Recent Clinical Filings
         </div>
         <div className="divide-y divide-black/5 bg-white">
            {filings.map((f, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="flex items-center gap-6 py-5 px-6 group cursor-pointer hover:bg-surface2/30 transition-all"
               >
                  <div className="w-12 h-12 rounded-2xl bg-surface2 flex items-center justify-center text-text3 group-hover:bg-teal group-hover:text-white transition-all shadow-sm">
                     <IconFileSpreadsheet size={22} stroke={1.5} />
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-3 mb-1">
                        <div className="text-[15px] font-bold text-text group-hover:text-teal transition-colors">{f.patient}</div>
                        <span className="text-[10px] text-text3 font-mono bg-surface2 px-1.5 py-0.5 rounded uppercase tracking-tighter">{f.id}</span>
                     </div>
                     <div className="flex items-center gap-4 text-[11px] text-text3 font-medium">
                        <span className="uppercase tracking-widest text-[9px] font-bold">{f.type}</span>
                        <span className="opacity-30">•</span>
                        <span className="flex items-center gap-1.5 font-editorial italic"><IconClock size={14} className="opacity-40" /> {f.date}</span>
                     </div>
                  </div>
                  <div className="text-right shrink-0">
                     <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.1em] border ${
                       f.status === 'Synced' ? 'bg-green-light text-green border-green/10' : 
                       f.status === 'Pending Review' ? 'bg-amber-light text-amber border-amber/10' : 
                       'bg-surface2 text-text2 border-black/5'
                     }`}>
                        {f.status}
                     </span>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-text3 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:shadow-sm">
                    <IconArrowUpRight size={20} />
                  </div>
               </motion.div>
            ))}
         </div>
      </Card>
    </motion.div>
  );
};

export default HWRecords;
