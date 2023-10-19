'use client';

import BlogCard from '@/components/ui-components/BlogCard';
import { useGetBlogQuery } from '@/redux/api/blog/blogApi';
import { IBlog } from '@/types';
import { Col, Row, Skeleton, Typography } from 'antd';
const { Title } = Typography;

const LatestNews = () => {
  const query: Record<string, any> = {};

  query['limit'] = 4;
  query['page'] = 1;

  const { data, isLoading } = useGetBlogQuery(
    { ...query },
    { refetchOnMountOrArgChange: true }
  );

  const blogs = data?.blogs || [];
  return (
    <div style={{ maxWidth: 1440, margin: 'auto', paddingBottom: 80 }}>
      <Title style={{ textAlign: 'center', paddingBottom: 30 }}>
        Latest News
      </Title>
      {isLoading ? (
        <>
          <Skeleton active style={{ marginBottom: 20 }} />
          <Skeleton active />
        </>
      ) : (
        <Row gutter={[28, 60]}>
          {blogs?.map((el: IBlog) => (
            <Col key={el.id} xs={24} sm={12} lg={6}>
              <BlogCard data={el} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default LatestNews;
