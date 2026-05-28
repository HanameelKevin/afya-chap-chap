import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconActivity, IconHeartRateMonitor, IconDroplet, IconThermometer } from '@tabler/icons-react';

const PatientVitals = () => {
  const vitalsHistory = [
    { date: '25 May', bp: '148/96', hb: '7.2', fhr: '142', temp: '36.8', weight: '68kg' },
    { date: '10 May', bp: '130/85', hb: '7.5', fhr: '138', temp: '36.5', weight: '66kg' },
    { date: '12 Apr', bp: '122/80', hb: '8.1', fhr: '140', temp: '36.7', weight: '64kg' },
    { date: '15 Mar', bp: '118/75', hb: '11.2', fhr: '145', temp: '36.6', weight: '62kg' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-bold text-text">My vitals history</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         <Card className="bg-red-light border-red/10">
            <div className="flex items-center gap-2 text-red mb-2">
               <IconActivity size={18} />
               <span className="text-[11px] font-bold uppercase">Blood Pressure</span>
            </div>
            <div className="text-2xl font-bold text-red">148/96</div>
            <div className="text-[10px] text-red/70 mt-1">Status: Elevated</div>
         </Card>
         <Card className="bg-amber-light border-amber/10">
            <div className="flex items-center gap-2 text-amber mb-2">
               <IconDroplet size={18} />
               <span className="text-[11px] font-bold uppercase">Haemoglobin</span>
            </div>
            <div className="text-2xl font-bold text-amber">7.2</div>
            <div className="text-[10px] text-amber/70 mt-1">Status: Low (Anemic)</div>
         </Card>
         <Card className="bg-green-light border-green/10">
            <div className="flex items-center gap-2 text-green mb-2">
               <IconHeartRateMonitor size={18} />
               <span className="text-[11px] font-bold uppercase">Fetal Heart Rate</span>
            </div>
            <div className="text-2xl font-bold text-green">142</div>
            <div className="text-[10px] text-green/70 mt-1">Status: Normal</div>
         </Card>
         <Card className="bg-blue-light border-blue/10">
            <div className="flex items-center gap-2 text-blue mb-2">
               <IconThermometer size={18} />
               <span className="text-[11px] font-bold uppercase">Temperature</span>
            </div>
            <div className="text-2xl font-bold text-blue">36.8°C</div>
            <div className="text-[10px] text-blue/70 mt-1">Status: Normal</div>
         </Card>
      </div>

      <Card title="Historical Trends">
         <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
               <thead>
                  <tr className="border-b border-black/5 text-text3 font-medium">
                     <th className="py-3">Date</th>
                     <th className="py-3">BP</th>
                     <th className="py-3">Hb (g/dL)</th>
                     <th className="py-3">FHR (bpm)</th>
                     <th className="py-3">Weight</th>
                     <th className="py-3">Temp</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-black/5">
                  {vitalsHistory.map((v, i) => (
                    <tr key={i} className="text-text2 hover:bg-surface2/50 transition-colors">
                       <td className="py-3 font-medium text-text">{v.date}</td>
                       <td className={`py-3 ${i === 0 ? 'text-red font-bold' : ''}`}>{v.bp}</td>
                       <td className={`py-3 ${v.hb < 8 ? 'text-amber font-bold' : ''}`}>{v.hb}</td>
                       <td className="py-3">{v.fhr}</td>
                       <td className="py-3">{v.weight}</td>
                       <td className="py-3">{v.temp}</td>
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
