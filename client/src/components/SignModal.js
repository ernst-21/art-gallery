import {memo} from 'react';
import { Divider, Modal } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';
import Signin from '../modules/auth/components/Signin';

const SignModal = ({ handleClose, visible, isModalVisible }) => {
  return (
    <Modal
      centered
      style={{ textAlign: 'center' }}
      bodyStyle={{ backgroundColor: '#EDEDE8' }}
      visible={visible}
      closable={true}
      footer={null}
      closeIcon={<AiOutlineClose onClick={handleClose} />}
      width={1000}
    >
      <h1 className='modal-title'>You need to log in to perform this action</h1>
      <Divider />
      <Signin isModalVisible={isModalVisible} visible={visible} handleClose={handleClose} />
    </Modal>
  );
};

export default memo(SignModal);
