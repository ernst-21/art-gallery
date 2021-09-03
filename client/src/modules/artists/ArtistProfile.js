import { useState, useEffect } from 'react';
import ArtistProfileCard from './ArtistProfileCard';
import { Button } from 'antd';
import { useQuery, useMutation } from 'react-query';
import { Redirect, useParams } from 'react-router-dom';
import { readArtist } from './api-artists';
import { artistArtworks } from '../artworks/api-artworks';
import SpinLoader from '../../components/SpinLoader';
import ArtistSocial from './artistSocialIcons';
import ElementsGrid from '../../components/ElementsGrid';

const ArtistProfile = () => {
  const artistId = useParams().artistId;
  const [artistWork, setArtistWork] = useState([]);

  const { data: artist, isLoading, isError } = useQuery(
    ['artist', artistId],
    () =>
      readArtist({ artistId: artistId })
        .then((res) => res.json())
        .then((data) => data)
  );

  const artworks = artist?.artworks;

  const { mutate: artistWorkMutation, status } = useMutation(
    (art) =>
      artistArtworks(art)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        setArtistWork(data);
      }
    }
  );

  useEffect(() => {
    if (artist) {
      artistWorkMutation({ artistWork: artworks });
    }
  }, [artist, artistWorkMutation, artworks]);

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="artist-data">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <>
          <div className="artist-data__container">
            <div className="artist-photo__container">
              <ArtistProfileCard
                style={{ fontSize: '2rem' }}
                pic={artist.pic}
                discipline={artist.discipline}
              />
            </div>
            <div className="artist-info__container">
              <h1>{artist.name}</h1>
              <p className="artist-info__description">{artist.about}</p>
              <h4>
                <em>likes: {artist.likes}</em>
              </h4>
              <Button size="large" style={{ marginTop: '1rem' }} type="primary">
                <a href="mailto:artist@gmail.com">Get in Contact</a>
              </Button>
              <ArtistSocial className="artist-info__social-icons" />
            </div>
          </div>
          <div className="artist-artworks__container">
            {
              <ElementsGrid
                artworks={true}
                elements={artistWork}
                title={'Artworks from ' + artist.name}
              />
            }
          </div>
        </>
      )}
    </div>
  );
};

export default ArtistProfile;