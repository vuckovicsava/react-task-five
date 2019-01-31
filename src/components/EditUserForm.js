import React, { Component } from 'react';
import { editUser } from '../helpers/storage';
import { validateEdit } from '../helpers/validation';
import FormField from './FormField';

export default class EditUserForm extends Component {

  state = {
    errors: {
      username: [],
      oldPassword: [],
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

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, oldPassword } = this.state;

    // check if the old password is correct
    if (oldPassword === this.props.user.password) {
      // check if the data is valid
      const errors = validateEdit(username, password);
      if (!errors) {
        // edit the user in localStorage
        const updatedUser = this.props.user;
        updatedUser.password = password;
        editUser(updatedUser);
        // clear the component state
        this.setState({
          errors: {
            username: [],
            oldPassword: [],
            password: []
          },
          username: this.props.user.username,
          oldPassword: '',
          password: ''
        });
        // close the modal
        this.props.onEditSuccess();
      } else {
        this.setState({ errors });
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