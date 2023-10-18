'use client';

import { useGetSingleServiceQuery } from '@/redux/api/service/serviceApi';
import { Avatar, Button, Col, Rate, Row, Spin, Typography } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { showServiceCategory, showServiceStatus } from '@/utils/showing';
import { IReview } from '@/types';
import defaultPhoto from '@/assets/images/spa-big.jpg';
import CustomNotFound from '@/components/ui-components/CustomNotFound';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

interface IProps {
  id: string;
}

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
        <div style={{ padding: '100px 0', maxWidth: 1200, margin: 'auto' }}>
          <Row gutter={[48, 64]}>
            <Col xs={24} md={12}>
              <div style={{ width: '100%', height: 500, position: 'relative' }}>
                <Image
                  src={data?.photo ? data?.photo : defaultPhoto}
                  fill={true}
                  style={{ position: 'absolute' }}
                  objectFit="cover"
                  alt="service photo"
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
                <div style={{ marginBottom: 40 }}>
                  <Title level={4} style={{ fontWeight: 700 }}>
                    Description:
                  </Title>
                  <Paragraph>{data?.description}</Paragraph>
                </div>

                <Link href={`/booking/${data?.id}`}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                  >
                    Book Now
                  </Button>
                </Link>
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
        <CustomNotFound />
      )}
    </>
  );
};

export default ServiceDetails;
