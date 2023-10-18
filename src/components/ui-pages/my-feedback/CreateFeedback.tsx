import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormTextArea from '@/components/Forms/FormTextArea';
import { useCreateFeedbackMutation } from '@/redux/api/feedback/feedbackApi';
import { feedbackSchema } from '@/schemas/feedbackSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Row, message } from 'antd';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

interface IProps {
  open: boolean;
  handleClose: any;
}

type FormValues = {
  comment: string;
  suggestion?: string;
};

const CreateFeedback = ({ open, handleClose }: IProps) => {
  const [createFeedback] = useCreateFeedbackMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading('Submitting.....');
    try {
      const res = await createFeedback({ ...data }).unwrap();
      if (res?.id) {
        message.success('Feedback Submitted successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };
  return (
    <Modal
      title="Submit Feedback"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(feedbackSchema)}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <FormInput
                type="text"
                name="comment"
                size="large"
                label="Comment"
                placeholder="Type Comment"
                required
              />
            </Col>
            <Col xs={24}>
              <FormTextArea
                name="suggestion"
                rows={4}
                label="Suggestion"
                placeholder="Type Suggestion"
              />
            </Col>
            <Col xs={24}>
              <Button
                size="large"
                htmlType="submit"
                type="primary"
                style={{ width: '100%' }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateFeedback;
