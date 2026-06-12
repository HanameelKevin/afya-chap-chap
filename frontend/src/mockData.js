// afya-chap-chap/frontend/src/mockData.js

export const patients = [
  { name: 'Aisha Wanjiku', id: 'P-9021', weeks: 32, risk: 'CRITICAL', bp: '148/96', hb: '7.2', fhr: '142', lastVisit: '25 May', initial: 'AW', color: '#993C1D', bg: '#FAECE7', muac: '21cm' },
  { name: 'Fatuma Mwangi', id: 'P-4432', weeks: 38, risk: 'CRITICAL', bp: '120/80', hb: '7.0', fhr: '138', lastVisit: '20 May', initial: 'FM', color: '#854F0B', bg: '#FAEEDA', muac: '22cm' },
  { name: 'Grace Njeri', id: 'P-1102', weeks: 28, risk: 'HIGH', bp: '135/85', hb: '8.5', fhr: '140', lastVisit: '18 May', initial: 'GN', color: '#854F0B', bg: '#FAEEDA', muac: '23cm' },
  { name: 'Mary Otieno', id: 'P-8871', weeks: 20, risk: 'MEDIUM', bp: '118/75', hb: '11.0', fhr: '145', lastVisit: '10 May', initial: 'MO', color: '#185FA5', bg: '#E6F1FB', muac: '24cm' },
  { name: 'Beatrice Kamau', id: 'P-5521', weeks: 16, risk: 'LOW', bp: '110/70', hb: '12.2', fhr: '148', lastVisit: '05 May', initial: 'BK', color: '#3B6D11', bg: '#EAF3DE', muac: '25cm' },
];

export const sessions = [
  { name: 'Kisumu North', sub: 'Active · 14 checked in', stat: '18 booked', dot: 'bg-green', patients: 18, checkins: 14, time: '08:00 AM - 02:00 PM' },
  { name: 'Kakamega East', sub: 'Starts 2:00 PM', stat: '11 booked', dot: 'bg-amber', patients: 11, checkins: 0, time: '02:00 PM - 06:00 PM' },
  { name: 'Nairobi Central', sub: 'Completed', stat: '25 checked in', dot: 'bg-text3', patients: 25, checkins: 25, time: 'Yesterday' },
];

export const messages = [
  { sender: 'Nurse Joyce', text: 'Please remember to bring your ANC card tomorrow.', time: '10:30 AM', role: 'hw' },
  { sender: 'Aisha Wanjiku', text: 'I have a slight headache today.', time: '11:00 AM', role: 'patient' },
  { sender: 'System', text: 'Your appointment at Kisumu North is confirmed.', time: 'Yesterday', role: 'bot' },
];

export const records = [
  { date: '25 May 2026', type: 'Clinical Checkup', location: 'Kisumu North', doctor: 'Dr. Omolo', status: 'Completed' },
  { date: '10 May 2026', type: 'Lab Test (Haemoglobin)', location: 'Pathcare Labs', doctor: 'Technician Sarah', status: 'Completed' },
  { date: '12 Apr 2026', type: 'Ultrasound Scan', location: 'Kisumu Central', doctor: 'Dr. Gitau', status: 'Completed' },
];

export const vitalsHistory = [
  { date: '25 May', bp: '148/96', hb: '7.2', fhr: '142', temp: '36.8', weight: '68kg' },
  { date: '10 May', bp: '130/85', hb: '7.5', fhr: '138', temp: '36.5', weight: '66kg' },
  { date: '12 Apr', bp: '122/80', hb: '8.1', fhr: '140', temp: '36.7', weight: '64kg' },
  { date: '15 Mar', bp: '118/75', hb: '11.2', fhr: '145', temp: '36.6', weight: '62kg' },
];

export const routes = [
  { name: 'Kisumu North — Sector A', distance: '12.4 km', time: '18 min', stops: 4, status: 'Clear' },
  { name: 'Kisumu North — Sector B', distance: '8.2 km', time: '12 min', stops: 2, status: 'Moderate Traffic' },
  { name: 'Emergency Link — Machakos', distance: '45.1 km', time: '35 min', stops: 1, status: 'Fastest' },
];

export const healthWorker = {
  name: 'Helen Kamau',
  role: 'Senior Health Worker',
  userInitial: 'HK',
  license: 'MOH-789-DOC',
  verified: true
};

export const patientUser = {
  name: 'Aisha Wanjiku',
  role: 'Patient',
  userInitial: 'AW',
  id: 'P-9021',
  weeks: 32
};
