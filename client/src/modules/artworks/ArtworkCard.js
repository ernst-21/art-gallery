import { Card } from 'antd';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const ArtworkCard = (props) => {
  return (
    <Card
      hoverable
      style={{ padding: '1em 1em 0 1em' }}
      cover={
        <LazyLoad>
          <img style={{width: '100%', height: 'auto'}} alt={props.name} src={props.url} />
        </LazyLoad>
      }
      actions={[
        <AiOutlineHeart className="artwork-card__icon" key="like" />,
        <AiOutlineShoppingCart className="artwork-card__icon" key="addToCart" />
      ]}
    >
      <h3><Link style={{color: '#3b3b3b'}} to={'/artworks/' + props.id}>{props.name}</Link></h3>
      <p className="card-text card-text__category">{props.category}</p>
      <p className="card-text">
        Artist: <Link to={'/artists/' + props.artist_Id}>{props.artist}</Link>
      </p>
      <p className="card-text">Price: ${props.price}</p>
      <p className="card-text">Gallery: {props.gallery}</p>
    </Card>
  );
};

export default ArtworkCard;
