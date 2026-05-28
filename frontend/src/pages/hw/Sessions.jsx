import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { 
  IconCalendarEvent, 
  IconPlus, 
  IconUsers, 
  IconClock, 
  IconMapPin, 
  IconCheck,
  IconDotsVertical
} from '@tabler/icons-react';

const HWSessions = () => {
  const sessions = [
    { name: 'Kisumu North Mobile Unit', time: '10:00 AM - 2:00 PM', status: 'Active', patients: 18, checkedIn: 14, location: 'Market Center' },
    { name: 'Kakamega East Outreach', time: '3:00 PM - 6:00 PM', status: 'Scheduled', patients: 11, checkedIn: 0, location: 'St. Mary\'s Hall' },
    { name: 'Machakos Rural Clinic', time: 'Tomorrow 9:00 AM', status: 'Planned', patients: 9, checkedIn: 0, location: 'Village Plaza' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Session Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-teal text-white rounded-lg font-semibold text-xs hover:bg-teal-dark transition-all">
          <IconPlus size={16} /> New Session
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sessions.map((s, i) => (
          <Card key={i} className="hover:border-teal/20 transition-all group">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${s.status === 'Active' ? 'bg-green animate-pulse' : s.status === 'Scheduled' ? 'bg-amber' : 'bg-text3'}`} />
                  <div className="text-[15px] font-bold text-text">{s.name}</div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${s.status === 'Active' ? 'bg-green-light text-green' : 'bg-surface2 text-text2'}`}>
                    {s.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-[12px] text-text2">
                  <span className="flex items-center gap-1"><IconClock size={14} className="text-text3" /> {s.time}</span>
                  <span className="flex items-center gap-1"><IconMapPin size={14} className="text-text3" /> {s.location}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8 md:border-l md:pl-8 border-black/5">
                <div className="text-center">
                   <div className="text-lg font-bold text-text">{s.patients}</div>
                   <div className="text-[10px] text-text3 uppercase font-medium">Booked</div>
                </div>
                <div className="text-center">
                   <div className="text-lg font-bold text-teal">{s.checkedIn}</div>
                   <div className="text-[10px] text-teal-dark uppercase font-medium">Checked In</div>
                </div>
                <button className="p-2 hover:bg-surface2 rounded-lg transition-colors">
                  <IconDotsVertical size={18} className="text-text3" />
                </button>
              </div>
            </div>
            
            {s.status === 'Active' && (
              <div className="mt-4 pt-4 border-t border-black/5">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold text-text2 uppercase">Progress</span>
                    <span className="text-[11px] font-bold text-teal">{Math.round((s.checkedIn/s.patients)*100)}%</span>
                 </div>
                 <div className="h-1.5 bg-surface2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(s.checkedIn/s.patients)*100}%` }}
                      className="h-full bg-teal"
                    />
                 </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default HWSessions;
