import BookingPage from '@/components/ui-pages/booking/BookingPage';
import { Metadata } from 'next';

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: '24/7 Spa | Booking',
};

const Booking = ({ params }: IProps) => {
  return <BookingPage id={params.id} />;
};

export default Booking;
