import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useUpdateProfileMutation } from '@/redux/api/profile/profileApi';
import { passwordSchema } from '@/schemas/userSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

type IProps = {
  open: boolean;
  handleClose: any;
};

type FormValues = {
  password: string;
};

const ChangePassword = ({ open, handleClose }: IProps) => {
  const [updateProfile] = useUpdateProfileMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      message.loading('Changing.....');
      const res = await updateProfile({ ...data }).unwrap();
      if (res?.id) {
        message.success('Password Changed successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };

  return (
    <Modal
      title="Change Password"
      open={open}
      onCancel={handleClose}
      width={300}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(passwordSchema)}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="password"
                size="large"
                label="Password"
                placeholder="Type Password"
                required
              />
            </Col>
            <Col xs={24}>
              <Button
                size="large"
                htmlType="submit"
                type="primary"
                style={{ width: '100%' }}
              >
                Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default ChangePassword;
