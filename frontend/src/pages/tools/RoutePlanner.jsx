import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { routes } from '../../mockData';
import { IconMapPin, IconRoute, IconAmbulance, IconClock, IconTrafficLights, IconCompass } from '@tabler/icons-react';

const RoutePlanner = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Clinical Logistics</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Optimized route planning for frontline maternal care</p>
        </div>
        <button className="px-6 py-2.5 bg-teal text-white rounded-xl text-[13px] font-bold shadow-lg shadow-teal/20 hover:bg-teal-dark transition-all active:scale-95 flex items-center gap-2">
           <IconCompass size={18} /> Recalculate Optimal Paths
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[550px]">
         <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-[#EBF5FB] rounded-3xl relative overflow-hidden border border-blue/10 flex items-center justify-center shadow-inner"
         >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            {/* Conceptual Map Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-60">
               <motion.path 
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
                 d="M 100 150 Q 250 50 400 250 T 600 150" 
                 fill="none" 
                 stroke="#0F6E56" 
                 strokeWidth="4" 
                 strokeDasharray="12,12" 
               />
               <circle cx="100" cy="150" r="8" fill="#185FA5" className="animate-pulse" />
               <circle cx="600" cy="150" r="8" fill="#0F6E56" />
            </svg>
            <div className="bg-white/95 p-5 rounded-2xl shadow-2xl border border-black/5 absolute bottom-8 right-8 max-w-[240px]">
               <div className="text-[11px] font-bold text-text2 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <IconAmbulance size={18} className="text-teal" /> Dispatch Unit: KSN-01
               </div>
               <div className="space-y-2">
                  <div className="text-[14px] font-bold text-text">Heading to Sector A</div>
                  <div className="text-[12px] text-text3 italic font-editorial">"Priority visit: Aisha Wanjiku (Home Care Protocol)"</div>
               </div>
            </div>
         </motion.div>

         <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            <h2 className="text-[12px] font-bold text-text3 uppercase tracking-[0.2em]">Deployment Suggestions</h2>
            {routes.map((r, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
               >
                 <Card className="hover:shadow-xl hover:shadow-black/5 transition-all group cursor-pointer border-l-4 border-l-blue relative overflow-hidden !p-6">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <div className="text-[16px] font-bold text-text group-hover:text-blue transition-colors">{r.name}</div>
                          <div className="text-[11px] text-text3 mt-1 font-medium">Next stop: St. Jude's Outpost</div>
                       </div>
                       <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest ${r.status === 'Clear' ? 'bg-green-light text-green border border-green/10' : 'bg-amber-light text-amber border border-amber/10'}`}>
                          {r.status}
                       </span>
                    </div>
                    <div className="flex items-center gap-6 text-[12px] text-text3 font-medium">
                       <span className="flex items-center gap-2 bg-surface2 px-2 py-1 rounded-lg"><IconRoute size={16} className="opacity-60" /> {r.distance}</span>
                       <span className="flex items-center gap-2 bg-surface2 px-2 py-1 rounded-lg"><IconClock size={16} className="opacity-60" /> {r.time}</span>
                       <span className="flex items-center gap-2 bg-surface2 px-2 py-1 rounded-lg"><IconTrafficLights size={16} className="opacity-60" /> {r.stops} stops</span>
                    </div>
                 </Card>
               </motion.div>
            ))}
         </div>
      </div>
    </motion.div>
  );
};

export default RoutePlanner;
