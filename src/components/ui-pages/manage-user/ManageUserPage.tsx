'use client';

import CardAction from '@/components/ui-components/CardAction';
import MainCard from '@/components/ui-components/MainCard';
import CreateUser from './CreateUser';
import { useState } from 'react';

const ManageUserPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <MainCard title="Manage User" extra={<CardAction title="Add User" onClick={() => setOpen(true)} />}>
      {/* popup Items */}
      <CreateUser open={open} handleClose={() => setOpen(false)} />
      {/* popup Items */}
      <p>Manage User</p>
    </MainCard>
  );
};

export default ManageUserPage;
