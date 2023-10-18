import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { serviceRating } from '@/constants/global';
import { useCreateReviewMutation } from '@/redux/api/review/reviewApi';
import { reviewSchema } from '@/schemas/reviewSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Modal, Rate, Row, Typography, message } from 'antd';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
const { Paragraph } = Typography;

interface IProps {
  open: boolean;
  handleClose: any;
  serviceId: string;
}

type FormValues = {
  review: string;
};

const PlaceReview = ({ open, handleClose, serviceId }: IProps) => {
  const [rating, setRating] = useState<number>(3);

  const [createReview] = useCreateReviewMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading('Submitting.....');
    try {
      const res = await createReview({ ...data, serviceId, rating }).unwrap();
      if (res?.id) {
        message.success('Review Submitted successfully!');
        handleClose();
      }
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };
  return (
    <Modal
      title="Submit Review"
      open={open}
      onCancel={handleClose}
      width={600}
      footer={null}
    >
      <div style={{ paddingTop: 10 }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(reviewSchema)}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <FormInput
                type="text"
                name="review"
                size="large"
                label="Review Please"
                placeholder="Type Review"
                required
              />
            </Col>
            <Col xs={24}>
              <Paragraph>
                Rating
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  *
                </span>
              </Paragraph>
              <Rate
                tooltips={serviceRating}
                onChange={setRating}
                value={rating}
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

export default PlaceReview;
