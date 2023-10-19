'use client';

import { useGetFaqQuery } from '@/redux/api/faq/faqApi';
import { Collapse, CollapseProps, Divider, Row, Spin, Typography } from 'antd';
import { IFaq } from '@/types';

const { Title } = Typography;

const FaqPage = () => {
  // filtering and pagination
  const query: Record<string, any> = {};

  query['limit'] = 100;
  query['page'] = 1;

  const { data, isLoading } = useGetFaqQuery(
    { ...query },
    { refetchOnMountOrArgChange: true }
  );

  const faqs = data?.faqs || [];

  // end filtering and pagination
  const items: CollapseProps['items'] = faqs?.map(
    (el: IFaq, index: number) => ({
      key: `${index + 1}`,
      label: el.question,
      children: el.answer,
    })
  );
  return (
    <div style={{ maxWidth: 1100, padding: '50px 0', margin: 'auto' }}>
      <Title>FAQs</Title>
      <Divider />
      {isLoading ? (
        <Row align="middle" justify="center" style={{ height: 200 }}>
          <Spin size="large" />
        </Row>
      ) : (
        <Collapse items={items} defaultActiveKey={['1', '2', '3', '4', '5']} />
      )}
    </div>
  );
};

export default FaqPage;
