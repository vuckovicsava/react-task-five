import isemail from 'isemail';

// returns errors object if the data is not valid, returns true if the data is valid
export default function validate(username, email, password, confirmPassword) {
  const errors = {
    username: [],
    email: [],
    password: [],
    confirmPassword: []
  };

  // username has to be long enough
  if (username.length < 8) {
    errors.username.push('Username has to contain at least 8 characters long');
  }

  // username has to be lowercase
  if (username !== username.toLowerCase()) {
    errors.username.push('Username has to be lowercase');
  }

  // email has to be valid
  if (!isemail.validate(email)) {
    errors.email.push('Email address is not valid');
  }

  // password has to be long enough
  if (password.length < 5) {
    errors.password.push('Password has to be at least 5 characters long');
  }

  // confirmPassword has to match password
  if (confirmPassword !== password) {
    errors.confirmPassword.push('Passwords don\'t match');
  }

  // return true if the data is valid
  if (Object.values(errors).every(arr => arr.length === 0)) return true;
  
  return errors;
}