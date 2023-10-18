'use client';
import { getPublicUrl } from '@/helper/config';
import DashboardContent from './DashboardContent';
import DashboardSidebar from './DashboardSidebar';
import { isLoggedIn } from '@/services/auth.service';
import { Layout } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const path = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push(`/login?callbackUrl=${getPublicUrl() + path}`);
    }
    setIsLoading(true);
  }, [router, userLoggedIn, path]);

  if (!isLoading) {
    return (
      <div id="preloader">
        <div className="preloader-spin"></div>
      </div>
    );
  }

  return (
    <Layout hasSider>
      <DashboardSidebar />
      <DashboardContent>{children}</DashboardContent>
    </Layout>
  );
};

export default DashboardLayout;
