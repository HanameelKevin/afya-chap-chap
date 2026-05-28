import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconFileSpreadsheet, IconSearch, IconFilter, IconArrowUpRight, IconClock } from '@tabler/icons-react';

const HWRecords = () => {
  const filings = [
    { id: 'FR-8821', patient: 'Aisha Wanjiku', type: 'Clinical Note', date: 'Today, 09:30 AM', status: 'Pending Review' },
    { id: 'FR-8819', patient: 'Mary Otieno', type: 'Lab Results', date: 'Today, 08:15 AM', status: 'Synced' },
    { id: 'FR-8790', patient: 'Grace Njeri', type: 'ANC Form', date: 'Yesterday', status: 'Synced' },
    { id: 'FR-8788', patient: 'Fatuma Mwangi', type: 'Referral', date: '2 days ago', status: 'Archived' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Maternal Records Filing</h1>
        <div className="flex items-center gap-3">
           <button className="px-4 py-2 bg-surface border border-black/8 rounded-lg text-text2 text-[13px] font-medium hover:bg-surface2 transition-all">Export (CSV)</button>
           <button className="px-4 py-2 bg-teal text-white rounded-lg text-[13px] font-bold hover:bg-teal-dark transition-all">Bulk Sync</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <Card className="bg-teal-light border-teal/10">
            <div className="text-2xl font-bold text-teal">14</div>
            <div className="text-[11px] font-bold text-teal-dark uppercase tracking-wider mt-1">Pending Review</div>
         </Card>
         <Card>
            <div className="text-2xl font-bold text-text">247</div>
            <div className="text-[11px] font-bold text-text2 uppercase tracking-wider mt-1">Total Digital Records</div>
         </Card>
         <Card>
            <div className="text-2xl font-bold text-blue">98.2%</div>
            <div className="text-[11px] font-bold text-blue uppercase tracking-wider mt-1">MOH Data Compliance</div>
         </Card>
      </div>

      <Card title="Recent Filings">
         <div className="divide-y divide-black/5">
            {filings.map((f, i) => (
               <div key={i} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 group cursor-pointer hover:bg-surface2/50 transition-all px-2 -mx-2 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-surface2 flex items-center justify-center text-text3 group-hover:bg-teal group-hover:text-white transition-all">
                     <IconFileSpreadsheet size={20} />
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-2">
                        <div className="text-[13px] font-bold text-text">{f.patient}</div>
                        <span className="text-[10px] text-text3 font-mono">{f.id}</span>
                     </div>
                     <div className="flex items-center gap-3 mt-1 text-[11px] text-text3">
                        <span>{f.type}</span>
                        <span className="flex items-center gap-1"><IconClock size={12} /> {f.date}</span>
                     </div>
                  </div>
                  <div className="text-right">
                     <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${f.status === 'Synced' ? 'bg-green-light text-green' : f.status === 'Pending Review' ? 'bg-amber-light text-amber' : 'bg-surface2 text-text2'}`}>
                        {f.status}
                     </span>
                  </div>
                  <IconArrowUpRight size={18} className="text-text3 opacity-0 group-hover:opacity-100 transition-all" />
               </div>
            ))}
         </div>
      </Card>
    </motion.div>
  );
};

export default HWRecords;
