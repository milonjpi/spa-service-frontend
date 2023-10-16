'use client';

import CardAction from '@/components/ui-components/CardAction';
import MainCard from '@/components/ui-components/MainCard';
import { useState } from 'react';
import SpaTable from '@/components/ui-components/SpaTable';
import { useDebounced } from '@/redux/hooks';
import { Button, Input, Row } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { IService, IServiceCategory, IServiceStatus, IUser } from '@/types';
import ManageServiceAction from './ManageServiceAction';
import CreateService from './CreateService';
import { showServiceCategory, showServiceStatus } from '@/utils/showing';
import { useGetServiceQuery } from '@/redux/api/service/serviceApi';

const ManageServicePage = () => {
  const [open, setOpen] = useState<boolean>(false);

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

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query['searchTerm'] = debouncedSearchTerm;
  }
  const { data, isLoading } = useGetServiceQuery({ ...query });

  const users = data?.services;
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
      title: 'Service No',
      dataIndex: 'serviceNo',
      sorter: true,
    },
    {
      title: 'Service Name',
      dataIndex: 'serviceName',
      sorter: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: (el: IServiceCategory) => showServiceCategory(el),
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (el: IServiceStatus) => showServiceStatus(el),
    },
    {
      title: 'Action',
      align: 'center',
      render: (data: IService) => <ManageServiceAction data={data} />,
    },
  ];

  return (
    <MainCard
      title="Manage Service"
      extra={<CardAction title="Add Service" onClick={() => setOpen(true)} />}
    >
      {/* popup Items */}
      <CreateService open={open} handleClose={() => setOpen(false)} />
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

export default ManageServicePage;
