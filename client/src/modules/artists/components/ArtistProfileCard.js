import {memo} from 'react';
import { Redirect } from 'react-router-dom';
import { Card } from 'antd';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { likeArtist, unlikeArtist } from '../api/api-artists';
import { useMutation, useQueryClient } from 'react-query';
import auth from '../../auth/api/auth-helper';
import React from 'react';
import useSignToVote from '../../../hooks/Auth/useSignToAction';
import SignModal from '../../../components/SignModal';

const { Meta } = Card;

const ArtistProfileCard = (props) => {
  const {isModalVisible, handleClose, unDoOrSign} = useSignToVote();
  const jwt = auth.isAuthenticated();

  const queryClient = useQueryClient();

  const { mutate: likeArtistMutation, status } = useMutation(
    (id) =>
      likeArtist({ artistId: id }, { t: jwt.token })
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: () => queryClient.invalidateQueries('artist')
    }
  );

  const { mutate: unLikeArtistMutation, isError } = useMutation(
    (id) =>
      unlikeArtist({ artistId: id }, { t: jwt.token })
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: () => queryClient.invalidateQueries('artist')
    }
  );

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <>
      <Card
        style={{ textAlign: 'center' }}
        bordered
        cover={<img alt={props.name} src={props.pic} />}
        actions={[
          auth.isAuthenticated() &&
          props.likes.includes(auth.isAuthenticated()?.user._id) ? (
              <AiFillHeart
                key="unvote"
                style={{ fontSize: '2rem', color: '#cd6153' }}
                onClick={() =>
                  unLikeArtistMutation(props.id)
                }
              />
            ) : (
              <AiOutlineHeart
                onClick={() => unDoOrSign(likeArtistMutation, props.id)}
                key="vote"
                style={{ fontSize: '2rem' }}
              />
            )
        ]}
      >
        <Meta
          description={
            <em>
              <h3>
                {props.discipline.charAt(0).toUpperCase() +
                  props.discipline.slice(1)}
              </h3>
            </em>
          }
        />
      </Card>
      <SignModal
        isModalVisible={isModalVisible}
        visible={isModalVisible}
        handleClose={handleClose}
      />
    </>
  );
};

export default memo(ArtistProfileCard);
