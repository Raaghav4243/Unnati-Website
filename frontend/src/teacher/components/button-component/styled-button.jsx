import React from 'react';
import { Component} from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { websiteTheme } from '../../../material-ui.styles'

const StyledButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    // fontSize: 16,
    // padding: '6px 12px',
    border: '0.5px solid',
    backgroundColor: '#f1f1f1',
    // borderColor: '#0063cc',
    // lineHeight: 1.5,
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    '&:hover': {
      backgroundColor: websiteTheme.palette.primary.tableButtonOnHover,
      borderColor: websiteTheme.palette.primary.tableButtonOnHoverBorder,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      // backgroundColor: '#0062cc',
      // borderColor: '#005cbf',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default StyledButton;



// import Button from '@material-ui/core/Button';
// import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
// import { green, purple } from '@material-ui/core/colors';
// import PropTypes from 'prop-types';
// import { createMuiTheme } from '@material-ui/core/styles';




// const StyleButton = withStyles((theme)=>({
//     root: {
//         boxShadow: 'none',
//         textTransform: 'none',
//         fontSize: 16,
//         padding: '6px 12px',
//         border: '1px solid',
//         lineHeight: 1.5,
//         backgroundColor: '#0063cc',
//         borderColor: '#0063cc',
//     // background: '#f1f1f1',
//     margin: theme.spacing.unit,
//     },
//     '&:hover': {
//         backgroundColor: '#28743f',
//         borderColor: '#0062cc',
//         boxShadow: 'none',
//       },
//       '&:active': {
//         boxShadow: 'none',
//         backgroundColor: '#0062cc',
//         borderColor: '#005cbf',
//       },
//       '&:focus': {
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//       },
// }))(Button)



// //     label: {
//     //     },
//     //       textTransform: 'capitalize',
//     // </div> 
//     // <div>


// // export default class StyleButton extends Component {
//     // constructor(props){
//         // super(props);
//         // }
//         // this.state{
            
//             // }
//         // };
// // render(){
// //   const { size,variant,content} = props;


// // const useStyles2 = makeStyles((theme) =>({
// //   button: {
// //     background: '#f1f1f1',
// //     margin: theme.spacing.unit,
// //     '&:hover': {
// //       background: websiteTheme.palette.primary.tableButtonOnHover,
// //       color: '#000',
// //     },
// //   },
// // }));
// // const styles = makeStyles((theme) => ({
// //       button: {
// //         margin: theme.spacing.unit,
// //       },
// //       input: {
// //         display: 'none',
// //       },
// //     }));

// export default function StyledButton(props){

//     //  const classes = styles();

//     return (
//         <>
//             <StyleButton
//                 // class={classes.button}
//                 id={props.id}
//                 size={props.size}
//                 variant="contained"
//                 >{props.content}</StyleButton>
//         </>
//     )        
// }

// import React from 'react';