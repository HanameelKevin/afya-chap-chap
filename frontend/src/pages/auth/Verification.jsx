import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { 
  IconShieldCheck, 
  IconUserCheck, 
  IconAlertTriangle, 
  IconId, 
  IconFileText, 
  IconSparkles,
  IconLock
} from '@tabler/icons-react';

const ProfessionalVerification = () => {
  const [formData, setFormData] = useState({ licenseNumber: '', nurseId: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/auth/verify-professional`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          licenseNumber: formData.licenseNumber,
          nurseId: formData.nurseId,
          healthWorkerId: '65e...mock_id...' // In real app, this comes from context
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.message);
      }
    } catch (error) {
      setStatus('error');
      setErrorMsg('MoH verification server unreachable. Please try again later.');
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-3">
        <div className="w-20 h-20 bg-teal-light rounded-3xl flex items-center justify-center text-teal mx-auto mb-6 shadow-sm border border-teal/5">
          <IconShieldCheck size={40} stroke={1.5} />
        </div>
        <h1 className="text-3xl journal-title text-text">Professional Verification</h1>
        <p className="text-[14px] text-text3 max-w-[280px] mx-auto leading-relaxed">Cross-reference your credentials with the national MoH clinical registry.</p>
      </div>

      <Card className="relative overflow-hidden !p-8">
        {status === 'success' ? (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="py-6 text-center space-y-6">
             <div className="relative mx-auto w-24 h-24">
                <div className="absolute inset-0 bg-green-light rounded-full animate-ping opacity-20"></div>
                <div className="relative w-24 h-24 bg-green-light rounded-full flex items-center justify-center text-green shadow-sm">
                   <IconUserCheck size={48} stroke={1.5} />
                </div>
             </div>
             <div>
                <div className="text-2xl journal-title text-text">Verification Confirmed</div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-green-light text-green rounded-full text-[10px] font-bold uppercase tracking-widest border border-green/10">
                  Registry ID: AFYA-2026-X8
                </div>
                <p className="text-[14px] text-text3 mt-4 leading-relaxed font-editorial italic px-4">
                  "Your clinical privileges have been activated. You are now authorized to access maternal diagnostic tools and MOH reports."
                </p>
             </div>
             <motion.button 
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="w-full py-4 bg-teal text-white rounded-xl font-bold text-[14px] shadow-xl shadow-teal/20 transition-all cursor-pointer"
             >
               Enter Clinical Dashboard
             </motion.button>
          </motion.div>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-5">
               <div>
                  <label className="text-[10px] font-bold text-text3 uppercase tracking-[0.15em] mb-2.5 block px-1">Medical Practitioner License (KMPDC)</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text3 group-focus-within:text-teal transition-colors">
                      <IconFileText size={20} stroke={1.5} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="e.g. MOH-789-DOC"
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                      className="w-full pl-12 pr-4 py-3.5 bg-surface2/50 border border-black/5 rounded-xl outline-none text-[15px] font-medium focus:border-teal/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,110,86,0.03)] transition-all placeholder:text-text3/40"
                    />
                  </div>
               </div>

               <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-black/5"></div></div>
                  <div className="relative flex justify-center"><span className="bg-white px-4 text-[10px] text-text3 font-bold uppercase tracking-[0.2em]">Clinical Pivot</span></div>
               </div>

               <div>
                  <label className="text-[10px] font-bold text-text3 uppercase tracking-[0.15em] mb-2.5 block px-1">Nursing Council Registry ID</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text3 group-focus-within:text-teal transition-colors">
                      <IconId size={20} stroke={1.5} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="e.g. NURSE-K-001"
                      value={formData.nurseId}
                      onChange={(e) => setFormData({...formData, nurseId: e.target.value})}
                      className="w-full pl-12 pr-4 py-3.5 bg-surface2/50 border border-black/5 rounded-xl outline-none text-[15px] font-medium focus:border-teal/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,110,86,0.03)] transition-all placeholder:text-text3/40"
                    />
                  </div>
               </div>
            </div>

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-light border border-red/10 rounded-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red shadow-sm shrink-0">
                  <IconAlertTriangle size={16} />
                </div>
                <span className="text-[12px] text-red-800 font-semibold">{errorMsg}</span>
              </motion.div>
            )}

            <motion.button 
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.99 }}
              className="w-full py-4 bg-teal text-white rounded-xl font-bold text-[14px] shadow-xl shadow-teal/15 hover:bg-teal-dark disabled:bg-teal/40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2.5"
            >
              {status === 'loading' ? (
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="opacity-80">Querying MoH Database...</span>
                </div>
              ) : (
                <>Validate Credentials <IconSparkles size={18} stroke={1.5} /></>
              )}
            </motion.button>
          </form>
        )}
      </Card>

      <div className="p-4 bg-surface2/50 border border-black/5 rounded-2xl flex gap-3">
         <IconLock size={20} className="text-text3 flex-shrink-0" />
         <p className="text-[11px] text-text3 leading-relaxed">
           To prevent rogue medical practice, Afya Chap Chap cross-references all licenses with the Kenya Ministry of Health national database. All clinical activities are logged and auditable.
         </p>
      </div>
    </motion.div>
  );
};

export default ProfessionalVerification;
