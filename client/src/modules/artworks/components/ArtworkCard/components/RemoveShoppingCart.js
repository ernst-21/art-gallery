import { memo } from 'react';
import { MdRemoveShoppingCart } from 'react-icons/all';
import auth from '../../../../auth/api/auth-helper';
import { Tooltip } from 'antd';
import useLikeAndCart from '../../../../../hooks/Cart/useLikeAndCart';

const RemoveShoppingCart = (props) => {
  const {fromCartMutation} = useLikeAndCart();
  return (
    <Tooltip title="Remove from cart">
      <MdRemoveShoppingCart
        onClick={() =>
          fromCartMutation([
            {
              userId: auth.isAuthenticated()?.user._id
            },
            props.id
          ])
        }
        className="artwork-card__icon remove-cart__icon"
        key="removeFromCart"
      />
    </Tooltip>
  );
};

export default memo(RemoveShoppingCart);
