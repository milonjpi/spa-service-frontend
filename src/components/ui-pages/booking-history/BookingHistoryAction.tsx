import { IBooking } from '@/types';
import { Button, Tooltip, message } from 'antd';
import {
  CloseCircleFilled,
  InfoCircleOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import ConfirmDialog from '@/components/ui-components/ConfirmDialog';
import { useCancelBookingMutation } from '@/redux/api/booking/bookingApi';
import PlaceReview from './PlaceReview';

interface IProps {
  data: IBooking;
}

const BookingHistoryAction = ({ data }: IProps) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const [rate, setRate] = useState<boolean>(false);

  const [cancelBooking] = useCancelBookingMutation();
  const handleCancel = async () => {
    try {
      message.loading('Canceling.....');
      setConfirm(false);
      const res = await cancelBooking(data?.id).unwrap();
      if (res) {
        message.success('Booking Successfully Canceled!');
      }
    } catch (error: any) {
      message.error(`${error.data}`);
    }
  };

  return (
    <>
      {['pending', 'confirmed'].includes(data?.status) ? (
        <Tooltip title="Cancel" placement="left">
          <Button
            type="primary"
            onClick={() => {
              setConfirm(true);
            }}
            danger
            style={{ marginLeft: '3px' }}
          >
            <CloseCircleFilled />
          </Button>
        </Tooltip>
      ) : data?.status === 'completed' ? (
        <Tooltip title="Rate This Service" placement="left">
          <Button
            type="primary"
            onClick={() => {
              setRate(true);
            }}
            style={{ marginLeft: '3px' }}
          >
            <MessageOutlined />
          </Button>
        </Tooltip>
      ) : (
        <InfoCircleOutlined />
      )}

      {/* popup items */}
      <ConfirmDialog
        title="Cancel Booking"
        open={confirm}
        onOk={handleCancel}
        onCancel={() => setConfirm(false)}
      />
      <PlaceReview
        open={rate}
        handleClose={() => setRate(false)}
        serviceId={data?.serviceId}
      />
      {/* end popup items */}
    </>
  );
};

export default BookingHistoryAction;
