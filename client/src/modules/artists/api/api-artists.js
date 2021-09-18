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

const likeArtist = async (params, credentials) =>
  await fetch('http://localhost:5000/api/artists/like/' + params.artistId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    }
  });

const unlikeArtist = async (params, credentials) =>
  await fetch('http://localhost:5000/api/artists/unlike/' + params.artistId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    }
  });

const userArtists = async (userId) =>
  await fetch('http://localhost:5000/api/artists/profile/userArtists', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userId)
  });

const searchArtists = async (filters) =>
  await fetch('http://localhost:5000/api/artists/search', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filters)
  });

export {
  likeArtist,
  readArtist,
  listArtists,
  unlikeArtist,
  listArtistsByDiscipline,
  userArtists,
  searchArtists
};
