'use client';

interface IProps {
  status: 'pending' | 'confirmed' | 'canceled' | 'completed';
}

const colors = {
  canceled: '#E53935',
  pending: '#461959',
  confirmed: '#0747A6',
  completed: '#006644',
};

const backgrounds = {
  canceled: '#ffcdd2',
  pending: '#A78295',
  confirmed: '#DEEBFF',
  completed: '#E3FCEF',
};

const ShowBookingStatus = ({ status }: IProps) => {
  return (
    <p
      style={{
        margin: 0,
        fontSize: 10,
        display: 'inline-block',
        textTransform: 'uppercase',
        padding: 5,
        borderRadius: 5,
        fontWeight: 700,
        lineHeight: 1,
        color: colors[status] || '#42526E',
        background: backgrounds[status] || '#DFE1E6',
      }}
    >
      {status}
    </p>
  );
};

export default ShowBookingStatus;
