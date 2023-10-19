import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
  Spin,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/storageKey';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGetProfileQuery } from '@/redux/api/profile/profileApi';
import { getPublicUrl } from '@/helper/config';
const { Header: AntHeader } = Layout;

const DashboardHeader = () => {
  const router = useRouter();
  const path = usePathname();
  const { data, isLoading } = useGetProfileQuery('', {
    refetchOnMountOrArgChange: true,
  });

  const logOut = () => {
    removeUserInfo(authKey);
    router.push(`/login?callbackUrl=${getPublicUrl() + path}`);
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
        <div
          style={{
            margin: '0px 5px',
          }}
        >
          {isLoading ? <Spin size="small" /> : data?.fullName}
        </div>
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
