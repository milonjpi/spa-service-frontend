import { IFeedback } from '@/types';
import { Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ConfirmDialog from '@/components/ui-components/ConfirmDialog';
import { useDeleteFeedbackMutation } from '@/redux/api/feedback/feedbackApi';

interface IProps {
  data: IFeedback;
}

const MyFeedbackPageAction = ({ data }: IProps) => {
  const [confirm, setConfirm] = useState<boolean>(false);

  const [deleteBFeedback] = useDeleteFeedbackMutation();
  const handleDelete = async () => {
    try {
      message.loading('Deleting.....');
      setConfirm(false);
      const res = await deleteBFeedback(data?.id).unwrap();
      if (res) {
        message.success('Feedback Successfully Deleted!');
      }
    } catch (error: any) {
      message.error(`${error.data}`);
    }
  };

  return (
    <>
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
      <ConfirmDialog
        title="Delete Feedback"
        open={confirm}
        onOk={handleDelete}
        onCancel={() => setConfirm(false)}
      />
      {/* end popup items */}
    </>
  );
};

export default MyFeedbackPageAction;
