import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconStethoscope, IconUserHeart, IconBuildingHospital, IconShieldCheck, IconReportAnalytics, IconWoman, IconLock, IconWifi } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const RoleButton = ({ role, label, icon: Icon, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1.5 p-2.5 border rounded-lg transition-all ${
      selected 
        ? (role === 'Patient' ? 'border-blue bg-blue-light text-blue' : 'border-teal bg-teal-light text-teal') 
        : 'border-black/14 bg-surface text-text2 hover:border-gray-mid hover:bg-surface2'
    }`}
  >
    <Icon size={22} />
    <span className="text-[11px] font-medium leading-tight">{label}</span>
  </button>
);

const Login = ({ setAuth }) => {
  const [role, setRole] = useState('Health worker');
  const navigate = useNavigate();

  const roles = [
    { label: 'Health worker', icon: IconUserHeart },
    { label: 'Coordinator', icon: IconBuildingHospital },
    { label: 'Supervisor', icon: IconShieldCheck },
    { label: 'MOH official', icon: IconReportAnalytics },
    { label: 'Patient', icon: IconWoman },
    { label: 'Admin', icon: IconLock },
  ];

  const handleLogin = () => {
    const isPatient = role === 'Patient';
    setAuth({
      role: role,
      name: isPatient ? 'Aisha Wanjiku' : 'Hanameel Kevin',
      userInitial: isPatient ? 'AW' : 'HK'
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface border border-black/8 rounded-xl p-10 w-full max-w-[420px] shadow-md"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-[42px] h-[42px] rounded-xl bg-teal flex items-center justify-center">
            <IconStethoscope size={22} className="text-white" />
          </div>
          <div>
            <div className="text-[18px] font-semibold text-text">AfyaMobile</div>
            <div className="text-[12px] text-text3">Clinic Manager · Kenya</div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-[12px] font-medium text-text2 mb-1.5 block">Email address</label>
            <input 
              type="email" 
              defaultValue="user@afyamobile.ke"
              className="w-full px-3 py-2 border border-black/14 rounded-md focus:border-teal outline-none transition-colors text-[14px]"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-text2 mb-1.5 block">Password</label>
            <input 
              type="password" 
              defaultValue="••••••••"
              className="w-full px-3 py-2 border border-black/14 rounded-md focus:border-teal outline-none transition-colors text-[14px]"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="text-[12px] font-medium text-text2 mb-2">I am a</div>
          <div className="grid grid-cols-3 gap-2">
            {roles.map((r, i) => (
              <RoleButton 
                key={i}
                role={r.label}
                label={r.label}
                icon={r.icon}
                selected={role === r.label}
                onClick={() => setRole(r.label)}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={handleLogin}
          className={`w-full py-3 rounded-md text-[14px] font-semibold text-white transition-colors ${
            role === 'Patient' ? 'bg-blue hover:bg-[#0C447C]' : 'bg-teal hover:bg-teal-dark'
          }`}
        >
          Sign in to AfyaMobile
        </button>

        <div className="mt-4 flex items-center gap-1.5 px-3 py-2 bg-green-light text-green rounded-full justify-center">
          <IconWifi size={14} />
          <span className="text-[12px]">Offline mode available — data syncs on reconnect</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
