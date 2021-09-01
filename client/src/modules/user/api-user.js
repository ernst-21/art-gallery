const create = async (user) =>
  await fetch('http://localhost:5000/api/users/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

const read = async (params, credentials) =>
  await fetch('http://localhost:5000/api/users/' + params.userId, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    }
  });

const update = async (params, credentials, user) =>
  await fetch('http://localhost:5000/api/users/' + params.userId, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    },
    body: JSON.stringify(user)
  });

const remove = async (params, credentials) =>
  await fetch('http://localhost:5000/api/users/' + params.userId, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + credentials.t
    }
  });

const emailToPass = async (user) =>
  await fetch('http://localhost:5000/api/users/reset', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

const resetPass = async (params, user) =>
  fetch('http://localhost:5000/api/users/reset-password/' + params.token, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

export { create, read, update, remove, emailToPass, resetPass };
