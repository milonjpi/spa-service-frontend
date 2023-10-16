import UnAuthorizedPage from '@/components/ui-pages/UnAuthorizedPage';
import { USER_ROLE } from '@/constants/role';
import { getUserInfo } from '@/services/auth.service';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const { role } = getUserInfo() as any;
  if (role !== USER_ROLE.USER) {
    return <UnAuthorizedPage />;
  }
  return <>{children}</>;
};

export default UserLayout;
