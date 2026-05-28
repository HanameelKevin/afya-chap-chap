import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconCreditCard, IconReceipt, IconWallet, IconArrowUpRight, IconPlus } from '@tabler/icons-react';

const Payments = () => {
  const transactions = [
    { id: 'TXN-9021', patient: 'Aisha Wanjiku', amount: 'KSh 50', status: 'Completed', type: 'SHA Co-pay', date: 'Today, 09:40 AM' },
    { id: 'TXN-9019', patient: 'Mary Otieno', amount: 'KSh 50', status: 'Completed', type: 'SHA Co-pay', date: 'Today, 08:30 AM' },
    { id: 'TXN-9001', patient: 'Grace Njeri', amount: 'KSh 200', status: 'Pending', type: 'Emergency Transport', date: 'Yesterday' },
    { id: 'TXN-8995', patient: 'Fatuma Mwangi', amount: 'KSh 50', status: 'Refunded', type: 'Lab Fee', date: '2 days ago' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Payment Ledger</h1>
        <button className="px-4 py-2 bg-teal text-white rounded-lg text-[13px] font-bold hover:bg-teal-dark transition-all flex items-center gap-2">
           <IconPlus size={18} /> Log Manual Payment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <Card className="bg-blue-light border-blue/10">
            <div className="flex items-center justify-between mb-2">
               <IconWallet size={20} className="text-blue" />
               <span className="text-[10px] font-bold text-blue uppercase">Daily Revenue</span>
            </div>
            <div className="text-2xl font-bold text-blue">KSh 14,250</div>
            <div className="text-[10px] text-blue/70 mt-1">28 transactions processed</div>
         </Card>
         <Card>
            <div className="text-[11px] font-bold text-text3 uppercase mb-2">SHA Claims Pending</div>
            <div className="text-2xl font-bold text-text">KSh 185,400</div>
            <div className="text-[10px] text-text3 mt-1">Syncing with MOH every 24h</div>
         </Card>
         <Card>
            <div className="text-[11px] font-bold text-text3 uppercase mb-2">Refund Requests</div>
            <div className="text-2xl font-bold text-amber">3</div>
            <div className="text-[10px] text-amber/70 mt-1">Awaiting approval</div>
         </Card>
      </div>

      <Card title="Recent Transactions">
         <div className="divide-y divide-black/5">
            {transactions.map((t, i) => (
               <div key={i} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 group">
                  <div className="w-10 h-10 rounded-lg bg-surface2 flex items-center justify-center text-text3">
                     <IconReceipt size={20} />
                  </div>
                  <div className="flex-1">
                     <div className="flex justify-between items-center mb-1">
                        <div className="text-[13px] font-bold text-text">{t.patient}</div>
                        <div className="text-[13px] font-bold text-text">{t.amount}</div>
                     </div>
                     <div className="flex items-center gap-3 text-[11px] text-text3">
                        <span className="font-mono">{t.id}</span>
                        <span>•</span>
                        <span>{t.type}</span>
                        <span>•</span>
                        <span>{t.date}</span>
                     </div>
                  </div>
                  <div className="text-right">
                     <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${t.status === 'Completed' ? 'bg-green-light text-green' : t.status === 'Pending' ? 'bg-amber-light text-amber' : 'bg-red-light text-red'}`}>
                        {t.status}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </Card>
    </motion.div>
  );
};

export default Payments;
