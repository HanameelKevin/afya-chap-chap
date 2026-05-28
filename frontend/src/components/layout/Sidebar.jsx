import { NavLink } from 'react-router-dom';
import { 
  IconLayoutDashboard, 
  IconCalendarEvent, 
  IconUsers, 
  IconHeartRateMonitor, 
  IconMapPin, 
  IconChartBar, 
  IconCreditCard,
  IconLogout,
  IconHome,
  IconCalendar,
  IconFileDescription,
  IconActivity,
  IconMessageCircle,
  IconQrcode,
  IconInfoCircle,
  IconUser
} from '@tabler/icons-react';

const NavItem = ({ icon: Icon, label, to, color }) => {
  const isBlue = color === 'blue';
  
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => `
        flex items-center gap-2.5 py-2.5 px-5 text-[13px] cursor-pointer transition-all border-l-2 mr-2 rounded-r-md
        ${isActive 
          ? (isBlue ? 'text-blue bg-blue-light border-l-blue font-medium' : 'text-teal bg-teal-light border-l-teal font-medium') 
          : 'text-text2 border-transparent hover:bg-surface2 hover:text-text'}
      `}
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
};

const Sidebar = ({ role, name, userInitial = 'HK' }) => {
  const isPatient = role === 'Patient';
  const color = isPatient ? 'blue' : 'teal';

  return (
    <div className="w-[210px] flex-shrink-0 bg-surface border-r border-black/8 py-4 flex flex-col h-full overflow-y-auto">
      <div className="text-[10px] font-semibold tracking-widest uppercase text-text3 px-5 pt-5 pb-2">
        {isPatient ? 'My health' : 'Main'}
      </div>
      
      {isPatient ? (
        <>
          <NavItem icon={IconHome} label="My dashboard" to="/dashboard" color="blue" />
          <NavItem icon={IconCalendar} label="Book a visit" to="/patient/book" color="blue" />
          <NavItem icon={IconFileDescription} label="My records" to="/patient/records" color="blue" />
          <NavItem icon={IconActivity} label="My vitals" to="/patient/vitals" color="blue" />
          
          <div className="text-[10px] font-semibold tracking-widest uppercase text-text3 px-5 pt-5 pb-2">Support</div>
          <NavItem icon={IconMessageCircle} label="Messages" to="/support/messages" color="blue" />
          <NavItem icon={IconQrcode} label="My QR card" to="/support/qr" color="blue" />
          <NavItem icon={IconInfoCircle} label="Health tips" to="/support/tips" color="blue" />
        </>
      ) : (
        <>
          <NavItem icon={IconLayoutDashboard} label="Dashboard" to="/dashboard" color="teal" />
          <NavItem icon={IconCalendarEvent} label="Sessions" to="/hw/sessions" color="teal" />
          <NavItem icon={IconUsers} label="Patients" to="/hw/patients" color="teal" />
          <NavItem icon={IconHeartRateMonitor} label="Maternal records" to="/hw/records" color="teal" />
          
          <div className="text-[10px] font-semibold tracking-widest uppercase text-text3 px-5 pt-5 pb-2">Tools</div>
          <NavItem icon={IconMapPin} label="Route planner" to="/tools/routes" color="teal" />
          <NavItem icon={IconChartBar} label="MOH reports" to="/tools/reports" color="teal" />
          <NavItem icon={IconCreditCard} label="Payments" to="/tools/payments" color="teal" />
        </>
      )}

      <div className="mt-auto pt-4 px-5 border-t border-black/8">
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${isPatient ? 'bg-blue-light text-blue' : 'bg-teal-light text-teal'}`}>
            {userInitial}
          </div>
          <div>
            <div className="text-[13px] font-medium text-text truncate w-32">{name || 'User'}</div>
            <div className="text-[11px] text-text3">{role || 'Health worker'}</div>
          </div>
        </div>
        
        <NavLink 
          to="/login"
          className="flex items-center gap-2.5 py-2.5 px-5 text-[13px] text-text2 hover:bg-surface2 hover:text-text transition-all rounded-md"
        >
          <IconLogout size={18} />
          <span>Sign out</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
