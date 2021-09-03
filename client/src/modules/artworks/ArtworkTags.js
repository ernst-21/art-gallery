import React from 'react';
import { Space, Tag } from 'antd';

const ArtworkTags = (props) => {
  return (
    <p className="artwork-info__description">Tags: {props.tags.map(item => (<Space key={item}><Tag>{item}</Tag></Space>))}</p>
  );
};

export default ArtworkTags;
