import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconChartBar, IconDownload, IconFileText, IconTrendingUp, IconUsers } from '@tabler/icons-react';

const Reports = () => {
  const reports = [
    { title: 'Monthly Maternal Mortality Rate', period: 'May 2026', status: 'Generated', type: 'MOH Form 711' },
    { title: 'ANC Attendance Summary', period: 'Q2 2026', status: 'Draft', type: 'Internal' },
    { title: 'Immunization Coverage', period: 'May 2026', status: 'Generated', type: 'MOH Form 705' },
    { title: 'Risk Patient Escalations', period: 'May 2026', status: 'Generated', type: 'Safety Audit' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">MOH Reports</h1>
        <button className="px-4 py-2 bg-teal text-white rounded-lg text-[13px] font-bold hover:bg-teal-dark transition-all flex items-center gap-2">
           <IconTrendingUp size={18} /> Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { label: 'Avg Attendance', val: '88%', trend: '+4%', color: 'green' },
           { label: 'Critical Cases', val: '12', trend: '-2', color: 'red' },
           { label: 'Active Clinics', val: '4', trend: 'Stable', color: 'blue' },
           { label: 'Data Quality', val: '99%', trend: '+0.5%', color: 'teal' },
         ].map((stat, i) => (
            <Card key={i} className="p-4">
               <div className="text-[11px] font-bold text-text3 uppercase tracking-wider mb-1">{stat.label}</div>
               <div className="text-xl font-bold text-text">{stat.val}</div>
               <div className={`text-[10px] font-bold mt-1 text-${stat.color}`}>{stat.trend}</div>
            </Card>
         ))}
      </div>

      <Card title="Compliance Filings">
         <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
               <thead>
                  <tr className="border-b border-black/5 text-text3 font-medium">
                     <th className="py-3">Report Name</th>
                     <th className="py-3">Type</th>
                     <th className="py-3">Period</th>
                     <th className="py-3">Status</th>
                     <th className="py-3 text-right">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-black/5">
                  {reports.map((r, i) => (
                    <tr key={i} className="text-text2 hover:bg-surface2/50 transition-colors group">
                       <td className="py-4 font-bold text-text">{r.title}</td>
                       <td className="py-4"><span className="bg-surface2 px-2 py-0.5 rounded text-[10px] font-bold">{r.type}</span></td>
                       <td className="py-4">{r.period}</td>
                       <td className="py-4">
                          <span className={`text-[11px] font-medium ${r.status === 'Generated' ? 'text-green' : 'text-amber'}`}>
                             {r.status}
                          </span>
                       </td>
                       <td className="py-4 text-right">
                          <button className="p-2 bg-surface2 rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-black/5 text-text">
                             <IconDownload size={16} />
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
