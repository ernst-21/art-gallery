const listArtworks = async () =>
  await fetch('http://localhost:5000/api/artworks', {
    method: 'GET'
  });

const listFeatured = async () =>
  await fetch('http://localhost:5000/api/artworks/featured', {
    method: 'GET'
  });

const listPurchased = async (params) =>
  await fetch(
    'http://localhost:5000/api/artworks/purchased/' + params.userId,
    {
      method: 'GET'
    }
  );

const readArtwork = async (params) =>
  await fetch('http://localhost:5000/api/artworks/' + params.artworkId, {
    method: 'GET'
  });

const voteArtwork = async (credentials, artworkId) =>
  await fetch('http://localhost:5000/api/artworks/vote', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(artworkId)
  });

const unVoteArtwork = async (credentials, artworkId) =>
  await fetch('http://localhost:5000/api/artworks/unvote', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(artworkId)
  });

const addArtworkToCart = async (credentials, artWorkId) =>
  await fetch('http://localhost:5000/api/artworks/cart/add', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(artWorkId)
  });

const removeArtworkFromCart = async (credentials, artworkId) =>
  await fetch('http://localhost:5000/api/artworks/cart/remove', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(artworkId)
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

const userArtworks = async (userId) =>
  await fetch('http://localhost:5000/api/artworks/userArtworks', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userId)
  });

const listCartItems = async (userId) =>
  await fetch('http://localhost:5000/api/artworks/cart/cartArtworks', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userId)
  });

const similarArtworks = async (similarPlusId) =>
  await fetch('http://localhost:5000/api/artworks/similarArtworks', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(similarPlusId)
  });

const searchArtworks = async (filters) =>
  await fetch('http://localhost:5000/api/artworks/search/searchArtworks', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filters)
  });

const purchaseArtworks = async (credentials, artworks) =>
  await fetch('http://localhost:5000/api/artworks/purchase/buyArtworks', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(artworks)
  });

export {
  listArtworks,
  readArtwork,
  voteArtwork,
  unVoteArtwork,
  artistArtworks,
  userArtworks,
  similarArtworks,
  searchArtworks,
  addArtworkToCart,
  removeArtworkFromCart,
  listCartItems,
  purchaseArtworks,
  listPurchased,
  listFeatured
};
