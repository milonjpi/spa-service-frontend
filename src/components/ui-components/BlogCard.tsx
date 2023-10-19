'use client';

import { IBlog } from '@/types';
import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import defaultPhoto from '@/assets/images/blog-big.jpg';
const { Meta } = Card;

interface IProps {
  data: IBlog;
}

const BlogCard = ({ data }: IProps) => {
  return (
    <Link href={`/blog-details/${data?.id}`}>
      <Card
        hoverable
        cover={
          <div style={{ height: 250, width: '100%', position: 'relative' }}>
            <Image
              src={data?.photo ? data?.photo : defaultPhoto}
              alt="blog"
              priority
              fill
              sizes="(min-width: 100%) 50vw, 100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        }
      >
        <Meta
          title={data?.title}
          description={<em>By: {data?.writtenBy?.fullName}</em>}
        />
      </Card>
    </Link>
  );
};
export default BlogCard;
