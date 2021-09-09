import React, { useState, useEffect } from 'react';
import auth from '../api/auth-helper';
import { Link, Redirect } from 'react-router-dom';
import { signin } from '../api/api-auth.js';
import { useHttpError } from '../../../hooks/Http/http-hook';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { useMutation } from 'react-query';

const Signin = ({ handleClose, isModalVisible }) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { error, showErrorModal, httpError } = useHttpError();

  const { mutate: signInMutation, isError } = useMutation(
    (user) =>
      signin(user)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        if (!data.error) {
          auth.authenticate(data, () => {
            setRedirectToReferrer(true);
          });
          if (isModalVisible) return handleClose();
        } else if (data && data.error) {
          showErrorModal(data.error);
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

  const clickSubmit = (values) => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    };
    signInMutation(user);
  };

  const pathToDirect = (path) => {
    if (path === '/signin') {
      return '/';
    } else {
      return path;
    }
  };

  if (redirectToReferrer) {
    return <Redirect to={pathToDirect(window.location.pathname)} />;
  }

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="sign-section">
      <div className="form-card-container">
        <Card
          className="form-card"
          title="Login"
          extra={
            <Link to="/signup">
              Don&apos;t have an account? Sign Up instead
            </Link>
          }
        >
          <Form
            name="basic"
            initialValues={{
              remember: true
            }}
            onFinish={clickSubmit}
          >
            <Form.Item
              labelCol={{ span: 24 }}
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 24 }}
              label="Password:"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <div className="submit-btn-container">
                <Button className="submit-btn" type="primary" htmlType="submit">
                  Sign In
                </Button>
              </div>
            </Form.Item>
            <div className="lower-link">
              <Link to="/email">Forgot password?</Link>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Signin;
