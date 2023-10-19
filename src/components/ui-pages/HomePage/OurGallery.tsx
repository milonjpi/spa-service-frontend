import { Col, Row, Typography } from 'antd';
import gallery1 from '@/assets/images/spa-big.jpg';
import gallery2 from '@/assets/images/hero.jpg';
import gallery3 from '@/assets/images/blog-big.jpg';
import gallery4 from '@/assets/images/male.jpg';
import Image from 'next/image';

const { Title } = Typography;

const OurGallery = () => {
  return (
    <div style={{ paddingBottom: 80, maxWidth: 1440, margin: 'auto' }}>
      <Title style={{ textAlign: 'center', paddingBottom: 30 }}>
        Our Gallery
      </Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <div style={{ width: '100%', height: 500, position: 'relative' }}>
            <Image
              src={gallery1}
              fill
              priority
              sizes="(min-width: 100%) 50vw, 100vw"
              style={{
                objectFit: 'cover',
              }}
              alt="gallery photo"
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <div style={{ width: '100%', height: 242, position: 'relative' }}>
                <Image
                  src={gallery2}
                  fill
                  priority
                  sizes="(min-width: 100%) 50vw, 100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  alt="gallery photo"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ width: '100%', height: 242, position: 'relative' }}>
                <Image
                  src={gallery3}
                  fill
                  priority
                  sizes="(min-width: 100%) 50vw, 100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  alt="gallery photo"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ width: '100%', height: 242, position: 'relative' }}>
                <Image
                  src={gallery4}
                  fill
                  priority
                  sizes="(min-width: 100%) 50vw, 100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  alt="gallery photo"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OurGallery;
