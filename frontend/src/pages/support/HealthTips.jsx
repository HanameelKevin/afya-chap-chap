import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import AICard from '../../components/ui/AICard';
import { tips } from '../../mockData';
import { IconSalad, IconZzz, IconActivity, IconStethoscope, IconQuote } from '@tabler/icons-react';

const SupportHealthTips = () => {
  const iconMap = {
    'Nutrition': IconSalad,
    'Rest': IconZzz,
    'Monitoring': IconActivity,
    'Clinical': IconStethoscope
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="border-b border-black/5 pb-6">
        <h1 className="text-3xl journal-title text-text">Clinical Guidance</h1>
        <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Personalized maternal wellness and health insights</p>
      </div>

      <AICard 
        title="AI Health Mentor" 
        body="Your recent BP of 148/96 indicates a need for immediate rest and sodium reduction. We've prioritized 'Rest' and 'Nutrition' tips for you today."
        action="Speak with AI Mentor"
        color="blue"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
         {tips.map((t, i) => {
            const Icon = iconMap[t.title] || IconActivity;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="flex gap-5 items-start h-full hover:shadow-lg transition-all border-black/5">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                     t.color === 'green' ? 'bg-green-light text-green' : 
                     t.color === 'blue' ? 'bg-blue-light text-blue' : 
                     t.color === 'amber' ? 'bg-amber-light text-amber' : 'bg-teal-light text-teal'
                   }`}>
                      <Icon size={28} stroke={1.5} />
                   </div>
                   <div>
                      <div className="text-[16px] font-bold text-text mb-1.5">{t.title}</div>
                      <p className="text-[14px] text-text2 leading-relaxed font-editorial italic opacity-80">"{t.text}"</p>
                   </div>
                </Card>
              </motion.div>
            );
         })}
      </div>

      <div className="relative pt-8">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
         <div className="flex items-center gap-2 text-[11px] font-bold text-text3 uppercase tracking-[0.2em] mb-6">
            <IconQuote size={16} className="text-teal opacity-40" /> Voice of the Community
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative pl-8 border-l-2 border-teal/10">
               <p className="text-[15px] text-text2 font-editorial italic leading-relaxed">
                  "Ginger and lemon tea in the morning became my ritual. It brought so much calm during the first trimester's nausea."
               </p>
               <div className="text-[11px] text-text3 mt-3 font-bold uppercase tracking-wider">— Mary W., Kisumu Hub</div>
            </div>
            <div className="relative pl-8 border-l-2 border-blue/10">
               <p className="text-[15px] text-text2 font-editorial italic leading-relaxed">
                  "Gentle evening walks by the lake helped manage the swelling. Movement is medicine when done with care."
               </p>
               <div className="text-[11px] text-text3 mt-3 font-bold uppercase tracking-wider">— Grace N., Kakamega Unit</div>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default SupportHealthTips;
