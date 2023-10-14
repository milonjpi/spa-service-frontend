'use client';
import { MenuOutlined } from '@ant-design/icons';
import { Col, Dropdown, Layout, Menu, Row } from 'antd';
import Link from 'next/link';
const { Header } = Layout;
import styles from './Home.module.css';
import { mainMenuItems } from '@/constants/homeHeaderItems';

const HomeHeader = () => {
  return (
    <Header>
      <Row>
        <Col xs={18} md={12}>
          <h1>
            <Link
              href="/"
              style={{
                color: '#fff',
                borderRadius: '3px',
              }}
            >
              {'24/7 SPA'}
            </Link>
          </h1>
        </Col>
        <Col xs={0} md={12} style={{ justifyContent: 'end' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            items={mainMenuItems}
            className={styles.menu_items}
          />
        </Col>
        <Col xs={6} md={0} style={{ textAlign: 'right' }}>
          <Dropdown
            menu={{
              items: mainMenuItems,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <MenuOutlined
                style={{
                  padding: 5,
                  color: '#666',
                  background: '#fff',
                  borderRadius: 5,
                }}
              />
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default HomeHeader;
