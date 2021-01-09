import React from 'react';
import FormInput from '../form-input/form-input.component';

import {
  SignUpContainer,
  SignUpTitle,
  RoleContainer,
  RolePrompt,
  RadioWrapper,
  RadioLabel,
  RadioInput,
  RadioIndicator,
} from './sign-up.styles';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        username: '',
        email: '',
        password: '',
        role: '',
      },
      confirmPassword: '',
      cafe: '5fa5796e9542c50df4285b04',
    };
  }

  handleOnChange = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.name);
    // const responses = this.resp.push({name: [e.target.value]})
    //console.log(responses)
    //  this.setState({ selectedOption: e.target.value});
    //console.log(resp)
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'confirmPassword') {
      this.setState({ confirmPassword: value });
      return;
    }
    let response = this.state.resp;
    response[name] = value;
    //console.log(response);
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
    const {
      resp: { password },
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    const data = { ...this.state.resp };
    data['cafe'] = this.state.cafe;
    console.log('handle submit called', data);

    fetch('/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <>
        <SignUpContainer>
          <SignUpTitle>I do not have a account</SignUpTitle>
          <span>Sign up with your email and password</span>
          <form
            onChange={(e) => this.handleOnChange(e)}
            onSubmit={this.handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <FormInput
              type='text'
              name='firstName'
              value={this.state.resp.firstName}
              // onChange={this.handleChange}
              label='First Name'
              required
            />
            <FormInput
              type='text'
              name='lastName'
              value={this.state.resp.lastName}
              // onChange={this.handleChange}
              label='Last Name'
              required
            />
            <FormInput
              type='text'
              name='phoneNumber'
              value={this.state.resp.phoneNumber}
              // onChange={this.handleChange}
              label='Phone Number'
              required
            />
            <FormInput
              type='text'
              name='username'
              value={this.state.resp.username}
              // onChange={this.handleChange}
              label='Username'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={this.state.resp.email}
              // onChange={this.handleChange}
              label='Email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={this.state.resp.password}
              // onChange={this.handleChange}
              label='Password'
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={this.state.confirmPassword}
              // onChange={this.handleChange}
              label='Confirm Password'
              required
            />

            <RoleContainer>
              <RolePrompt>Who are you registering as?</RolePrompt>
              <RadioWrapper>
                <RadioLabel htmlFor='student'>
                  Student
                  <RadioInput
                    type='radio'
                    id='student'
                    name='role'
                    value='STUDENT'
                  />
                  <RadioIndicator />
                </RadioLabel>
                <RadioLabel htmlFor='teacher'>
                  Teacher
                  <RadioInput
                    type='radio'
                    id='teacher'
                    name='role'
                    value='TEACHER'
                  />
                  <RadioIndicator />
                </RadioLabel>
              </RadioWrapper>
            </RoleContainer>

            <button>sign up</button>
          </form>
        </SignUpContainer>
      </>
    );
  }
}

export default SignUp;
