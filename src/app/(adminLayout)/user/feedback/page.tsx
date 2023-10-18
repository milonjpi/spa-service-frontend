import MyFeedbackPage from '@/components/ui-pages/my-feedback/MyFeedbackPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Feedback',
};

const Feedback = () => {
  return <MyFeedbackPage />;
};

export default Feedback;
