'use client';

import OverviewCard from '@/components/ui-components/OverviewCard';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

type Item = {
  title: string;
  value: number;
  color?: string;
};

const Overview = () => {
  const items = [
    {
      title: 'Happy Client',
      value: 150,
      color: '#0F0F0F',
    },
    {
      title: 'Available Services',
      value: 25,
      color: '#0C356A',
    },
    {
      title: 'Upcoming Services',
      value: 12,
      color: '#765827',
    },
    {
      title: 'Rating',
      value: 4,
      color: '#F11A7B',
    },
  ];
  return (
    <div style={{ paddingBottom: 80, maxWidth: 1440, margin: 'auto' }}>
      <Title style={{ textAlign: 'center', paddingBottom: 30 }}>Overview</Title>
      <Row gutter={[16, 64]}>
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
