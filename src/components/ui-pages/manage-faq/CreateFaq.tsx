import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormTextArea from '@/components/Forms/FormTextArea';
import { useCreateFaqMutation } from '@/redux/api/faq/faqApi';
import { faqSchema } from '@/schemas/faqSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

type IProps = {
  open: boolean;
  handleClose: any;
};

type FormValues = {
  question: string;
  answer: string;
};

const CreateFaq = ({ open, handleClose }: IProps) => {
  const [createFaq] = useCreateFaqMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await createFaq({ ...data }).unwrap();
      if (res?.id) {
        message.success('FAQ Created successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };
  return (
    <Modal
      title="Create FAQ"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(faqSchema)}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <FormInput
                type="text"
                name="question"
                size="large"
                label="Question"
                placeholder="Type Question"
                required
              />
            </Col>
            <Col xs={24}>
              <FormTextArea
                name="answer"
                rows={4}
                label="Answer"
                placeholder="Type Answer"
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

export default CreateFaq;
