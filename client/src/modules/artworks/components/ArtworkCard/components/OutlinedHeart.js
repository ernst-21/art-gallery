import { memo } from 'react';
import { AiOutlineHeart } from 'react-icons/all';
import useSignToAction from '../../../../../hooks/Auth/useSignToAction';
import useLikeAndCart from '../../../../../hooks/Cart/useLikeAndCart';

const OutlinedHeart = (props) => {
  const {unDoOrSign} = useSignToAction();
  const {likeMutation} = useLikeAndCart();

  return (
    <AiOutlineHeart
      onClick={() => unDoOrSign(likeMutation, props.id)}
      className="artwork-card__icon outline-heart"
      key="like"
    />
  );
};

export default memo(OutlinedHeart);
