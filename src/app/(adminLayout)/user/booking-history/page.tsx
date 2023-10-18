import BookingHistoryPage from '@/components/ui-pages/booking-history/BookingHistoryPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Booking History',
};

const BookingHistory = () => {
  return <BookingHistoryPage />;
};

export default BookingHistory;
