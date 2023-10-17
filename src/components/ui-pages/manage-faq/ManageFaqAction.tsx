import { IFaq } from '@/types';
import { Button, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ConfirmDialog from '@/components/ui-components/ConfirmDialog';
import { useDeleteFaqMutation } from '@/redux/api/faq/faqApi';
import UpdateFaq from './UpdateFaq';

interface IProps {
  data: IFaq;
};

const ManageFaqAction = ({ data }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [deleteFaq] = useDeleteFaqMutation();
  const handleDelete = async () => {
    try {
      message.loading('Deleting.....');
      setConfirm(false);
      const res = await deleteFaq(data?.id).unwrap();
      if (res) {
        message.success('FAQ Successfully Deleted!');
      }
    } catch (error: any) {
      message.error(`${error.data}`);
    }
  };

  return (
    <>
      <Button
        style={{
          margin: '0px 5px',
        }}
        onClick={() => setOpen(true)}
        type="primary"
      >
        <EditOutlined />
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setConfirm(true);
        }}
        danger
        style={{ marginLeft: '3px' }}
      >
        <DeleteOutlined />
      </Button>
      {/* popup items */}
      <UpdateFaq
        open={open}
        handleClose={() => setOpen(false)}
        preData={data}
      />
      <ConfirmDialog
        title="Delete FAQ"
        open={confirm}
        onOk={handleDelete}
        onCancel={() => setConfirm(false)}
      />
      {/* end popup items */}
    </>
  );
};

export default ManageFaqAction;
