import {memo} from 'react';
import { FaCartPlus } from 'react-icons/all';
import { Tooltip } from 'antd';
import useSignToAction from '../../../../../hooks/Auth/useSignToAction';
import useLikeAndCart from '../../../../../hooks/Cart/useLikeAndCart';

const AddToShoppingCart = (props) => {
  const {unDoOrSign} = useSignToAction();
  const {addToCartMutation} = useLikeAndCart();
  return (
    <Tooltip title="Add to cart">
      <FaCartPlus
        onClick={() => unDoOrSign(addToCartMutation, props.id)}
        className="artwork-card__icon add-cart__icon"
        key="addToCart"
      />
    </Tooltip>
  );
};

export default memo(AddToShoppingCart);
