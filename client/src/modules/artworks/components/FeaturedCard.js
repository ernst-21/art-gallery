import { memo } from 'react';
import {Card, Image} from 'antd';
import LazyLoad from 'react-lazyload';

const FeaturedCard = (props) => {
  return (
    <Card
      cover={<LazyLoad>
        <Image
          style={{ width: '100%', height: 'auto' }}
          src={props.url}
        />
      </LazyLoad>}
    >
      <>
        <div>
          <h4>
            {props.name}
          </h4>
        </div>
        <p className="card-text card-text__category">{props.category}</p>
        <p className="card-text">Next month in {props.gallery} gallery</p>
      </>
    </Card>
  );
};

export default memo(FeaturedCard);
