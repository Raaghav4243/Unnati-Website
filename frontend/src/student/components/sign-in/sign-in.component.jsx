import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {
  emailSignInStart,
  resetSignInInfo,
} from '../../redux/user/user.actions';
import {
  selectDidUserSignInFail,
  selectIsUserSignedIn,
  selectIsUserSigningIn,
} from '../../redux/user/user.selectors';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Icon from '@material-ui/core/Icon';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import {
  SignInTitle,
  IconWrapper,
  ButtonWrapper,
  AlertWrapper,
  CopyrightWrapper,
  // ButtonsBarContainer,
} from './sign-in.styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Enactus DTU
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      // marginRight: theme.spacing(4),
      marginTop: theme.spacing(2),

      width: '100%',
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    // marginRight: theme.spacing(4),
    marginTop: theme.spacing(4),
    color: 'white',
    width: '100%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  alert: {
    marginTop: theme.spacing(2),
  },
  copyright: {
    marginTop: theme.spacing(2),
  },
});

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: {
        email: '',
        password: '',
      },
      user: {},
      errors: {},
    };
  }

  validate = (fieldValues = this.state.resp) => {
    let temp = { ...this.state.errors };

    if ('email' in fieldValues)
      temp.email = /.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';

    if ('password' in fieldValues)
      temp.password = fieldValues.password ? '' : 'Password is required.';

    this.setState({ errors: temp });

    if (fieldValues === this.state.resp) {
      return Object.values(temp).every((x) => x === '');
    }
  };

  handleOnChange = (e) => {
    const { value, name } = e.target;
    let response = this.state.resp;
    response[name] = value;
    this.setState({
      resp: response,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.resp;
    // console.log('DATA BEING USED TO SIGN IN FROM LOGIN PAGE', data);
    if (this.validate()) {
      this.props.emailSignInStart(data);
      this.setState({
        resp: {
          email: '',
          password: '',
        },
      });
    } else {
      // alert('Fill details correctly first');
    }
  };

  componentWillUnmount() {
    const { resetSignInInfo } = this.props;
    resetSignInInfo();
  }

  render() {
    const { signInstarted, didSignInFail, classes } = this.props;
    // console.log('DID SIGN IN FAIL', didSignInFail);
    const { resp } = this.state;
    return (
      <>
        {/* <SignInContainer> */}
        {/* <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and password</span> */}
        <form
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.handleSubmit}
          // style={{ display: 'flex', flexDirection: 'column' }}
          className={classes.root}
        >
          {/* <h1>LOG IN FORM</h1> */}
          {/* <FormInput
            name='email'
            type='email'
            value={this.state.resp.email}
            label='Email'
            required
          /> */}
          <IconWrapper>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </IconWrapper>
          <SignInTitle>Sign In</SignInTitle>
          <TextField
            name='email'
            label='Email'
            error={this.state.errors.email ? true : false}
            helperText={`${
              this.state.errors.email
                ? `
                Error : ${this.state.errors.email}`
                : ''
            }`}
            variant='outlined'
            value={resp.email}
          />
          <TextField
            name='password'
            label='Password'
            type='password'
            error={this.state.errors.password ? true : false}
            helperText={`${
              this.state.errors.password
                ? `
                Error : ${this.state.errors.password}`
                : ''
            }`}
            variant='outlined'
            value={resp.password}
          />
          {/* <FormInput
            name='password'
            type='password'
            value={this.state.resp.password}
            label='Password'
            required
          /> */}
          <ButtonWrapper>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              type='submit'
              className={classes.button}
              // startIcon={<SaveIcon />}
            >
              Sign In
            </Button>
          </ButtonWrapper>
          <Backdrop className={classes.backdrop} open={signInstarted}>
            <CircularProgress color='inherit' />
          </Backdrop>
          <AlertWrapper>
            {didSignInFail ? (
              <Alert severity='error'>Invalid Email and/or Password</Alert>
            ) : null}
          </AlertWrapper>
          <CopyrightWrapper>
            <Copyright className={classes.copyright} />
          </CopyrightWrapper>
        </form>
        {/* {signInstarted ? <div>USER IS SIGNING IN...</div> : null} */}

        {/* </SignInContainer> */}
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
  resetSignInInfo: () => dispatch(resetSignInInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(useStyles)(SignIn)));
