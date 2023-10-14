import HomeLayout from '@/components/home-layout/HomeLayout';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default MainLayout;
