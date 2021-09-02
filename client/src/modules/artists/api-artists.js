const listArtists = async () =>
  await fetch('http://localhost:5000/api/artists', {
    method: 'GET'
  });

const listArtistsByDiscipline = async (params) =>
  await fetch(
    'http://localhost:5000/api/artists/artist/' + params.discipline,
    {
      method: 'GET'
    }
  );

const readArtist = async (params) =>
  await fetch('http://localhost:5000/api/artists/' + params.artistId, {
    method: 'GET'
  });

const likeArtist = async (params, credentials, user) =>
  await fetch('http://localhost:5000/api/artists/like/' + params.artistId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  });

const unlikeArtist = async (params, credentials, user) =>
  await fetch('http://localhost:5000/api/artists/unlike/' + params.artistId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  });

export {
  likeArtist,
  readArtist,
  listArtists,
  unlikeArtist,
  listArtistsByDiscipline
};
