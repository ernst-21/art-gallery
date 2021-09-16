import { memo } from 'react';
import { MdRemoveShoppingCart } from 'react-icons/all';
import { Tooltip } from 'antd';

const RemoveShoppingCart = (props) => {
  return (
    <Tooltip title="Remove from cart">
      <MdRemoveShoppingCart
        onClick={props.onClick}
        className="artwork-card__icon remove-cart__icon"
        key="removeFromCart"
      />
    </Tooltip>
  );
};

export default memo(RemoveShoppingCart);
