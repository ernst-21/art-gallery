import { memo } from 'react';
import auth from '../../../../auth/api/auth-helper';
import { AiFillHeart } from 'react-icons/all';
import useLikeAndCart from '../../../../../hooks/Cart/useLikeAndCart';

const FilledHeart = (props) => {
  const {unLikeMutation} = useLikeAndCart();

  return (
    <AiFillHeart
      onClick={() =>
        unLikeMutation([
          {
            userId: auth.isAuthenticated()?.user._id
          },
          props.id
        ])
      }
      className="artwork-card__icon filled-heart"
      key="unlike"
    />
  );
};

export default memo(FilledHeart);
