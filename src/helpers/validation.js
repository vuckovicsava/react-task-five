import isemail from 'isemail';
import { findUserByEmail } from './storage';

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

  // email has to be unique in localStorage
  if (findUserByEmail(email)) {
    errors.email.push('This email address is already being used by another account');
  }  

  // password has to be long enough
  if (password.length < 5) {
    errors.password.push('Password has to be at least 5 characters long');
  }

  // confirmPassword has to match password
  if (confirmPassword !== password) {
    errors.confirmPassword.push('Passwords don\'t match');
  }

  // return false if the data is valid
  if (Object.values(errors).every(arr => arr.length === 0)) return false;
  
  return errors;
}