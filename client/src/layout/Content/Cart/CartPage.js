import {useMemo} from 'react';
import { List, Skeleton, Avatar, Empty, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { IoRemoveCircleOutline } from 'react-icons/all';
import useListCartElements from '../../../hooks/Cart/useListCartElements';
import { Redirect } from 'react-router-dom';
import useLikeAndCart from '../../../hooks/Cart/useLikeAndCart';
import StripeButton from '../../../components/StripeButton';
import auth from '../../../modules/auth/api/auth-helper';


const CartPage = () => {
  const { cartElements, isError, totalPrice, status } = useListCartElements();
  const arr = useMemo(() => [1,2,3,4,5], []);
  const { fromCartMutation } = useLikeAndCart();

  if (!auth.isAuthenticated()) {
    return <Redirect to="/signin" />;
  }

  if (isError) {
    return <Redirect to="/info-network-error" />;
  }

  if (status === 'loading') {
    return (
      <div className="cart-page__skeleton">
        {arr.map((item) => (
          <Skeleton key={item} avatar title={false} active />
        ))}
      </div>
    );
  }

  if (!cartElements || cartElements.length === 0) {
    return (
      <div className='cart-page__empty'>
        <Empty description={<p>No items in your cart yet</p>} />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <List
        className="cart-list"
        itemLayout="horizontal"
        dataSource={cartElements}
        pagination={{
          pageSize: 5
        }}
        renderItem={(item) => (
          <List.Item
            actions={[
              <IoRemoveCircleOutline
                className="remove-from-cart__icon"
                onClick={() =>
                  fromCartMutation(
                    item._id
                  )
                }
                key={item._id}
              />
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar className="cart-list__avatar" src={item.url} />}
              title={<Link to={'/artworks/' + item._id}>{item.name}</Link>}
              description={
                item.category.charAt(0).toUpperCase() + item.category.slice(1)
              }
            />
            <div>
              <h3>${item.price}</h3>
            </div>
          </List.Item>
        )}
      />
      <Divider />
      <div className="cart-list-price__container">
        <StripeButton totalPrice={totalPrice} />
        <div className='warning-text'>
          <p>
            Please for payments use the Stripe Test Card: <br/> No. 4242-4242-4242-4242 // CVC: Any 3 digits. // Expiration: Any future date with format MM/YY.
          </p>
        </div>
        <h2>Total: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default CartPage;
