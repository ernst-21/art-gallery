import React from 'react';
import {Card} from 'antd';
import {HeartOutlined, ShoppingCartOutlined  } from '@ant-design/icons';

const { Meta } = Card;

const ArtworkCard = (props) => {
  return (
    <Card
      hoverable
      cover={<img alt={props.name} src={props.url} />}
      actions={[
        <HeartOutlined key="like" />,
        <ShoppingCartOutlined key="addToCart" />
      ]}
    >
      <Meta title={props.name} description={['Artist: ' + props.artist, <br key={1}/>,'Price: $' + props.price, <br key={2}/>, 'Gallery: ' + props.gallery]} />
    </Card>
  );
};

export default ArtworkCard;
