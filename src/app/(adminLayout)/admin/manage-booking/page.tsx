import ManageBookingPage from '@/components/ui-pages/manage-booking/ManageBookingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Manage Booking',
};

const ManageBooking = () => {
  return <ManageBookingPage />;
};

export default ManageBooking;
