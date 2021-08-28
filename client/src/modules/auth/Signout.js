import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from './auth-helper';
import { Button } from 'antd';


const SignoutBtn = () => {
  const history = useHistory();

  return (
    <Button type="primary" onClick={() => {
      auth.clearJWT(() => history.push('/'));
    }}>
      Logout
    </Button>
  );
};

export default SignoutBtn;
