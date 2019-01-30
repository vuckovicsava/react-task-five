import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isAdmin, getAdmin, findUserByEmail } from '../helpers/storage';
import { Consumer } from '../context';
import FormField from './FormField';

class LoginPage extends Component {

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
    const { login } = this.props;

    if (isAdmin({ email, password })) {
      // user is admin, log him in and redirect to /admin
      login(getAdmin(), true, () => this.props.history.push('/admin'));
    } else {
      const user= findUserByEmail(email);
      // check if user exists in the storage and password is correct
      if (user) {
        if (user.password === password) {
          // clear the state
          this.setState({
            errors: {
              email: [],
              password: []
            },
            email: '',
            password: ''
          });
          // log the user in and redirect him to /
          login(user, false, () => this.props.history.push('/'));
        } else {
          this.setState(state => {
            const errors = state.errors;
            errors.password.push('The password you entered is incorrect');
            return { errors };
          });
        }
      } else {
        // user doesn't exist in storage
        this.setState(state => {
          const errors = state.errors;
          errors.email.push('Unable to find the user with this email');
          return { errors };
        });
      }
    }
  }

  render() {
    const { errors, email, password } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
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
        <div className="form__actions">
        <button className="form__submit" type="submit">Login</button>
          <span className="form__link">
            Don't have an account?
            <Link to="/register">Register</Link>
          </span>
        </div>
      </form>
    );
  }
}

// extract login function from context and make it available as props
const LoginPageWithContext = (props) => (
  <Consumer>
    {({ login }) => <LoginPage login={login} {...props} />}
  </Consumer>
);

export default LoginPageWithContext;