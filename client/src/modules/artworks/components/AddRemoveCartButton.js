import useSignToAction from '../../../hooks/Auth/useSignToAction';
import auth from '../../auth/api/auth-helper';
import SignModal from '../../../components/SignModal';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import useLikeAndCart from '../../../hooks/Cart/useLikeAndCart';

const AddRemoveCartButton = (props) => {
  const { isModalVisible, handleClose, unDoOrSign } = useSignToAction();
  const {addToCartMutation, fromCartMutation, toCartStatus, fromCartStatus} = useLikeAndCart();

  if (toCartStatus === 'error' || fromCartStatus === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <>
      {auth.isAuthenticated() &&
      props.addedToCart.includes(auth.isAuthenticated()?.user._id) ? (
          <Button onClick={() =>
            fromCartMutation([{
              userId: auth.isAuthenticated()?.user._id
            }, props.id])
          } size="large" style={{ marginTop: '1rem' }} type="primary">
          Remove from Cart
          </Button>
        ) : (
          <Button onClick={() => unDoOrSign(addToCartMutation, props.id)} size="large" style={{ marginTop: '1rem' }} type="primary">
          Add to Cart
          </Button>
        )}
      <SignModal
        isModalVisible={isModalVisible}
        visible={isModalVisible}
        handleClose={handleClose}
      />
    </>
  );
};

export default AddRemoveCartButton;
