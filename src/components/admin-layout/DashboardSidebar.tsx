'use client';

import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { sidebarItems } from '@/constants/sidebarItems';
import { getUserInfo } from '@/services/auth.service';
import { usePathname } from 'next/navigation';
const { Sider } = Layout;

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;
  const pathname = usePathname();
  const path = pathname.split('/')[2] || 'profile';

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: 'white',
          fontSize: '2rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '.5rem',
          padding: '10px 0px',
        }}
      >
        {'24/7 SPA'}
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[path]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default DashboardSidebar;
