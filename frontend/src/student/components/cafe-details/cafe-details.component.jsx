import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

// import Popup from 'reactjs-popup';
// import CafeImage from '../../assets/image.png';
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

import {
  Container,
  CafeDetailsContainer,
  CafeTitle,
  CafeDetailsWrapper,
  CafeLogo,
  CafeIcon,
  CafeDetails,
  CafeName,
  CafeAddress,
  CafeFaculty,
  ButtonWrapper,
  ContactButton,
  ClassmatesContainer,
  ClassmatesTitle,
  ClassmatesWrapper,
  Number,
  Prompt,
  // PopupWrapper,
  ContactDetails,
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

class StudentCafeDetails extends React.Component {
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
    const {
      cafeName,
      cafeAddress,
      teacherName,
      no_of_classmates,
      classes,
    } = this.props;

    return (
      <>
        <Container>
          <CafeDetailsContainer>
            <CafeTitle>Cafe Details</CafeTitle>
            <CafeDetailsWrapper>
              <CafeLogo>
                {/* <CafeIcon style={{ height: '90px', width: '90px' }} /> */}
                <CafeIcon />
              </CafeLogo>
              <CafeDetails>
                <CafeName>{cafeName}</CafeName>
                <CafeAddress>
                  <strong>Address : </strong> {cafeAddress}
                </CafeAddress>
                <CafeFaculty>
                  <strong>Faculty Incharge : </strong>
                  {teacherName}
                </CafeFaculty>
                <ButtonWrapper>
                  {/* <Popup
                    trigger={<ContactButton>Contact Teacher</ContactButton>}
                    position='right center'
                  >
                    <PopupWrapper>
                      <ContactDetails>
                        Faculty Phone Number: 982738271323
                      </ContactDetails>
                      <ContactDetails>
                        Faculty Email: facultyemail@gmail.com
                      </ContactDetails>
                      <ContactDetails>
                        Enactus Email: enactusdtu@gmail.com
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
                        <strong>Faculty Phone Number:</strong> 982738271323
                      </ContactDetails>
                      <ContactDetails>
                        <strong>Faculty Email:</strong> facultyemail@gmail.com
                      </ContactDetails>
                      <ContactDetails>
                        <strong>Enactus Email:</strong> enactusdtu@gmail.com
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
              <Number>{no_of_classmates}</Number>
              <Prompt>Classmates</Prompt>
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
  no_of_classmates: selectUserCafeNumberOfClassmates,
});

export default connect(mapStateToProps)(
  withStyles(useStyles)(StudentCafeDetails)
);
