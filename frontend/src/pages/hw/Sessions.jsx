import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { sessions } from '../../mockData';
import { 
  IconPlus, 
  IconClock, 
  IconMapPin, 
  IconDotsVertical,
  IconChevronRight
} from '@tabler/icons-react';

const HWSessions = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Session Management</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Organize clinic sessions and community outreach</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-teal text-white rounded-xl font-bold text-[13px] shadow-lg shadow-teal/20 hover:bg-teal-dark transition-all active:scale-95">
          <IconPlus size={18} /> Plan New Session
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {sessions.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="hover:border-teal/20 transition-all group relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${s.dot} shadow-sm ${s.sub.includes('Active') ? 'animate-pulse' : ''}`} />
                    <div className="text-[18px] font-bold text-text group-hover:text-teal transition-colors">{s.name}</div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-[0.1em] border ${s.sub.includes('Active') ? 'bg-green-light text-green border-green/10' : 'bg-surface2 text-text3 border-black/5'}`}>
                      {s.sub.includes('Active') ? 'Live Now' : s.sub.includes('Completed') ? 'Archived' : 'Upcoming'}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 mt-3 text-[13px] text-text3 font-medium">
                    <span className="flex items-center gap-2"><IconClock size={16} className="opacity-50" /> {s.time}</span>
                    <span className="flex items-center gap-2"><IconMapPin size={16} className="opacity-50" /> {s.name.includes('North') ? 'Market Center' : s.name.includes('East') ? 'Community Hall' : 'Regional HQ'}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-10 md:border-l md:pl-10 border-black/5">
                  <div className="text-center">
                     <div className="text-2xl font-bold text-text tracking-tight">{s.patients}</div>
                     <div className="text-[10px] text-text3 uppercase font-bold tracking-widest mt-1">Booked</div>
                  </div>
                  <div className="text-center">
                     <div className="text-2xl font-bold text-teal tracking-tight">{s.checkins}</div>
                     <div className="text-[10px] text-teal/70 uppercase font-bold tracking-widest mt-1">Present</div>
                  </div>
                  <button className="p-3 hover:bg-surface2 rounded-xl transition-all text-text3 group-hover:text-text active:scale-90">
                    <IconDotsVertical size={20} />
                  </button>
                </div>
              </div>
              
              {s.sub.includes('Active') && (
                <div className="mt-6 pt-6 border-t border-black/5">
                   <div className="flex justify-between items-center mb-3">
                      <span className="text-[11px] font-bold text-text2 uppercase tracking-widest flex items-center gap-2">
                        Real-time Attendance
                      </span>
                      <span className="text-[13px] font-black text-teal">{Math.round((s.checkins/s.patients)*100)}% Capacity</span>
                   </div>
                   <div className="h-2 bg-surface2 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(s.checkins/s.patients)*100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-teal shadow-[0_0_10px_rgba(15,110,86,0.3)]"
                      />
                   </div>
                </div>
              )}

              <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300">
                <IconChevronRight size={24} className="text-teal" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HWSessions;
