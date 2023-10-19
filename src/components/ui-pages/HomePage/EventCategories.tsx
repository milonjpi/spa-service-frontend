'use client';

import { Card, Col, Row, Skeleton, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import malePhoto from '@/assets/images/male.jpg';
import femalePhoto from '@/assets/images/female.jpg';

const { Title } = Typography;

const EventCategories = () => {
  return (
    <div style={{ paddingBottom: 80, maxWidth: 1100, margin: 'auto' }}>
      <Title style={{ textAlign: 'center', paddingBottom: 30 }}>
        Categories
      </Title>
      <Row gutter={[64, 64]}>
        <Col xs={24} md={12}>
          <Link href="/services">
            <Card
              hoverable
              cover={
                <div
                  style={{ height: 400, width: '100%', position: 'relative' }}
                >
                  <Image
                    src={malePhoto}
                    alt="male"
                    priority
                    fill
                    sizes="(min-width: 100%) 50vw, 100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              }
            >
              <h2 style={{ textAlign: 'center', margin: 0, padding: 0 }}>
                Male
              </h2>
            </Card>
          </Link>
        </Col>
        <Col xs={24} md={12}>
          <Link href="/services">
            <Card
              hoverable
              cover={
                <div
                  style={{ height: 400, width: '100%', position: 'relative' }}
                >
                  <Image
                    src={femalePhoto}
                    alt="male"
                    priority
                    fill
                    sizes="(min-width: 100%) 50vw, 100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              }
            >
              <h2 style={{ textAlign: 'center', margin: 0, padding: 0 }}>
                Female
              </h2>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default EventCategories;
