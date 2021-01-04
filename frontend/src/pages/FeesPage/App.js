import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchFeeAmountStartAsync } from '../../redux/fee-amount/fee-amount.actions';
import { selectCurrentUserFees } from '../../redux/fee-amount/fee-amount.selectors';

import { FullPage, DueAmount, OnlineButton, PaidAmount, FeesCat, FeesBox, FeesHead, BoxAndHead, PastHead, SubCol, SubHead, SubCol1, FlexHeadCol, PastBody, BothBox } from './FeesElements';

class FeesPage extends React.Component {
    componentDidMount(){
        const {fetchFeeAmountStartAsync} = this.props;
        console.log('fee amount')
        fetchFeeAmountStartAsync()
    }
    render() {
        const hi = this.props
        console.log(hi)
        return (
            <>

                <FullPage>
                    <BothBox>
                        <BoxAndHead>
                            <FeesHead>Fees</FeesHead>
                            <FeesBox>
                                <FeesCat>Due Fees</FeesCat>
                                <DueAmount>{DueAmount}</DueAmount>
                                <FeesCat>Paid Amount</FeesCat>
                                <PaidAmount>{PaidAmount}</PaidAmount>
                                <OnlineButton type="submit">Make Online Payment</OnlineButton>
                            </FeesBox>
                        </BoxAndHead>
                        <BoxAndHead>
                            <PastHead>Past Receipts</PastHead>
                            <PastBody>
                                <FlexHeadCol>
                                    <SubCol><br /><SubHead>Date</SubHead><br /> 29/9/2020 </SubCol>
                                    <SubCol1><br /><SubHead>Transaction</SubHead><br />201020320</SubCol1>
                                    <SubCol><br /><SubHead>Mode</SubHead><br /> Online </SubCol>
                                    <SubCol><br /><SubHead>Amount</SubHead><br /> 300 </SubCol>

                                </FlexHeadCol>

                            </PastBody>
                        </BoxAndHead>
                    </BothBox>
                </FullPage>

            </>
        )
    }
}


const mapStateToProps = createStructuredSelector({
   // DueAmount: selectUserDueFees,
   // PaidAmount: selectUserPaidFees,
    hi: selectCurrentUserFees
})

const mapDispatchToProps = (dispatch) => ({
    fetchFeeAmountStartAsync: () => dispatch(fetchFeeAmountStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(FeesPage)