import React, { Component } from 'react';
import FormField from './FormField';

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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;
    console.log({
      username,
      email,
      password,
      confirmPassword
    });
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