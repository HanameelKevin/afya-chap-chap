import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ value, label, badge, color = 'teal' }) => {
  const badgeColors = {
    green: 'bg-green-light text-green',
    amber: 'bg-amber-light text-amber',
    red: 'bg-red-light text-red',
    blue: 'bg-blue-light text-blue',
  };

  return (
    <motion.div 
      whileHover={{ y: -3, shadow: "0 12px 24px rgba(0,0,0,0.04)" }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="bg-surface border-[0.5px] border-black/10 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
    >
      <div className="text-3xl font-bold text-text tracking-tight leading-none">{value}</div>
      <div className="text-[12px] font-medium text-text2/70 uppercase tracking-wider mt-2.5">{label}</div>
      {badge && (
        <div className="mt-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${badgeColors[badge.color] || badgeColors.green}`}>
            {badge.text}
          </span>
        </div>
      )}
    </motion.div>
  );
};

const Card = ({ title, link, children, className = '' }) => (
  <div className={`bg-surface border-[0.5px] border-black/10 rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] ${className}`}>
    {(title || link) && (
      <div className="flex items-center justify-between mb-5">
        {title && <h3 className="text-[16px] journal-title font-semibold text-text">{title}</h3>}
        {link && <span className="text-[12px] text-teal cursor-pointer font-bold uppercase tracking-wider hover:underline opacity-80">{link}</span>}
      </div>
    )}
    {children}
  </div>
);

const RiskPill = ({ level }) => {
  const levels = {
    CRITICAL: 'bg-red-light text-red',
    HIGH: 'bg-amber-light text-amber',
    MEDIUM: 'bg-blue-light text-blue',
    LOW: 'bg-green-light text-green',
  };
  return (
    <span className={`ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${levels[level] || levels.LOW}`}>
      {level}
    </span>
  );
};

export { MetricCard, Card, RiskPill };
