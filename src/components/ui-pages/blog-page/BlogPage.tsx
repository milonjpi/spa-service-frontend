'use client';

import BlogCard from '@/components/ui-components/BlogCard';
import { useGetBlogQuery } from '@/redux/api/blog/blogApi';
import { IBlog } from '@/types';
import { Col, Divider, Row, Spin, Typography } from 'antd';

const { Title } = Typography;

const BlogPage = () => {
  // filtering and pagination
  const query: Record<string, any> = {};

  query['limit'] = 100;
  query['page'] = 1;

  const { data, isLoading } = useGetBlogQuery({ ...query });

  const blogs = data?.blogs || [];

  // end filtering and pagination
  return (
    <div style={{ maxWidth: 1200, padding: '50px 0', margin: 'auto' }}>
      <Title>Latest Blogs</Title>
      <Divider />
      {isLoading ? (
        <div
          style={{
            height: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[32, 68]}>
          {blogs?.map((el: IBlog) => (
            <Col key={el.id} xs={24} sm={12} md={8} lg={6}>
              <BlogCard data={el} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default BlogPage;
