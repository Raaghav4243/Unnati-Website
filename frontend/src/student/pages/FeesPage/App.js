import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomPaginationActionsTable from '../../components/fees-table/styled-table-component'
// import { fetchCourseTopicsStart } from '../../redux/course-topic/course-topic.sagas';
import { fetchFeeAmountStart } from '../../redux/fee-amount/fee-amount.actions';
import {
  selectUserDueFees,
  selectUserPaidFees,
} from '../../redux/fee-amount/fee-amount.selectors';
import { fetchFeeDetailStart } from '../../redux/fee-details/fee-details.actions';
import {
  selectUserFeeDetails,
  selectUserFeeReciepts,
} from '../../redux/fee-details/fee-details.selectors';
import {
  selectCurrentUserCafeId,
  selectCurrentUserId,
} from '../../redux/user/user.selectors';
import ProfileSideNav from '../../components/SideNav/SideNav';
import StyledButton  from '../../../teacher/components/button-component/styled-button';

import {
  FullPage,
  DueAmount,
  OnlineButton,
  PaidAmount,
  TableWrapper,
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
  ButtonWrapper,
} from './FeesElements';
// import { Button } from '@material-ui/core';
// import { TableWrapper } from '../../../teacher/pages/teacher-testCheck/teacher-test.-check.styles';

class FeesPage extends React.Component {
  componentDidMount() {
    const {
      user_id,
      cafe_id,
      fetchFeeAmountStart,
      fetchFeeDetailStart,
    } = this.props;
    fetchFeeAmountStart(user_id, cafe_id);
    fetchFeeDetailStart(user_id);
  }
  render() {
    const { paidFees, dueFees, userFeeDetails, userFeeReciepts } = this.props;
    console.log('paid fees', paidFees);
    console.log('due fees', dueFees);
    console.log('amount', userFeeReciepts);

    return (
      <>
        <FullPage>
          {/* <BothBox> */}
            {/* <ProfileSideNav /> */}
            <BoxAndHead>
              <FeesBox>
              <FeesHead>Fees</FeesHead>
                <FeesCat>Due Fees :-</FeesCat>
                <DueAmount>{dueFees}</DueAmount>
                <FeesCat>Paid Amount :-</FeesCat>
                <PaidAmount>{paidFees}</PaidAmount>
                {/* <OnlineButton type='submit'>Make Online Payment</OnlineButton> */}
                <ButtonWrapper>
                <StyledButton type='submit'>Make Online Payment</StyledButton>
                </ButtonWrapper>
              </FeesBox>
            </BoxAndHead>
            <BoxAndHead>
              {/* <PastHead>Past Receipts</PastHead>
              <PastBody>
                <FlexHeadCol>
                  <SubCol>
                    <br />
                    <SubHead>Date</SubHead>
                    <br />
                    {userFeeReciepts ? (
                      <div>
                        {userFeeReciepts.map((date) => {
                          return <div>{date.createdAt}</div>;
                        })}
                      </div>
                    ) : null}
                  </SubCol>
                  <SubCol1>
                    <br />
                    <SubHead>Transaction</SubHead>
                    <br />
                    {userFeeReciepts ? (
                      <div>
                        {userFeeReciepts.map((date) => {
                          return <div>{date._id}</div>;
                        })}
                      </div>
                    ) : null}
                  </SubCol1>
                  <SubCol>
                    <br />
                    <SubHead>Remarks</SubHead>
                    <br />{' '}
                    {userFeeReciepts ? (
                      <div>
                        {userFeeReciepts.map((date) => {
                          return <div>{date.remarks}</div>;
                        })}
                      </div>
                    ) : null}{' '}
                  </SubCol>
                  <SubCol>
                    <br />
                    <SubHead>Amount</SubHead>
                    <br />
                    {userFeeReciepts ? (
                      <div>
                        {userFeeReciepts.map((date) => {
                          return <div>{date.amount}</div>;
                        })}
                      </div>
                    ) : null}
                  </SubCol>
                </FlexHeadCol>
              </PastBody> */}
              <TableWrapper>
              <CustomPaginationActionsTable></CustomPaginationActionsTable>
              </TableWrapper>
            </BoxAndHead>
          {/* </BothBox> */}
        </FullPage>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  paidFees: selectUserPaidFees,
  dueFees: selectUserDueFees,
  userFeeDetails: selectUserFeeDetails,
  userFeeReciepts: selectUserFeeReciepts,
  user_id: selectCurrentUserId,
  cafe_id: selectCurrentUserCafeId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFeeAmountStart: (user_id, cafe_id) =>
    dispatch(fetchFeeAmountStart(user_id, cafe_id)),

  fetchFeeDetailStart: (user_id) => dispatch(fetchFeeDetailStart(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeesPage);
