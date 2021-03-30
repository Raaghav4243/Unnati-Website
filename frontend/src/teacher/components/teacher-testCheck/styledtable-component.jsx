import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import { fetchTestSheetStart } from '../../redux/test-sheet/test-sheet.actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectTestDetails } from '../../redux/test-sheet/test-sheet.selectors';
import StyledButton from '../button-component/styled-button';
// import 'BootstrapButton' from '../styled-button-component/styled-button'
// import TableRow from '@material-ui/core/TableRow';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  button: {
    background: '#f1f1f1',
    '&:hover': {
      background: '#ffc222',
      color: '#000',
    },
  },
});

// const styles = (theme) => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#ffc222',
    // backgroundColor: '#f48c06',
    color: theme.palette.common.black,
    // size: 'small'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// const styles = {
//   tr: {
//     background: "#f1f1f1",
//     '&:hover': {
//       background: "#f00",
//     }
//   }
// };

function CustomPaginationActionsTable(props) {
  const rows = props.rows;
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='custom pagination table'>
        <colgroup>
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>ID</StyledTableCell>
            <StyledTableCell align='center'>First Name</StyledTableCell>
            <StyledTableCell align='center'>Course Name</StyledTableCell>
            <StyledTableCell align='center'>Test Name</StyledTableCell>
            {/* <StyledTableCell align='center'>VIEW RESPONSE</StyledTableCell> */}
            <StyledTableCell align='center'></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow style={{ height: 1 }} key={row.name}>
              <StyledTableCell align='center' component='th' scope='row'>
                {row.ID}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.FirstName}</StyledTableCell>
              <StyledTableCell align='center'>{row.CourseName}</StyledTableCell>
              <StyledTableCell align='center'>{row.testName}</StyledTableCell>
              <StyledTableCell align='center'>
                <Link to='/teacher/dashboard/evaluate'>
                  <StyledButton
                    // variant="contained"
                    size='small'
                    variant='outlined'
                    // className={classes.button}
                    id={row.ButtonId}
                    // color='#2196F3'
                    onClick={() => {
                      const responseSheetId = row.ID;

                      const courseId = row.ButtonId;
                      const { fetchTestSheetStart } = props;
                      fetchTestSheetStart(responseSheetId, courseId);
                    }}
                  >
                    VIEW RESPONSE
                  </StyledButton>
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 30 * emptyRows }}>
              <StyledTableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  test: selectTestDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTestSheetStart: (responseSheetId, courseId) =>
    dispatch(fetchTestSheetStart(responseSheetId, courseId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomPaginationActionsTable);
