'use client';

import { useGetSingleServiceQuery } from '@/redux/api/service/serviceApi';
import { Avatar, Button, Col, Rate, Row, Spin, Typography } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import ServiceNotFound from './ServiceNotFound';
import Image from 'next/image';
import { showServiceCategory, showServiceStatus } from '@/utils/showing';
import { IReview } from '@/types';
import defaultPhoto from './default-spa.jpg';

const { Title, Paragraph } = Typography;

type IProps = {
  id: string;
};

const ServiceDetails = ({ id }: IProps) => {
  const { data, isLoading } = useGetSingleServiceQuery(id);

  const serviceRating = data?.reviewRatings?.reduce(
    (acc: number, el: IReview) => acc + el.rating,
    0
  );

  return (
    <>
      {isLoading ? (
        <Row align="middle" justify="center" style={{ height: 300 }}>
          <Spin size="large" />
        </Row>
      ) : data ? (
        <div style={{ padding: '100px 0' }}>
          <Row gutter={[48, 64]}>
            <Col xs={24} md={12}>
              <div style={{ width: '100%', height: 500, position: 'relative' }}>
                <Image
                  src={data?.photo ? data?.photo : defaultPhoto}
                  fill={true}
                  style={{ position: 'absolute' }}
                  objectFit="cover"
                  alt="product photo"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Title level={3}>{data?.serviceName}</Title>
                <Paragraph>
                  Category:{' '}
                  <span style={{ color: '#666666' }}>
                    {showServiceCategory(data?.category)}
                  </span>
                </Paragraph>
                <div style={{ paddingTop: 15 }}>
                  <Paragraph style={{ paddingBottom: 15 }}>
                    Price:{' '}
                    <span style={{ fontWeight: 700 }}>{data?.price}</span>
                  </Paragraph>
                  <Paragraph style={{ marginBottom: 25 }}>
                    Status:{' '}
                    <span
                      style={{
                        color:
                          data?.status === 'notAvailable'
                            ? 'red'
                            : data?.status === 'upcoming'
                            ? '#614cab'
                            : 'green',
                      }}
                    >
                      {showServiceStatus(data?.status)}
                    </span>
                  </Paragraph>
                  <div style={{ marginBottom: 25 }}>
                    <Paragraph style={{ margin: 0 }}>Rating:</Paragraph>
                    <Rate disabled defaultValue={serviceRating} />
                  </div>
                </div>
                <div>
                  <Title level={4} style={{ fontWeight: 700 }}>
                    Description:
                  </Title>
                  <Paragraph>{data?.description}</Paragraph>
                </div>
                <Row align="middle">
                  <Button
                    type="primary"
                    size="large"
                    icon={<PlusOutlined />}
                    style={{ marginRight: 20 }}
                  >
                    Add To Cart
                  </Button>
                  <Button type="primary" size="large">
                    Go to Cart
                  </Button>
                </Row>
              </div>
            </Col>

            <Col xs={24}>
              <div>
                <Title level={2}>Reviews:</Title>
                {data?.reviewRatings.length ? (
                  data?.reviewRatings?.map((el: IReview, index: any) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingBottom: 20,
                      }}
                    >
                      <Avatar size={40} icon={<UserOutlined />} />
                      <Paragraph style={{ margin: 0, paddingLeft: 10 }}>
                        {el.review}
                      </Paragraph>
                    </div>
                  ))
                ) : (
                  <Paragraph>No Review Found</Paragraph>
                )}
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <ServiceNotFound />
      )}
    </>
  );
};

export default ServiceDetails;
