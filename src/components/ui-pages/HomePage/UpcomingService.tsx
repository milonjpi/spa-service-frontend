'use client';

import ServiceCard from '@/components/ui-components/ServiceCard';
import { useGetServiceQuery } from '@/redux/api/service/serviceApi';
import { IService } from '@/types';
import { Col, Row, Skeleton, Typography } from 'antd';
const { Title } = Typography;

const UpcomingService = () => {
  const query: Record<string, any> = {};

  query['limit'] = 4;
  query['page'] = 1;
  query['status'] = 'upcoming';

  const { data, isLoading } = useGetServiceQuery({ ...query });

  const services = data?.services || [];
  return (
    <div style={{ maxWidth: 1440, margin: 'auto', paddingBottom: 80 }}>
      <Title style={{ textAlign: 'center', paddingBottom: 30 }}>
        Upcoming Services
      </Title>
      {isLoading ? (
        <>
          <Skeleton active style={{ marginBottom: 20 }} />
          <Skeleton active />
        </>
      ) : (
        <Row gutter={[28, 60]}>
          {services?.map((el: IService) => (
            <Col key={el.id} xs={24} sm={12} lg={6}>
              <ServiceCard data={el} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default UpcomingService;
