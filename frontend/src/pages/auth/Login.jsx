import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { healthWorker, patientUser } from '../../mockData';
import { IconStethoscope, IconUser, IconArrowRight, IconHeart, IconShieldCheck } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleQuickLogin = (role) => {
    setLoading(true);
    setTimeout(() => {
      const userData = role === 'Health worker' ? healthWorker : patientUser;
      setAuth(userData);
      navigate('/dashboard');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 selection:bg-teal selection:text-white">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Editorial Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-2xl text-primary-foreground shadow-2xl shadow-primary/20">
              <IconHeart size={32} stroke={2} />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl journal-title text-foreground leading-[1.1] tracking-tight">
                Dignity in every <br />
                <span className="text-primary italic relative">
                  heartbeat.
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h1>
              <p className="text-[18px] text-muted-foreground leading-relaxed font-editorial italic max-w-md">
                "A premium clinic management system designed for the frontline of maternal care in Kenya."
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 py-8 border-y border-border/50">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-[12px] font-bold text-muted-foreground shadow-sm">
                  {i}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="text-[14px] font-bold text-foreground">Community Trusted</div>
              <div className="text-[12px] text-muted-foreground uppercase tracking-widest font-black opacity-60">240+ Facilities Synced</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground uppercase tracking-[0.3em] opacity-40">
            <IconShieldCheck size={16} /> Data Resident in Kenya (MOH Compliant)
          </div>
        </motion.div>

        {/* Right Side: Login Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-border/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] overflow-hidden">
            <CardHeader className="p-12 text-center space-y-2 bg-secondary/30">
              <CardTitle className="text-3xl font-bold tracking-tight">Welcome back</CardTitle>
              <CardDescription className="text-muted-foreground font-medium">Please select your portal to continue</CardDescription>
            </CardHeader>
            <CardContent className="p-12 space-y-6">
              <div className="grid gap-4">
                <Button 
                  onClick={() => handleQuickLogin('Health worker')}
                  disabled={loading}
                  size="lg"
                  className="h-auto p-6 justify-between rounded-2xl group transition-all"
                >
                  <div className="flex items-center gap-5 text-left">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                      <IconStethoscope size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[16px]">Health Worker Portal</div>
                      <div className="text-[12px] opacity-70 font-medium">Manage clinical sessions</div>
                    </div>
                  </div>
                  <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform opacity-50" />
                </Button>

                <Button 
                  onClick={() => handleQuickLogin('Patient')}
                  disabled={loading}
                  variant="outline"
                  size="lg"
                  className="h-auto p-6 justify-between rounded-2xl group border-border/50 hover:bg-secondary transition-all"
                >
                  <div className="flex items-center gap-5 text-left">
                    <div className="w-12 h-12 bg-blue-light text-blue rounded-xl flex items-center justify-center border border-blue/10">
                      <IconUser size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[16px] text-foreground">Patient Portal</div>
                      <div className="text-[12px] text-muted-foreground font-medium">View records & book visits</div>
                    </div>
                  </div>
                  <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform opacity-30 text-foreground" />
                </Button>
              </div>

              <div className="pt-6 text-center">
                <p className="text-[12px] text-muted-foreground font-medium">
                  Authentication secured by <span className="text-primary font-bold cursor-pointer hover:underline">Afya Auth v2</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-black uppercase tracking-[0.4em] opacity-30">
        Afya Chap Chap — Vital Editorial © 2026
      </div>
    </div>
  );
};

export default Login;
