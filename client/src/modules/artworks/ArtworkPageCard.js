import React from 'react';
import {Card} from 'antd';
import { AiOutlineHeart } from 'react-icons/ai';

const ArtworkPageCard = (props) => {
  return (
    <Card
      style={{ textAlign: 'center' }}
      bordered
      cover={<img alt={props.name} src={props.url} />}
      actions={[<AiOutlineHeart key="vote" style={props.style} />]}
    />
  );
};

export default ArtworkPageCard;
