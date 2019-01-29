import React, { Component } from 'react';
import FormField from './FormField';
import validate from '../helpers/validation';
import { createUser } from '../helpers/storage';

export default class RegisterPage extends Component {

  state = {
    errors: {
      username: [],
      email: [],
      password: [],
      confirmPassword: []
    },
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  clearState = () => {
    this.setState({
      errors: {
        username: [],
        email: [],
        password: [],
        confirmPassword: []
      },
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;
    
    const errors = validate(username, email, password, confirmPassword);
    if (!errors) {
      // successful registration
      createUser({ username, email, password });
      this.clearState();
      // redirect or whatever LATER
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const { errors, username, email, password, confirmPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <FormField 
          errors={errors.username}
          name="username"
          label="Username"
          type="text"
          value={username}
          handleChange={this.handleChange}
        />
        <FormField 
          errors={errors.email}
          name="email"
          label="Email"
          type="email"
          value={email}
          handleChange={this.handleChange}
        />
        <FormField 
          errors={errors.password}
          name="password"
          label="Password"
          type="password"
          value={password}
          handleChange={this.handleChange}
        />
        <FormField 
          errors={errors.confirmPassword}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          handleChange={this.handleChange}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}