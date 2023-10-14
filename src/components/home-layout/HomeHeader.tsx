'use client';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Menu, MenuProps, Row } from 'antd';
import Link from 'next/link';
const { Header } = Layout;
import styles from './Home.module.css';
import { mainMenuItems } from '@/constants/homeHeaderItems';
import { isLoggedIn, removeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/router';
import { authKey } from '@/constants/storageKey';

const HomeHeader = () => {
  const userLoggedIn = isLoggedIn();

  const logOut = () => {
    removeUserInfo(authKey);
  };
  const extendedItems: MenuProps['items'] = [
    {
      key: 'user',
      label: <UserOutlined />,
      children: userLoggedIn
        ? [
            {
              key: 'dashboard',
              label: <Link href="/profile">Dashboard</Link>,
            },
            {
              key: 'logout',
              label: (
                <Button onClick={logOut} type="text" danger>
                  Logout
                </Button>
              ),
            },
          ]
        : [
            {
              key: 'signup',
              label: <Link href="/signup">Sign Up</Link>,
            },
            {
              key: 'login',
              label: <Link href="/login">Login</Link>,
            },
          ],
    },
  ];
  const finalMenus: MenuProps['items'] = [
    ...(mainMenuItems || []),
    ...extendedItems,
  ];
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
            items={finalMenus}
            className={styles.menu_items}
          />
        </Col>
        <Col xs={6} md={0} style={{ textAlign: 'right' }}>
          <Dropdown
            menu={{
              items: finalMenus,
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
