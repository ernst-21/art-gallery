import { memo } from 'react';
import { AiFillHeart } from 'react-icons/all';

const FilledHeart = (props) => {

  return (
    <AiFillHeart
      onClick={props.onClick}
      className="artwork-card__icon filled-heart"
      key="unlike"
    />
  );
};

export default memo(FilledHeart);
