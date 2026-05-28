import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { 
  IconWoman, 
  IconNeedle, 
  IconDroplet, 
  IconAmbulance, 
  IconBuildingHospital,
  IconCheck,
  IconMapPin,
  IconChecklist
} from '@tabler/icons-react';

const PatientBooking = () => {
  const [step, setStep] = useState(1); // 1: Selection, 2: Tracking
  const [selectedSvc, setSelectedSvc] = useState('ANC visit');
  const [isBooking, setIsBooking] = useState(false);

  const services = [
    { name: 'ANC visit', icon: IconWoman, eta: 'Health worker to you', color: 'teal', bg: 'bg-teal-light' },
    { name: 'Vaccination', icon: IconNeedle, eta: 'Mobile unit nearby', color: 'blue', bg: 'bg-blue-light' },
    { name: 'Blood test', icon: IconDroplet, eta: 'Lab van · 12 min', color: 'amber', bg: 'bg-amber-light' },
    { name: 'Emergency', icon: IconAmbulance, eta: 'Priority dispatch', color: 'red', bg: 'bg-red-light' },
  ];

  const handleBook = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setStep(2);
    }, 2000);
  };

  if (step === 2) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-text">Live Tracking</h1>
          <button onClick={() => setStep(1)} className="text-[12px] text-text3 hover:text-text underline">Cancel booking</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[500px]">
          <div className="bg-[#D6EAF5] rounded-xl relative overflow-hidden flex items-center justify-center border border-black/5">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <motion.div 
               animate={{ y: [20, -20, 20] }} 
               transition={{ duration: 4, repeat: Infinity }}
               className="w-10 h-10 bg-teal rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white"
             >
               <IconAmbulance size={20} />
             </motion.div>
             <div className="absolute top-10 left-10 w-4 h-4 bg-blue rounded-full border-2 border-white shadow-md"></div>
             <div className="absolute top-12 left-16 text-[10px] font-bold text-blue bg-white/80 px-2 py-0.5 rounded">Your home</div>
          </div>

          <div className="space-y-4 overflow-y-auto">
            <div className="bg-teal-light border border-teal-mid rounded-xl p-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal animate-pulse"></div>
              <span className="text-[13px] font-semibold text-teal-dark">Nurse Wanjiku is on the way</span>
            </div>

            <Card>
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center text-teal font-bold">NW</div>
                 <div>
                   <div className="text-[14px] font-bold">Nurse Wanjiku</div>
                   <div className="text-[12px] text-text3">Midwife · Kisumu North Unit</div>
                 </div>
               </div>

               <div className="grid grid-cols-3 gap-3 mb-6">
                 <div className="bg-surface2 p-3 rounded-lg text-center">
                   <div className="text-lg font-bold">8</div>
                   <div className="text-[10px] text-text3 uppercase">mins away</div>
                 </div>
                 <div className="bg-surface2 p-3 rounded-lg text-center">
                   <div className="text-lg font-bold">1.2</div>
                   <div className="text-[10px] text-text3 uppercase">km</div>
                 </div>
                 <div className="bg-surface2 p-3 rounded-lg text-center">
                   <div className="text-lg font-bold">9:54</div>
                   <div className="text-[10px] text-text3 uppercase">arrival</div>
                 </div>
               </div>

               <div className="space-y-3">
                 <div className="text-[12px] font-bold text-text2 uppercase tracking-wider">Services Booked</div>
                 <div className="flex items-center gap-2 text-[13px]">
                   <IconCheck size={16} className="text-green" />
                   <span>Blood pressure check</span>
                   <span className="ml-auto text-text3">~5 min</span>
                 </div>
                 <div className="flex items-center gap-2 text-[13px]">
                   <IconCheck size={16} className="text-green" />
                   <span>Fetal heart rate</span>
                   <span className="ml-auto text-text3">~5 min</span>
                 </div>
               </div>
            </Card>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Book a visit</h1>
        <div className="text-[12px] text-text3 flex items-center gap-1">
          <IconMapPin size={14} /> Ongata Rongai, Kenya
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section>
            <h2 className="text-[14px] font-semibold text-text2 mb-4">What do you need today?</h2>
            <div className="grid grid-cols-2 gap-3">
              {services.map((svc) => (
                <button
                  key={svc.name}
                  onClick={() => setSelectedSvc(svc.name)}
                  className={`p-4 border rounded-xl text-left transition-all ${
                    selectedSvc === svc.name 
                      ? 'border-teal bg-teal-light ring-2 ring-teal/10' 
                      : 'border-black/5 bg-white hover:border-black/10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${selectedSvc === svc.name ? 'bg-teal text-white' : svc.bg + ' ' + (svc.color === 'teal' ? 'text-teal' : 'text-' + svc.color)}`}>
                    <svc.icon size={20} />
                  </div>
                  <div className="text-[13px] font-bold text-text">{svc.name}</div>
                  <div className="text-[11px] text-text3 mt-0.5">{svc.eta}</div>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[14px] font-semibold text-text2 mb-4">Nearby Clinics</h2>
            <div className="space-y-3">
              {[
                { name: 'Kisumu North Mobile Clinic', services: 'ANC · Vaccination · Blood test', dist: '1.2 km', eta: '8 min' },
                { name: 'Kakamega East Unit', services: 'ANC · Delivery prep', dist: '3.4 km', eta: '14 min' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-black/5 rounded-xl hover:bg-white transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-surface2 flex items-center justify-center text-text2">
                    <IconBuildingHospital size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-bold text-text">{c.name}</div>
                    <div className="text-[11px] text-text3">{c.services}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-bold text-text">{c.dist}</div>
                    <div className="px-2 py-0.5 bg-green-light text-green text-[10px] font-bold rounded-full mt-0.5">{c.eta}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <Card title="Booking Summary">
             <div className="space-y-4">
                <div className="flex justify-between text-[13px]">
                   <span className="text-text2">{selectedSvc} Fee</span>
                   <span className="font-medium">KSh 0</span>
                </div>
                <div className="flex justify-between text-[13px]">
                   <span className="text-text2">SHA Co-payment</span>
                   <span className="font-medium">KSh 50</span>
                </div>
                <div className="flex justify-between text-[13px]">
                   <span className="text-text2">SMS Notifications</span>
                   <span className="font-medium text-green">✓ Included</span>
                </div>
                <div className="pt-4 border-t border-black/5 flex justify-between items-baseline">
                   <span className="text-[14px] font-bold">Total</span>
                   <span className="text-lg font-bold text-teal">KSh 50</span>
                </div>
             </div>
             
             <div className="mt-8 space-y-3">
                <div className="p-3 bg-green-light border border-green/20 rounded-lg flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green font-bold text-xs">M</div>
                   <div className="flex-1">
                      <div className="text-[12px] font-bold text-green">M-Pesa STK Push</div>
                      <div className="text-[10px] text-green/70">Charges patient 07XX XXX XXX</div>
                   </div>
                </div>
                
                <button 
                  onClick={handleBook}
                  disabled={isBooking}
                  className="w-full py-3 bg-teal text-white rounded-xl font-bold text-[14px] shadow-lg shadow-teal/20 hover:bg-teal-dark transition-all flex items-center justify-center gap-2"
                >
                  {isBooking ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    `Confirm Booking — KSh 50`
                  )}
                </button>
             </div>
          </Card>

          <Card title="Quick Checklist" className="bg-surface2/50 border-none">
             <div className="space-y-3">
                {[
                  'Have clinical record ready',
                  'Ensuring someone is home',
                  'Water available for hygiene',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[12px] text-text2">
                    <IconChecklist size={16} className="text-text3" />
                    <span>{item}</span>
                  </div>
                ))}
             </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientBooking;
