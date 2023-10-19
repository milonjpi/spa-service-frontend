'use client';

import {
  useGetBlogQuery,
  useGetSingleBlogQuery,
} from '@/redux/api/blog/blogApi';
import { Col, Row, Spin, Typography } from 'antd';
import Image from 'next/image';
const { Title, Paragraph } = Typography;
import dayjs from 'dayjs';
import defaultPhoto from '@/assets/images/blog-big.jpg';
import MainCard from '@/components/ui-components/MainCard';
import { IBlog } from '@/types';
import RecentBlogCard from '@/components/ui-components/RecentBlogCard';
import CustomNotFound from '@/components/ui-components/CustomNotFound';

interface IProps {
  id: string;
}

const BlogDetailsPage = ({ id }: IProps) => {
  const { data, isLoading } = useGetSingleBlogQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const query: Record<string, any> = {};

  query['limit'] = 100;
  query['page'] = 1;

  const { data: allBlogs, isLoading: recentLoading } = useGetBlogQuery(
    {
      ...query,
    },
    { refetchOnMountOrArgChange: true }
  );

  const totalBlogs = allBlogs?.blogs || [];
  const blogs = totalBlogs?.filter((el: IBlog) => el.id !== data?.id);

  return (
    <div
      style={{
        maxWidth: 1440,
        margin: 'auto',
        padding: '50px 0',
        borderRadius: 20,
      }}
    >
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
      ) : data ? (
        <Row gutter={[64, 64]}>
          <Col xs={24} md={16}>
            <div style={{ height: 400, position: 'relative' }}>
              <Image
                src={data?.photo ? data?.photo : defaultPhoto}
                alt="blog-photo"
                priority
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  borderRadius: 10,
                }}
              />
            </div>
            <Title style={{ paddingTop: 20 }}>{data?.title}</Title>
            <Row
              align="middle"
              justify="space-between"
              style={{ paddingBottom: 30 }}
            >
              <em>By {data?.writtenBy?.fullName}</em>
              <em>
                Published Date: {dayjs(data?.createdAt).format('DD/MM/YYYY')}
              </em>
            </Row>
            <Paragraph>{data?.description}</Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <MainCard title="Recent Blogs">
              <Row gutter={[32, 32]}>
                {blogs.length ? (
                  blogs?.map((el: IBlog) => (
                    <Col key={el.id} xs={24}>
                      <RecentBlogCard data={el} />
                    </Col>
                  ))
                ) : (
                  <Col xs={24} style={{ textAlign: 'center' }}>
                    {recentLoading ? <Spin /> : 'No Recent Blog'}
                  </Col>
                )}
              </Row>
            </MainCard>
          </Col>
        </Row>
      ) : (
        <CustomNotFound />
      )}
    </div>
  );
};

export default BlogDetailsPage;
