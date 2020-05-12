import { getToken } from '../helpers/localStorage';

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
      reject(new Error({ error: 'No user is present in DB' }));
    })
  }
}
