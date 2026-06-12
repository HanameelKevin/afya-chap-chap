import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { vitalsHistory } from '../../mockData';
import { IconActivity, IconHeartRateMonitor, IconDroplet, IconThermometer, IconTrendingUp } from '@tabler/icons-react';

const PatientVitals = () => {
  const latestVitals = vitalsHistory[0];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Vital Sign Tracking</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Monitor your clinical biometric trends</p>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold text-text3 bg-surface2 px-3 py-1 rounded-full uppercase tracking-wider">
           Last updated: {latestVitals.date}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
           <Card className="bg-[#FFF8F8] border-red/10 !p-6">
              <div className="flex items-center gap-2 text-red/60 mb-3">
                 <IconActivity size={20} stroke={2} />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Blood Pressure</span>
              </div>
              <div className="text-3xl font-black text-red tracking-tighter">{latestVitals.bp}</div>
              <div className="mt-4 pt-4 border-t border-red/5">
                 <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red text-white rounded-full text-[9px] font-bold uppercase">Critical Elevation</span>
              </div>
           </Card>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
           <Card className="bg-[#FFFBF2] border-amber/10 !p-6">
              <div className="flex items-center gap-2 text-amber/60 mb-3">
                 <IconDroplet size={20} stroke={2} />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Haemoglobin</span>
              </div>
              <div className="text-3xl font-black text-amber tracking-tighter">{latestVitals.hb} <span className="text-[14px] font-bold opacity-40">g/dL</span></div>
              <div className="mt-4 pt-4 border-t border-amber/5">
                 <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber text-white rounded-full text-[9px] font-bold uppercase">Moderate Anemia</span>
              </div>
           </Card>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
           <Card className="bg-[#F6FBF8] border-green/10 !p-6">
              <div className="flex items-center gap-2 text-green/60 mb-3">
                 <IconHeartRateMonitor size={20} stroke={2} />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Fetal Heart Rate</span>
              </div>
              <div className="text-3xl font-black text-green tracking-tighter">{latestVitals.fhr} <span className="text-[14px] font-bold opacity-40">bpm</span></div>
              <div className="mt-4 pt-4 border-t border-green/5">
                 <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green text-white rounded-full text-[9px] font-bold uppercase">Normal Range</span>
              </div>
           </Card>
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
           <Card className="bg-[#F5F8FB] border-blue/10 !p-6">
              <div className="flex items-center gap-2 text-blue/60 mb-3">
                 <IconThermometer size={20} stroke={2} />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Temperature</span>
              </div>
              <div className="text-3xl font-black text-blue tracking-tighter">{latestVitals.temp} <span className="text-[14px] font-bold opacity-40">°C</span></div>
              <div className="mt-4 pt-4 border-t border-blue/5">
                 <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue text-white rounded-full text-[9px] font-bold uppercase">Stable</span>
              </div>
           </Card>
         </motion.div>
      </div>

      <Card title="Clinical Trend Analysis">
         <div className="overflow-x-auto mt-2">
            <table className="w-full text-left text-[14px]">
               <thead>
                  <tr className="border-b border-black/5 text-text3 font-bold uppercase text-[10px] tracking-widest">
                     <th className="py-4 px-2">Diagnostic Date</th>
                     <th className="py-4 px-2">BP Status</th>
                     <th className="py-4 px-2">Hb Levels</th>
                     <th className="py-4 px-2">FHR (Fetal)</th>
                     <th className="py-4 px-2">Maternal Weight</th>
                     <th className="py-4 px-2 text-right">Trend</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-black/5">
                  {vitalsHistory.map((v, i) => (
                    <tr key={i} className="text-text2 hover:bg-surface2/30 transition-colors group">
                       <td className="py-5 px-2 font-bold text-text">{v.date} 2026</td>
                       <td className={`py-5 px-2 ${i === 0 ? 'text-red font-black' : 'font-medium'}`}>{v.bp}</td>
                       <td className={`py-5 px-2 ${v.hb < 8 ? 'text-amber font-black' : 'font-medium'}`}>{v.hb} g/dL</td>
                       <td className="py-5 px-2 font-medium">{v.fhr} bpm</td>
                       <td className="py-5 px-2 font-medium">{v.weight}</td>
                       <td className="py-5 px-2 text-right">
                          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${i === 0 ? 'bg-red-light text-red' : 'bg-green-light text-green'} opacity-0 group-hover:opacity-100 transition-all`}>
                             <IconTrendingUp size={18} className={i === 0 ? 'rotate-0' : '-rotate-45'} />
                          </div>
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

export default PatientVitals;
