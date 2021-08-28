import React, { useState, useEffect } from 'react';
import auth from '../auth/auth-helper';
import { read, update } from './api-user.js';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';
import { Avatar, Button, Card, Form, Input, Spin } from 'antd';
import { useHttpError } from '../../hooks/http-hook';
import AvatarUpload from './AvatarUpload';
import useUploadImage from '../../hooks/useUploadImage';
import { DeleteOutlined } from '@ant-design/icons';
import { strongPass, wrongPasswordMessage } from '../../config/config';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { success } from '../../components/Message';

const EditProfile = () => {
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();
  const { imageUrl, uploadPic, deleteImageUrl } = useUploadImage();
  const [image, setImage] = useState('');
  const { error, showErrorModal, httpError } = useHttpError();
  const userId = useParams().userId;
  const history = useHistory();

  useEffect(() => {
    if (error) {
      httpError();
    }
    return () => showErrorModal(null);
  }, [error, httpError, showErrorModal]);

  const { data: user, isLoading, isError } = useQuery(['user', userId], () => read({ userId: userId }, { t: jwt.token }).then(data => data), { onError: () => setRedirectToSignin(true) });

  const queryClient = useQueryClient();

  const { mutate: updateUserMutation } = useMutation((user) => update({ userId: userId }, { t: jwt.token }, user).then(data => data), {
    onSuccess: (data) => {
      queryClient.setQueryData(['user', data._id], data);
      auth.clearJWT(() => history.push('/signin'));
      success('Account successfully updated. Please sign in');
    },
    onError: (data) => console.log(data)
  });

  if (auth.isAuthenticated() && redirectToSignin) {
    return <Redirect to='/' />;
  } else if (!auth.isAuthenticated()) {
    return <Redirect to='/signin' />;
  }

  const handleImageChange = (info) => {
    setImage(info.file.originFileObj);
  };

  const handleImgDelete = () => {
    setImage('');
    deleteImageUrl();
  };

  const clickSubmit = (values) => {
    const usr = {
      name: values.name || undefined,
      email: values.email || undefined,
      pic: imageUrl || user.pic || undefined,
      password: values.confirm || undefined
    };
    updateUserMutation(usr);
  };

  if (isError) {
    return <Redirect to='/info-network-error' />;
  }

  return (
    <div className="form-card-container">
      {isLoading ? (
        <Spin />
      ) : (
        <Card
          className="form-card"
          title="Edit Profile"
          extra={<Link to={`/user/${userId}`}>Cancel</Link>}
        >
          <div>
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '12px'
              }}
            >
              * Empty values will not overwrite your actual credentials.
            </p>
            <div className="upload-avatar__container">
              {user && user.pic ? (
                <div className='photo-icon-container'>
                  <Avatar size={110} src={user.pic} alt="avatar" />{' '}
                  {user.pic && (
                    <DeleteOutlined
                      style={{ marginTop: '.4rem' }}
                      onClick={() => queryClient.setQueryData(['user', user._id], {...user, pic: ''})}
                    />
                  )}
                </div>
              ) : (
                <AvatarUpload
                  onChange={handleImageChange}
                  customRequest={() => uploadPic(image)}
                  handleDelete={handleImgDelete}
                  url={imageUrl}
                  src={imageUrl}
                  img={image}
                />
              )}
            </div>
            {user && (
              <Form
                name="basic"
                initialValues={{
                  remember: false,
                  name: user.name,
                  email: user.email
                }}
                onFinish={clickSubmit}
              >
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="Username:"
                  name="name"
                  rules={[
                    {
                      required: false,
                      message: 'Please input your username!'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  initialValue={user ? user.email : 'hh'}
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!'
                    },
                    {
                      required: false
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  label="New Password:"
                  name="password"
                  hasFeedback
                  rules={[
                    {
                      required: false
                    },
                    () => ({
                      validator(_, value) {
                        if (!value || strongPass.test(value)) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error(wrongPasswordMessage));
                      }
                    })
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 24 }}
                  name="confirm"
                  label="Confirm New Password"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: false
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (getFieldValue('password') === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error('Passwords do not match!')
                        );
                      }
                    })
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Form>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default EditProfile;
