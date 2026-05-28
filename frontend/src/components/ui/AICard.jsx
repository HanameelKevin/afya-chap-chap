import React from 'react';
import { motion } from 'framer-motion';
import { IconSparkles } from '@tabler/icons-react';

const AICard = ({ title, body, action, color = 'teal' }) => {
  const styles = {
    teal: {
      bg: 'bg-teal-light border-teal-mid',
      icon: 'text-teal',
      title: 'text-teal-dark',
      body: 'text-teal',
      btn: 'text-teal border-teal-mid bg-surface hover:bg-teal-light',
    },
    blue: {
      bg: 'bg-blue-light border-[#85B7EB]',
      icon: 'text-blue',
      title: 'text-[#0C447C]',
      body: 'text-blue',
      btn: 'text-blue border-[#85B7EB] bg-surface hover:bg-blue-light',
    }
  };

  const theme = styles[color] || styles.teal;

  return (
    <div className={`rounded-lg p-4 border flex gap-3 ${theme.bg}`}>
      <IconSparkles size={20} className={`${theme.icon} shrink-0 mt-0.5`} />
      <div>
        <div className={`text-[13px] font-semibold mb-1 ${theme.title}`}>{title}</div>
        <div className={`text-[12px] leading-relaxed ${theme.body}`}>{body}</div>
        {action && (
          <button className={`mt-2.5 px-3 py-1 rounded-md text-[12px] font-medium border transition-colors cursor-pointer ${theme.btn}`}>
            {action}
          </button>
        )}
      </div>
    </div>
  );
};

export default AICard;
