import React, {memo} from 'react';
import { Layout } from 'antd';

const {Footer} = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ backgroundColor: '#b8b8b8', textAlign: 'center' }} className='footer'>©2021 created by Ernst-21</Footer>
  );
};

export default memo(FooterComponent);
