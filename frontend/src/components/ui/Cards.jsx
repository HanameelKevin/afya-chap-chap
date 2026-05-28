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
      whileHover={{ y: -2 }}
      className="bg-surface border border-black/8 rounded-lg p-4 shadow-sm"
    >
      <div className="text-2xl font-bold text-text leading-none">{value}</div>
      <div className="text-[12px] text-text2 mt-1.5">{label}</div>
      {badge && (
        <div className="mt-2">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${badgeColors[badge.color] || badgeColors.green}`}>
            {badge.text}
          </span>
        </div>
      )}
    </motion.div>
  );
};

const Card = ({ title, link, children, className = '' }) => (
  <div className={`bg-surface border border-black/8 rounded-lg p-4 shadow-sm ${className}`}>
    {(title || link) && (
      <div className="flex items-center justify-between mb-3">
        {title && <h3 className="text-[13px] font-semibold text-text">{title}</h3>}
        {link && <span className="text-[12px] text-teal cursor-pointer font-medium hover:underline">{link}</span>}
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
