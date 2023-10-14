import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getUserInfo, removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/storageKey';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const { Header: AntHeader } = Layout;

const DashboardHeader = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push('/login');
  };

  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link href="/">Go To Home</Link>,
    },
    {
      key: 'logout',
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  const { role } = getUserInfo() as any;
  return (
    <AntHeader
      style={{
        background: '#fff',
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: '100%',
        }}
      >
        <p
          style={{
            margin: '0px 5px',
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default DashboardHeader;
