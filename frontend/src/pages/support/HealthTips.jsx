import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import AICard from '../../components/ui/AICard';
import { IconSparkles, IconSalad, IconZzz, IconActivity, IconStethoscope } from '@tabler/icons-react';

const SupportHealthTips = () => {
  const tips = [
    { title: 'Nutrition', text: 'Eat more leafy greens and citrus fruits to improve your haemoglobin levels.', icon: IconSalad, color: 'green' },
    { title: 'Rest', text: 'Ensure you sleep at least 8 hours and try to rest during the afternoon heat.', icon: IconZzz, color: 'blue' },
    { title: 'Monitoring', text: 'Track your fetal kicks. You should feel at least 10 movements in 2 hours.', icon: IconActivity, color: 'amber' },
    { title: 'Clinical', text: 'Keep your ANC card in your bag at all times, even when traveling.', icon: IconStethoscope, color: 'teal' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-bold text-text">Daily Health Tips</h1>

      <AICard 
        title="AI Personal Guidance" 
        body="Based on your 32-week vitals, we recommend increasing hydration and limiting salt intake due to slightly elevated BP. Focus on high-iron snacks today."
        action="Get custom meal plan ↗"
        color="blue"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
         {tips.map((t, i) => (
            <Card key={i} className="flex gap-4 items-start">
               <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-${t.color}-light text-${t.color}`}>
                  <t.icon size={24} />
               </div>
               <div>
                  <div className="text-[14px] font-bold text-text">{t.title}</div>
                  <p className="text-[12px] text-text2 mt-1 leading-relaxed">{t.text}</p>
               </div>
            </Card>
         ))}
      </div>

      <Card title="Community Wisdom" className="bg-surface2/50 border-none">
         <div className="space-y-4">
            <div className="italic text-[13px] text-text2">
               "Drinking ginger tea in the morning really helped me with my morning sickness in the first trimester."
               <div className="text-[11px] text-text3 mt-1 not-italic font-bold">— Mary, Kisumu</div>
            </div>
            <div className="italic text-[13px] text-text2">
               "Walking short distances helped reduce the swelling in my ankles."
               <div className="text-[11px] text-text3 mt-1 not-italic font-bold">— Grace, Kakamega</div>
            </div>
         </div>
      </Card>
    </motion.div>
  );
};

export default SupportHealthTips;
