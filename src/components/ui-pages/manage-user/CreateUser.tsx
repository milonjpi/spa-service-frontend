import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import { USER_ROLE } from '@/constants/role';
import { useCreateUserMutation } from '@/redux/api/user/userApi';
import { userSchema } from '@/schemas/userSchema';
import { getUserInfo } from '@/services/auth.service';
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
  role: 'super_admin' | 'admin' | 'user';
};

const CreateUser = ({ open, handleClose }: IProps) => {
  const { role } = getUserInfo() as any;

  const roleOptions =
    role === USER_ROLE.SUPER_ADMIN
      ? [
          {
            label: 'Super Admin',
            value: 'super_admin',
          },
          {
            label: 'Admin',
            value: 'admin',
          },
        ]
      : [
          {
            label: 'Admin',
            value: 'admin',
          },
          {
            label: 'User',
            value: 'user',
          },
        ];

  const [createUser] = useCreateUserMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
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
        <Form submitHandler={onSubmit} resolver={yupResolver(userSchema)}>
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
                name="password"
                size="large"
                label="Password"
                placeholder="Type Password"
                required
              />
            </Col>
            <Col xs={24} md={12}>
              <FormSelectField
                size="large"
                name="role"
                options={roleOptions}
                label="Role"
                placeholder="Select"
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
