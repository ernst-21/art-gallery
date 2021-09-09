import { useState, useCallback } from 'react';
import { Modal } from 'antd';

export const useHttpError = () => {
  const [error, setError] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showErrorModal = (err) => {
    if (err) {
      setError(err);
      setIsModalVisible(true);
    } else {
      setError(null);
      setIsModalVisible(false);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const httpError = useCallback(() => {
    Modal.error({
      title: 'Error',
      content: error,
      onOk: handleOk,
      visible: isModalVisible
    });
  }, [error, isModalVisible]);

  return { error, showErrorModal, httpError };
};
