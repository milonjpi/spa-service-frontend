'use client';

import { useGetSingleServiceQuery } from '@/redux/api/service/serviceApi';
import { Button, Card, Col, Divider, Row, Spin, Typography } from 'antd';
import Image from 'next/image';
import { showServiceCategory } from '@/utils/showing';
import defaultPhoto from '@/assets/images/spa-small.jpg';
import CustomNotFound from '@/components/ui-components/CustomNotFound';
import Link from 'next/link';
import { useGetProfileQuery } from '@/redux/api/profile/profileApi';
import { useState } from 'react';
import CreateBooking from './CreateBooking';

const { Paragraph } = Typography;

interface IProps {
  id: string;
}

const BookingPage = ({ id }: IProps) => {
  const { data, isLoading } = useGetSingleServiceQuery(id);
  const { data: profileData } = useGetProfileQuery('');

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {isLoading ? (
        <Row align="middle" justify="center" style={{ height: 300 }}>
          <Spin size="large" />
        </Row>
      ) : data ? (
        <div style={{ padding: '50px 0', maxWidth: 1000, margin: 'auto' }}>
          <h1
            style={{
              padding: 10,
              margin: 0,
              textAlign: 'center',
              background: '#11111128',
              borderRadius: 10,
              marginBottom: 30,
              textTransform: 'uppercase',
            }}
          >
            Service Booking
          </h1>
          <Row gutter={[48, 64]}>
            <Col xs={24} md={16}>
              <div
                style={{
                  display: 'flex',
                  marginBottom: 80,
                }}
              >
                <div style={{ marginRight: 20 }}>
                  <Image
                    src={data?.photo ? data?.photo : defaultPhoto}
                    width={100}
                    height={100}
                    priority
                    alt="Service photo"
                  />
                </div>

                <div>
                  <div style={{ marginBottom: 10 }}>
                    <h3 style={{ lineHeight: 1, fontSize: 20 }}>
                      {data?.serviceName}
                    </h3>
                    <Paragraph
                      style={{
                        color: '#00000073',
                        lineHeight: 1.5,
                        fontSize: 13,
                      }}
                    >
                      Category: {showServiceCategory(data?.category)}
                    </Paragraph>
                  </div>

                  <Paragraph>
                    {data?.description?.length > 200
                      ? data?.description?.slice(0, 200) + '...'
                      : data?.description}
                  </Paragraph>
                </div>
              </div>
              <div>
                <h3>Your Contact Information</h3>
                <Divider style={{ marginTop: 10 }} />
                <Row gutter={[16, 24]}>
                  <Col xs={24} md={12}>
                    <Paragraph style={{ color: '#00000073' }}>
                      Mobile:{' '}
                      <span style={{ color: '#000000e0' }}>
                        {profileData?.mobile ? profileData?.mobile : 'n/a'}
                      </span>
                    </Paragraph>
                  </Col>
                  <Col xs={24} md={12}>
                    <Paragraph style={{ color: '#00000073' }}>
                      Email:{' '}
                      <span style={{ color: '#000000e0' }}>
                        {profileData?.email}
                      </span>
                    </Paragraph>
                  </Col>
                  <Col xs={24}>
                    <Paragraph style={{ color: '#00000073' }}>
                      Address:{' '}
                      <span style={{ color: '#000000e0' }}>
                        {profileData?.address ? profileData?.address : 'n/a'}
                      </span>
                    </Paragraph>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <Card
                title="Your Subtotal"
                style={{ width: '100%' }}
                headStyle={{
                  backgroundColor: '#6d6e70',
                  color: '#fff',
                  fontSize: 18,
                }}
                bodyStyle={{ backgroundColor: '#f2f2f2' }}
                bordered={false}
              >
                <Paragraph
                  style={{ color: '#6d6e70', fontSize: 16, lineHeight: 1.5 }}
                >
                  Subtotal: {data?.price} TK
                </Paragraph>
                <Divider />
                <Button
                  type="primary"
                  size="large"
                  danger
                  style={{ width: '100%', marginTop: 15 }}
                  onClick={() => setOpen(true)}
                >
                  Confirm Booking
                </Button>
              </Card>
            </Col>
          </Row>
          {/* popup items */}
          <CreateBooking open={open} handleClose={() => setOpen(false)} service={data} />
          {/* end popup items */}
        </div>
      ) : (
        <CustomNotFound />
      )}
    </>
  );
};

export default BookingPage;
