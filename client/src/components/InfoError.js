import React from 'react';
import { Result, Button } from 'antd';
import {Link} from 'react-router-dom';

const InfoError = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Link to={'/'} type="primary"><Button>Back to Home</Button></Link>}
    />
  );
};

export default InfoError;
