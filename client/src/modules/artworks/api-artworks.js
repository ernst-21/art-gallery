const listArtworks = async () => {
  try {
    let response = await fetch('http://localhost:5000/api/artworks',{
      method: 'GET'
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listArtworksByCategory = async (params) => {
  try {
    let response = await fetch('http://localhost:5000/api/artworks/category/' + params.artCategory, {
      method: 'GET'
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const readArtwork = async (params) => {
  try {
    let response = await fetch(
      'http://localhost:5000/api/artworks/' + params.artworkId,
      {
        method: 'GET'
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

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

export { listArtworks, readArtwork, voteArtwork, unVoteArtwork, listArtworksByCategory };
