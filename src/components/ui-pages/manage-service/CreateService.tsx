import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import { serviceCategories, serviceStatus } from '@/constants/global';
import { useCreateServiceMutation } from '@/redux/api/service/serviceApi';
import { serviceSchema } from '@/schemas/serviceSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

interface IProps {
  open: boolean;
  handleClose: any;
};

type FormValues = {
  serviceName: string;
  description: string;
  category: 'male' | 'female';
  price: number;
  status: 'upcoming' | 'available' | 'notAvailable';
};

const CreateService = ({ open, handleClose }: IProps) => {
  const [createService] = useCreateServiceMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await createService({ ...data }).unwrap();
      if (res?.id) {
        message.success('Service Created successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };
  return (
    <Modal
      title="Create Service"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="serviceName"
                size="large"
                label="Service Name"
                placeholder="Type Service Name"
                required
              />
            </Col>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="description"
                size="large"
                label="Description"
                placeholder="Type Description"
                required
              />
            </Col>
            <Col xs={24} md={12}>
              <FormSelectField
                size="large"
                name="category"
                options={serviceCategories}
                label="Category"
                placeholder="Select"
                required
              />
            </Col>
            <Col xs={24} md={12}>
              <FormInput
                type="text"
                name="price"
                size="large"
                label="Price"
                placeholder="Type Price"
                required
              />
            </Col>
            <Col xs={24} md={12}>
              <FormSelectField
                size="large"
                name="status"
                options={serviceStatus}
                label="Status"
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

export default CreateService;
