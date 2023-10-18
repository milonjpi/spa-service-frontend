'use client';

interface IProps {
  status: 'notAvailable' | 'upcoming' | 'available';
}

const colors = {
  notAvailable: '#E53935',
  upcoming: '#0747A6',
  available: '#006644',
};

const backgrounds = {
  notAvailable: '#ffcdd2',
  upcoming: '#DEEBFF',
  available: '#E3FCEF',
};

const ShowServiceStatus = ({ status }: IProps) => {
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

export default ShowServiceStatus;
