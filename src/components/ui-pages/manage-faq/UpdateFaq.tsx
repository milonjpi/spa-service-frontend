import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormTextArea from '@/components/Forms/FormTextArea';
import { useUpdateFaqMutation } from '@/redux/api/faq/faqApi';
import { faqSchema } from '@/schemas/faqSchema';
import { IFaq } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

interface IProps {
  open: boolean;
  handleClose: any;
  preData: IFaq;
};

type FormValues = {
  question: string;
  answer: string;
};

const UpdateFaq = ({ open, handleClose, preData }: IProps) => {
  const [updateFaq] = useUpdateFaqMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      message.loading('Updating.....');
      const res = await updateFaq({ id: preData?.id, body: data }).unwrap();
      if (res?.id) {
        message.success('FAQ Updated successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };

  const defaultValues = {
    question: preData?.question || '',
    answer: preData?.answer || '',
  };
  return (
    <Modal
      title="Update FAQ"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(faqSchema)}
          defaultValues={defaultValues}
        >
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
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default UpdateFaq;
