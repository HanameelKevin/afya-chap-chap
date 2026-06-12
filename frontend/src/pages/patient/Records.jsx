import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { records } from '../../mockData';
import { IconDownload, IconFileText, IconCalendar, IconUser, IconBuildingHospital, IconChevronRight } from '@tabler/icons-react';

const PatientRecords = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Medical Records</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Access your clinical history and diagnostic reports</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue text-white rounded-xl font-bold text-[13px] shadow-lg shadow-blue/20 hover:bg-[#0C447C] transition-all active:scale-95">
          <IconDownload size={18} /> Export Archive (PDF)
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {records.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="hover:border-blue/30 hover:shadow-xl hover:shadow-black/5 transition-all group cursor-pointer relative overflow-hidden">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-all shadow-sm">
                  <IconFileText size={24} stroke={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-[16px] font-bold text-text group-hover:text-blue transition-colors">{r.type === 'Clinical Checkup' ? 'Routine ANC Checkup' : r.type}</div>
                  <div className="flex items-center gap-6 mt-2 text-[12px] text-text3 font-medium">
                    <span className="flex items-center gap-1.5"><IconCalendar size={14} className="opacity-60" /> {r.date}</span>
                    <span className="flex items-center gap-1.5"><IconBuildingHospital size={14} className="opacity-60" /> {r.location}</span>
                    <span className="flex items-center gap-1.5"><IconUser size={14} className="opacity-60" /> {r.doctor}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="px-3 py-1 bg-surface2 text-text2 text-[10px] font-bold rounded-full uppercase tracking-wider border border-black/5">{r.status}</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 text-text3 hover:text-blue hover:bg-blue-light rounded-lg transition-all">
                    <IconDownload size={20} />
                  </button>
                  <IconChevronRight size={20} className="text-text3 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-blue/5 to-transparent border-blue/10 !p-8">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-2 shadow-sm">
                  Active Coverage
               </div>
               <div className="text-2xl journal-title text-text">Social Health Authority (SHA)</div>
               <p className="text-[14px] text-text3 font-editorial italic">"Your maternal health benefits are fully verified for the 2026 clinical cycle."</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue/10 shadow-sm text-right min-w-[200px]">
               <div className="text-[11px] font-bold text-text3 uppercase tracking-widest mb-1">Registry ID</div>
               <div className="text-lg font-mono font-bold text-blue tracking-tighter">SHA-2026-X892</div>
               <div className="mt-4 pt-4 border-t border-black/5 text-[11px] text-text3">
                 Last verified: Today, 08:00 AM
               </div>
            </div>
         </div>
      </Card>
    </motion.div>
  );
};

export default PatientRecords;
