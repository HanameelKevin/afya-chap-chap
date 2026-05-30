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
  IconSearch
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
              <span className="text-[13px] font-semibold text-teal-dark">{selectedDoctor ? `${selectedDoctor.name} is on the way` : 'Medical unit is on the way'}</span>
            </div>

            <Card>
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center text-teal font-bold text-xs">
                   {selectedDoctor ? selectedDoctor.name.split(' ').pop().substring(0,2).toUpperCase() : 'NW'}
                 </div>
                 <div>
                   <div className="text-[14px] font-bold">{selectedDoctor ? selectedDoctor.name : 'Nurse Wanjiku'}</div>
                   <div className="text-[12px] text-text3">{selectedDoctor ? selectedDoctor.role : 'Midwife'} · Kisumu North Unit</div>
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
                   <span>{selectedSvc}</span>
                   <span className="ml-auto text-text3">KSh {totalAmount}</span>
                 </div>
                 <div className="flex items-center gap-2 text-[13px]">
                   <IconCheck size={16} className="text-green" />
                   <span>SMS Notifications</span>
                   <span className="ml-auto text-green">Included</span>
                 </div>
               </div>
            </Card>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-text">Book a Clinical Visit</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMobileClinic(!isMobileClinic)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter transition-all ${isMobileClinic ? 'bg-teal text-white shadow-sm' : 'bg-surface2 text-text3'}`}
          >
            {isMobileClinic ? 'Mobile Clinic Active' : 'Hospital Unit Active'}
          </button>
          <div className="text-[12px] text-text3 flex items-center gap-1">
            <IconMapPin size={14} /> Kisumu North, Kenya
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1: Service Selection */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[14px] font-semibold text-text2 uppercase tracking-wider">1. Select Service</h2>
              <span className="text-[11px] text-teal font-bold bg-teal-light px-2 py-0.5 rounded-full">Base Rates Applied</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {services.map((svc) => (
                <button
                  key={svc.name}
                  onClick={() => setSelectedSvc(svc.name)}
                  className={`p-4 border rounded-xl text-left transition-all relative overflow-hidden ${
                    selectedSvc === svc.name 
                      ? 'border-teal bg-teal-light ring-2 ring-teal/10' 
                      : 'border-black/5 bg-white hover:border-black/10 shadow-sm'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${selectedSvc === svc.name ? 'bg-teal text-white' : svc.bg + ' ' + (svc.color === 'teal' ? 'text-teal' : 'text-' + svc.color)}`}>
                    <svc.icon size={20} />
                  </div>
                  <div className="text-[13px] font-bold text-text leading-tight">{svc.name}</div>
                  <div className="text-[11px] text-text3 mt-1 font-medium italic">from KSh {svc.baseRate}</div>
                  {selectedSvc === svc.name && (
                    <motion.div layoutId="svc-check" className="absolute top-2 right-2 text-teal">
                      <IconCheck size={16} stroke={3} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Provider Selection */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[14px] font-semibold text-text2 uppercase tracking-wider">2. Choose Provider</h2>
              <div className="flex items-center gap-2 text-[11px] text-text3 bg-surface2 px-2 py-1 rounded-md">
                <IconSearch size={14} /> Available Doctors
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {doctors.map((dr) => (
                <button
                  key={dr.id}
                  onClick={() => setSelectedDoctor(dr)}
                  className={`p-4 border rounded-xl text-left transition-all ${
                    selectedDoctor?.id === dr.id 
                      ? 'border-teal bg-teal-light ring-2 ring-teal/10' 
                      : 'border-black/5 bg-white hover:border-black/10 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-full bg-surface2 flex items-center justify-center text-text font-bold text-xs border border-black/5">
                      {dr.name.split(' ').pop().substring(0,2).toUpperCase()}
                    </div>
                    <div className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${dr.available === 'Now' ? 'bg-green-light text-green' : 'bg-amber-light text-amber'}`}>
                      {dr.available}
                    </div>
                  </div>
                  <div className="text-[13px] font-bold text-text">{dr.name}</div>
                  <div className="text-[11px] text-text3 mb-2">{dr.role}</div>
                  <div className="pt-2 border-t border-black/5 flex justify-between items-center mt-auto">
                    <span className="text-[10px] text-text3 uppercase font-bold tracking-tighter">Rate Multiplier</span>
                    <span className="text-[12px] font-bold text-teal">x{dr.rate}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Payment Method */}
          <section>
            <h2 className="text-[14px] font-semibold text-text2 mb-4 uppercase tracking-wider">3. Payment Method</h2>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((pm) => {
                const isRestricted = pm.id === 'sha' && !isMobileClinic;
                return (
                  <button
                    key={pm.id}
                    disabled={isRestricted}
                    onClick={() => setPaymentMethod(pm.id)}
                    className={`px-4 py-3 border rounded-xl transition-all flex items-center gap-3 ${
                      isRestricted 
                        ? 'opacity-30 grayscale cursor-not-allowed bg-surface2 border-transparent' 
                        : paymentMethod === pm.id
                          ? 'border-teal bg-teal-light text-teal shadow-md'
                          : 'border-black/5 bg-white hover:bg-surface2'
                    }`}
                  >
                    <pm.icon size={20} />
                    <div className="text-left">
                      <div className="text-[12px] font-bold">{pm.name}</div>
                      {pm.id === 'sha' && !isMobileClinic && (
                         <div className="text-[8px] text-red-500 font-bold uppercase tracking-tighter">Mobile Only</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1 space-y-6 sticky top-6">
          <Card className="shadow-2xl shadow-black/5 overflow-hidden border-teal/20">
             <div className="p-4 bg-teal text-white -mx-4 -mt-4 mb-4 flex justify-between items-center">
                <span className="text-[12px] font-bold uppercase tracking-widest">Billing Summary</span>
                <IconReceipt size={18} className="opacity-50" />
             </div>
             
             <div className="space-y-4">
                <div className="flex justify-between text-[13px]">
                   <span className="text-text3">{selectedSvc} Base</span>
                   <span className="font-bold text-text">KSh {serviceBase}</span>
                </div>
                {selectedDoctor && (
                  <div className="flex justify-between text-[13px] animate-in fade-in slide-in-from-right-2">
                    <span className="text-text3">Provider Fee ({selectedDoctor.name})</span>
                    <span className="font-bold text-teal">x{selectedDoctor.rate}</span>
                  </div>
                )}
                <div className="flex justify-between text-[13px]">
                   <span className="text-text3">Tax & SMS Levy</span>
                   <span className="font-bold text-text">KSh 15</span>
                </div>
                
                {paymentMethod === 'sha' && (
                  <div className="p-2 bg-green-light border border-green/10 rounded text-[11px] text-green flex items-center gap-2">
                    <IconShieldCheck size={14} /> SHA coverage applied for Mobile Clinic
                  </div>
                )}

                <div className="pt-4 border-t border-black/5 flex justify-between items-baseline">
                   <div>
                     <span className="text-[14px] font-bold text-text block">Total Payable</span>
                     <span className="text-[10px] text-text3 uppercase font-bold tracking-tighter italic">Using {paymentMethod.toUpperCase()}</span>
                   </div>
                   <span className="text-2xl font-black text-teal">KSh {totalAmount + 15}</span>
                </div>
             </div>
             
             <div className="mt-8 space-y-3">
                <button 
                  onClick={handleBook}
                  disabled={isBooking || !selectedDoctor}
                  className={`w-full py-4 rounded-xl font-bold text-[14px] transition-all flex items-center justify-center gap-2 shadow-lg ${
                    !selectedDoctor 
                      ? 'bg-surface2 text-text3 cursor-not-allowed shadow-none' 
                      : 'bg-teal text-white shadow-teal/20 hover:bg-teal-dark scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {isBooking ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    selectedDoctor ? `Confirm & Pay KSh ${totalAmount + 15}` : 'Select a Doctor'
                  )}
                </button>
             </div>
          </Card>

          <div className="bg-surface2/30 p-4 rounded-xl space-y-3 border border-black/5">
             <div className="flex items-center gap-2 text-[10px] font-bold text-text3 uppercase tracking-wider mb-2">
                <IconChecklist size={16} /> Patient Requirements
             </div>
             {[
               'Digital health record active',
               'Location tracking enabled',
               'Payment verification code ready',
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-2 text-[12px] text-text2">
                 <IconCheck size={14} className="text-green" />
                 <span>{item}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientBooking;
