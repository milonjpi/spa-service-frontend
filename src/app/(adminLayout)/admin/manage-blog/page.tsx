import ManageBlogPage from '@/components/ui-pages/manage-blog/ManageBlogPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Manage Blog',
};

const ManageBlog = () => {
  return <ManageBlogPage />;
};

export default ManageBlog;
