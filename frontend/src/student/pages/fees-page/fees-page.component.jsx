import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import CustomPaginationActionsTable from '../../components/fees-table/styled-table-component';
// import { fetchCourseTopicsStart } from '../../redux/course-topic/course-topic.sagas';
import { fetchFeeAmountStart } from '../../redux/fee-amount/fee-amount.actions';
import { fetchFeeDetailStart } from '../../redux/fee-details/fee-details.actions';
import {
  selectUserDueFees,
  selectUserPaidFees,
} from '../../redux/fee-amount/fee-amount.selectors';
import {
  selectUserFeeDetails,
  selectUserFeeReciepts,
} from '../../redux/fee-details/fee-details.selectors';

import {
  PageContainer,
  Container,
  PaymentHistoryWrapper,
  Title,
  BalanceWrapper,
} from './fees-page.styles';
// import { Button } from '@material-ui/core';
import PaymentHistoryContainer from '../../components/payment-history/payment-history.container';
import BalanceContainer from '../../components/balance/balance.container';

class FeesPage extends React.Component {
  componentDidMount() {
    const { fetchFeeAmountStart, fetchFeeDetailStart } = this.props;
    fetchFeeAmountStart();
    fetchFeeDetailStart();
  }
  render() {
    const { paidFees, dueFees, userFeeReciepts } = this.props;
    console.log('paid fees', paidFees);
    console.log('due fees', dueFees);
    console.log('amount', userFeeReciepts);
    return (
      <>
        <PageContainer>
          <Container>
            <PaymentHistoryWrapper>
              <Title>Payment History</Title>
              <PaymentHistoryContainer />
            </PaymentHistoryWrapper>
            <BalanceWrapper>
              <Title>Balance</Title>
              <BalanceContainer />
            </BalanceWrapper>
          </Container>
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  paidFees: selectUserPaidFees,
  dueFees: selectUserDueFees,
  userFeeDetails: selectUserFeeDetails,
  userFeeReciepts: selectUserFeeReciepts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFeeAmountStart: () => dispatch(fetchFeeAmountStart()),
  fetchFeeDetailStart: () => dispatch(fetchFeeDetailStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeesPage);
