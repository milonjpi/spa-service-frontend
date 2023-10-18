'use client';

import CardAction from '@/components/ui-components/CardAction';
import MainCard from '@/components/ui-components/MainCard';
import { useState } from 'react';
import SpaTable from '@/components/ui-components/SpaTable';
import { useDebounced } from '@/redux/hooks';
import { Button, Input, Row } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { useGetFeedbackQuery } from '@/redux/api/feedback/feedbackApi';
import CreateFeedback from './CreateFeedback';
import { IFeedback } from '@/types';
import MyFeedbackPageAction from './MyFeedbackPageAction';

const MyFeedbackPage = () => {
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
  const { data, isLoading } = useGetFeedbackQuery({ ...query });

  const feedbacks = data?.feedbacks;
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
    setSearchTerm('');
  };

  // end filtering and pagination

  const columns = [
    {
      title: 'SN',
      render: (data: any, item: any, index: any) => (page - 1) * 10 + index + 1,
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      sorter: true,
    },
    {
      title: 'Suggestion',
      dataIndex: 'suggestion',
    },
    {
      title: 'Action',
      align: 'center',
      render: (data: IFeedback) => <MyFeedbackPageAction data={data} />,
    },
  ];

  return (
    <MainCard
      title="My Feedbacks"
      extra={<CardAction title="New Feedback" onClick={() => setOpen(true)} />}
    >
      {/* popup Items */}
      <CreateFeedback open={open} handleClose={() => setOpen(false)} />
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
        dataSource={feedbacks}
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

export default MyFeedbackPage;
