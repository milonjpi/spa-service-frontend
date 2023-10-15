import type { MenuProps } from 'antd';
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { USER_ROLE } from './role';

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps['items'] = [
    {
      key: 'profile',
      label: <Link href="/profile">Profile</Link>,
      icon: <ProfileOutlined />,
    },
  ];

  const commonAdminSidebarItems: MenuProps['items'] = [
    {
      key: 'manage-user',
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      icon: <TableOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      key: 'manage-service',
      label: <Link href={`/${role}/manage-service`}>Manage Service</Link>,
      icon: <TableOutlined />,
    },
    {
      key: 'manage-booking',
      label: <Link href={`/${role}/manage-booking`}>Manage Booking</Link>,
      icon: <AppstoreOutlined />,
    },
    {
      key: 'manage-blog',
      label: <Link href={`/${role}/manage-blog`}>Manage Blog</Link>,
      icon: <AppstoreOutlined />,
    },
    {
      key: 'manage-faq',
      label: <Link href={`/${role}/manage-faq`}>Manage FAQ</Link>,
      icon: <AppstoreOutlined />,
    },
    {
      key: 'user-feedback',
      label: <Link href={`/${role}/user-feedback`}>User Feedback</Link>,
      icon: <AppstoreOutlined />,
    },
  ];

  const superAdminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
  ];

  const userSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    {
      key: 'booking-history',
      label: <Link href={`/${role}/booking-history`}>Booking History</Link>,
      icon: <TableOutlined />,
    },
    {
      key: 'feedback',
      label: <Link href={`/${role}/feedback`}>My Feedback</Link>,
      icon: <AppstoreOutlined />,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
