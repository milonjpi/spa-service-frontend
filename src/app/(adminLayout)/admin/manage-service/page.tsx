import ManageServicePage from '@/components/ui-pages/manage-service/ManageServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Manage Service',
};

const ManageService = () => {
  return <ManageServicePage />;
};

export default ManageService;
