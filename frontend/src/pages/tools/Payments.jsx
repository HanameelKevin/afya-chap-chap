import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconCreditCard, IconReceipt, IconWallet, IconArrowUpRight, IconPlus, IconShieldCheck } from '@tabler/icons-react';

const Payments = () => {
  const transactions = [
    { id: 'TXN-9021', patient: 'Aisha Wanjiku', amount: 'KSh 50', status: 'Completed', type: 'SHA Co-pay', date: 'Today, 09:40 AM' },
    { id: 'TXN-9019', patient: 'Mary Otieno', amount: 'KSh 50', status: 'Completed', type: 'SHA Co-pay', date: 'Today, 08:30 AM' },
    { id: 'TXN-9001', patient: 'Grace Njeri', amount: 'KSh 200', status: 'Pending', type: 'Emergency Transport', date: 'Yesterday' },
    { id: 'TXN-8995', patient: 'Fatuma Mwangi', amount: 'KSh 50', status: 'Refunded', type: 'Lab Fee', date: '2 days ago' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Clinical Ledger</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Financial audit and insurance claim management</p>
        </div>
        <button className="px-6 py-2.5 bg-teal text-white rounded-xl text-[13px] font-bold shadow-lg shadow-teal/20 hover:bg-teal-dark transition-all active:scale-95 flex items-center gap-2">
           <IconPlus size={18} /> Reconcile Payments
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
           <Card className="bg-[#F4F8FC] border-blue/10 !p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                 <IconWallet size={24} className="text-blue" />
                 <span className="text-[10px] font-bold text-blue uppercase tracking-widest">Daily Revenue</span>
              </div>
              <div className="text-3xl font-black text-blue tracking-tighter">KSh 14,250</div>
              <div className="text-[11px] text-blue/70 mt-2 font-medium">28 transactions processed today</div>
           </Card>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
           <Card className="bg-white border-black/5 !p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                 <IconShieldCheck size={24} className="text-teal" />
                 <span className="text-[10px] font-bold text-text3 uppercase tracking-widest">SHA Claims</span>
              </div>
              <div className="text-3xl font-black text-text tracking-tighter">KSh 185,400</div>
              <div className="text-[11px] text-text3 mt-2 font-medium italic">Pending MOH verification cycle</div>
           </Card>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
           <Card className="bg-white border-black/5 !p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                 <IconReceipt size={24} className="text-amber" />
                 <span className="text-[10px] font-bold text-text3 uppercase tracking-widest">Refunds</span>
              </div>
              <div className="text-3xl font-black text-amber tracking-tighter">03</div>
              <div className="text-[11px] text-amber/70 mt-2 font-medium">Flagged for manual review</div>
           </Card>
         </motion.div>
      </div>

      <Card title="Recent Transactions" link="Financial Archive">
         <div className="divide-y divide-black/5 mt-4">
            {transactions.map((t, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="flex items-center gap-6 py-5 first:pt-0 last:pb-0 group"
               >
                  <div className="w-12 h-12 rounded-2xl bg-surface2 flex items-center justify-center text-text3 group-hover:bg-teal group-hover:text-white transition-all shadow-sm">
                     <IconReceipt size={22} stroke={1.5} />
                  </div>
                  <div className="flex-1">
                     <div className="flex justify-between items-center mb-1.5">
                        <div className="text-[15px] font-bold text-text group-hover:text-teal transition-colors">{t.patient}</div>
                        <div className="text-[15px] font-black text-text tracking-tight">{t.amount}</div>
                     </div>
                     <div className="flex items-center gap-4 text-[11px] text-text3 font-medium">
                        <span className="font-mono bg-surface2 px-1.5 py-0.5 rounded uppercase tracking-tighter text-[10px]">{t.id}</span>
                        <span className="opacity-30">•</span>
                        <span className="uppercase tracking-widest text-[9px] font-bold">{t.type}</span>
                        <span className="opacity-30">•</span>
                        <span className="italic font-editorial">{t.date}</span>
                     </div>
                  </div>
                  <div className="text-right shrink-0">
                     <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.1em] border ${
                       t.status === 'Completed' ? 'bg-green-light text-green border-green/10' : 
                       t.status === 'Pending' ? 'bg-amber-light text-amber border-amber/10' : 
                       'bg-red-light text-red border-red/10'
                     }`}>
                        {t.status}
                     </span>
                  </div>
               </motion.div>
            ))}
         </div>
      </Card>
    </motion.div>
  );
};

export default Payments;
