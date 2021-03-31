import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

//redux used
import {
  selectDidUserSignUpFail,
  selectIsUserSigningUp,
  selectUserReducerError,
  selectWasSignUpSuccessful,
} from '../../redux/user/user.selectors';
import { resetSignUpInfo, signUpStart } from '../../redux/user/user.actions';
import { selectAllCafes } from '../../redux/allCourses/all-courses.selectors';

//components used
// import FormInput from '../form-input/form-input.component';

import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { RoleContainer, ButtonWrapper } from './sign-up.styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

// material ui styling
const useStyles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(2),
      width: '30ch',
    },
  },
  button: {
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    color: 'white',
    width: '100%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  formControlForCafeList: {
    // marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // marginTop: 5,
    // minWidth: 150,
    width: '30ch',
  },

  formControlForRoleSelection: {
    marginTop: theme.spacing(0.5),
    paddingTop: theme.spacing(1),
    width: '30ch',

    marginRight: theme.spacing(1),
    // marginBottom: theme.spacing(1),
    // marginTop: 15,
    // minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
});

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
        role: 'STUDENT',
        cafe: '',
        confirmPassword: '',
      },
      errors: {},
      // cafeName: '',
    };
  }

  validate = (fieldValues = this.state.resp) => {
    let temp = { ...this.state.errors };
    if ('firstName' in fieldValues)
      temp.firstName = fieldValues.firstName ? '' : 'This field is required.';
    if ('lastName' in fieldValues)
      temp.lastName = fieldValues.lastName ? '' : 'This field is required.';
    if ('username' in fieldValues)
      temp.username = fieldValues.username ? '' : 'This field is required.';
    if ('password' in fieldValues)
      temp.password = fieldValues.password ? '' : 'This field is required.';
    if ('confirmPassword' in fieldValues)
      temp.confirmPassword = fieldValues.confirmPassword
        ? ''
        : 'This field is required.';
    if ('cafe' in fieldValues)
      temp.cafe = fieldValues.cafe ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = /.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    if ('phoneNumber' in fieldValues)
      temp.phoneNumber =
        fieldValues.phoneNumber.length > 9
          ? ''
          : 'Minimum 10 numbers required.';
    this.setState({ errors: temp });

    if (fieldValues === this.state.resp) {
      return Object.values(temp).every((x) => x === '');
    }
  };

  handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // if (name === 'confirmPassword') {
    //   this.setState({ confirmPassword: value });
    //   this.validate({ [name]: value });
    //   return;
    // }
    // console.log('NAME: ' + name + ' VALUE: ' + value);
    let response = this.state.resp;
    response[name] = value;
    this.setState({
      resp: response,
    });
    this.validate({ [name]: value });
  };

  // handleFormControlChange = (event) => {
  //   this.setState({ cafeName: event.target.value });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      resp: { password, confirmPassword },
    } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    const data = { ...this.state.resp };
    // data['cafe'] = this.state.cafe;
    if (this.validate()) {
      this.props.signUpStart(data);
      // alert('SUBMITTING FORM!');
      this.setState({
        resp: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          username: '',
          email: '',
          password: '',
          role: 'STUDENT',
          cafe: '',
          confirmPassword: '',
        },
      });
    } else {
      // alert('Fill details correctly first');
    }
  };

  componentWillUnmount() {
    const { resetSignUpInfo } = this.props;
    resetSignUpInfo();
  }

  render() {
    const {
      classes,
      cafeList,
      signUpstarted,
      signUpCompleted,
      didSignUpFail,
      signUpErrorMessage,
      resetSignUpInfo,
    } = this.props;
    const { resp } = this.state;
    return (
      <>
        {/* <SignUpContainer> */}
        {/* <SignUpTitle>I do not have a account</SignUpTitle>
          <span>Sign up with your email and password</span> */}
        <form
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.handleSubmit}
          className={classes.root}
          // style={{
          //   display: 'flex',
          //   flexDirection: 'column',
          // }}
        >
          <TextField
            name='firstName'
            label='First Name'
            error={this.state.errors.firstName ? true : false}
            helperText={`${
              this.state.errors.firstName
                ? `
                Error : ${this.state.errors.firstName}`
                : ''
            }`}
            variant='outlined'
            value={resp.firstName}
          />
          <TextField
            name='lastName'
            label='Last Name'
            error={this.state.errors.lastName ? true : false}
            helperText={`${
              this.state.errors.lastName
                ? `
                Error : ${this.state.errors.lastName}`
                : ''
            }`}
            variant='outlined'
            value={resp.lastName}
          />
          <TextField
            name='username'
            label='Username'
            error={this.state.errors.username ? true : false}
            helperText={`${
              this.state.errors.username
                ? `
                Error : ${this.state.errors.username}`
                : ''
            }`}
            variant='outlined'
            value={resp.username}
          />
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

          <TextField
            name='confirmPassword'
            label='Confirm Password'
            type='password'
            error={this.state.errors.confirmPassword ? true : false}
            helperText={`${
              this.state.errors.confirmPassword
                ? `
                Error : ${this.state.errors.confirmPassword}`
                : ''
            }`}
            variant='outlined'
            value={resp.confirmPassword}
          />

          <TextField
            name='phoneNumber'
            label='Phone Number'
            error={this.state.errors.phoneNumber ? true : false}
            helperText={`${
              this.state.errors.phoneNumber
                ? `
                Error : ${this.state.errors.phoneNumber}`
                : ''
            }`}
            variant='outlined'
            value={resp.phoneNumber}
          />

          <TextField
            name='cafe'
            select
            label='Select an Unnati Cafe'
            error={this.state.errors.cafe ? true : false}
            helperText={`${
              this.state.errors.cafe
                ? `
                Error : ${this.state.errors.cafe}`
                : ''
            }`}
            variant='outlined'
            value={resp.cafe}
            onChange={this.handleOnChange}
          >
            <MenuItem value='' disabled>
              None
            </MenuItem>
            {cafeList
              ? cafeList.map((cafe) => (
                  <MenuItem value={cafe._id} key={cafe._id}>
                    {cafe.name}
                  </MenuItem>
                ))
              : null}
          </TextField>

          {/* <SelectionWrapper> */}
          <RoleContainer>
            <FormControl
              component='fieldset'
              className={classes.formControlForRoleSelection}
            >
              {/* <FormControl component='fieldset'> */}
              <FormLabel component='legend'>
                Who are you registering as?
              </FormLabel>
              <RadioGroup
                row
                aria-label='role'
                name='role'
                value={this.state.resp.role}
                onChange={this.handleOnChange}
              >
                <FormControlLabel
                  value='STUDENT'
                  control={<Radio />}
                  label='Student'
                />
                <FormControlLabel
                  value='TEACHER'
                  control={<Radio />}
                  label='Teacher'
                />
              </RadioGroup>
            </FormControl>
          </RoleContainer>

          {/* </SelectionWrapper> */}

          <ButtonWrapper>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              type='submit'
              className={classes.button}
              // startIcon={<SaveIcon />}
            >
              Sign Up
            </Button>
          </ButtonWrapper>
          <Backdrop className={classes.backdrop} open={signUpstarted}>
            <CircularProgress color='inherit' />
          </Backdrop>
          <Snackbar
            open={signUpCompleted}
            autoHideDuration={5000}
            onClose={() => resetSignUpInfo()}
          >
            <Alert severity='success'>
              Your Account Has Been Created! You can now Sign In
            </Alert>
          </Snackbar>
          <Snackbar
            open={didSignUpFail}
            autoHideDuration={5000}
            onClose={() => resetSignUpInfo()}
          >
            <Alert severity='error'>
              `Sign Up Failed... {signUpErrorMessage}`
            </Alert>
          </Snackbar>
        </form>
        {/* </SignUpContainer> */}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signUpstarted: selectIsUserSigningUp,
  signUpCompleted: selectWasSignUpSuccessful,
  didSignUpFail: selectDidUserSignUpFail,
  signUpErrorMessage: selectUserReducerError,
  cafeList: selectAllCafes,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (data) => dispatch(signUpStart(data)),
  resetSignUpInfo: () => dispatch(resetSignUpInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(SignUp));
