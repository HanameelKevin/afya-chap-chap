import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconChartBar, IconDownload, IconFileText, IconTrendingUp, IconUsers, IconArchive } from '@tabler/icons-react';

const Reports = () => {
  const reports = [
    { title: 'Monthly Maternal Mortality Rate', period: 'May 2026', status: 'Generated', type: 'MOH Form 711' },
    { title: 'ANC Attendance Summary', period: 'Q2 2026', status: 'Draft', type: 'Internal' },
    { title: 'Immunization Coverage', period: 'May 2026', status: 'Generated', type: 'MOH Form 705' },
    { title: 'Risk Patient Escalations', period: 'May 2026', status: 'Generated', type: 'Safety Audit' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Ministry Reports</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Compliance monitoring and epidemiological data</p>
        </div>
        <button className="px-6 py-2.5 bg-teal text-white rounded-xl text-[13px] font-bold shadow-lg shadow-teal/20 hover:bg-teal-dark transition-all active:scale-95 flex items-center gap-2">
           <IconTrendingUp size={18} /> Compile New Submission
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Avg Attendance', val: '88%', trend: '+4%', color: 'green' },
           { label: 'Critical Cases', val: '12', trend: '-2', color: 'red' },
           { label: 'Active Clinics', val: '4', trend: 'Stable', color: 'blue' },
           { label: 'Data Quality', val: '99%', trend: '+0.5%', color: 'teal' },
         ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="!p-5 border-black/5 shadow-sm">
                 <div className="text-[10px] font-bold text-text3 uppercase tracking-[0.15em] mb-2">{stat.label}</div>
                 <div className="text-2xl font-black text-text tracking-tighter">{stat.val}</div>
                 <div className={`text-[10px] font-bold mt-2 inline-flex items-center px-2 py-0.5 rounded-full ${
                   stat.color === 'green' ? 'bg-green-light text-green' : 
                   stat.color === 'red' ? 'bg-red-light text-red' : 
                   stat.color === 'blue' ? 'bg-blue-light text-blue' : 'bg-teal-light text-teal'
                 }`}>
                   {stat.trend}
                 </div>
              </Card>
            </motion.div>
         ))}
      </div>

      <Card className="!p-0 overflow-hidden border-black/5">
         <div className="px-6 py-4 border-b border-black/5 bg-surface2/30 flex items-center gap-2 text-[12px] font-bold text-text3 uppercase tracking-widest">
            <IconArchive size={16} /> Official Compliance Filings
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px]">
               <thead>
                  <tr className="border-b border-black/5 text-text3 font-bold uppercase text-[10px] tracking-widest bg-white">
                     <th className="py-4 px-6">Official Report Title</th>
                     <th className="py-4 px-6">Classification</th>
                     <th className="py-4 px-6">Clinical Period</th>
                     <th className="py-4 px-6">MoH Status</th>
                     <th className="py-4 px-6 text-right">Repository</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-black/5 bg-white">
                  {reports.map((r, i) => (
                    <tr key={i} className="text-text2 hover:bg-surface2/50 transition-colors group">
                       <td className="py-5 px-6 font-bold text-text">{r.title}</td>
                       <td className="py-5 px-6"><span className="bg-surface2 border border-black/5 px-3 py-1 rounded-full text-[10px] font-bold text-text3 uppercase tracking-wider">{r.type}</span></td>
                       <td className="py-5 px-6 font-medium text-text3">{r.period}</td>
                       <td className="py-5 px-6">
                          <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-tighter ${r.status === 'Generated' ? 'text-green' : 'text-amber'}`}>
                             <div className={`w-1.5 h-1.5 rounded-full ${r.status === 'Generated' ? 'bg-green' : 'bg-amber'}`}></div>
                             {r.status}
                          </span>
                       </td>
                       <td className="py-5 px-6 text-right">
                          <button className="p-2.5 bg-white border border-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-teal hover:text-white hover:border-teal text-text shadow-sm">
                             <IconDownload size={18} />
                          </button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </Card>
    </motion.div>
  );
};

export default Reports;
