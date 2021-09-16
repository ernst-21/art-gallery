import { memo } from 'react';
import { AiOutlineHeart } from 'react-icons/all';

const OutlinedHeart = (props) => {

  return (
    <AiOutlineHeart
      onClick={props.onClick}
      className="artwork-card__icon outline-heart"
      key="like"
    />
  );
};

export default memo(OutlinedHeart);
