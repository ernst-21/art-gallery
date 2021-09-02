const listArtworks = async () =>
  await fetch('http://localhost:5000/api/artworks', {
    method: 'GET'
  });

const listArtworksByCategory = async (params) =>
  await fetch(
    'http://localhost:5000/api/artworks/category/' + params.artCategory,
    {
      method: 'GET'
    }
  );

const readArtwork = async (params) =>
  await fetch('http://localhost:5000/api/artworks/' + params.artworkId, {
    method: 'GET'
  });

const voteArtwork = async (params, credentials, user) =>
  await fetch('http://localhost:5000/api/artworks/vote/' + params.artworkId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  });

const unVoteArtwork = async (params, credentials, user) =>
  await fetch('http://localhost:5000/api/artworks/unvote/' + params.artworkId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  });

const artistArtworks = async (artistWork) =>
  await fetch('http://localhost:5000/api/artworks/artistArtworks', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(artistWork)
  });

export {
  listArtworks,
  readArtwork,
  voteArtwork,
  unVoteArtwork,
  listArtworksByCategory,
  artistArtworks
};
