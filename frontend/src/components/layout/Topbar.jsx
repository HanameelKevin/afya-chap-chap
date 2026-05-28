import { IconStethoscope, IconBell } from '@tabler/icons-react';

const Topbar = ({ role, userInitial = 'HK' }) => {
  const isPatient = role === 'Patient';
  
  return (
    <div className="h-[54px] bg-surface border-b border-black/8 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-2.5">
        <div className={`w-[30px] h-[30px] rounded-lg ${isPatient ? 'bg-blue' : 'bg-teal'} flex items-center justify-center`}>
          <IconStethoscope size={18} className="text-white" />
        </div>
        <span className="text-[15px] font-semibold text-text">AfyaMobile</span>
        <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium ${isPatient ? 'bg-blue-light text-blue' : 'bg-green-light text-green'}`}>
          {isPatient ? <IconStethoscope size={12} /> : <div className="w-2 h-2 rounded-full bg-green" />}
          {isPatient ? 'My health' : 'Synced'}
        </div>
      </div>
      
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-surface2 border border-black/8 flex items-center justify-center cursor-pointer relative">
          <IconBell size={18} className="text-text2" />
          <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red border-2 border-surface"></div>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${isPatient ? 'bg-blue-light text-blue' : 'bg-teal-light text-teal'}`}>
          {userInitial}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
