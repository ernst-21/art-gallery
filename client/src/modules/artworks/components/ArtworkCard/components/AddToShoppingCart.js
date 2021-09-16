import {memo} from 'react';
import { FaCartPlus } from 'react-icons/all';
import { Tooltip } from 'antd';


const AddToShoppingCart = (props) => {

  return (
    <Tooltip title="Add to cart">
      <FaCartPlus
        onClick={props.onClick}
        className="artwork-card__icon add-cart__icon"
        key="addToCart"
      />
    </Tooltip>
  );
};

export default memo(AddToShoppingCart);
