import HomeLayout from '@/components/home-layout/HomeLayout';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default MainLayout;
