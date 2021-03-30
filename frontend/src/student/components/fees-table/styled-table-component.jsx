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
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TableHead from '@material-ui/core/TableHead';
import { websiteTheme } from '../../../material-ui.styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: websiteTheme.palette.primary.tableHeader,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: '#ffffff',
  },
}))(TableRow);

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

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  return (
    <div className={classes.root}>
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
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// function createData(Fees, Transaction, Remarks, Amount) {
//   return { Fees, Transaction, Remarks, Amount };
// }

// const rows = [
//   createData(1, 'Raaghav', 'Raj', 'Raaghav Raj'),
//   createData(2, 'Raaghav', 'Raj', 'Raaghav Raj'),
//   createData(3, 'Raaghav', 'Raj', 'Raaghav Raj'),
//   //     createData(4 , 'Raaghav', 'Raj', 19, 'Raaghav Raj'),
//   //     createData(5 , 'Raaghav', 'Raj', 19, 'Raaghav Raj'),
//   //     createData(6 , 'Raaghav', 'Raj', 19, 'Raaghav Raj'),
//   //     createData(7 , 'Raaghav', 'Raj', 19, 'Raaghav Raj'),
//   //     createData(8 , 'Raaghav', 'Raj', 19, 'Raaghav Raj'),
//   //     createData(9 , 'Raaghav', 'Raj', 19, 'Raaghav Raj'),
// ];

const useStyles2 = makeStyles({
  table: {
    fullWidth: true,
    height: 50,
    backgroundColor: '#fff',
  },
});

function CustomPaginationActionsTable(props) {
  const rows = props.rows;
  // console.log('TABLE MOUNTED');
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // console.log('rows are ', rows);

  return (
    <TableContainer style={{ height: 380 }} component={Paper}>
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
            <StyledTableCell align='center'>S.No</StyledTableCell>
            <StyledTableCell align='center'>Date</StyledTableCell>
            <StyledTableCell align='center'>Transaction</StyledTableCell>
            <StyledTableCell align='center'>Remarks</StyledTableCell>
            <StyledTableCell align='center'>Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align='center' component='th' scope='row'>
                {row.SNo}
              </StyledTableCell>
              <StyledTableCell align='center' component='th' scope='row'>
                {row.Date}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.Transaction}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.Remarks}</StyledTableCell>

              <StyledTableCell align='center'>{row.Amount}</StyledTableCell>
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 38 * emptyRows }}>
              <StyledTableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
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

export default CustomPaginationActionsTable;
