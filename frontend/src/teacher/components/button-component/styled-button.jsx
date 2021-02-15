
import {  withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { websiteTheme } from '../../../material-ui.styles'

const StyledButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    border: '0.5px solid',
    backgroundColor: '#f1f1f1',
    
    '&:hover': {
      backgroundColor: websiteTheme.palette.primary.tableButtonOnHover,
      borderColor: websiteTheme.palette.primary.tableButtonOnHoverBorder,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
    },
  },
})(Button);

export default StyledButton;