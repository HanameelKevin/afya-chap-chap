import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../../components/ui/Cards';
import { 
  IconWoman, 
  IconNeedle, 
  IconDroplet, 
  IconAmbulance, 
  IconBuildingHospital,
  IconCheck,
  IconMapPin,
  IconChecklist,
  IconStethoscope,
  IconCreditCard,
  IconCash,
  IconReceipt,
  IconDeviceMobile,
  IconShieldCheck,
  IconSearch,
  IconArrowRight
} from '@tabler/icons-react';

const PatientBooking = () => {
  const [step, setStep] = useState(1); // 1: Selection, 2: Tracking
  const [selectedSvc, setSelectedSvc] = useState('ANC visit');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [isBooking, setIsBooking] = useState(false);
  const [isMobileClinic, setIsMobileClinic] = useState(true); // Toggle for SHA constraint

  const services = [
    { name: 'ANC visit', icon: IconWoman, baseRate: 1200, color: 'teal', bg: 'bg-teal-light' },
    { name: 'Vaccination', icon: IconNeedle, baseRate: 500, color: 'blue', bg: 'bg-blue-light' },
    { name: 'Blood test', icon: IconDroplet, baseRate: 800, color: 'amber', bg: 'bg-amber-light' },
    { name: 'Emergency', icon: IconAmbulance, baseRate: 2500, color: 'red', bg: 'bg-red-light' },
  ];

  const doctors = [
    { id: 1, name: 'Dr. Omolo', role: 'Obstetrician', rate: 1.2, available: 'Now', bio: '10+ yrs exp' },
    { id: 2, name: 'Dr. Sarah', role: 'Pediatrician', rate: 1.0, available: '14:00', bio: 'Vaccination expert' },
    { id: 3, name: 'Dr. Kamau', role: 'Generalist', rate: 0.8, available: 'Now', bio: 'Kisumu Unit Lead' },
  ];

  const paymentMethods = [
    { id: 'mpesa', name: 'M-Pesa', icon: IconDeviceMobile, desc: 'STK Push' },
    { id: 'cash', name: 'Cash', icon: IconCash, desc: 'Pay on arrival' },
    { id: 'card', name: 'Card', icon: IconCreditCard, desc: 'Visa / Mastercard' },
    { id: 'insurance', name: 'Insurance', icon: IconReceipt, desc: 'Private coverage' },
    { id: 'sha', name: 'SHA', icon: IconShieldCheck, desc: 'Social Health Authority', restricted: true },
  ];

  const currentService = services.find(s => s.name === selectedSvc);
  const serviceBase = currentService?.baseRate || 0;
  const doctorMultiplier = selectedDoctor ? selectedDoctor.rate : 1.0;
  const totalAmount = serviceBase * doctorMultiplier;

  const handleBook = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setStep(2);
    }, 2000);
  };

  if (step === 2) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
        <div className="flex items-center justify-between border-b border-black/5 pb-6">
          <h1 className="text-3xl journal-title text-text">Unit Tracking</h1>
          <button onClick={() => setStep(1)} className="text-[12px] font-bold text-text3 hover:text-red transition-colors uppercase tracking-widest">Abort Dispatch</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-[550px]">
          <div className="bg-[#EBF5FB] rounded-3xl relative overflow-hidden flex items-center justify-center border border-blue/10 shadow-inner">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <motion.div 
               animate={{ y: [10, -10, 10], scale: [1, 1.05, 1] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="w-14 h-14 bg-teal rounded-2xl border-4 border-white shadow-2xl flex items-center justify-center text-white z-10"
             >
               <IconAmbulance size={28} stroke={1.5} />
             </motion.div>
             <div className="absolute top-20 left-20 w-5 h-5 bg-blue rounded-full border-4 border-white shadow-xl"></div>
             <div className="absolute top-28 left-20 text-[10px] font-black text-blue bg-white/90 px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Patient Location</div>
             
             <svg className="absolute inset-0 w-full h-full opacity-30">
               <path d="M 100 120 L 250 300 L 450 200" fill="none" stroke="#0F6E56" strokeWidth="3" strokeDasharray="8,8" />
             </svg>
          </div>

          <div className="space-y-6 overflow-y-auto custom-scrollbar">
            <div className="bg-[#F4F9F7] border border-teal/10 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-3 h-3 rounded-full bg-teal animate-pulse shadow-[0_0_8px_rgba(15,110,86,0.5)]"></div>
              <span className="text-[14px] font-bold text-teal-dark">{selectedDoctor ? `${selectedDoctor.name} is in transit` : 'Clinical unit is in transit'}</span>
            </div>

            <Card className="!p-8">
               <div className="flex items-center gap-5 mb-8 pb-8 border-b border-black/5">
                 <div className="w-16 h-16 rounded-2xl bg-surface2 flex items-center justify-center text-text font-black text-lg border border-black/5 shadow-inner">
                   {selectedDoctor ? selectedDoctor.name.split(' ').pop().substring(0,2).toUpperCase() : 'NW'}
                 </div>
                 <div>
                   <div className="text-[18px] font-bold text-text">{selectedDoctor ? selectedDoctor.name : 'Nurse Wanjiku'}</div>
                   <div className="text-[12px] text-text3 font-medium uppercase tracking-widest mt-1">{selectedDoctor ? selectedDoctor.role : 'Midwife'} · Kisumu North Unit</div>
                 </div>
               </div>

               <div className="grid grid-cols-3 gap-4 mb-8">
                 <div className="bg-surface2/50 p-4 rounded-2xl text-center border border-black/5">
                   <div className="text-xl font-black text-text tracking-tight">08</div>
                   <div className="text-[9px] text-text3 uppercase font-bold tracking-widest mt-1">minutes</div>
                 </div>
                 <div className="bg-surface2/50 p-4 rounded-2xl text-center border border-black/5">
                   <div className="text-xl font-black text-text tracking-tight">1.2</div>
                   <div className="text-[9px] text-text3 uppercase font-bold tracking-widest mt-1">kilometers</div>
                 </div>
                 <div className="bg-surface2/50 p-4 rounded-2xl text-center border border-black/5">
                   <div className="text-xl font-black text-teal tracking-tight">09:54</div>
                   <div className="text-[9px] text-teal-dark uppercase font-bold tracking-widest mt-1">arrival</div>
                 </div>
               </div>

               <div className="space-y-4">
                 <div className="text-[10px] font-black text-text3 uppercase tracking-[0.2em] mb-4">Confirmed Care Package</div>
                 <div className="flex items-center gap-3 text-[14px] font-medium text-text">
                   <IconCheck size={18} className="text-green" stroke={3} />
                   <span>{selectedSvc}</span>
                   <span className="ml-auto font-bold opacity-60 text-[12px]">KSh {totalAmount}</span>
                 </div>
                 <div className="flex items-center gap-3 text-[14px] font-medium text-text">
                   <IconCheck size={18} className="text-green" stroke={3} />
                   <span>Ministry SMS Alerts</span>
                   <span className="ml-auto text-[10px] font-black uppercase text-green bg-green-light px-2 py-0.5 rounded-full">Active</span>
                 </div>
               </div>
            </Card>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 pb-16">
      <div className="flex items-end justify-between border-b border-black/5 pb-6">
        <div>
          <h1 className="text-3xl journal-title text-text">Clinical Dispatch</h1>
          <p className="text-[13px] text-text3 mt-1 font-medium uppercase tracking-widest">Schedule a mobile unit or hospital appointment</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMobileClinic(!isMobileClinic)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all border ${isMobileClinic ? 'bg-teal text-white border-teal shadow-lg shadow-teal/10' : 'bg-surface2 text-text3 border-black/5'}`}
          >
            {isMobileClinic ? 'Frontline Unit Active' : 'Facility Care Active'}
          </button>
          <div className="text-[12px] text-text3 flex items-center gap-1.5 font-medium italic">
            <IconMapPin size={16} className="text-teal" /> Kisumu North Hub
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 space-y-10">
          {/* Step 1: Service Selection */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[12px] font-bold text-text3 uppercase tracking-[0.2em]">01. Clinical Service</h2>
              <span className="text-[10px] text-teal font-black bg-teal/5 px-2 py-0.5 rounded-full uppercase">Standard Rates</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {services.map((svc) => (
                <button
                  key={svc.name}
                  onClick={() => setSelectedSvc(svc.name)}
                  className={`p-6 border rounded-2xl text-left transition-all relative overflow-hidden group ${
                    selectedSvc === svc.name 
                      ? 'border-teal bg-[#F4F9F7] shadow-xl shadow-teal/5 ring-1 ring-teal/20' 
                      : 'border-black/5 bg-white hover:border-black/10 hover:shadow-lg shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all ${selectedSvc === svc.name ? 'bg-teal text-white shadow-lg shadow-teal/20' : svc.bg + ' ' + (svc.color === 'teal' ? 'text-teal' : 'text-' + svc.color)}`}>
                    <svc.icon size={22} stroke={1.5} />
                  </div>
                  <div className="text-[15px] font-bold text-text leading-tight group-hover:text-teal transition-colors">{svc.name}</div>
                  <div className="text-[11px] text-text3 mt-1.5 font-medium italic font-editorial">from KSh {svc.baseRate}</div>
                  {selectedSvc === svc.name && (
                    <motion.div layoutId="svc-check" className="absolute top-3 right-3 text-teal">
                      <IconCheck size={18} stroke={4} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Provider Selection */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[12px] font-bold text-text3 uppercase tracking-[0.2em]">02. Assigned Specialist</h2>
              <div className="flex items-center gap-2 text-[10px] font-black text-text3 bg-surface2 px-3 py-1 rounded-full uppercase tracking-widest">
                <IconSearch size={14} /> Duty Registry
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {doctors.map((dr) => (
                <button
                  key={dr.id}
                  onClick={() => setSelectedDoctor(dr)}
                  className={`p-5 border rounded-2xl text-left transition-all group ${
                    selectedDoctor?.id === dr.id 
                      ? 'border-teal bg-[#F4F9F7] shadow-xl shadow-teal/5 ring-1 ring-teal/20' 
                      : 'border-black/5 bg-white hover:border-black/10 hover:shadow-lg shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface2 flex items-center justify-center text-text font-black text-[13px] border border-black/5 shadow-inner">
                      {dr.name.split(' ').pop().substring(0,2).toUpperCase()}
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${dr.available === 'Now' ? 'bg-green-light text-green border border-green/10' : 'bg-amber-light text-amber border border-amber/10'}`}>
                      {dr.available}
                    </div>
                  </div>
                  <div className="text-[15px] font-bold text-text group-hover:text-teal transition-colors">{dr.name}</div>
                  <div className="text-[12px] text-text3 font-medium mt-0.5">{dr.role}</div>
                  <div className="pt-4 mt-4 border-t border-black/5 flex justify-between items-center">
                    <span className="text-[9px] text-text3 uppercase font-black tracking-widest">Rate Factor</span>
                    <span className="text-[13px] font-black text-teal">x{dr.rate}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Payment Method */}
          <section>
            <h2 className="text-[12px] font-bold text-text3 mb-6 uppercase tracking-[0.2em]">03. Financial Validation</h2>
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((pm) => {
                const isRestricted = pm.id === 'sha' && !isMobileClinic;
                return (
                  <button
                    key={pm.id}
                    disabled={isRestricted}
                    onClick={() => setPaymentMethod(pm.id)}
                    className={`px-5 py-4 border rounded-2xl transition-all flex items-center gap-4 ${
                      isRestricted 
                        ? 'opacity-20 grayscale cursor-not-allowed bg-surface2 border-transparent' 
                        : paymentMethod === pm.id
                          ? 'border-teal bg-[#F4F9F7] text-teal shadow-xl shadow-teal/5'
                          : 'border-black/5 bg-white hover:bg-surface2'
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${paymentMethod === pm.id ? 'bg-teal text-white' : 'bg-surface2 text-text3'}`}>
                      <pm.icon size={22} stroke={1.5} />
                    </div>
                    <div className="text-left">
                      <div className="text-[14px] font-bold text-text">{pm.name}</div>
                      <div className="text-[10px] text-text3 font-medium uppercase tracking-tighter">{pm.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1 space-y-8 sticky top-10">
          <Card className="shadow-2xl shadow-black/5 !p-0 overflow-hidden border-black/5">
             <div className="p-6 bg-teal text-white flex justify-between items-center shadow-lg shadow-teal/10">
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Clinical Bill</span>
                <IconReceipt size={22} className="opacity-50" />
             </div>
             
             <div className="p-8 space-y-5">
                <div className="flex justify-between text-[14px]">
                   <span className="text-text3 font-medium">Service Fee</span>
                   <span className="font-bold text-text">KSh {serviceBase}</span>
                </div>
                {selectedDoctor && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex justify-between text-[14px]">
                    <span className="text-text3 font-medium">Specialist Multiplier</span>
                    <span className="font-black text-teal">x{selectedDoctor.rate}</span>
                  </motion.div>
                )}
                <div className="flex justify-between text-[14px]">
                   <span className="text-text3 font-medium">SMS Registry Levy</span>
                   <span className="font-bold text-text">KSh 15</span>
                </div>
                
                {paymentMethod === 'sha' && (
                  <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="p-3 bg-[#F6FBF8] border border-green/10 rounded-xl text-[12px] text-green-800 font-medium flex items-center gap-3">
                    <div className="w-6 h-6 bg-green text-white rounded-lg flex items-center justify-center shadow-sm">
                      <IconShieldCheck size={16} stroke={2} />
                    </div>
                    SHA Coverage Applied
                  </motion.div>
                )}

                <div className="pt-6 mt-6 border-t border-black/5 flex justify-between items-baseline">
                   <div>
                     <span className="text-[15px] font-black text-text block tracking-tight">Total Payable</span>
                     <span className="text-[10px] text-text3 uppercase font-black tracking-widest italic opacity-60">Verified via {paymentMethod.toUpperCase()}</span>
                   </div>
                   <span className="text-3xl font-black text-teal tracking-tighter">KSh {totalAmount + 15}</span>
                </div>
             </div>
             
             <div className="px-8 pb-8">
                <button 
                  onClick={handleBook}
                  disabled={isBooking || !selectedDoctor}
                  className={`w-full py-4 rounded-2xl font-black text-[14px] transition-all flex items-center justify-center gap-3 shadow-xl ${
                    !selectedDoctor 
                      ? 'bg-surface2 text-text3 cursor-not-allowed shadow-none' 
                      : 'bg-teal text-white shadow-teal/20 hover:bg-teal-dark active:scale-95'
                  }`}
                >
                  {isBooking ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="uppercase tracking-widest">Validating...</span>
                    </div>
                  ) : (
                    <>
                      <span className="uppercase tracking-[0.1em]">{selectedDoctor ? 'Initialize Dispatch' : 'Choose Specialist'}</span>
                      {selectedDoctor && <IconArrowRight size={18} stroke={3} />}
                    </>
                  )}
                </button>
             </div>
          </Card>

          <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-4">
             <div className="flex items-center gap-2 text-[10px] font-black text-text3 uppercase tracking-[0.2em] mb-4">
                <IconChecklist size={18} className="text-teal" /> Dispatch Checklist
             </div>
             {[
               'Electronic ANC card is accessible',
               'Unit GPS tracking permissions granted',
               'Ministry clinical audit code active',
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-3 text-[13px] text-text2 font-medium">
                 <IconCheck size={16} className="text-green mt-0.5 shrink-0" stroke={3} />
                 <span className="leading-tight">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientBooking;
