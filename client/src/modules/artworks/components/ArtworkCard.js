import React, { forwardRef, useContext } from 'react';
import { Card } from 'antd';
import {FilterContext} from '../../../context/FilterContext';
import { unVoteArtwork, voteArtwork } from '../api/api-artworks';
import { useQueryClient, useMutation } from 'react-query';
import auth from '../../auth/api/auth-helper';
import SignModal from '../../../components/SignModal';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart
} from 'react-icons/ai';
import { Link, Redirect } from 'react-router-dom';
import useSignToVote from '../../../hooks/useSignToVote';
import LazyLoad from 'react-lazyload';

const ArtworkCard = forwardRef((props, ref) => {
  const {isModalVisible, handleClose, unLikeOrSign} = useSignToVote();
  const { filters } = useContext(FilterContext);

  const jwt = auth.isAuthenticated();

  const queryClient = useQueryClient();

  const setStyles = (arg) => {
    if (arg === false) {
      return { padding: '1em 1em 0 1em' };
    } else if (arg === true) {
      return { textAlign: 'center' };
    }
  };

  const voteAndSetFilters = () => {
    if (window.location.pathname === '/artworks') {
      props.searchMutation(filters);
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
          predicate: query =>
            query.queryKey[0] !== 'artworks'
        });
        voteAndSetFilters();
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
          predicate: query =>
            query.queryKey[0] !== 'artworks'
        });
        voteAndSetFilters();
      }
    }
  );

  if (isError || status === 'error') {
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
            {props.artworkPage ? (<img
              style={{ width: '100%', height: 'auto' }}
              alt={props.name}
              src={props.url}
            />) : (<Link to={'/artworks/' + props.id}>
              <img
                style={{ width: '100%', height: 'auto' }}
                alt={props.name}
                src={props.url}
              />
            </Link>)}
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
                    onClick={() => unLikeOrSign(likeMutation)}
                    className="artwork-card__icon outline-heart"
                    key="like"
                  />
                ),
              <AiOutlineShoppingCart
                className="artwork-card__icon"
                key="addToCart"
              />
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
                    onClick={() => unLikeOrSign(likeMutation)}
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
      <SignModal isModalVisible={isModalVisible} visible={isModalVisible} handleClose={handleClose} />
    </>
  );
});

export default ArtworkCard;
