import DashboardLayout from '@/components/admin-layout/DashboardLayout';


const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default AdminLayout;
