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
        background: data?.color,
        borderRadius: 10,
        height: 150,
      }}
    >
      <h3 style={{ color: '#fff', fontSize: 18, textTransform: 'uppercase' }}>
        {data?.title}
      </h3>
      <h2 style={{ color: '#fff', fontSize: 36 }}>{data?.value}</h2>
    </Row>
  );
};

export default OverviewCard;
