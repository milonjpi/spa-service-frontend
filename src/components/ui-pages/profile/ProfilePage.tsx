'use client';

import MainCard from '@/components/ui-components/MainCard';
import { useGetProfileQuery } from '@/redux/api/profile/profileApi';
import { Button, Col, Row, Spin, Tooltip } from 'antd';
import { EditOutlined, KeyOutlined } from '@ant-design/icons';
import UpdateProfile from './UpdateProfile';
import { useState } from 'react';

const ProfilePage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);

  const { data, isLoading } = useGetProfileQuery('');
  return (
    <MainCard
      title={
        <Row align="middle">
          <h3 style={{ lineHeight: 1 }}>Profile Information</h3>
          <Tooltip title="Edit Profile">
            <Button type="link" onClick={() => setOpen(true)}>
              <EditOutlined />
            </Button>
          </Tooltip>
        </Row>
      }
      extra={
        <Button size="small" type="primary" icon={<KeyOutlined />} ghost>
          Change Password
        </Button>
      }
    >
      {/* popup items */}
      <UpdateProfile
        open={open}
        handleClose={() => setOpen(false)}
        preData={data}
      />
      {/* end popup items */}
      {isLoading ? (
        <Row align="middle" justify="center" style={{ padding: '40px 20px' }}>
          <Spin />
        </Row>
      ) : (
        <div>
          <Row gutter={[16, 32]}>
            <ProfileItem label="Full Name" value={data?.fullName} />
            <ProfileItem label="Email Address" value={data?.email} />
            <ProfileItem
              label="Mobile Number"
              value={data?.mobile ? data?.mobile : 'n/a'}
            />
            <ProfileItem
              label="Address"
              value={data?.address ? data?.address : 'n/a'}
            />
          </Row>
        </div>
      )}
    </MainCard>
  );
};

export default ProfilePage;

const ProfileItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <Col xs={24} md={12}>
      <div>
        <p style={{ fontWeight: 700 }}>{label}:</p>
        <p>{value}</p>
      </div>
    </Col>
  );
};
