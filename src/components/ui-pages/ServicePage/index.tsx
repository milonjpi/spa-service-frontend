'use client';

import {
  Col,
  Divider,
  Empty,
  Input,
  InputNumber,
  Pagination,
  PaginationProps,
  Radio,
  RadioChangeEvent,
  Row,
  Slider,
  Space,
  Spin,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDebounced } from '@/redux/hooks';
import { useGetServiceQuery } from '@/redux/api/service/serviceApi';
import { IService } from '@/types';
import ServiceCard from '@/components/ui-components/ServiceCard';

const ServicePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [category, setCategory] = useState<string>('all');
  const [status, setStatus] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<number | null>(500);
  const [maxPrice, setMaxPrice] = useState<number | null>(10000);

  const onCategoryChange = (e: RadioChangeEvent) => {
    setCategory(e.target.value);
  };
  const onStatusChange = (e: RadioChangeEvent) => {
    setStatus(e.target.value);
  };

  const onPriceChange = (value: number[]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  // filtering and pagination
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  query['limit'] = size;
  query['page'] = page;

  // min price
  if (minPrice) {
    query['minPrice'] = minPrice;
  }

  // max price
  if (maxPrice) {
    query['maxPrice'] = maxPrice;
  }

  // category
  if (category !== 'all') {
    query['category'] = category;
  }

  // status
  if (status !== 'all') {
    query['status'] = status;
  }

  // search term
  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query['searchTerm'] = debouncedSearchTerm;
  }
  const { data, isLoading } = useGetServiceQuery({ ...query });

  const services = data?.services;
  const meta = data?.meta;

  const onPaginationChange: PaginationProps['onShowSizeChange'] = (
    page,
    pageSize
  ) => {
    setPage(page);
    setSize(pageSize);
  };

  // end filtering and pagination

  const totalDocs = meta?.totalPage || 0;
  return (
    <div style={{ padding: '50px 20px', maxWidth: 1440, margin: 'auto' }}>
      <Row gutter={[30, 30]}>
        <Col xs={24} md={6}>
          <Row gutter={[30, 30]}>
            <Col xs={24}>
              <Input
                bordered={false}
                size="large"
                placeholder="Search Services..."
                suffix={<SearchOutlined />}
                style={{
                  border: '1px solid #ccc',
                  height: 45,
                  color: '#555555',
                  lineHeight: 1.8,
                  paddingLeft: '23px',
                  paddingRight: '23px',
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col xs={24}>
              <h3
                style={{ color: '#666666', letterSpacing: 2, marginBottom: 16 }}
              >
                Categories
              </h3>
              <Radio.Group onChange={onCategoryChange} value={category}>
                {/* <Space direction="vertical"> */}
                <Radio value="all">All</Radio>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                {/* </Space> */}
              </Radio.Group>
            </Col>
            <Col xs={24}>
              <h3
                style={{ color: '#666666', letterSpacing: 2, marginBottom: 16 }}
              >
                Availability
              </h3>
              <Radio.Group onChange={onStatusChange} value={status}>
                <Space direction="vertical">
                  <Radio value="all">All</Radio>
                  <Radio value="available">Available</Radio>
                  <Radio value="upcoming">Upcoming</Radio>
                </Space>
              </Radio.Group>
            </Col>
            <Col xs={24}>
              <h3
                style={{ color: '#666666', letterSpacing: 2, marginBottom: 16 }}
              >
                Price Range
              </h3>
              <Row gutter={[16, 16]}>
                <Col xs={12}>
                  <span>Min Price:</span>
                  <InputNumber
                    size="large"
                    placeholder="Min Price"
                    style={{
                      border: '1px solid #ccc',
                      color: '#555555',
                      lineHeight: 1.8,
                      width: '100%',
                    }}
                    onChange={(value) => setMinPrice(value)}
                    defaultValue={500}
                  />
                </Col>
                <Col xs={12}>
                  <span>Max Price:</span>

                  <InputNumber
                    size="large"
                    placeholder="Min Price"
                    style={{
                      border: '1px solid #ccc',
                      width: '100%',
                      color: '#555555',
                      lineHeight: 1.8,
                    }}
                    onChange={(value) => setMaxPrice(value)}
                    defaultValue={10000}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={18}>
          <h2 style={{ textTransform: 'uppercase' }}>Spa Services</h2>
          <Divider />
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '60px 0',
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <Row gutter={[16, 16]}>
              {totalDocs ? (
                services?.map((el: IService) => (
                  <Col key={el.id} xs={24} sm={12} lg={8}>
                    <ServiceCard data={el} />
                  </Col>
                ))
              ) : (
                <Col xs={24}>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </Col>
              )}
            </Row>
          )}

          {totalDocs ? (
            <Row justify="end">
              <Pagination
                showSizeChanger
                onShowSizeChange={onPaginationChange}
                defaultCurrent={1}
                responsive={true}
                total={totalDocs}
              />
            </Row>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default ServicePage;
