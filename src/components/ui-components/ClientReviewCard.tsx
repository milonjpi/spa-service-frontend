import { Avatar, Card, Row, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

interface IProps {
  data: {
    review: string;
    by: string;
  };
}

const ClientReviewCard = ({ data }: IProps) => {
  return (
    <Card bordered={false}>
      <Row
        align="middle"
        justify="center"
        style={{ flexDirection: 'column', minHeight: 200 }}
      >
        <Avatar size={50} icon={<UserOutlined />} />
        <Paragraph style={{ textAlign: 'center', paddingTop: 10 }}>
          <em>{data?.review}</em>
        </Paragraph>
        <Paragraph style={{ fontSize: 12 }}>By {data?.by}</Paragraph>
      </Row>
    </Card>
  );
};

export default ClientReviewCard;
