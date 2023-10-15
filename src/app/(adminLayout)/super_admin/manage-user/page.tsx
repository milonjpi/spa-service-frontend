import ManageUserPage from '@/components/ui-pages/manage-user/ManageUserPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '24/7 Spa | Manage User',
};

const ManageUser = () => {
  return <ManageUserPage />;
};

export default ManageUser;
