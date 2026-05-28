import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { IconQrcode, IconDownload, IconShare, IconUserCheck } from '@tabler/icons-react';

const SupportQRCard = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 flex flex-col items-center py-10">
      <h1 className="text-xl font-bold text-text self-start">My QR Card</h1>

      <Card className="p-10 flex flex-col items-center bg-white shadow-xl max-w-sm w-full border-black/5">
         <div className="flex items-center gap-3 mb-8 self-start w-full">
            <div className="w-10 h-10 rounded-xl bg-blue flex items-center justify-center">
               <IconQrcode size={24} className="text-white" />
            </div>
            <div>
               <div className="text-[15px] font-bold">Aisha Wanjiku</div>
               <div className="text-[11px] text-text3">SHA-2026-X892</div>
            </div>
         </div>

         <div className="p-4 bg-surface2 rounded-2xl mb-8 border border-black/5">
            {/* Conceptual QR Code */}
            <div className="w-48 h-48 bg-white p-2 rounded-lg grid grid-cols-4 grid-rows-4 gap-1 overflow-hidden opacity-80">
               {[...Array(16)].map((_, i) => (
                  <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? 'bg-text' : 'bg-transparent'}`}></div>
               ))}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-black/5">
                     <IconQrcode size={24} className="text-blue" />
                  </div>
               </div>
            </div>
         </div>

         <div className="flex items-center gap-2 px-3 py-1.5 bg-green-light text-green rounded-full mb-8">
            <IconUserCheck size={14} />
            <span className="text-[11px] font-bold uppercase tracking-wider">Verified Identity</span>
         </div>

         <div className="grid grid-cols-2 gap-3 w-full">
            <button className="flex items-center justify-center gap-2 py-2.5 bg-surface2 text-text font-bold text-[13px] rounded-xl hover:bg-black/5 transition-all">
               <IconDownload size={18} /> Save
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 bg-blue text-white font-bold text-[13px] rounded-xl shadow-lg shadow-blue/20 hover:bg-blue-mid transition-all">
               <IconShare size={18} /> Share
            </button>
         </div>
      </Card>

      <p className="text-[12px] text-text3 text-center max-w-xs leading-relaxed">
         Show this QR code to your health worker during visits to quickly access your medical history and vitals.
      </p>
    </motion.div>
  );
};

export default SupportQRCard;
