import React from 'react';
import FormInput from '../form-input/form-input.component';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: {
        email: '',
        password: '',
      },
      user: {},
    };
  }

  handleOnChange = (e) => {
    const { value, name } = e.target;
    let response = this.state.resp;
    response[name] = value;
    console.log(response);
    this.setState(
      {
        resp: response,
      },
      () => {
        console.log(this.state.resp);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.resp;
    fetch('/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        this.setState({ user: data });
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    // console.log(localStorage.getItem('user'));
    return (
      <>
        <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and password</span>
          <form
            onChange={(e) => this.handleOnChange(e)}
            onSubmit={this.handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* <h1>LOG IN FORM</h1> */}
            <FormInput
              name='email'
              type='email'
              // handleChange={this.handleChange}
              value={this.state.resp.email}
              label='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.resp.password}
              // handleChange={this.handleChange}
              label='Password'
              required
            />

            {/* <label htmlFor='email'>
              email:
              <input type='email' id='email' name='email' />
            </label>
            <label htmlFor='password'>
              password:
              <input type='password' id='password' name='password' />
            </label> */}
            <ButtonsBarContainer>
              <button>log in</button>
            </ButtonsBarContainer>
          </form>
        </SignInContainer>
      </>
    );
  }
}

export default SignIn;
