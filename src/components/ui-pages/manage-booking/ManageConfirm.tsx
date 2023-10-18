'use client';

import FormDateTimePicker from '@/components/Forms/FormDateTimePicker';
import { useConfirmBookingMutation } from '@/redux/api/booking/bookingApi';
import { IBooking } from '@/types';
import { Button, Col, Modal, Row, message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

interface IProps {
  open: boolean;
  handleClose: any;
  booking: IBooking;
}

const ManageConfirm = ({ open, handleClose, booking }: IProps) => {
  const [scheduleTime, setScheduleTime] = useState<Dayjs | null>(
    dayjs(booking?.scheduleTime)
  );

  const [confirmBooking] = useConfirmBookingMutation();

  const onSubmit = async () => {
    if (!scheduleTime) {
      message.error('Schedule Date and Time Required');
    } else {
      message.loading('Confirming.....');
      try {
        const res = await confirmBooking({
          id: booking?.id,
          body: { scheduleTime },
        }).unwrap();
        if (res?.id) {
          message.success('Booking Confirmed successfully!');
          handleClose();
        }
      } catch (err: any) {
        message.error(`${err.data}`);
      }
    }
  };
  const onchange = (date: any) => {
    setScheduleTime(date);
  };
  return (
    <Modal
      title="Confirm Booking"
      open={open}
      onCancel={handleClose}
      width={450}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <FormDateTimePicker
              label="Re-Schedule Date and Time"
              required
              defaultValue={scheduleTime}
              onChange={onchange}
            />
          </Col>

          <Col xs={24}>
            <Button
              size="large"
              type="primary"
              style={{ width: '100%' }}
              onClick={onSubmit}
            >
              Confirm
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ManageConfirm;
