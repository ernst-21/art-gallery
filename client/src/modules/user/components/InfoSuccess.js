import React from 'react';
import { Result, Button } from 'antd';
import {Link} from 'react-router-dom';

const InfoSuccess = () => {
  return (
    <Result
      status="success"
      title="Email successfully sent!"
      subTitle="We have sent you a link to your given email account. Please check your email to retrieve your password."
      extra={[
        <Link key='home' to={'/'}>
          <Button type="primary">
            Back to Home
          </Button>
        </Link>
      ]}
    />
  );
};

export default InfoSuccess;
