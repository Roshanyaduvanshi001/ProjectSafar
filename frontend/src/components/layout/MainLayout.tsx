import React from 'react';
import { Outlet } from 'react-router-dom';
import { MobileFrame } from './MobileFrame';

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <MobileFrame>
      {children ?? <Outlet />}
    </MobileFrame>
  );
};

export default MainLayout;
