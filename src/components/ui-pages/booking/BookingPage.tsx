'use client';

import { useGetSingleServiceQuery } from '@/redux/api/service/serviceApi';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Rate,
  Row,
  Spin,
  Typography,
} from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { showServiceCategory, showServiceStatus } from '@/utils/showing';
import { IReview } from '@/types';
import defaultPhoto from './default-spa.jpg';
import CustomNotFound from '@/components/ui-components/CustomNotFound';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

interface IProps {
  id: string;
}

const BookingPage = ({ id }: IProps) => {
  const { data, isLoading } = useGetSingleServiceQuery(id);

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
                }}
              >
                <div style={{ marginRight: 20 }}>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={data?.photo ? data?.photo : defaultPhoto}
                      fill={true}
                      style={{ position: 'absolute' }}
                      objectFit="cover"
                      alt="Service photo"
                    />
                  </div>
                </div>

                <div>
                  <h3 style={{ paddingBottom: 15 }}>{data?.serviceName}</h3>
                  <p>
                    {data?.description?.length > 200
                      ? data?.description?.slice(0, 200) + '...'
                      : data?.description}
                  </p>
                </div>
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
                <p style={{ color: '#6d6e70', fontSize: 16, lineHeight: 1.5 }}>
                  Subtotal: {data?.price} TK
                </p>
                <Divider />
                <Button
                  type="primary"
                  size="large"
                  danger
                  style={{ width: '100%' }}
                >
                  Confirm Booking
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <CustomNotFound />
      )}
    </>
  );
};

export default BookingPage;
