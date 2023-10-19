import FaqPage from '@/components/ui-pages/faq-page/FaqPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | FAQ',
};

const Faqs = () => {
  return <FaqPage />;
};

export default Faqs;
