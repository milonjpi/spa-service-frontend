import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import { roleOptions } from '@/constants/global';
import { useCreateUserMutation } from '@/redux/api/user/userApi';
import { userSchema } from '@/schemas/userSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

type IProps = {
  open: boolean;
  handleClose: any;
};

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  role: 'super_admin' | 'admin';
};

const CreateUser = ({ open, handleClose }: IProps) => {
  const [createUser] = useCreateUserMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log(data);
    message.loading('Creating.....');
    try {
      const res = await createUser({ ...data }).unwrap();
      if (res?.id) {
        message.success('User Created successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };
  return (
    <Modal
      title="Create User"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(userSchema)}
          resetConfirm
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="fullName"
                size="large"
                label="Full Name"
                placeholder="Type Full Name"
              />
            </Col>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="email"
                size="large"
                label="Email Address"
                placeholder="Type Email"
              />
            </Col>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="password"
                size="large"
                label="Password"
                placeholder="Type Password"
              />
            </Col>
            <Col xs={24} md={12}>
              <FormSelectField
                size="large"
                name="role"
                options={roleOptions}
                label="Role"
                placeholder="Select"
              />
            </Col>
            <Col xs={24}>
              <Button
                size="large"
                htmlType="submit"
                type="primary"
                style={{ width: '100%' }}
              >
                Create
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateUser;
