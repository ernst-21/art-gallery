import React, { forwardRef } from 'react';
import { Card, Tooltip } from 'antd';
import {
  unVoteArtwork,
  voteArtwork,
  addArtworkToCart,
  removeArtworkFromCart
} from '../api/api-artworks';
import { useQueryClient, useMutation } from 'react-query';
import auth from '../../auth/api/auth-helper';
import SignModal from '../../../components/SignModal';
import {
  AiFillHeart,
  AiOutlineHeart,
  FaCartPlus,
  MdRemoveShoppingCart
} from 'react-icons/all';
import { Link, Redirect } from 'react-router-dom';
import useSignToAction from '../../../hooks/useSignToAction';
import LazyLoad from 'react-lazyload';

const ArtworkCard = forwardRef((props, ref) => {
  const { isModalVisible, handleClose, unDoOrSign } = useSignToAction();

  const jwt = auth.isAuthenticated();

  const queryClient = useQueryClient();

  const setStyles = (arg) => {
    if (arg === false) {
      return { padding: '1em 1em 0 1em' };
    } else if (arg === true) {
      return { textAlign: 'center' };
    }
  };

  const { mutate: likeMutation, status } = useMutation(
    (user) =>
      voteArtwork({ artworkId: props.id }, { t: jwt.token }, user)
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

  const { mutate: unLikeMutation, isError } = useMutation(
    (user) =>
      unVoteArtwork({ artworkId: props.id }, { t: jwt.token }, user)
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
    (user) =>
      addArtworkToCart({ artworkId: props.id }, { t: jwt.token }, user)
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

  const { mutate: fromCartMutation, status: fromCartStatus } = useMutation(
    (user) =>
      removeArtworkFromCart({ artworkId: props.id }, { t: jwt.token }, user)
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

  if (
    isError ||
    status === 'error' ||
    toCartStatus === 'error' ||
    fromCartStatus === 'error'
  ) {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <>
      <Card
        innerref={ref}
        hoverable
        style={setStyles(props.artworkPage)}
        cover={
          <LazyLoad>
            {props.artworkPage ? (
              <img
                style={{ width: '100%', height: 'auto' }}
                alt={props.name}
                src={props.url}
              />
            ) : (
              <Link to={'/artworks/' + props.id}>
                <img
                  style={{ width: '100%', height: 'auto' }}
                  alt={props.name}
                  src={props.url}
                />
              </Link>
            )}
          </LazyLoad>
        }
        actions={
          !props.artworkPage
            ? [
              auth.isAuthenticated() &&
                props.voters.includes(auth.isAuthenticated()?.user._id) ? (
                  <AiFillHeart
                    onClick={() =>
                      unLikeMutation({
                        userId: auth.isAuthenticated()?.user._id
                      })
                    }
                    className="artwork-card__icon filled-heart"
                    key="unlike"
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => unDoOrSign(likeMutation)}
                    className="artwork-card__icon outline-heart"
                    key="like"
                  />
                ),
              auth.isAuthenticated() &&
                props.addedToCart.includes(auth.isAuthenticated()?.user._id) ? (
                  <Tooltip title="Remove from cart">
                    <MdRemoveShoppingCart
                      onClick={() =>
                        fromCartMutation({
                          userId: auth.isAuthenticated()?.user._id
                        })
                      }
                      className="artwork-card__icon remove-cart__icon"
                      key="removeFromCart"
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title='Add to cart'>
                    <FaCartPlus
                      onClick={() => unDoOrSign(addToCartMutation)}
                      className="artwork-card__icon add-cart__icon"
                      key="addToCart"
                    />
                  </Tooltip>
                )
            ]
            : [
              auth.isAuthenticated() &&
                props.voters.includes(auth.isAuthenticated()?.user._id) ? (
                  <AiFillHeart
                    style={{ color: 'red' }}
                    onClick={() =>
                      unLikeMutation({
                        userId: auth.isAuthenticated()?.user._id
                      })
                    }
                    className="artwork-card__icon"
                    key="unlike"
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => unDoOrSign(likeMutation)}
                    className="artwork-card__icon outline-heart"
                    key="like"
                  />
                )
            ]
        }
      >
        {!props.artworkPage && (
          <>
            <h3>
              <Link style={{ color: '#3b3b3b' }} to={'/artworks/' + props.id}>
                {props.name}
              </Link>
            </h3>
            <p className="card-text card-text__category">{props.category}</p>
            <p className="card-text">
              Artist:{' '}
              <Link to={'/artists/' + props.artist_Id}>{props.artist}</Link>
            </p>
            <p className="card-text card-text__category">
              likes: {props.voters.length}
            </p>
            <p className="card-text">Price: ${props.price}</p>
            <p className="card-text">Gallery: {props.gallery}</p>
          </>
        )}
      </Card>
      <SignModal
        isModalVisible={isModalVisible}
        visible={isModalVisible}
        handleClose={handleClose}
      />
    </>
  );
});

export default ArtworkCard;
