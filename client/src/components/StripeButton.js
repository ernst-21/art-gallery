import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({totalPrice}) => {
  const priceForStripe = totalPrice * 100;
  const publishableKey = 'pk_test_51HNBGQLhGzqI0oVPHQxA9BfH1TD4JccRq3a3QeWqFuLLga8DvO4y5hbwFcEdsfCggk7HJKXPGpMJDIzqvyY4Ctax003R7bsnIT';

  const onToken = (token) => {
    console.log(token);
    console.log('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='VRTL'
      billingAddress={false}
      description={`Your total is $${totalPrice}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
