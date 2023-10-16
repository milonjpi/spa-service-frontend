import ServiceDetails from '@/components/ui-pages/ServiceDetails';
import { Metadata } from 'next';

type IProps = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: '24/7 Spa | Service Details',
};

const SingleService = ({ params }: IProps) => {
  return <ServiceDetails id={params.id} />;
};

export default SingleService;
