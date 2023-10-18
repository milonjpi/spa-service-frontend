'use client';

import UnAuthorizedPage from '@/components/ui-pages/UnAuthorizedPage';
import { USER_ROLE } from '@/constants/role';
import { getUserInfo } from '@/services/auth.service';
import { useEffect, useState } from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const { role } = getUserInfo() as any;

  const [auth, setAuth] = useState<boolean>(true);

  useEffect(() => {
    if (role === USER_ROLE.USER) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [role]);

  if (!auth) {
    return <UnAuthorizedPage />;
  }
  return <>{children}</>;
};

export default UserLayout;
