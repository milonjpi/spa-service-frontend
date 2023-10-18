import ServicePage from '@/components/ui-pages/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Services',
};

const Services = () => {
  return <ServicePage />;
};

export default Services;
