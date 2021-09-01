import {Card} from 'antd';
import {HeartOutlined, ShoppingCartOutlined  } from '@ant-design/icons';

const { Meta } = Card;

const ArtworkCard = (props) => {
  return (
    <Card
      hoverable
      style={{padding: '1em 1em 0 1em'}}
      cover={<img alt={props.name} src={props.url} />}
      actions={[
        <HeartOutlined key="like" />,
        <ShoppingCartOutlined key="addToCart" />
      ]}
    >
      <Meta title={props.name} description={[props.category ,<br key={1}/>,'Artist: ' + props.artist, <br key={2}/>,'Price: $' + props.price, <br key={3}/>, 'Gallery: ' + props.gallery]} />
    </Card>
  );
};

export default ArtworkCard;
