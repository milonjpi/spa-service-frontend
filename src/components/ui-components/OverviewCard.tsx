import { Row } from 'antd';

interface IProps {
  data: {
    title: string;
    value: number;
    color?: string;
  };
}

const OverviewCard = ({ data }: IProps) => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{
        flexDirection: 'column',
        borderRadius: 10,
        height: 150,
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      }}
    >
      <h3 style={{ color: '#999', fontSize: 18, textTransform: 'uppercase' }}>
        {data?.title}
      </h3>
      <h2 style={{ color: '#666', fontSize: 36 }}>{data?.value}</h2>
    </Row>
  );
};

export default OverviewCard;
