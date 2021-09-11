const listArtworks = async () =>
  await fetch('http://localhost:5000/api/artworks', {
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

const addArtworkToCart = async (params, credentials, user) =>
  await fetch('http://localhost:5000/api/artworks/cart/add/' + params.artworkId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  });

const removeArtworkFromCart = async (params, credentials, user) =>
  await fetch('http://localhost:5000/api/artworks/cart/remove/' + params.artworkId, {
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

const purchaseArtworks = async (credentials, userAndArtworks) =>
  await fetch('http://localhost:5000/api/artworks/purchase/buyArtworks', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(userAndArtworks)
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
  listPurchased
};
