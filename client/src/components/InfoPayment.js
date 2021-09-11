import { useContext, useEffect } from 'react';
import {listCartItems} from '../modules/artworks/api/api-artworks';
import {useMutation} from 'react-query';
import {useParams, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Result, Button} from 'antd';
import auth from '../modules/auth/api/auth-helper';
import { CartContext } from '../context/CartContext';

const InfoPayment = () => {
  const { setCartItems } = useContext(CartContext);
  const userId = auth.isAuthenticated().user._id;
  const id = useParams().userId;

  const { mutate: infoPaymentCartItems, isError, status } = useMutation(
    (user) =>
      listCartItems(user)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        setCartItems(data);
      }
    }
  );

  useEffect(() => {
    if (auth.isAuthenticated()) {
      infoPaymentCartItems({ userId: auth.isAuthenticated().user._id });
    }
    //eslint-disable-next-line
  }, []);

  if ((!userId || !id) || (userId !== id) || isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Link to='/artworks' key="backToArtwork">
          <Button type="primary" >
            Back to Artworks
          </Button>
        </Link>
      ]}
    />
  );
};

export default InfoPayment;
