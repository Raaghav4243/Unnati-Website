import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { fetchCourseTopicsStart } from '../../redux/course-topic/course-topic.sagas';
import { fetchFeeAmountStart } from '../../redux/fee-amount/fee-amount.actions';
import {
  selectUserDueFees,
  selectUserPaidFees,
} from '../../redux/fee-amount/fee-amount.selectors';
import { fetchFeeDetailStart } from '../../redux/fee-details/fee-details.actions';
import { selectUserFeeDetails } from '../../redux/fee-details/fee-details.selectors';

import {
  FullPage,
  DueAmount,
  OnlineButton,
  PaidAmount,
  FeesCat,
  FeesBox,
  FeesHead,
  BoxAndHead,
  PastHead,
  SubCol,
  SubHead,
  SubCol1,
  FlexHeadCol,
  PastBody,
  BothBox,
} from './FeesElements';

class FeesPage extends React.Component {
  componentDidMount() {
    const { fetchFeeAmountStart, fetchFeeDetailStart } = this.props;
    fetchFeeAmountStart();
    fetchFeeDetailStart();
  }
  render() {
    const { paidFees, dueFees, feeDetails } = this.props;
    console.log('paid fees', paidFees);
    console.log('due fees', dueFees);
    console.log('fee details', feeDetails);

    return (
      <>
        <FullPage>
          <BothBox>
            <BoxAndHead>
              <FeesHead>Fees</FeesHead>
              <FeesBox>
                <FeesCat>Due Fees</FeesCat>
                <DueAmount>{dueFees}</DueAmount>
                <FeesCat>Paid Amount</FeesCat>
                <PaidAmount>{paidFees}</PaidAmount>
                <OnlineButton type='submit'>Make Online Payment</OnlineButton>
              </FeesBox>
            </BoxAndHead>
            <BoxAndHead>
              <PastHead>Past Receipts</PastHead>
              <PastBody>
                <FlexHeadCol>
                  <SubCol>
                    <br />
                    <SubHead>Date</SubHead>
                    <br /> 29/9/2020{' '}
                  </SubCol>
                  <SubCol1>
                    <br />
                    <SubHead>Transaction</SubHead>
                    <br />
                    201020320
                  </SubCol1>
                  <SubCol>
                    <br />
                    <SubHead>Mode</SubHead>
                    <br /> Online{' '}
                  </SubCol>
                  <SubCol>
                    <br />
                    <SubHead>Amount</SubHead>
                    <br /> 300{' '}
                  </SubCol>
                </FlexHeadCol>
              </PastBody>
            </BoxAndHead>
          </BothBox>
        </FullPage>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  paidFees: selectUserPaidFees,
  dueFees: selectUserDueFees,
  feeDetails: selectUserFeeDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFeeAmountStart: () => dispatch(fetchFeeAmountStart()),
  fetchFeeDetailStart: () => dispatch(fetchFeeDetailStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeesPage);
