import React, { Component } from 'react';
import FormField from './FormField';

export default class LoginPage extends Component {

  state = {
    errors: {
      email: [],
      password: []
    },
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log({
      email,
      password
    });
  }

  render() {
    const { errors, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    );
  }
}