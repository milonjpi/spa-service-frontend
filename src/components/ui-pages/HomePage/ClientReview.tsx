'use client';

import ClientReviewCard from '@/components/ui-components/ClientReviewCard';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

type Item = {
  review: string;
  by: string;
};

const ClientReview = () => {
  const items = [
    {
      review:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
      by: 'Adam Gilcrist',
    },
    {
      review:
        'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore',
      by: 'Kabir Shing',
    },
    {
      review:
        'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best',
      by: 'Tiger Shrof',
    },
  ];
  return (
    <div style={{ paddingBottom: 80, maxWidth: 1100, margin: 'auto' }}>
      <Title style={{ textAlign: 'center', paddingBottom: 30 }}>
        Client Review
      </Title>
      <Row gutter={[16, 64]}>
        {items.map((el: Item) => (
          <Col key={el?.by} xs={24} md={12} lg={8}>
            <ClientReviewCard data={el} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClientReview;
