import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectUserFeeDetails,
  selectUserFeeReciepts,
} from '../../redux/fee-details/fee-details.selectors';

import CustomPaginationActionsTable from '../fees-table/styled-table-component';

import {} from './payment-history.styles';

class PaymentHistory extends React.Component {
  componentDidMount() {}
  render() {
    function createData(SNo, Date, Transaction, Remarks, Amount) {
      return { SNo, Date, Transaction, Remarks, Amount };
    }

    const { userFeeReciepts } = this.props;
    let rows = [
      // createData(1,"Raaghav","Raj","raaghav"),
      // createData(1,"Raaghav","Raj","raaghav"),
      // createData(1,"Raaghav","Raj","raaghav")
    ];
    // if (verifiedStudents) {
    userFeeReciepts.map((receipt, index) => {
      let rowObj = createData(
        index + 1,
        receipt.createdAt.substr(0, 10),
        receipt.createdAt.substr(10),
        receipt.remarks,
        receipt.amount
      );
      rows.push(rowObj);
      return null;
    });
    // } else {
    // }

    return (
      <>
        <CustomPaginationActionsTable
          rows={rows}
        ></CustomPaginationActionsTable>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userFeeDetails: selectUserFeeDetails,
  userFeeReciepts: selectUserFeeReciepts,
});

export default connect(mapStateToProps)(PaymentHistory);
