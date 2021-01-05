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
import { selectUserFeeDetails, selectUserFeeReciepts, } from '../../redux/fee-details/fee-details.selectors';
import { selectCurrentUserCafeId, selectCurrentUserId } from '../../redux/user/user.selectors';

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
<<<<<<< HEAD
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
=======
    componentDidMount() {
        const { user_id, cafe_id, fetchFeeAmountStart, fetchFeeDetailStart } = this.props;
        fetchFeeAmountStart(user_id, cafe_id)
        fetchFeeDetailStart(user_id)


    }
    render() {
        const { paidFees, dueFees, userFeeDetails, userFeeReciepts} = this.props;
        console.log('paid fees', paidFees)
        console.log('due fees', dueFees)
        console.log('amount', userFeeReciepts)


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
                                <OnlineButton type="submit">Make Online Payment</OnlineButton>
                            </FeesBox>
                        </BoxAndHead>
                        <BoxAndHead>
                            <PastHead>Past Receipts</PastHead>
                            <PastBody>
                                <FlexHeadCol>
                                    <SubCol><br /><SubHead>Date</SubHead><br /> 
                                    {userFeeReciepts ? 
                                        <div>{
                                            userFeeReciepts.map((date) => {
                                                return <div>{date.createdAt}</div>
                                            })
                                        }</div>:null    
                                    }
                                    </SubCol> 
                                    <SubCol1><br /><SubHead>Transaction</SubHead><br />{userFeeReciepts ? 
                                        <div>{
                                            userFeeReciepts.map((date) => {
                                                return <div>{date._id}</div>
                                            })
                                        }</div>:null    
                                    }</SubCol1>
                                    <SubCol><br /><SubHead>Remarks</SubHead><br /> {userFeeReciepts ? 
                                        <div>{
                                            userFeeReciepts.map((date) => {
                                                return <div>{date.remarks}</div>
                                            })
                                        }</div>:null    
                                    } </SubCol>
                                    <SubCol><br /><SubHead>Amount</SubHead><br />{userFeeReciepts ? 
                                        <div>{
                                            userFeeReciepts.map((date) => {
                                                return <div>{date.amount}</div>
                                            })
                                        }</div>:null    
                                    }</SubCol>

                                </FlexHeadCol>

                            </PastBody>
                        </BoxAndHead>
                    </BothBox>
                </FullPage>

            </>
        )
    }
>>>>>>> d0c88eedda9bdc6775c916bec5ac7ac7f0f9b9f9
}

const mapStateToProps = createStructuredSelector({
<<<<<<< HEAD
  paidFees: selectUserPaidFees,
  dueFees: selectUserDueFees,
  feeDetails: selectUserFeeDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFeeAmountStart: () => dispatch(fetchFeeAmountStart()),
  fetchFeeDetailStart: () => dispatch(fetchFeeDetailStart()),
});
=======
    paidFees: selectUserPaidFees,
    dueFees: selectUserDueFees,
    userFeeDetails: selectUserFeeDetails,
    userFeeReciepts: selectUserFeeReciepts,
    user_id: selectCurrentUserId,
    cafe_if: selectCurrentUserCafeId,
 
    
})

const mapDispatchToProps = (dispatch) => ({
    fetchFeeAmountStart: (user_id, cafe_id) =>
        dispatch(fetchFeeAmountStart(user_id, cafe_id)),

    fetchFeeDetailStart: (user_id) =>
        dispatch(fetchFeeDetailStart(user_id))
})
>>>>>>> d0c88eedda9bdc6775c916bec5ac7ac7f0f9b9f9

export default connect(mapStateToProps, mapDispatchToProps)(FeesPage);
