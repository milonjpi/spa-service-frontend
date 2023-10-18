import { IBooking } from '@/types';
import { Button, Tooltip, message } from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CheckOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import ConfirmDialog from '@/components/ui-components/ConfirmDialog';
import {
  useCancelBookingMutation,
  useCompleteServiceMutation,
} from '@/redux/api/booking/bookingApi';
import ManageConfirm from './ManageConfirm';

interface IProps {
  data: IBooking;
}

const ManageBookingAction = ({ data }: IProps) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const [cancel, setCancel] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const [cancelBooking] = useCancelBookingMutation();
  const [completeService] = useCompleteServiceMutation();

  const handleCancel = async () => {
    try {
      message.loading('Canceling.....');
      setCancel(false);
      const res = await cancelBooking(data?.id).unwrap();
      if (res) {
        message.success('Booking Successfully Canceled!');
      }
    } catch (error: any) {
      message.error(`${error.data}`);
    }
  };

  const handleComplete = async () => {
    try {
      message.loading('Completing.....');
      setComplete(false);
      const res = await completeService(data?.id).unwrap();
      if (res) {
        message.success('Service Completed Successfully!');
      }
    } catch (error: any) {
      message.error(`${error.data}`);
    }
  };

  return (
    <>
      {data?.status === 'pending' ? (
        <>
          <Tooltip title="Confirm" placement="left">
            <Button
              type="primary"
              onClick={() => {
                setConfirm(true);
              }}
              style={{ marginRight: 5, marginBottom: 5 }}
            >
              <CheckCircleOutlined />
            </Button>
          </Tooltip>
          <Tooltip title="Cancel" placement="left">
            <Button
              type="primary"
              onClick={() => {
                setCancel(true);
              }}
              danger
            >
              <CloseCircleOutlined />
            </Button>
          </Tooltip>
        </>
      ) : data?.status === 'confirmed' ? (
        <Tooltip title="Complete Service" placement="left">
          <Button
            type="primary"
            onClick={() => {
              setComplete(true);
            }}
            style={{ marginLeft: '3px' }}
          >
            <CheckOutlined />
          </Button>
        </Tooltip>
      ) : (
        <InfoCircleOutlined />
      )}

      {/* popup items */}
      <ManageConfirm
        open={confirm}
        handleClose={() => setConfirm(false)}
        booking={data}
      />
      <ConfirmDialog
        title="Cancel Booking"
        open={cancel}
        onOk={handleCancel}
        onCancel={() => setCancel(false)}
      />
      <ConfirmDialog
        title="Complete Service"
        open={complete}
        onOk={handleComplete}
        onCancel={() => setComplete(false)}
      />
      {/* end popup items */}
    </>
  );
};

export default ManageBookingAction;
