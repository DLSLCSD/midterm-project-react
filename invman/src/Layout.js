
import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';

const Layout = () => {
  return (
    <div>
      {}
      <Dashboard />
      {}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
