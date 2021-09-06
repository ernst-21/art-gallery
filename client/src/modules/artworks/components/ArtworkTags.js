import React from 'react';
import { Space, Tag } from 'antd';

const ArtworkTags = (props) => {
  return (
    <div className="artwork-info__description">Tags: {props.tags.map(item => (<Space key={item}><Tag>{item}</Tag></Space>))}</div>
  );
};

export default ArtworkTags;
