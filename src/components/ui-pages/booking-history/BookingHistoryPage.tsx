'use client';

import MainCard from '@/components/ui-components/MainCard';
import { useState } from 'react';
import SpaTable from '@/components/ui-components/SpaTable';
import { Button, Row } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { IBooking, IService, IUser } from '@/types';
import { useGetBookingQuery } from '@/redux/api/booking/bookingApi';
import dayjs from 'dayjs';
import BookingHistoryAction from './BookingHistoryAction';
import ShowBookingStatus from '@/components/ui-components/ShowBookingStatus';

const BookingHistoryPage = () => {
  // filtering and pagination
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');

  query['limit'] = size;
  query['page'] = page;
  query['sortBy'] = sortBy;
  query['sortOrder'] = sortOrder;

  const { data, isLoading } = useGetBookingQuery({ ...query });

  const bookings = data?.bookings;
  const meta = data?.meta;
  const onPaginationChange = (page: number, pageSize: number) => {
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
  };

  // end filtering and pagination

  const columns = [
    {
      title: 'SN',
      render: (data: any, item: any, index: any) => (page - 1) * 10 + index + 1,
    },
    {
      title: 'Booking No',
      dataIndex: 'bookingNo',
      sorter: true,
    },
    {
      title: 'Service name',
      dataIndex: 'service',
      render: (el: IService) => el?.serviceName,
    },
    {
      title: 'Service Price',
      dataIndex: 'price',
      sorter: true,
    },
    {
      title: 'Schedule Time',
      dataIndex: 'scheduleTime',
      render: (el: string) => dayjs(el).format('MMM D, YYYY h:mm A'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (el: 'pending' | 'confirmed' | 'canceled' | 'completed') => (
        <ShowBookingStatus status={el} />
      ),
    },
    {
      title: 'Action',
      align: 'center',
      render: (data: IBooking) => <BookingHistoryAction data={data} />,
    },
  ];

  return (
    <MainCard title="Booking History">
      {/* filter area */}
      <Row align="middle" justify="end" style={{ marginBottom: 20 }}>
        <div>
          {(!!sortBy || !!sortOrder) && (
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
        dataSource={bookings}
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

export default BookingHistoryPage;
