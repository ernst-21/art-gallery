import React, { useState, useEffect, memo } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Button, Card, Form, Input } from 'antd';
import { useHttpError } from '../../hooks/http-hook';
import { resetPass } from '../user/api-user';
import { strongPass, wrongPasswordMessage } from '../../config/config';
import { useMutation } from 'react-query';
import { success } from '../../components/Message';

const ResetPassword = () => {
  const [redirect, setRedirect] = useState(false);
  const { httpError, showErrorModal, error } = useHttpError();
  const token = useParams().token;

  const { mutate: resetPassMutation, isError } = useMutation(
    (user) => resetPass({ token: token }, user).then((data) => data),
    {
      onSuccess: (data) => {
        if (data && !data.error) {
          success('Password Reset Successful. Please sign in.');
          setRedirect(true);
        } else {
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
      password: values.password || undefined
    };
    resetPassMutation(user);
  };

  if (redirect) {
    return <Redirect to="/signin" />;
  }

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className='sign-section'>
      <div className="form-card-container">
        <Card
          title="Reset Password"
          extra={<Link to="/signin">Cancel</Link>}
          className="form-card"
        >
          <Form name="basic" onFinish={clickSubmit} className="form-container">
            <Form.Item
              labelCol={{ span: 24 }}
              label="Enter new password:"
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please input your new password!'
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
              label="Confirm new password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your new password!'
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    );
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <div className="submit-btn-container">
                <Button className="submit-btn" type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default memo(ResetPassword);
