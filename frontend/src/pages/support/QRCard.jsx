import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconQrcode, IconDownload, IconShare, IconUserCheck, IconShieldLock } from '@tabler/icons-react';

const SupportQRCard = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 flex flex-col items-center py-12">
      <div className="w-full max-w-sm border-b border-black/5 pb-6 self-center text-center">
        <h1 className="text-3xl journal-title text-text">Clinical Identity</h1>
        <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest text-center">Your secure digital health passport</p>
      </div>

      <Card className="p-10 flex flex-col items-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-sm w-full border-black/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-blue/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
         
         <div className="flex items-center gap-4 mb-10 self-start w-full relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue text-white flex items-center justify-center shadow-lg shadow-blue/20">
               <IconQrcode size={28} stroke={1.5} />
            </div>
            <div>
               <div className="text-[17px] font-black text-text tracking-tight">Aisha Wanjiku</div>
               <div className="text-[11px] text-blue font-bold uppercase tracking-widest opacity-70">SHA-2026-X892</div>
            </div>
         </div>

         <div className="p-6 bg-surface2/50 rounded-3xl mb-10 border border-black/5 relative group cursor-pointer active:scale-95 transition-transform">
            {/* Conceptual QR Code */}
            <div className="w-52 h-52 bg-white p-4 rounded-2xl grid grid-cols-5 grid-rows-5 gap-1.5 overflow-hidden shadow-inner border border-black/5">
               {[...Array(25)].map((_, i) => (
                  <div key={i} className={`rounded-sm ${Math.random() > 0.4 ? 'bg-text' : 'bg-transparent'} transition-colors duration-500`}></div>
               ))}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-black/5 shadow-xl">
                     <IconQrcode size={32} className="text-blue animate-pulse" />
                  </div>
               </div>
            </div>
         </div>

         <div className="flex items-center gap-2.5 px-4 py-2 bg-[#F6FBF8] text-green rounded-full mb-10 border border-green/10 shadow-sm">
            <IconUserCheck size={18} stroke={2} />
            <span className="text-[11px] font-black uppercase tracking-[0.15em]">Verified Identity</span>
         </div>

         <div className="grid grid-cols-2 gap-4 w-full relative z-10">
            <button className="flex items-center justify-center gap-2 py-3.5 bg-surface2 text-text font-bold text-[13px] rounded-xl hover:bg-black/5 transition-all active:scale-95">
               <IconDownload size={20} /> Save PDF
            </button>
            <button className="flex items-center justify-center gap-2 py-3.5 bg-blue text-white font-bold text-[13px] rounded-xl shadow-xl shadow-blue/15 hover:bg-[#0C447C] transition-all active:scale-95">
               <IconShare size={20} /> Digital Pass
            </button>
         </div>
      </Card>

      <div className="flex flex-col items-center gap-4 text-center max-w-xs px-6">
         <IconShieldLock size={24} className="text-text3 opacity-40" />
         <p className="text-[13px] text-text3 leading-relaxed font-editorial italic">
            "Your clinical QR card is a secure cryptographic token. Present this to your coordinator for instant biometric verification and data synchronization."
         </p>
      </div>
    </motion.div>
  );
};

export default SupportQRCard;
