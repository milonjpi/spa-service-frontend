import { Row } from 'antd';
import React from 'react';

const ServiceNotFound = () => {
  return (
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
        You didn&apos;t break the internet, but we can&apos;t find what you are
        looking for.
      </p>
    </Row>
  );
};

export default ServiceNotFound;
