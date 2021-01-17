import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { emailSignInStart } from '../../redux/user/user.actions';
import {
  selectDidUserSignInFail,
  selectIsUserSignedIn,
  selectIsUserSigningIn,
} from '../../redux/user/user.selectors';
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
    console.log('DATA BEING USED TO SIGN IN FROM LOGIN PAGE', data);
    this.props.emailSignInStart(data);
  };

  render() {
    const { signInstarted, didSignInFail } = this.props;
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
              value={this.state.resp.email}
              label='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.resp.password}
              label='Password'
              required
            />
            <ButtonsBarContainer>
              <button>Log in</button>
            </ButtonsBarContainer>
          </form>
          {signInstarted ? <div>USER IS SIGNING IN...</div> : null}
          {didSignInFail ? <div>INVALID USERNAME/PASSWORD</div> : null}
        </SignInContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signInstarted: selectIsUserSigningIn,
  signInCompleted: selectIsUserSignedIn,
  didSignInFail: selectDidUserSignInFail,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (data) => dispatch(emailSignInStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
