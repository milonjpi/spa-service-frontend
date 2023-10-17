import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormTextArea from '@/components/Forms/FormTextArea';
import { useCreateBlogMutation } from '@/redux/api/blog/blogApi';
import { blogSchema } from '@/schemas/blogSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

interface IProps {
  open: boolean;
  handleClose: any;
};

type FormValues = {
  title: string;
  description: string;
};

const CreateBlog = ({ open, handleClose }: IProps) => {
  const [createBlog] = useCreateBlogMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await createBlog({ ...data }).unwrap();
      if (res?.id) {
        message.success('Blog Created successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };
  return (
    <Modal
      title="Create Blog"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(blogSchema)}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <FormInput
                type="text"
                name="title"
                size="large"
                label="Blog Title"
                placeholder="Type Blog Title"
                required
              />
            </Col>
            <Col xs={24}>
              <FormTextArea
                name="description"
                rows={4}
                label="Description"
                placeholder="Type Description"
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

export default CreateBlog;
