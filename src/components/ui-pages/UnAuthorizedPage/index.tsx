import { Row } from 'antd';
import React from 'react';

const UnAuthorizedPage = () => {
  return (
    <Row
      align="middle"
      style={{
        textAlign: 'center',
        flexDirection: 'column',
        padding: '100px 20px',
      }}
    >
      <h1 style={{ fontSize: 100 }}>401</h1>
      <p>You are not authorized.</p>
    </Row>
  );
};

export default UnAuthorizedPage;
