'use client';

import FormDateTimePicker from '@/components/Forms/FormDateTimePicker';
import { USER_ROLE } from '@/constants/role';
import { useCreateBookingMutation } from '@/redux/api/booking/bookingApi';
import { getUserInfo } from '@/services/auth.service';
import { IService } from '@/types';
import { Button, Col, Modal, Row, message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IProps {
  open: boolean;
  handleClose: any;
  service: IService;
}

const CreateBooking = ({ open, handleClose, service }: IProps) => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  const [scheduleTime, setScheduleTime] = useState<Dayjs | null>(
    dayjs(new Date())
  );

  const [createBooking] = useCreateBookingMutation();
  const onSubmit = async () => {
    if (!scheduleTime) {
      message.error('Schedule Date and Time Required');
    } else if (role !== USER_ROLE.USER) {
      message.error("An Admin can't booking the service");
    } else {
      const newData = {
        serviceId: service?.id,
        scheduleTime,
        price: service?.price,
      };
      message.loading('Submitting.....');
      try {
        const res = await createBooking({ ...newData }).unwrap();
        if (res?.id) {
          message.success('Service Booking successfully!');
          handleClose();
          router.push('/booking/success');
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
              label="Choose Your Schedule"
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

export default CreateBooking;
