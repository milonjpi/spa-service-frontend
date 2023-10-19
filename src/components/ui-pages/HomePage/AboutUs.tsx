'use client';

import { Col, Row, Typography } from 'antd';
import defaultPhoto from '@/assets/images/about.jpg';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: '80px 0px', maxWidth: 1100, margin: 'auto' }}>
      <Row gutter={[36, 36]} justify="center">
        <Col xs={24} lg={12}>
          <div style={{ width: '100%', height: 500, position: 'relative' }}>
            <Image
              src={defaultPhoto}
              fill
              priority
              sizes="(min-width: 100%) 50vw, 100vw"
              style={{
                objectFit: 'cover',
                borderRadius: 10,
              }}
              alt="about photo"
            />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <Title>About Us</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            accusantium culpa delectus, aspernatur minus accusamus minima in
            dolores similique enim? Repudiandae deserunt magni ut corporis atque
            molestiae autem sed fuga libero, architecto provident deleniti porro
            dignissimos alias eius cumque? Accusamus iusto enim eos eligendi
            temporibus veritatis necessitatibus, fugiat adipisci, repellat
            asperiores maiores tempore quidem inventore sunt nam quis incidunt
            tempora. Excepturi, expedita omnis? Ex consectetur nam perferendis,
            ea consequatur autem nisi odit iste. Eius eaque tempora quod! A fuga
            unde quia facere fugiat dolor maiores vero totam mollitia nesciunt?
            Possimus corporis
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
