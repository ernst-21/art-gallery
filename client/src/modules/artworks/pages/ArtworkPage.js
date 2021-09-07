import {useState} from 'react';
import { readArtwork, similarArtworks } from '../api/api-artworks';
import { useQuery, useMutation } from 'react-query';
import { Redirect, useParams } from 'react-router-dom';
import SpinLoader from '../../../components/SpinLoader';
import { Button } from 'antd';
import ArtworkTags from '../components/ArtworkTags';
import {Link} from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard';
import ElementsGrid from '../../../components/ElementsGrid';

const ArtworkPage = () => {
  const artworkId = useParams().artworkId;
  const [similar, setSimilar] = useState([]);

  const { data: artwork, isLoading, isError } = useQuery(
    ['artwork', artworkId],
    () =>
      readArtwork({ artworkId: artworkId })
        .then((res) => res.json())
        .then((data) => data), {
      onSuccess: (data) => similarWorkMutation({ tags: data.tags, artworkId: artworkId })
    }
  );
  const tags = artwork?.tags;

  const { mutate: similarWorkMutation, status } = useMutation(
    (art) =>
      similarArtworks(art)
        .then((res) => res.json())
        .then((data) => data),
    {
      onSuccess: (data) => {
        setSimilar(data);
      }
    }
  );

  if (isError || status === 'error') {
    return <Redirect to="/info-network-error" />;
  }

  return (
    <div className="artwork-data">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <>
          <div className="artwork-data__container">
            <div className="artwork-photo__container">
              <ArtworkCard
                id={artwork._id}
                style={{ fontSize: '2rem' }}
                url={artwork.url}
                name={artwork.name}
                artworkPage={true}
                voters={artwork.voters}
              />
            </div>
            <div className="artwork-info__container">
              <h1>{artwork.name}</h1>
              <p className="artwork-info__description"><em>{artwork.description}</em></p>
              <p className="artwork-info__description">Artist: <em>{artwork.artist}</em></p>
              <p className="artwork-info__description">Category: <em>{artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1)}</em></p>
              <p className="artwork-info__description">Size: <em>{artwork.size}</em></p>
              <p className="artwork-info__description">Orientation: <em>{artwork.orientation}</em></p>
              <ArtworkTags tags={tags} />
              <h4 style={{marginTop: '1rem'}}>
                <em>likes: {artwork.voters.length}</em>
              </h4>
              <p className="artwork-info__description">Price: ${artwork.price}</p>
              <Button size="large" style={{ marginTop: '1rem' }} type="primary">
                <Link to={'/home'}>Add to Cart</Link>
              </Button>
            </div>
          </div>
          <div className="similar-artworks__container">
            <ElementsGrid
              artworks={true}
              elements={similar}
              title='You might like'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ArtworkPage;