import React from 'react';
import { motion } from 'framer-motion';
import { IconSparkles, IconArrowRight } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";

const AICard = ({ title, body, action, color = 'teal' }) => {
  const styles = {
    teal: {
      bg: 'bg-teal-light/40 border-teal/10 shadow-[0_8px_32px_rgba(15,110,86,0.03)]',
      iconBg: 'bg-primary text-primary-foreground',
      title: 'text-primary',
      body: 'text-primary/70',
      btn: 'bg-white hover:bg-teal-light text-primary border-teal/10',
    },
    blue: {
      bg: 'bg-blue-light/40 border-blue/10 shadow-[0_8px_32px_rgba(24,95,165,0.03)]',
      iconBg: 'bg-blue text-white',
      title: 'text-blue',
      body: 'text-blue/70',
      btn: 'bg-white hover:bg-blue-light text-blue border-blue/10',
    }
  };

  const theme = styles[color] || styles.teal;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`rounded-2xl p-6 border backdrop-blur-sm flex gap-5 ${theme.bg}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${theme.iconBg}`}>
        <IconSparkles size={24} />
      </div>
      <div className="space-y-4">
        <div>
          <div className={`text-[10px] font-black uppercase tracking-[0.3em] mb-1 ${theme.title} opacity-60`}>
            {title}
          </div>
          <div className={`text-[16px] leading-relaxed font-editorial italic ${theme.body}`}>
            "{body}"
          </div>
        </div>
        {action && (
          <Button variant="outline" size="sm" className={`rounded-lg px-4 h-9 font-bold uppercase tracking-widest text-[9px] shadow-sm ${theme.btn}`}>
            {action} <IconArrowRight size={14} className="ml-1.5 opacity-50" />
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default AICard;
