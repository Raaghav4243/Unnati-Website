import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FeesCard } from '../../pages/fees-page/fees-card.component';

import {
  selectUserDueFees,
  selectUserPaidFees,
} from '../../redux/fee-amount/fee-amount.selectors';

import { Container } from './fees-summary.styles';

const StudentFeesSummary = ({ paidFees, dueFees }) => {
  return (
    <>
      <Container>
        <FeesCard prompt='Due Amount' amount={dueFees} amountColor={'red'} />
        <FeesCard
          prompt='Paid Amount'
          amount={paidFees}
          amountColor={'#3dc015'}
        />
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  paidFees: selectUserPaidFees,
  dueFees: selectUserDueFees,
});

export default connect(mapStateToProps)(StudentFeesSummary);
