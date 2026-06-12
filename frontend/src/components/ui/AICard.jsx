import React from 'react';
import { motion } from 'framer-motion';
import { IconSparkles } from '@tabler/icons-react';

const AICard = ({ title, body, action, color = 'teal' }) => {
  const styles = {
    teal: {
      bg: 'bg-[#F4F9F7] border-teal/10',
      icon: 'text-teal',
      title: 'text-teal-dark',
      body: 'text-teal/80',
      btn: 'text-teal border-teal/20 bg-white hover:bg-teal-light',
    },
    blue: {
      bg: 'bg-[#F4F8FC] border-blue/10',
      icon: 'text-blue',
      title: 'text-[#0C447C]',
      body: 'text-blue/80',
      btn: 'text-blue border-blue/20 bg-white hover:bg-blue-light',
    }
  };

  const theme = styles[color] || styles.teal;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`rounded-xl p-5 border shadow-sm flex gap-4 ${theme.bg}`}
    >
      <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm`}>
        <IconSparkles size={16} className={`${theme.icon}`} />
      </div>
      <div>
        <div className={`text-[11px] font-bold uppercase tracking-[0.1em] mb-1.5 ${theme.title} opacity-60`}>
          {title}
        </div>
        <div className={`text-[15px] leading-relaxed font-editorial italic ${theme.body}`}>
          "{body}"
        </div>
        {action && (
          <button className={`mt-4 px-4 py-1.5 rounded-full text-[12px] font-semibold border transition-all cursor-pointer shadow-sm active:scale-95 ${theme.btn}`}>
            {action}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default AICard;
