import ManageFaqPage from '@/components/ui-pages/manage-faq/ManageFaqPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Manage FAQ',
};

const ManageFaq = () => {
  return <ManageFaqPage />;
};

export default ManageFaq;
