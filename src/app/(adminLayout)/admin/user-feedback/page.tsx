import UserFeedbackPage from '@/components/ui-pages/user-feedback/UserFeedbackPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Manage FAQ',
};

const UserFeedback = () => {
  return <UserFeedbackPage />;
};

export default UserFeedback;
