import React, { Component } from 'react';
import { editUser } from '../helpers/storage';
import validate from '../helpers/validation';
import FormField from './FormField';

export default class EditUserForm extends Component {

  state = {
    errors: {
      username: [],
      email: [],
      oldPassword: [],
      password: [],
      confirmPassword: []
    },
    id: '',
    username: '',
    email: '',
    oldPassword: '',
    password: '',
    confirmPassword: ''
  }

  componentDidMount() {
    const { id, username, email } = this.props.user;
    this.setState({ id, username, email });
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password, confirmPassword, oldPassword } = this.state;

    // check if the old password is correct
    if (oldPassword === this.props.user.password) {
      // check if the data is valid
      const uniqueEmail = email !== this.props.user.email;
      const errors = validate(username, email, password, confirmPassword, uniqueEmail);
      if (!errors) {
        // edit the user in localStorage
        const updatedUser = this.props.user;
        updatedUser.username = username;
        updatedUser.email = email;
        updatedUser.password = password;
        editUser(updatedUser);
        // clear the component state
        this.setState({
          errors: {
            username: [],
            email: [],
            oldPassword: [],
            password: [],
            confirmPassword: []
          },
          username: '',
          email: '',
          oldPassword: '',
          password: '',
          confirmPassword: ''
        });
        // close the modal
        this.props.onEditSuccess();
      } else {
        this.setState(() => {
          // because validation function returns errors object without oldPassword field
          errors.oldPassword = [];
          return { errors };
        });
      }
    } else {
      this.setState(prevState => {
        const errors = prevState.errors;
        errors.oldPassword.push('Password is not correct');
        return { errors };
      });
    }
  }

  render() {
    const { 
      errors, 
      username, 
      email, 
      password,
      confirmPassword, 
      oldPassword
    } = this.state;

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
          errors={errors.oldPassword}
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
        <FormField 
          errors={errors.confirmPassword}
          name="confirmPassword"
          label="Confirm"
          type="password"
          value={confirmPassword}
          handleChange={this.handleChange}
        />
        <div className="form__actions">
          <button className="form__submit">Update</button>
          <div className="form__link">
            {/* This div is empty on purpose because the layout depends on it */}
          </div>
        </div>
      </form>
    );
  }
}