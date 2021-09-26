import {memo} from 'react';
import { Card } from 'antd';
import LazyLoad from 'react-lazyload';

const { Meta } = Card;

const ArtistCard = (props) => {
  return (
    <Card
      hoverable
      style={{ padding: '1em 1em 0 1em', marginBottom: '30px' }}
      cover={
        <LazyLoad>
          <img
            style={{ width: '100%', height: '200px' }}
            alt={props.name}
            src={props.pic}
          />
        </LazyLoad>
      }
    >
      <Meta
        title={props.name}
        description={[
          props.discipline,
          <br key={1} />,
          'Country: ' + props.country,
          <br key={2} />,
          'likes: ' + props.likes.length
        ]}
      />
    </Card>
  );
};

export default memo(ArtistCard);
