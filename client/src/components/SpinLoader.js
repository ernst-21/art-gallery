import React, {memo} from 'react';
import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 84, color: '#132486' }} spin />
);

const SpinLoader = () => {
  return (
    <div className="spin-loader-container">
      <Spin className="spin-loader" size="large" indicator={antIcon} />
    </div>
  );
};

export default memo(SpinLoader);
