'use client';

import { Row } from 'antd';

const ErrorPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: '100vh',
        color: 'red',
      }}
    >
      <h1 style={{ fontSize: 100 }}>Woops!!!</h1>
      <h1>Something Went Wrong!!!</h1>
      <p>Please try again, It will be fine.</p>
    </Row>
  );
};

export default ErrorPage;
