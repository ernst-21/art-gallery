import {memo} from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Space } from 'antd';

const ArtistSocial = (props) => {
  return (
    <div className={props.className}>
      <Space>
        <a href='https://facebook.com' target="_blank" rel="noreferrer">
          <FaFacebook style={{fontSize: '2.5rem', marginRight: '1rem', color: '#0e199d' }} />
        </a>
        <a href='https://twitter.com' target="_blank" rel="noreferrer">
          <FaTwitter style={{fontSize: '2.5rem', marginRight: '1rem', color: '#3884c4' }} />
        </a>
        <a href='https://instagram.com' target="_blank" rel="noreferrer">
          <FaInstagram style={{fontSize: '2.5rem', marginRight: '1rem', color: '#f6054c' }} />
        </a>
      </Space>
    </div>
  );
};

export default memo(ArtistSocial);
