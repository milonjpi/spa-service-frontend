import { IUser } from '@/types';
import { Button, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDeleteUserMutation } from '@/redux/api/user/userApi';
import ConfirmDialog from '@/components/ui-components/ConfirmDialog';
import UpdateUser from './UpdateUser';

interface IProps {
  data: IUser;
};

const ManageUserAction = ({ data }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const [deleteUser] = useDeleteUserMutation();
  const handleDelete = async () => {
    try {
      message.loading('Deleting.....');
      setConfirm(false);
      const res = await deleteUser(data?.id).unwrap();
      if (res) {
        message.success('User Successfully Deleted!');
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
      <UpdateUser
        open={open}
        handleClose={() => setOpen(false)}
        preData={data}
      />
      <ConfirmDialog
        title="Delete User"
        open={confirm}
        onOk={handleDelete}
        onCancel={() => setConfirm(false)}
      />
      {/* end popup items */}
    </>
  );
};

export default ManageUserAction;
