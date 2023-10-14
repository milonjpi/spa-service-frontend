'use client';
import {
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import styles from './Home.module.css';
import React from 'react';
import HomeHeader from './HomeHeader';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HomeHeader />
      <Content
        style={{
          padding: '12px 24px',
          minHeight: '60vh',
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: '28px',
          }}
        >
          {'24/7 SPA SERVICE'}
        </h2>
        <p className={styles.social_icons}>
          <FacebookFilled />

          <TwitterSquareFilled />

          <GoogleSquareFilled />

          <LinkedinFilled />
        </p>
        {'24/7 Spa Service ©2023 All right reserved.'}
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
