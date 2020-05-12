export default function validateSignupInput(data) {
  let errors = {};
  let validationResult = false;
  let mailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (data.email === undefined || data.email.trim().length === 0) {
    errors.email = 'This can\'t be blank.';
  } else if (!data.email.match(mailFormat)) {
    errors.email = 'Please enter valid email address.';
  }

  if (data.password === undefined || data.password.trim().length === 0) {
    errors.password = 'This can\'t be blank.';
  } else if (data.password.trim().length < 6) {
    errors.password = 'Password length should be 6 or more.';
  }

  if (data.passwordConfirmation === undefined || data.passwordConfirmation.trim().length === 0) {
    errors.passwordConfirmation = 'This can\'t be blank.';
  } else if (data.passwordConfirmation.trim().length < 6) {
    errors.passwordConfirmation = 'Password length should be 6 or more.';
  } else if (data.passwordConfirmation.trim() !== data.password.trim()) {
    errors.passwordConfirmation = 'Password confirmation should be same as password.';
  }

  if (Object.keys(errors).length === 0) {
    validationResult = true;
  }

  return {
    errors,
    isValid: validationResult
  }
}