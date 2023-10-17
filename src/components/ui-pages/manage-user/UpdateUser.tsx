import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import { USER_ROLE } from '@/constants/role';
import { useUpdateUserMutation } from '@/redux/api/user/userApi';
import { updateUserSchema } from '@/schemas/userSchema';
import { getUserInfo } from '@/services/auth.service';
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
  role: string;
  mobile?: string;
  address?: string;
};

const UpdateUser = ({ open, handleClose, preData }: IProps) => {
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
  const [updateUser] = useUpdateUserMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      message.loading('Updating.....');
      const res = await updateUser({ id: preData?.id, body: data }).unwrap();
      if (res?.id) {
        message.success('User Updated successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };

  const defaultValues = {
    fullName: preData?.fullName || '',
    email: preData?.email || '',
    role: preData?.role || '',
    mobile: preData?.mobile || '',
    address: preData?.address || '',
  };
  return (
    <Modal
      title="Update User"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(updateUserSchema)}
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
              <FormSelectField
                size="large"
                name="role"
                options={roleOptions}
                label="Role"
                placeholder="Select"
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
            <Col xs={24}>
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

export default UpdateUser;
