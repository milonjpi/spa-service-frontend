import { Avatar, MenuProps, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { default: Link } = require('next/link');

// dropdown header
export const mainMenuItems: MenuProps['items'] = [
  {
    key: 'home',
    label: <Link href="/">Home</Link>,
  },
  {
    key: 'service',
    label: <Link href="/services">Services</Link>,
  },
  {
    key: 'blog',
    label: <Link href="/blogs">Blogs</Link>,
  },
  {
    key: 'faq',
    label: <Link href="/faqs">FAQs</Link>,
  },
  {
    key: 'user',
    label: <UserOutlined />,
    children: [
      {
        key: 'user-register',
        label: <Link href="/signup">Sign Up</Link>,
      },
      {
        key: 'user-login',
        label: <Link href="/login">Login</Link>,
      },
    ],
  },
];
