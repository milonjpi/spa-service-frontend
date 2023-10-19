'use client';

import { IReview, IService } from '@/types';
import { Card, Rate, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import defaultPhoto from '@/assets/images/spa-big.jpg';
import ShowServiceStatus from './ShowServiceStatus';
const { Meta } = Card;

const { Paragraph } = Typography;

interface IProps {
  data: IService;
}

const ServiceCard = ({ data }: IProps) => {
  const sumRating = data?.reviewRatings?.reduce(
    (acc: number, el: IReview) => acc + el.rating,
    0
  );

  const avgRating = sumRating
    ? sumRating / (data?.reviewRatings?.length || 0)
    : 0;
  return (
    <Link href={`/service-details/${data?.id}`}>
      <Card
        hoverable
        cover={
          <div style={{ height: 250, width: '100%', position: 'relative' }}>
            <Image
              fill
              priority
              alt="service"
              sizes="(min-width: 100%) 50vw, 100vw"
              src={data?.photo ? data?.photo : defaultPhoto}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        }
      >
        <Meta
          title={data?.serviceName}
          description={`Category: ${data?.category}`}
        />

        <div style={{ paddingTop: 13 }}>
          <Paragraph
            style={{
              fontWeight: 700,
              fontSize: 25,
              margin: 0,
              paddingBottom: 5,
            }}
          >
            {data?.price} TK
          </Paragraph>
          <Paragraph>
            Status: <ShowServiceStatus status={data?.status} />
          </Paragraph>
          <Rate disabled defaultValue={avgRating} />
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
