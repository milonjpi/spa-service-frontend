import Notification from '@/components/ui-pages/Notification';
import { MenuProps } from 'antd';
const { default: Link } = require('next/link');

// dropdown header
export const mainMenuItems: MenuProps['items'] = [
  {
    key: 'home',
    label: <Link href="/">Home</Link>,
  },
  {
    key: 'services',
    label: <Link href="/services">Services</Link>,
  },
  {
    key: 'blogs',
    label: <Link href="/blogs">Blogs</Link>,
  },
  {
    key: 'faqs',
    label: <Link href="/faqs">FAQs</Link>,
  },
  {
    key: 'notification',
    label: <Notification />,
  },
];
