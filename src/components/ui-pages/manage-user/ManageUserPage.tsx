'use client';

import CardAction from '@/components/ui-components/CardAction';
import MainCard from '@/components/ui-components/MainCard';
import CreateUser from './CreateUser';
import { useState } from 'react';
import SpaTable from '@/components/ui-components/SpaTable';
import { useDebounced } from '@/redux/hooks';
import { useGetUserQuery } from '@/redux/api/user/userApi';
import { Button, Input, Row } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { IUser } from '@/types';
import ManageUserAction from './ManageUserAction';
import { getUserInfo } from '@/services/auth.service';
import { USER_ROLE } from '@/constants/role';

const ManageUserPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { role } = getUserInfo() as any;

  // filtering and pagination
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  query['limit'] = size;
  query['page'] = page;
  query['sortBy'] = sortBy;
  query['sortOrder'] = sortOrder;

  if (role === USER_ROLE.SUPER_ADMIN) {
    query['role'] = JSON.stringify(['super_admin', 'admin']);
  } else {
    query['role'] = JSON.stringify(['admin', 'user']);
  }

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query['searchTerm'] = debouncedSearchTerm;
  }
  const { data, isLoading } = useGetUserQuery({ ...query });

  const users = data?.users;
  const meta = data?.meta;
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log('Page:', page, 'PageSize:', pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === 'ascend' ? 'asc' : 'desc');
  };

  const resetFilters = () => {
    setSortBy('');
    setSortOrder('');
    setSearchTerm('');
  };

  // end filtering and pagination

  const columns = [
    {
      title: 'SN',
      render: (data: any, item: any, index: any) => (page - 1) * 10 + index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'fullName',
      sorter: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: true,
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      render: (el: string) => el || 'n/a',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (el: string) => el || 'n/a',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      sorter: true,
    },
    {
      title: 'Action',
      key: 'id',
      render: (data: IUser) => <ManageUserAction data={data} />,
    },
  ];

  return (
    <MainCard
      title="Manage User"
      extra={<CardAction title="Add User" onClick={() => setOpen(true)} />}
    >
      {/* popup Items */}
      <CreateUser open={open} handleClose={() => setOpen(false)} />
      {/* popup Items */}

      {/* filter area */}
      <Row align="middle" justify="space-between" style={{ marginBottom: 20 }}>
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: 250,
          }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: '0px 5px' }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </Row>
      {/* end filter area */}

      {/* data table */}
      <SpaTable
        rowKey="id"
        loading={isLoading}
        columns={columns}
        dataSource={users}
        pageSize={size}
        totalPages={meta?.totalPage}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </MainCard>
  );
};

export default ManageUserPage;
