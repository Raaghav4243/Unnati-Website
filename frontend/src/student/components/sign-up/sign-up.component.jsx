import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import { withStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import {
  SignUpContainer,
  SignUpTitle,
  RoleContainer,
  RolePrompt,
  RadioWrapper,
  RadioLabel,
  RadioInput,
  RadioIndicator,
  CafeSelector,
  CafePrompt,
  ButtonWrapper,
} from './sign-up.styles';
import {
  selectDidUserSignUpFail,
  selectIsUserSigningUp,
  selectWasSignUpSuccessful,
} from '../../redux/user/user.selectors';
import { signUpStart } from '../../redux/user/user.actions';
import { selectAllCafes } from '../../redux/allCourses/all-courses.selectors';

// material ui styling
const useStyles = (theme) => ({
  formControlForCafeList: {
    // marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // marginTop: 5,
    minWidth: 150,
  },
  formControlForRoleSelection: {
    // marginTop: theme.spacing(1),
    paddingTop: theme.spacing(2),
    // marginRight: theme.spacing(1),
    // marginBottom: theme.spacing(1),
    // marginTop: 15,
    // minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
      },
      confirmPassword: '',
      // cafeName: '',
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

  // handleFormControlChange = (event) => {
  //   this.setState({ cafeName: event.target.value });
  // };

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
    // data['cafe'] = this.state.cafe;
    console.log('handle submit called', data);

    this.props.signUpStart(data);
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
      },
      confirmPassword: '',
    });

    // fetch('/signup', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  render() {
    const { classes, cafeList } = this.props;
    // console.log('CAFE LIST IS', cafeList);
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

            {/* <RoleContainer>
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
            </RoleContainer> */}
            <RoleContainer>
              <FormControl
                component='fieldset'
                className={classes.formControlForRoleSelection}
                required
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

            <FormInput
              type='email'
              name='email'
              value={this.state.resp.email}
              // onChange={this.handleChange}
              label='Email'
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

            <FormInput
              type='text'
              name='phoneNumber'
              value={this.state.resp.phoneNumber}
              // onChange={this.handleChange}
              label='Phone Number'
              required
            />

            <CafeSelector>
              <CafePrompt>Select Your Unnati Cafe</CafePrompt>
              <FormControl required className={classes.formControlForCafeList}>
                <Select
                  // labelId='demo-simple-select-label'
                  // id='demo-simple-select'
                  value={this.state.resp.cafe}
                  name='cafe'
                  displayEmpty
                  className={classes.selectEmpty}
                  onChange={this.handleOnChange}
                >
                  <MenuItem value='' disabled>
                    None
                  </MenuItem>
                  {cafeList.map((cafe) => (
                    <MenuItem value={cafe._id}>{cafe.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CafeSelector>

            <ButtonWrapper>
              <button>sign up</button>
            </ButtonWrapper>
          </form>
        </SignUpContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signUpstarted: selectIsUserSigningUp,
  signUpCompleted: selectWasSignUpSuccessful,
  didSignUpFail: selectDidUserSignUpFail,
  cafeList: selectAllCafes,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (data) => dispatch(signUpStart(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(SignUp));
