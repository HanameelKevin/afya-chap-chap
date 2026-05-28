import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Layout = ({ children, role, name, userInitial }) => {
  return (
    <div className="flex flex-col h-screen bg-bg">
      <Topbar role={role} userInitial={userInitial} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar role={role} name={name} userInitial={userInitial} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
