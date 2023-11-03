'use client';

import OverviewCard from '@/components/ui-components/OverviewCard';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

type Item = {
  title: string;
  value: number;
};

const Overview = () => {
  const items = [
    {
      title: 'Happy Client',
      value: 150,
    },
    {
      title: 'Available Services',
      value: 25,
    },
    {
      title: 'Upcoming Services',
      value: 12,
    },
    {
      title: 'Rating',
      value: 4,
    },
  ];
  return (
    <div style={{ paddingBottom: 80, maxWidth: 1440, margin: 'auto' }}>
      <Title style={{ textAlign: 'center', paddingBottom: 30 }}>Overview</Title>
      <Row gutter={[32, 64]}>
        {items.map((el: Item) => (
          <Col key={el?.title} xs={24} sm={12} md={8} lg={6}>
            <OverviewCard data={el} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Overview;
