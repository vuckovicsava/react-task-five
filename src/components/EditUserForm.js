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

  componentDidMount() {
    this.setState({ 
      username: this.props.user.username
    });
  }

  handleChange = e => this.setState({ [e.target.value]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    // edit user process that requires different aproach to validation
  }

  render() {
    const { errors, username, password, oldPassword } = this.state;

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
        <div className="form__actions">
          <button className="form__submit">Update</button>
          <div className="form__link">
            {/* This div is empty on purpose because the layout relies on it */}
          </div>
        </div>
      </form>
    );
  }
}