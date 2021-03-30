import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Alert from '@material-ui/lab/Alert';

import {} from './change-password.styles';
import { connect } from 'react-redux';

const useStyles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(2),
      width: '25ch',
    },
  },

  alert: {
    height: '200px',
    textAlign: 'center',
    // marginTop: theme.spacing(2),
  },
});

class ChangePassword extends React.Component {


  render() {
    const { classes } = this.props;
    return (
      <>
        <div>
          <Alert className={classes.alert} severity='info'>
            This feature is <strong>coming soon!</strong>
          </Alert>
        </div>
      </>
    );
  }
}
// export default ChangePassword;
export default connect(null, null)(withStyles(useStyles)(ChangePassword));
