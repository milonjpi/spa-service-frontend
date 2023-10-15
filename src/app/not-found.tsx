import { Row } from 'antd';

import HomeLayout from '@/components/home-layout/HomeLayout';

const NotFoundPage = () => {
  return (
    <HomeLayout>
      <Row
        align="middle"
        style={{
          textAlign: 'center',
          flexDirection: 'column',
          padding: '100px 20px',
        }}
      >
        <h1 style={{ fontSize: 100 }}>404</h1>
        <p>
          You didn&apos;t break the internet, but we can&apos;t find what you
          are looking for.
        </p>
      </Row>
    </HomeLayout>
  );
};

export default NotFoundPage;
