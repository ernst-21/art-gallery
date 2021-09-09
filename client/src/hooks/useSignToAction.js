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

  const unDoOrSign = (cb) => {
    auth.isAuthenticated()
      ? cb({ userId: auth.isAuthenticated().user._id })
      : showModal();
  };
  return {isModalVisible, handleClose, unDoOrSign };
};

export default useSignToAction;
