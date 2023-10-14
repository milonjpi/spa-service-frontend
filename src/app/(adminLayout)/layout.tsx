import DashboardLayout from '@/components/admin-layout/DashboardLayout';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default AdminLayout;
