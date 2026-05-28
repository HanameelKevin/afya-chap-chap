import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconSend, IconUser, IconMessageCircle, IconClock } from '@tabler/icons-react';

const SupportMessages = () => {
  const messages = [
    { from: 'Nurse Wanjiku', text: 'Habari Aisha, I will be arriving in about 10 minutes. Please have your card ready.', time: '09:44 AM', unread: true },
    { from: 'System', text: 'Your ANC booking for Thursday 29 May has been confirmed.', time: 'Yesterday', unread: false },
    { from: 'Dr. Omolo', text: 'The lab results look stable, but keep taking the iron supplements.', time: '2 days ago', unread: false },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col space-y-6">
      <h1 className="text-xl font-bold text-text">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
         <Card className="lg:col-span-1 p-0 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-black/5 font-bold text-[14px]">Conversations</div>
            <div className="divide-y divide-black/5 overflow-y-auto">
               {messages.map((m, i) => (
                  <div key={i} className={`p-4 cursor-pointer hover:bg-surface2 transition-colors ${m.unread ? 'bg-blue/5' : ''}`}>
                     <div className="flex justify-between items-center mb-1">
                        <span className="text-[13px] font-bold">{m.from}</span>
                        <span className="text-[10px] text-text3">{m.time}</span>
                     </div>
                     <p className="text-[12px] text-text2 truncate">{m.text}</p>
                  </div>
               ))}
            </div>
         </Card>

         <Card className="lg:col-span-2 flex flex-col p-0 overflow-hidden bg-surface2/30">
            <div className="p-4 bg-white border-b border-black/5 flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-teal-light flex items-center justify-center text-teal font-bold text-xs">NW</div>
               <div>
                  <div className="text-[13px] font-bold">Nurse Wanjiku</div>
                  <div className="text-[10px] text-green font-medium flex items-center gap-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-green"></div> Online
                  </div>
               </div>
            </div>

            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
               <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] border border-black/5">
                     <p className="text-[13px]">Habari Aisha, I will be arriving in about 10 minutes. Please have your card ready.</p>
                     <div className="text-[10px] text-text3 mt-1">09:44 AM</div>
                  </div>
               </div>
               <div className="flex justify-end">
                  <div className="bg-blue text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                     <p className="text-[13px]">Asante Nurse. I am ready.</p>
                     <div className="text-[10px] text-white/70 mt-1">09:46 AM</div>
                  </div>
               </div>
            </div>

            <div className="p-4 bg-white border-t border-black/5">
               <div className="flex items-center gap-2 bg-surface2 rounded-full px-4 py-2 border border-black/5 focus-within:border-teal transition-all">
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="flex-1 bg-transparent outline-none text-[13px]"
                  />
                  <button className="text-teal hover:text-teal-dark transition-colors">
                     <IconSend size={20} />
                  </button>
               </div>
            </div>
         </Card>
      </div>
    </motion.div>
  );
};

export default SupportMessages;
