import { List, Empty } from 'antd';
import {IoRemoveCircleOutline} from 'react-icons/all';
import useListCartElements from '../../../hooks/useListCartElements';
import { Redirect } from 'react-router-dom';
import auth from '../../../modules/auth/api/auth-helper';
import useLikeAndCart from '../../../hooks/useLikeAndCart';

const CartPage = () => {
  const { cartElements, isError, totalPrice } = useListCartElements();
  const {fromCartMutation} = useLikeAndCart();

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  if (!cartElements || cartElements.length === 0) {
    return <Empty description={<p>No items in your cart yet</p>} />;
  }

  return (
    <div className="cart-page">
      <List itemLayout="horizontal">
        {cartElements.map((item) => (
          <List.Item key={item._id} actions={[<IoRemoveCircleOutline onClick={() =>
            fromCartMutation([{
              userId: auth.isAuthenticated()?.user._id
            }, item._id])
          } key={item._id}/>]}>{item.name}<p>{item.price}</p></List.Item>
        ))}
      </List>
      <h3>Total: {totalPrice}</h3>
    </div>
  );
};

export default CartPage;
