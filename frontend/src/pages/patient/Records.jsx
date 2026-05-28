import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconDownload, IconFileText, IconCalendar, IconUser, IconBuildingHospital } from '@tabler/icons-react';

const PatientRecords = () => {
  const records = [
    { date: '25 May 2026', title: 'Routine ANC Checkup', clinic: 'Kisumu North', doctor: 'Dr. Omolo', type: 'Clinical Note' },
    { date: '10 May 2026', title: 'Ultrasound Report', clinic: 'Main Hospital', doctor: 'Dr. Sarah', type: 'Imaging' },
    { date: '12 Apr 2026', title: 'Lab Results — Hb', clinic: 'Kisumu North', doctor: 'Lab Tech', type: 'Lab Report' },
    { date: '15 Mar 2026', title: 'Initial Registration', clinic: 'Machakos Rural', doctor: 'Admin', type: 'Form' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">My medical records</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-light text-blue rounded-lg font-semibold text-xs hover:bg-blue-mid hover:text-white transition-all">
          <IconDownload size={16} /> Download All (PDF)
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {records.map((r, i) => (
          <Card key={i} className="hover:border-blue/30 transition-colors group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-colors">
                <IconFileText size={20} />
              </div>
              <div className="flex-1">
                <div className="text-[14px] font-bold text-text">{r.title}</div>
                <div className="flex items-center gap-3 mt-1 text-[11px] text-text3">
                  <span className="flex items-center gap-1"><IconCalendar size={12} /> {r.date}</span>
                  <span className="flex items-center gap-1"><IconBuildingHospital size={12} /> {r.clinic}</span>
                  <span className="flex items-center gap-1"><IconUser size={12} /> {r.doctor}</span>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="px-2 py-1 bg-surface2 text-text2 text-[10px] font-bold rounded uppercase tracking-wider">{r.type}</span>
              </div>
              <IconDownload size={18} className="text-text3 group-hover:text-blue transition-colors" />
            </div>
          </Card>
        ))}
      </div>

      <Card title="Insurance Info (SHA)" className="bg-blue/5 border-blue/10">
         <div className="flex items-center justify-between">
            <div>
               <div className="text-[13px] font-bold text-blue">Status: Active</div>
               <div className="text-[11px] text-blue/70">Social Health Authority coverage verified for 2026</div>
            </div>
            <div className="text-right">
               <div className="text-[13px] font-bold text-blue">ID: SHA-2026-X892</div>
            </div>
         </div>
      </Card>
    </motion.div>
  );
};

export default PatientRecords;
