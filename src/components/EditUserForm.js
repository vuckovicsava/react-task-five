import React, { Component } from 'react';
import FormField from './FormField';

export default class EditUserForm extends Component {

  state = {
    errors: {
      username: [],
      password: []
    },
    username: '',
    oldPassword: '',
    password: ''
  }

  handleChange = e => {
    this.setState({ [e.target.value]: e.target.value });
  }

  render() {
    const { errors, username, password, oldPassword } = this.state;

    return (
      <form>
        <FormField
          errors={errors.username}
          name="username"
          label="Username"
          type="text"
          value={username}
          handleChange={this.handleChange}
        />
        <FormField 
          errors={null}
          name="oldPassword"
          label="Old Password"
          type="password"
          value={oldPassword}
          handleChange={this.handleChange}
        />
        <FormField 
          errors={errors.password}
          name="password"
          label="New Password"
          type="password"
          value={password}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}