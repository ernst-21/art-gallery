import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useMutation } from 'react-query';
import { listCartItems } from '../modules/artworks/api/api-artworks';
import auth from '../modules/auth/api/auth-helper';

const useListCartElements = () => {
  const { cartItems } = useContext(CartContext);
  const [cartElements, setCartElements] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { mutate: cartItemsMutation, isError } = useMutation(
    (user) =>
      listCartItems(user)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        setCartElements(data);
        if (data.length > 1) {
          setTotalPrice(data.reduce((total,currentItem) =>  total + currentItem.price , 0));
        } else if (data.length === 1) {
          setTotalPrice(data[0].price);
        } else {
          return totalPrice;
        }
      }
    }
  );

  useEffect(() => {
    if (auth.isAuthenticated()) {
      cartItemsMutation({ userId: auth.isAuthenticated().user._id });
    }
  }, [cartItems, cartItemsMutation]);

  return { isError, cartElements, totalPrice };
};

export default useListCartElements;
