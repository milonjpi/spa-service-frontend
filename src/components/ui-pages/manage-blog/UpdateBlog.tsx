import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormTextArea from '@/components/Forms/FormTextArea';
import { useUpdateBlogMutation } from '@/redux/api/blog/blogApi';
import { blogSchema } from '@/schemas/blogSchema';
import { IBlog } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

type IProps = {
  open: boolean;
  handleClose: any;
  preData: IBlog;
};

type FormValues = {
  title: string;
  description: string;
};

const UpdateBlog = ({ open, handleClose, preData }: IProps) => {
  const [updateBlog] = useUpdateBlogMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      message.loading('Updating.....');
      const res = await updateBlog({ id: preData?.id, body: data }).unwrap();
      if (res?.id) {
        message.success('Blog Updated successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };

  const defaultValues = {
    title: preData?.title || '',
    description: preData?.description || '',
  };
  return (
    <Modal
      title="Update Blog"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(blogSchema)}
          defaultValues={defaultValues}
        >
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
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateBlog;
