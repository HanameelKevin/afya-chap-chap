import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ui/ErrorBoundary';

const HWDashboard = lazy(() => import('./components/dashboard/HWDashboard'));
const PatientDashboard = lazy(() => import('./components/dashboard/PatientDashboard'));
const Login = lazy(() => import('./pages/auth/Login'));

// Patient Pages
const PatientBooking = lazy(() => import('./pages/patient/Booking'));
const PatientRecords = lazy(() => import('./pages/patient/Records'));
const PatientVitals = lazy(() => import('./pages/patient/Vitals'));

// HW Pages
const HWSessions = lazy(() => import('./pages/hw/Sessions'));
const HWPatients = lazy(() => import('./pages/hw/Patients'));
const HWRecords = lazy(() => import('./pages/hw/Records'));

// Tool Pages
const RoutePlanner = lazy(() => import('./pages/tools/RoutePlanner'));
const Reports = lazy(() => import('./pages/tools/Reports'));
const Payments = lazy(() => import('./pages/tools/Payments'));

// Support Pages
const SupportMessages = lazy(() => import('./pages/support/Messages'));
const SupportQRCard = lazy(() => import('./pages/support/QRCard'));
const SupportHealthTips = lazy(() => import('./pages/support/HealthTips'));

const PlaceholderPage = lazy(() => import('./components/ui/PlaceholderPage'));

const Loading = () => (
  <div className="min-h-screen bg-bg flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-teal border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  const [auth, setAuth] = useState(null);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            
            <Route 
              path="/dashboard" 
              element={
                auth ? (
                  <Layout role={auth.role} name={auth.name} userInitial={auth.userInitial}>
                    {auth.role === 'Patient' ? (
                      <PatientDashboard name={auth.name} />
                    ) : (
                      <HWDashboard name={auth.name} />
                    )}
                  </Layout>
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />

            {/* Patient Routes */}
            <Route path="/patient/book" element={auth ? <Layout {...auth}><PatientBooking /></Layout> : <Navigate to="/login" />} />
            <Route path="/patient/records" element={auth ? <Layout {...auth}><PatientRecords /></Layout> : <Navigate to="/login" />} />
            <Route path="/patient/vitals" element={auth ? <Layout {...auth}><PatientVitals /></Layout> : <Navigate to="/login" />} />
            
            {/* HW Routes */}
            <Route path="/hw/sessions" element={auth ? <Layout {...auth}><HWSessions /></Layout> : <Navigate to="/login" />} />
            <Route path="/hw/patients" element={auth ? <Layout {...auth}><HWPatients /></Layout> : <Navigate to="/login" />} />
            <Route path="/hw/records" element={auth ? <Layout {...auth}><HWRecords /></Layout> : <Navigate to="/login" />} />
            
            {/* Tool Routes */}
            <Route path="/tools/routes" element={auth ? <Layout {...auth}><RoutePlanner /></Layout> : <Navigate to="/login" />} />
            <Route path="/tools/reports" element={auth ? <Layout {...auth}><Reports /></Layout> : <Navigate to="/login" />} />
            <Route path="/tools/payments" element={auth ? <Layout {...auth}><Payments /></Layout> : <Navigate to="/login" />} />

            {/* Support Routes */}
            <Route path="/support/messages" element={auth ? <Layout {...auth}><SupportMessages /></Layout> : <Navigate to="/login" />} />
            <Route path="/support/qr" element={auth ? <Layout {...auth}><SupportQRCard /></Layout> : <Navigate to="/login" />} />
            <Route path="/support/tips" element={auth ? <Layout {...auth}><SupportHealthTips /></Layout> : <Navigate to="/login" />} />

            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
