'use client';

import { Avatar, Badge, List, Popover } from 'antd';
import { BellOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react';
import { useGetNotificationQuery } from '@/redux/api/notification/notificationApi';
import { INotification } from '@/types';

interface IProps {
  data: INotification[];
}

const Notification = () => {
  const { data } = useGetNotificationQuery(
    { limit: 3 },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 10000,
    }
  );
  const allNotifications = data?.notifications || [];

  return (
    <Popover
      content={<NotificationContent data={allNotifications} />}
      trigger="click"
      placement="bottomRight"
    >
      <Badge dot={allNotifications?.length ? true : false}>
        <BellOutlined style={{ color: '#ffffffa6', fontSize: 16 }} />
      </Badge>
    </Popover>
  );
};

export default Notification;

const NotificationContent = ({ data }: IProps) => {
  return (
    <List
      style={{ width: 300 }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar>
                <MessageOutlined />
              </Avatar>
            }
            title="Service Notification"
            description={item.notification}
          />
        </List.Item>
      )}
    />
  );
};
