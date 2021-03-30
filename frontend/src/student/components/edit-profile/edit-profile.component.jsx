import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

// redux used
import {
  selectUserCafeLocation,
  selectUserCafeName,
  selectUserCafeTeacherInChargeName,
} from '../../redux/cafe/cafe.selectors';
import {
  resetUpdateInfo,
  updateUserStart,
} from '../../redux/user/user.actions';

import {
  selectCurrentUserCafeId,
  selectCurrentUserEmail,
  selectCurrentUserFirstName,
  selectCurrentUserId,
  selectCurrentUserLastName,
  selectCurrentUserRole,
  selectCurrentUserUserName,
  selectIsUserUpdating,
  selectPhoneNumber,
  selectUpdateConfirmation,
  selectUserReducerError,
  selectUserUpdationFailed,
} from '../../redux/user/user.selectors';

//components used
import { ButtonWrapper } from './edit-profile.styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import Alert from '@material-ui/lab/Alert';
// import MuiAlert from '@material-ui/lab/Alert';
// import MuiAlert from '@material-ui/co';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(2),
      width: '25ch',
    },
  },
  button: {
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    color: 'white',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    const {
      userfirstname,
      userlastname,
      userphonenumber,
      userusername,
      cafeId,
      userrole,
      useremail,
    } = props;
    this.state = {
      updatedUserInfo: {
        role: `${userrole}`,
        cafe: `${cafeId}`,
        email: `${useremail}`,
        firstName: `${userfirstname}`,
        lastName: `${userlastname}`,
        phoneNumber: `${userphonenumber}`,
        username: `${userusername}`,
      },
      initialUserInfo: {
        role: `${userrole}`,
        cafe: `${cafeId}`,
        email: `${useremail}`,
        firstName: `${userfirstname}`,
        lastName: `${userlastname}`,
        phoneNumber: `${userphonenumber}`,
        username: `${userusername}`,
      },
      errors: {},
    };
  }

  validate = (fieldValues = this.state.updatedUserInfo) => {
    let temp = { ...this.state.errors };
    if ('firstName' in fieldValues)
      temp.firstName = fieldValues.firstName ? '' : 'This field is required.';
    if ('lastName' in fieldValues)
      temp.lastName = fieldValues.lastName ? '' : 'This field is required.';
    if ('username' in fieldValues)
      temp.username = fieldValues.username ? '' : 'This field is required.';
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

    if (fieldValues === this.state.updatedUserInfo) {
      // console.log('SUBMIT VALIDATING..');
      return Object.values(temp).every((x) => x === '');
    }
  };

  handleOnChange = (e) => {
    const { value, name } = e.target;
    let resp = this.state.updatedUserInfo;
    resp[name] = value;
    this.setState(
      {
        updatedUserInfo: resp,
      },
      () => {
        // console.log(this.state);
      }
    );
    this.validate({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state.updatedUserInfo;
    if (this.validate()) {
      let user_id = this.props.userId;
      const { updateUserStart } = this.props;
      updateUserStart(user_id, data);
      // console.log('data on the page', data);
    } else {
      alert('Fill details correctly first');
    }
  };

  componentWillUnmount() {
    const { resetUpdateInfo } = this.props;
    resetUpdateInfo();
  }

  render() {
    const {
      classes,
      isUserUpdating,
      updateConfirmation,
      resetUpdateInfo,
      updationFailed,
      updateErrorMessage,
    } = this.props;
    const { updatedUserInfo, initialUserInfo } = this.state;
    return (
      <>
        <form
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={this.handleSubmit}
          className={classes.root}
        >
          <TextField
            name='firstName'
            label='First Name'
            error={this.state.errors.firstName ? true : false}
            helperText={`Previous : ${initialUserInfo.firstName} ${
              this.state.errors.firstName
                ? `\u00A0,
                Error : ${this.state.errors.firstName}`
                : ''
            }`}
            variant='outlined'
            value={updatedUserInfo.firstName}
          />
          <TextField
            name='lastName'
            label='Last Name'
            error={this.state.errors.lastName ? true : false}
            helperText={`Previous : ${initialUserInfo.lastName} ${
              this.state.errors.lastName
                ? `\u00A0,
                Error : ${this.state.errors.lastName}`
                : ''
            }`}
            variant='outlined'
            value={updatedUserInfo.lastName}
          />
          <TextField
            name='username'
            label='Username'
            error={this.state.errors.username ? true : false ? true : false}
            helperText={`Previous : ${initialUserInfo.username} ${
              this.state.errors.username
                ? `\u00A0,
                Error : ${this.state.errors.username}`
                : ''
            }`}
            variant='outlined'
            value={updatedUserInfo.username}
          />
          <TextField
            name='email'
            label='Email'
            error={this.state.errors.email ? true : false}
            helperText={`Previous : ${initialUserInfo.email} ${
              this.state.errors.email
                ? `\u00A0,
                Error : ${this.state.errors.email}`
                : ''
            }`}
            variant='outlined'
            value={updatedUserInfo.email}
          />
          <TextField
            name='phoneNumber'
            label='Phone Number'
            error={this.state.errors.phoneNumber ? true : false}
            helperText={`Previous : ${initialUserInfo.phoneNumber} ${
              this.state.errors.phoneNumber
                ? `\u00A0, 
                Error : ${this.state.errors.phoneNumber}`
                : ''
            }`}
            variant='outlined'
            value={updatedUserInfo.phoneNumber}
          />
          <ButtonWrapper>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              type='submit'
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save Changes
            </Button>
          </ButtonWrapper>
          <Backdrop className={classes.backdrop} open={isUserUpdating}>
            <CircularProgress color='inherit' />
          </Backdrop>
          <Snackbar
            open={updateConfirmation}
            autoHideDuration={5000}
            onClose={() => resetUpdateInfo()}
          >
            <Alert severity='success'>Profile Updated Successfully!</Alert>
          </Snackbar>
          <Snackbar
            open={updationFailed}
            autoHideDuration={5000}
            onClose={() => resetUpdateInfo()}
          >
            <Alert severity='error'>
              `Updation Failed... {updateErrorMessage}`
            </Alert>
          </Snackbar>
        </form>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userId: selectCurrentUserId,
  userfirstname: selectCurrentUserFirstName,
  userlastname: selectCurrentUserLastName,
  userusername: selectCurrentUserUserName,
  useremail: selectCurrentUserEmail,
  userphonenumber: selectPhoneNumber,
  userrole: selectCurrentUserRole,
  cafeId: selectCurrentUserCafeId,
  cafeName: selectUserCafeName,
  cafeLocation: selectUserCafeLocation,
  cafeTeacherName: selectUserCafeTeacherInChargeName,
  isUserUpdating: selectIsUserUpdating,
  updateConfirmation: selectUpdateConfirmation,
  updationFailed: selectUserUpdationFailed,
  updateErrorMessage: selectUserReducerError,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserStart: (user_id, data) => dispatch(updateUserStart(user_id, data)),
  resetUpdateInfo: () => dispatch(resetUpdateInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(EditProfile));
