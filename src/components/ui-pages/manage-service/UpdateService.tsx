import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import { serviceCategories, serviceStatus } from '@/constants/global';
import { useUpdateServiceMutation } from '@/redux/api/service/serviceApi';
import { serviceSchema } from '@/schemas/serviceSchema';
import { IService } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

interface IProps {
  open: boolean;
  handleClose: any;
  preData: IService;
};

type FormValues = {
  serviceName: string;
  description: string;
  category: string;
  price: string;
  status: string;
};

const UpdateService = ({ open, handleClose, preData }: IProps) => {
  const [updateService] = useUpdateServiceMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      message.loading('Updating.....');
      const res = await updateService({ id: preData?.id, body: data }).unwrap();
      if (res?.id) {
        message.success('Service Updated successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };

  const defaultValues = {
    serviceName: preData?.serviceName || '',
    description: preData?.description || '',
    category: preData?.category || '',
    price: preData?.price || '',
    status: preData?.status || '',
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
          resolver={yupResolver(serviceSchema)}
          defaultValues={defaultValues}
        >
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
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateService;
