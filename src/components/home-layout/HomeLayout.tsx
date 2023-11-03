'use client';
import {
  HomeOutlined,
  MailOutlined,
  MobileOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';
import { Col, Layout, List, Row } from 'antd';
const { Content, Footer } = Layout;
import styles from './Home.module.css';
import React from 'react';
import HomeHeader from './HomeHeader';
import Link from 'next/link';

const contacts = [
  {
    icon: <HomeOutlined style={{ color: '#fff8' }} />,
    title: 'Dhaka, Bangladesh, Asia.',
  },
  {
    icon: <MailOutlined style={{ color: '#fff8' }} />,
    title: 'email@mail.com',
  },
  {
    icon: <MobileOutlined style={{ color: '#fff8' }} />,
    title: '+8801000000000',
  },
];

const links = [
  {
    key: 'home',
    label: (
      <Link href="/" style={{ color: '#fff8' }}>
        Home
      </Link>
    ),
  },
  {
    key: 'services',
    label: (
      <Link href="/services" style={{ color: '#fff8' }}>
        Services
      </Link>
    ),
  },
  {
    key: 'blogs',
    label: (
      <Link href="/blogs" style={{ color: '#fff8' }}>
        Blogs
      </Link>
    ),
  },
  {
    key: 'faqs',
    label: (
      <Link href="/faqs" style={{ color: '#fff8' }}>
        FAQs
      </Link>
    ),
  },
];

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HomeHeader />
      <Content
        style={{
          padding: '0px 24px',
          minHeight: '60vh',
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          background: '#111',
        }}
      >
        <Row gutter={[32, 64]}>
          <Col xs={24} md={12} lg={8}>
            <h2
              style={{
                fontSize: '28px',
                color: '#fff8',
                marginBottom: 30,
              }}
            >
              {'24/7 SPA SERVICE'}
            </h2>
            <List
              itemLayout="horizontal"
              dataSource={contacts}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={item.icon}
                    title={<p style={{ color: '#fff8' }}>{item.title}</p>}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <h2
              style={{
                fontSize: '20px',
                color: '#fff8',
                marginBottom: 20,
              }}
            >
              Important Links
            </h2>
            <List
              itemLayout="horizontal"
              dataSource={links}
              renderItem={(item) => <List.Item style={{padding: '8px 0'}}>{item.label}</List.Item>}
            />
          </Col>
          <Col xs={24} md={12} lg={8}>
          <h2
              style={{
                fontSize: '20px',
                color: '#fff8',
                marginBottom: 20,
              }}
            >
              Social Links
            </h2>
            <p className={styles.social_icons}>
              <FacebookFilled />

              <TwitterSquareFilled />

              <GoogleSquareFilled />

              <LinkedinFilled />
            </p>
          </Col>
        </Row>

        <Row
          align="middle"
          justify="center"
          style={{ borderTop: '1px solid #fff3', marginTop: 20 }}
        >
          <p style={{ padding: '20px 10px 0 10px', color: '#fff8' }}>
            {'24/7 Spa Service ©2023 All right reserved.'}
          </p>
        </Row>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
