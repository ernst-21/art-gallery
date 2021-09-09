import React, { useEffect, useState } from 'react';
import auth from '../../auth/api/auth-helper';
import { useMutation } from 'react-query';
import {success} from '../../../components/Message';
import { remove } from '../api/api-user.js';
import { Redirect } from 'react-router-dom';
import { Modal, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useHttpError } from '../../../hooks/Http/http-hook';

export default function DeleteUser(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { error, showErrorModal, httpError } = useHttpError();

  const jwt = auth.isAuthenticated();

  const { mutate: deleteUserMutation, isError } = useMutation(
    (params) =>
      remove(params, { t: jwt.token })
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        if (data && !data.error) {
          auth.clearJWT(() => success('Account successfully deleted'));
          setRedirect(true);
        }
      }
    }
  );

  useEffect(() => {
    if (error) {
      httpError();
    }
    return () => showErrorModal(null);
  }, [error, httpError, showErrorModal]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    deleteUserMutation({
      userId: props.userId
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <>
      <Button onClick={showModal} style={{ color: 'red' }}>
        DELETE ACCOUNT
        <DeleteOutlined />
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          By clicking OK your account will be deleted. This action cannot be
          undone
        </p>
      </Modal>
    </>
  );
}
