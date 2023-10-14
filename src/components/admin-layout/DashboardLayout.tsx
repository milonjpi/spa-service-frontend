'use client';
import DashboardContent from './DashboardContent';
import DashboardSidebar from './DashboardSidebar';
import { isLoggedIn } from '@/services/auth.service';
import { Layout, Row, Space, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push('/login');
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

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
