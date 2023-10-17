import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useUpdateProfileMutation } from '@/redux/api/profile/profileApi';
import { updateProfileSchema } from '@/schemas/userSchema';
import { IUser } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

interface IProps {
  open: boolean;
  handleClose: any;
  preData: IUser;
};

type FormValues = {
  fullName: string;
  email: string;
  mobile?: string;
  address?: string;
};

const UpdateProfile = ({ open, handleClose, preData }: IProps) => {
  const [updateProfile] = useUpdateProfileMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      message.loading('Updating.....');
      const res = await updateProfile({ ...data }).unwrap();
      if (res?.id) {
        message.success('Profile Updated successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };

  const defaultValues = {
    fullName: preData?.fullName || '',
    email: preData?.email || '',
    mobile: preData?.mobile || '',
    address: preData?.address || '',
  };
  return (
    <Modal
      title="Update Profile"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(updateProfileSchema)}
          defaultValues={defaultValues}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="fullName"
                size="large"
                label="Full Name"
                placeholder="Type Full Name"
                required
              />
            </Col>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="email"
                size="large"
                label="Email Address"
                placeholder="Type Email"
                required
              />
            </Col>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="mobile"
                size="large"
                label="Mobile No"
                placeholder="Type Mobile No"
              />
            </Col>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="address"
                size="large"
                label="Address"
                placeholder="Type Address"
              />
            </Col>
            <Col xs={24}>
              <Button
                size="large"
                htmlType="submit"
                type="primary"
                style={{ width: '100%' }}
              >
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateProfile;
