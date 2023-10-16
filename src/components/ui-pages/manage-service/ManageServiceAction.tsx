import { IService } from '@/types';
import { Button, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ConfirmDialog from '@/components/ui-components/ConfirmDialog';
import UpdateService from './UpdateService';
import { useDeleteServiceMutation } from '@/redux/api/service/serviceApi';

type IProps = {
  data: IService;
};

const ManageServiceAction = ({ data }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [deleteService] = useDeleteServiceMutation();
  const handleDelete = async () => {
    try {
      message.loading('Deleting.....');
      const res = await deleteService(data?.id).unwrap();
      if (res) {
        message.success('Service Successfully Deleted!');
        setConfirm(false);
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
      <UpdateService
        open={open}
        handleClose={() => setOpen(false)}
        preData={data}
      />
      <ConfirmDialog
        title="Delete Service"
        open={confirm}
        onOk={handleDelete}
        onCancel={() => setConfirm(false)}
      />
      {/* end popup items */}
    </>
  );
};

export default ManageServiceAction;
