import { Button, Result } from 'antd';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '24/7 Spa | Booking Success',
};

const Success = () => {
  return (
    <Result
      status="success"
      title="Successfully placed Service booking!"
      subTitle="Please see the notification for your booking no. We will confirm your schedule date very soon"
      extra={[
        <Link href="/user/booking-history" key="history">
          <Button type="primary">Booking History</Button>
        </Link>,
        <Link href="/services" key="service">
          <Button>Our Services</Button>
        </Link>,
      ]}
    />
  );
};

export default Success;
