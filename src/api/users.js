import { getToken, setToken } from '../helpers/localStorage';

export function requestLoginUser({ email, password }) {
  const users = getToken('users');

  if (users) {
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
      return new Promise(function(resolve, reject) {
        resolve({ email: user.email });
      })
    } else {
      return new Promise(function(resolve, reject) {
        reject(new Error('Invalid email or password'));
      })
    }
  } else {
    return new Promise(function(resolve, reject) {
      reject(new Error('No user is present in DB'));
    })
  }
}

export function requestSignupUser({ email, password }) {
  const users = getToken('users');

  if (users) {
    const user = users.find(user => user.email === email);

    if (user) {
      return new Promise(function(resolve, reject) {
        reject(new Error('Email is already taken.'));
      })
    } else {
      const lastUser = users[users.length - 1]
      const newUsers = [...users, { id: lastUser.id + 1, email: email, password: password }]
      setToken('users', newUsers)

      return new Promise(function(resolve, reject) {
        resolve({ email: email });
      })
    }
  } else {
    const newUsers = [{ id: 1, email: email, password: password }]
    setToken('users', newUsers)

    return new Promise(function(resolve, reject) {
      resolve({ email: email });
    })
  }
}
