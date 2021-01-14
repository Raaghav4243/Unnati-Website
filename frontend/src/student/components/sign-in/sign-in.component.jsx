import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { emailSignInStart } from '../../redux/user/user.actions';
import {
  selectCurrentUserRole,
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

  componentDidUpdate() {
    console.log('SIGN IN COMPONENT UPDATED');
    const { signUpCompleted } = this.props;
    if (signUpCompleted) {
      console.log('SIGNUP COMPLETED!');
      this.handleSignInSuccess();
    }
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
    // fetch('/login', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //     this.setState({ user: data });
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('user', JSON.stringify(data.user));
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  handleSignInSuccess = () => {
    console.log('HANDLING SIGN IN SUCCESS AND REDIRECTING,');
    const { history, userRole } = this.props;
    // history.push('/student/dashboard');
    if (userRole === 'STUDENT') {
      history.push('/student/dashboard');
    } else if (userRole === 'TEACHER') {
      history.push('/teacher');
    }
  };

  render() {
    // console.log(localStorage.getItem('user'));
    const { signUpstarted, signUpCompleted } = this.props;
    const { handleSignInSuccess } = this.state;
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
              <button>Log in</button>
            </ButtonsBarContainer>
          </form>
          {signUpstarted ? <div>USER IS SIGNING IN...</div> : null}
          {/* {signUpCompleted ? {this.handleSignInSuccess()} : null} */}
        </SignInContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // user_id: selectCurrentUserId,
  // course_id: selectCurrentCourseId,
  // course_topic_id: selectCurrentCourseTopicId,
  // course_topic_type: selectCurrentCourseTopicType,
  signUpstarted: selectIsUserSigningIn,
  signUpCompleted: selectIsUserSignedIn,
  userRole: selectCurrentUserRole,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (data) => dispatch(emailSignInStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
