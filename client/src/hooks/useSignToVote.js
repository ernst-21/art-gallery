import { useState } from 'react';
import auth from '../modules/auth/auth-helper';

const useSignToVote = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const unLikeOrSign = (cb) => {
    auth.isAuthenticated()
      ? cb({ userId: auth.isAuthenticated().user._id })
      : showModal();
  };
  return {isModalVisible, handleClose, unLikeOrSign };
};

export default useSignToVote;
