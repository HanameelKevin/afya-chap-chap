import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { healthWorker, patientUser } from '../../mockData';
import { IconStethoscope, IconUser, IconArrowRight, IconHeart } from '@tabler/icons-react';

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
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <div className="w-12 h-12 bg-teal flex items-center justify-center rounded-xl text-white mb-6 shadow-lg shadow-teal/20">
              <IconHeart size={28} stroke={2} />
            </div>
            <h1 className="text-5xl journal-title text-text leading-tight">
              Dignity in every <br /><span className="text-teal italic">heartbeat.</span>
            </h1>
            <p className="text-[16px] text-text3 mt-6 leading-relaxed font-editorial italic max-w-sm">
              "A premium clinic management system designed for the frontline of maternal care."
            </p>
          </div>

          <div className="flex items-center gap-4 py-6 border-y border-black/5">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface2 flex items-center justify-center text-[10px] font-bold text-text3">
                  {i}
                </div>
              ))}
            </div>
            <div className="text-[12px] text-text2 font-medium">Trusted by 240+ health facilities in East Africa</div>
          </div>
        </div>

        <div className="bg-white border border-black/10 rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text">Welcome back</h2>
            <p className="text-[14px] text-text3 mt-1">Please select your portal to continue</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => handleQuickLogin('Health worker')}
              disabled={loading}
              className="w-full group flex items-center justify-between p-5 bg-teal text-white rounded-2xl hover:bg-teal-dark transition-all cursor-pointer shadow-xl shadow-teal/15 disabled:opacity-50"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <IconStethoscope size={24} />
                </div>
                <div>
                  <div className="text-[15px] font-bold">Health Worker Portal</div>
                  <div className="text-[12px] opacity-70">Manage patients & sessions</div>
                </div>
              </div>
              <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => handleQuickLogin('Patient')}
              disabled={loading}
              className="w-full group flex items-center justify-between p-5 bg-white border border-black/10 text-text rounded-2xl hover:bg-surface2 transition-all cursor-pointer disabled:opacity-50"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-blue-light text-blue rounded-xl flex items-center justify-center">
                  <IconUser size={24} />
                </div>
                <div>
                  <div className="text-[15px] font-bold">Patient Portal</div>
                  <div className="text-[12px] text-text3">View records & book visits</div>
                </div>
              </div>
              <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-[12px] text-text3">
              Forgot password? <span className="text-teal font-bold cursor-pointer hover:underline">Contact Administrator</span>
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-[11px] text-text3 font-bold uppercase tracking-[0.2em] opacity-40">
        Afya Chap Chap — Editorial v1.0
      </div>
    </div>
  );
};

export default Login;
