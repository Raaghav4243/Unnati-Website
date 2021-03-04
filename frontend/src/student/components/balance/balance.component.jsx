import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectUserDueFees,
  selectUserPaidFees,
} from '../../redux/fee-amount/fee-amount.selectors';

import { Container, Payment, Title, Amount } from './balance.styles';

const Balance = ({ paidFees, dueFees }) => {
  return (
    <>
      {/* <div>BALANCE</div> */}
      <Container>
        <Payment>
          <Title>Total Amount:</Title>
          <Amount>&#8377;{paidFees + dueFees}</Amount>
        </Payment>
        <Payment>
          <Title>Paid Amount:</Title>
          <Amount>&#8377;{paidFees}</Amount>
        </Payment>
        <Payment dottedBorder>
          <Title>Due Amount:</Title>
          <Amount dueAmount>&#8377;{dueFees}</Amount>
        </Payment>
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  paidFees: selectUserPaidFees,
  dueFees: selectUserDueFees,
});

export default connect(mapStateToProps)(Balance);
