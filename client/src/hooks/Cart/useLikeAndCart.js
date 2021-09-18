import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import auth from '../../modules/auth/api/auth-helper';
import { useMutation, useQueryClient } from 'react-query';
import {
  addArtworkToCart,
  removeArtworkFromCart,
  unVoteArtwork,
  voteArtwork
} from '../../modules/artworks/api/api-artworks';

const useLikeAndCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const jwt = auth.isAuthenticated();

  const queryClient = useQueryClient();

  const { mutate: likeMutation, status } = useMutation(
    (id) =>
      voteArtwork( { t: jwt.token }, { artworkId: id })
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          exact: true
        });
      }
    }
  );

  const { mutate: unLikeMutation, isError, isLoading } = useMutation(
    (id) =>
      unVoteArtwork( { t: jwt.token }, { artworkId: id } )
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          exact: true
        });
      }
    }
  );

  const { mutate: addToCartMutation, status: toCartStatus } = useMutation(
    (id) =>
      addArtworkToCart({ t: jwt.token }, { artworkId: id })
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        setCartItems([...cartItems, data]);
        queryClient.invalidateQueries({
          exact: true
        });
      }
    }
  );

  const { mutate: fromCartMutation, status: fromCartStatus } = useMutation(
    (id) =>
      removeArtworkFromCart( { t: jwt.token }, { artworkId: id })
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        const newCartItems = cartItems.filter((item) => item._id !== data._id);
        setCartItems(newCartItems);
        queryClient.invalidateQueries({
          exact: true
        });
      }
    }
  );
  return {likeMutation, status, unLikeMutation, isError, addToCartMutation, toCartStatus, fromCartMutation, fromCartStatus, isLoading};
};

export default useLikeAndCart;
