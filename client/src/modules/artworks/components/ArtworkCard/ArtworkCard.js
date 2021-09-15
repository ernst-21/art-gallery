import React, { forwardRef, memo } from 'react';
import { Card } from 'antd';
import auth from '../../../auth/api/auth-helper';
import SignModal from '../../../../components/SignModal';
import FilledHeart from './components/FilledHeart';
import { Link, Redirect } from 'react-router-dom';
import useSignToAction from '../../../../hooks/Auth/useSignToAction';
import useLikeAndCart from '../../../../hooks/Cart/useLikeAndCart';
import OutlinedHeart from './components/OutlinedHeart';
import RemoveShoppingCart from './components/RemoveShoppingCart';
import AddToShoppingCart from './components/AddToShoppingCart';
import CardCover from './components/CardCover';

const ArtworkCard = forwardRef((props, ref) => {
  const { status, isError, toCartStatus, fromCartStatus } = useLikeAndCart();
  const { isModalVisible, handleClose } = useSignToAction();

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
      <Card
        innerref={ref}
        hoverable
        style={setStyles(props.artworkPage)}
        cover={
          <CardCover
            id={props.id}
            artworkPage={props.artworkPage}
            name={props.name}
            url={props.url}
          />
        }
        actions={
          !props.artworkPage
            ? [
              auth.isAuthenticated() &&
                props.voters.includes(auth.isAuthenticated()?.user._id) ? (
                  <FilledHeart id={props.id} />
                ) : (
                  <OutlinedHeart id={props.id} />
                ),
              auth.isAuthenticated() &&
                props.addedToCart.includes(auth.isAuthenticated()?.user._id) ? (
                  <RemoveShoppingCart id={props.id} />
                ) : (
                  <AddToShoppingCart id={props.id} />
                )
            ]
            : [
              auth.isAuthenticated() &&
                props.voters.includes(auth.isAuthenticated()?.user._id) ? (
                  <FilledHeart id={props.id} />
                ) : (
                  <OutlinedHeart id={props.id} />
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

ArtworkCard.displayName = 'ArtworkCard';

export default memo(ArtworkCard);
