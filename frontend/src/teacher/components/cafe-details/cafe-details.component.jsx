import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

// import { ReactComponent as CafeIcon } from '../../icons/cafe.svg';
import {
  selectUserCafeAddress,
  selectUserCafeName,
  selectUserCafeNumberOfClassmates,
  selectUserCafeTeacherInChargeName,
} from '../../redux/cafe/cafe.selectors';

// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

// import Popup from 'reactjs-popup';
// import CafeImage from '../../assets/image.png';

import {
  Container,
  CafeDetailsContainer,
  CafeTitle,
  CafeDetailsWrapper,
  CafeLogo,
  CafeDetails,
  CafeName,
  CafeAddress,
  ButtonWrapper,
  ContactButton,
  ClassmatesContainer,
  ClassmatesTitle,
  ClassmatesWrapper,
  Number,
  Prompt,
  // PopupWrapper,
  ContactDetails,
  CafeIcon,
} from './cafe-details.styles';

// material ui styling
const useStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  contactHeader: {
    // margin: 0,
    // paddingRight: theme.spacing(2),
    // color: theme.palette.primary.main,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    // color: theme.palette.grey[500],
    color: theme.palette.primary.main,
  },
});

// const TeacherCafeDetails = ({  }) => {

class TeacherCafeDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      contactDetails: false,
    };
  }

  handleDialogClickOpen = () => {
    // setOpen(true);
    this.setState({
      contactDetails: true,
    });
  };

  handleDialogClose = () => {
    this.setState({
      contactDetails: false,
    });
    // setOpen(false);
  };

  render() {
    const { cafeName, cafeAddress, studentnumber, classes } = this.props;

    return (
      <>
        <Container>
          <CafeDetailsContainer>
            <CafeTitle>Cafe Details</CafeTitle>
            <CafeDetailsWrapper>
              <CafeLogo>
                <CafeIcon />
              </CafeLogo>
              <CafeDetails>
                <CafeName>{cafeName}</CafeName>
                <CafeAddress>
                  <strong>Address :</strong> {cafeAddress}
                </CafeAddress>
                <ButtonWrapper>
                  {/* <Popup
                    trigger={<ContactButton>Contact Admin</ContactButton>}
                    position='right center'
                  >
                    <PopupWrapper>
                      <ContactDetails>
                        Admin Phone Number : 98237273823
                      </ContactDetails>
                      <ContactDetails>
                        Enactus Email : enactusdtu@gmail.com
                      </ContactDetails>
                    </PopupWrapper>
                  </Popup> */}
                  <ContactButton onClick={this.handleDialogClickOpen}>
                    Contact Teacher
                  </ContactButton>
                </ButtonWrapper>
                <Dialog
                  open={this.state.contactDetails}
                  onClose={this.handleDialogClose}
                  aria-labelledby='alert-dialog-title'
                  aria-describedby='alert-dialog-description'
                >
                  <MuiDialogTitle
                    disableTypography
                    className={classes.contactHeader}
                  >
                    <Typography variant='h6'>Contact Details</Typography>
                  </MuiDialogTitle>
                  <IconButton
                    aria-label='close'
                    className={classes.closeButton}
                    onClick={this.handleDialogClose}
                  >
                    <CloseIcon />
                  </IconButton>

                  <DialogContent dividers>
                    <DialogContentText id='alert-dialog-description'>
                      <ContactDetails>
                        <strong>Admin Phone Number:</strong> 98237273823
                      </ContactDetails>
                      <ContactDetails>
                        <strong>Enactus Email :</strong> enactusdtu@gmail.com
                      </ContactDetails>
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
              </CafeDetails>
            </CafeDetailsWrapper>
          </CafeDetailsContainer>
          <ClassmatesContainer>
            <ClassmatesTitle>You have</ClassmatesTitle>
            <ClassmatesWrapper>
              <Number>{studentnumber}</Number>
              <Prompt>Students</Prompt>
            </ClassmatesWrapper>
          </ClassmatesContainer>
        </Container>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cafeName: selectUserCafeName,
  cafeAddress: selectUserCafeAddress,
  teacherName: selectUserCafeTeacherInChargeName,
  studentnumber: selectUserCafeNumberOfClassmates,
});

export default connect(mapStateToProps)(
  withStyles(useStyles)(TeacherCafeDetails)
);
