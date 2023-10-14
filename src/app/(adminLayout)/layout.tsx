import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Admin Layout header</h2>
      {children}
      <h2>Admin Layout Footer</h2>
    </div>
  );
};

export default AdminLayout;
