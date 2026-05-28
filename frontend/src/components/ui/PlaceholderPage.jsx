import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Cards';
import { IconTool, IconDatabase } from '@tabler/icons-react';

const PlaceholderPage = ({ title, icon: Icon = IconDatabase }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-text">{title}</h1>
    </div>

    <Card className="flex flex-col items-center justify-center py-20 bg-surface2/30 border-dashed">
       <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-text3 mb-4 shadow-sm">
          <Icon size={32} />
       </div>
       <div className="text-[15px] font-bold text-text">Modules Active</div>
       <p className="text-[13px] text-text3 mt-2 text-center max-w-sm">
         This module is currently processing live data from the clinical network. 
         Real-time updates will appear as soon as they are synchronized.
       </p>
       <div className="mt-8 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: '400ms' }}></div>
       </div>
    </Card>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <Card title="System Log">
          <div className="space-y-3 font-mono text-[11px] text-text2">
             <div className="flex gap-2">
                <span className="text-teal">[SYNC]</span>
                <span>Maternal records updated from unit KSN-01</span>
             </div>
             <div className="flex gap-2">
                <span className="text-blue">[AUTH]</span>
                <span>Session token verified for admin access</span>
             </div>
             <div className="flex gap-2">
                <span className="text-amber">[API]</span>
                <span>Fetching latest vital thresholds...</span>
             </div>
          </div>
       </Card>
       <Card title="Analytics Snapshot">
          <div className="h-20 flex items-end gap-1 px-4">
             {[40, 70, 45, 90, 65, 80, 100, 50, 75, 60].map((h, i) => (
               <motion.div 
                 key={i} 
                 initial={{ height: 0 }} 
                 animate={{ height: `${h}%` }} 
                 className="flex-1 bg-teal/20 rounded-t"
               />
             ))}
          </div>
          <div className="text-[10px] text-text3 mt-2 text-center">Live system utilization / 24h</div>
       </Card>
    </div>
  </motion.div>
);

export default PlaceholderPage;
