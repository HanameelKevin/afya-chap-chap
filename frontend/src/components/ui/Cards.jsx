import React from 'react';
import { motion } from 'framer-motion';
import { Card as ShadcnCard, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const MetricCard = ({ value, label, badge, color = 'teal' }) => {
  const badgeColors = {
    green: 'bg-green-light text-green border-green/10',
    amber: 'bg-amber-light text-amber border-amber/10',
    red: 'bg-red-light text-red border-red/10',
    blue: 'bg-blue-light text-blue border-blue/10',
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <ShadcnCard className="border-border/40 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm group transition-all hover:bg-card hover:shadow-md">
        <CardContent className="p-6">
          <div className="text-4xl font-bold text-foreground tracking-tighter leading-none group-hover:text-primary transition-colors">{value}</div>
          <div className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-3 opacity-60">{label}</div>
          {badge && (
            <div className="mt-5">
              <span className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                badgeColors[badge.color] || badgeColors.green
              )}>
                {badge.text}
              </span>
            </div>
          )}
        </CardContent>
      </ShadcnCard>
    </motion.div>
  );
};

const Card = ({ title, link, children, className = '' }) => (
  <ShadcnCard className={cn("border-border/40 shadow-sm bg-card/50 backdrop-blur-sm", className)}>
    {(title || link) && (
      <CardHeader className="flex flex-row items-center justify-between pb-4 space-y-0 p-6">
        {title && <CardTitle className="text-[17px] journal-title text-foreground italic">{title}</CardTitle>}
        {link && <span className="text-[10px] text-primary cursor-pointer font-black uppercase tracking-[0.2em] hover:opacity-100 opacity-60 transition-opacity">{link}</span>}
      </CardHeader>
    )}
    <CardContent className="px-6 pb-6 pt-0">
      {children}
    </CardContent>
  </ShadcnCard>
);

const RiskPill = ({ level }) => {
  const levels = {
    CRITICAL: 'bg-red-light text-red border-red/20 shadow-[0_0_12px_rgba(163,45,45,0.1)]',
    HIGH: 'bg-amber-light text-amber border-amber/20',
    MEDIUM: 'bg-blue-light text-blue border-blue/20',
    LOW: 'bg-green-light text-green border-green/20',
  };
  return (
    <span className={cn(
      "ml-auto text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest border transition-all",
      levels[level] || levels.LOW
    )}>
      {level}
    </span>
  );
};

export { MetricCard, Card, RiskPill };
