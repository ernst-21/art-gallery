import { memo } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const CardCover = (props) => {
  return (
    <LazyLoad>
      {props.artworkPage ? (
        <img
          style={{ width: '100%', height: 'auto' }}
          alt={props.name}
          src={props.url}
        />
      ) : (
        <Link to={'/artworks/' + props.id}>
          <img
            style={{ width: '100%', height: 'auto' }}
            alt={props.name}
            src={props.url}
          />
        </Link>
      )}
    </LazyLoad>
  );
};

export default memo(CardCover);
