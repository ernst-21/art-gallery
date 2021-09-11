import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useMutation } from 'react-query';
import { purchaseArtworks } from '../modules/artworks/api/api-artworks';
import useListCartElements from '../hooks/Cart/useListCartElements';
import auth from '../modules/auth/api/auth-helper';
import { Redirect } from 'react-router-dom';

const publishableKey = 'pk_test_51HNBGQLhGzqI0oVPHQxA9BfH1TD4JccRq3a3QeWqFuLLga8DvO4y5hbwFcEdsfCggk7HJKXPGpMJDIzqvyY4Ctax003R7bsnIT';

const StripeButton = ({ totalPrice, userId }) => {
  const { isError, cartElementsId } = useListCartElements();
  const jwt = auth.isAuthenticated();
  const priceForStripe = totalPrice * 100;
  const [paymentToken, setPaymentToken] = useState(null);

  const { mutate: purchaseMutation, status } = useMutation((userAndArtworks) =>
    purchaseArtworks({ t: jwt.token }, userAndArtworks)
      .then((res) => res.json())
      .then((data) => data)
  );

  const onToken = (token) => {
    setPaymentToken(token);
    console.log(token);
  };

  useEffect(() => {
    if (paymentToken) {
      purchaseMutation({ artworksIds: cartElementsId, userId: userId });
    }
    //eslint-disable-next-line
  }, [paymentToken]);

  if (paymentToken) {
    return <Redirect to={'/info-payment-success/' + auth.isAuthenticated().user._id} />;
  }

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="VRTL"
      billingAddress={false}
      description={`Your total is $${totalPrice}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
