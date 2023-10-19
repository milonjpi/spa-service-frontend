'use client';

import Image from 'next/image';
import defaultPhoto from '@/assets/images/blog-small.jpg';
import { IBlog } from '@/types';
import { Card } from 'antd';
import Link from 'next/link';

interface IProps {
  data: IBlog;
}

const RecentBlogCard = ({ data }: IProps) => {
  return (
    <Link href={`/blog-details/${data?.id}`}>
      <Card hoverable bordered={false}>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ marginRight: 20 }}>
            <div style={{ height: 80, width: 80, position: 'relative' }}>
              <Image
                src={data?.photo ? data?.photo : defaultPhoto}
                alt="blog-photo"
                priority
                fill
                sizes="(min-width: 80px) 50vw, 100vw"
                style={{
                  objectFit: 'cover',
                  borderRadius: 10,
                }}
              />
            </div>
          </div>

          <div>
            <h3 style={{ lineHeight: 1, fontSize: 16 }}>{data?.title}</h3>
            <div>
              <em style={{ fontSize: 12 }}>By {data?.writtenBy?.fullName}</em>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default RecentBlogCard;
