import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconMapPin, IconRoute, IconAmbulance, IconClock, IconTrafficLights } from '@tabler/icons-react';

const RoutePlanner = () => {
  const routes = [
    { name: 'Kisumu North — Sector A', distance: '12.4 km', time: '18 min', stops: 4, status: 'Clear' },
    { name: 'Kisumu North — Sector B', distance: '8.2 km', time: '12 min', stops: 2, status: 'Moderate Traffic' },
    { name: 'Emergency Link — Machakos', distance: '45.1 km', time: '35 min', stops: 1, status: 'Fastest' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Route Planner</h1>
        <button className="px-4 py-2 bg-teal text-white rounded-lg text-[13px] font-bold hover:bg-teal-dark transition-all">Optimize Routes</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]">
         <div className="bg-[#D6EAF5] rounded-xl relative overflow-hidden border border-black/5 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            {/* Conceptual Map Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-40">
               <path d="M 50 100 L 200 150 L 350 120 L 500 200" fill="none" stroke="#0F6E56" strokeWidth="4" strokeDasharray="8,8" />
               <circle cx="50" cy="100" r="6" fill="#185FA5" />
               <circle cx="500" cy="200" r="6" fill="#0F6E56" />
            </svg>
            <div className="bg-white/90 p-4 rounded-xl shadow-lg border border-black/5 absolute bottom-6 right-6">
               <div className="text-[12px] font-bold text-text mb-1 flex items-center gap-2">
                  <IconAmbulance size={16} className="text-teal" /> Active Unit: KSN-01
               </div>
               <div className="text-[10px] text-text3">Heading to: Aisha Wanjiku (Home)</div>
            </div>
         </div>

         <div className="space-y-4 overflow-y-auto">
            <h2 className="text-[14px] font-semibold text-text2">Optimized Suggestions</h2>
            {routes.map((r, i) => (
               <Card key={i} className="hover:bg-bg transition-colors cursor-pointer border-l-4 border-l-blue">
                  <div className="flex justify-between items-start mb-2">
                     <div className="text-[13px] font-bold text-text">{r.name}</div>
                     <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.status === 'Clear' ? 'bg-green-light text-green' : 'bg-amber-light text-amber'}`}>
                        {r.status}
                     </span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] text-text3">
                     <span className="flex items-center gap-1"><IconRoute size={14} /> {r.distance}</span>
                     <span className="flex items-center gap-1"><IconClock size={14} /> {r.time}</span>
                     <span className="flex items-center gap-1"><IconTrafficLights size={14} /> {r.stops} stops</span>
                  </div>
               </Card>
            ))}
         </div>
      </div>
    </motion.div>
  );
};

export default RoutePlanner;
