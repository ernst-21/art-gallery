import React, { forwardRef } from 'react';
import { Card, Tooltip } from 'antd';
import auth from '../../auth/api/auth-helper';
import SignModal from '../../../components/SignModal';
import {
  AiFillHeart,
  AiOutlineHeart,
  FaCartPlus,
  MdRemoveShoppingCart
} from 'react-icons/all';
import { Link, Redirect } from 'react-router-dom';
import useSignToAction from '../../../hooks/Auth/useSignToAction';
import LazyLoad from 'react-lazyload';
import useLikeAndCart from '../../../hooks/Cart/useLikeAndCart';

const ArtworkCard = forwardRef((props, ref) => {
  const {likeMutation, status, unLikeMutation, isError, addToCartMutation, toCartStatus, fromCartMutation, fromCartStatus} = useLikeAndCart();
  const { isModalVisible, handleClose, unDoOrSign } = useSignToAction();

  const setStyles = (arg) => {
    if (arg === false) {
      return { padding: '1em 1em 0 1em' };
    } else if (arg === true) {
      return { textAlign: 'center' };
    }
  };

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
      {auth.isAuthenticated() && props.purchased.includes(auth.isAuthenticated().user._id ) ? null : (<Card
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
                      unLikeMutation([{
                        userId: auth.isAuthenticated()?.user._id
                      }, props.id])
                    }
                    className="artwork-card__icon filled-heart"
                    key="unlike"
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => unDoOrSign(likeMutation, props.id)}
                    className="artwork-card__icon outline-heart"
                    key="like"
                  />
                ),
              auth.isAuthenticated() &&
              props.addedToCart.includes(auth.isAuthenticated()?.user._id) ? (
                  <Tooltip title="Remove from cart">
                    <MdRemoveShoppingCart
                      onClick={() =>
                        fromCartMutation([{
                          userId: auth.isAuthenticated()?.user._id
                        }, props.id])
                      }
                      className="artwork-card__icon remove-cart__icon"
                      key="removeFromCart"
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title='Add to cart'>
                    <FaCartPlus
                      onClick={() => unDoOrSign(addToCartMutation, props.id)}
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
                      unLikeMutation([{
                        userId: auth.isAuthenticated()?.user._id
                      }, props.id])
                    }
                    className="artwork-card__icon"
                    key="unlike"
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => unDoOrSign(likeMutation, props.id)}
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
      </Card>)}

      <SignModal
        isModalVisible={isModalVisible}
        visible={isModalVisible}
        handleClose={handleClose}
      />
    </>
  );
});

ArtworkCard.displayName = 'ArtworkCard';

export default ArtworkCard;
