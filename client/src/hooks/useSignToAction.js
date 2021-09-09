import { useState } from 'react';
import auth from '../modules/auth/api/auth-helper';

const useSignToAction = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const unDoOrSign = (cb, id) => {
    auth.isAuthenticated()
      ? cb([{ userId: auth.isAuthenticated().user._id }, id])
      : showModal();
  };
  return {isModalVisible, handleClose, unDoOrSign };
};

export default useSignToAction;
