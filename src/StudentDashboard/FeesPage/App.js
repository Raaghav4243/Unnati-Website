import React from 'react'

import {FullPage, DueAmount, OnlineButton, PaidAmount, FeesCat, FeesBox, FeesHead, BoxAndHead, PastHead, SubCol,SubHead, SubCol1, FlexHeadCol, PastBody, BothBox} from './FeesElements';


import {Due, Paid} from './FeeAmount'
import { Navbar } from '../../HomePage/components/Navbar_New';
import SideNav from '../SideNav/SideNav';
import { Page } from '../StudentDashboardComponents';

function FeesPage() {
    return( 
        <>
        <Navbar />
        <Page>
        <SideNav />
        <FullPage>
            <BothBox>
                <BoxAndHead>
                    <FeesHead>Fees</FeesHead>
                    <FeesBox>
                        <FeesCat>Due Fees</FeesCat>
                        <DueAmount>{Due}</DueAmount>
                        <FeesCat>Paid Amount</FeesCat>
                        <PaidAmount>{Paid}</PaidAmount>
                        <OnlineButton type="submit">Make Online Payment</OnlineButton>
                    </FeesBox>
                </BoxAndHead>
                <BoxAndHead>
                    <PastHead>Past Receipts</PastHead>
                    <PastBody>
                        <FlexHeadCol>
                            <SubCol><br /><SubHead>Date</SubHead><br /> 29/9/2020 </SubCol>
                            <SubCol1><br /><SubHead>Transaction ID</SubHead><br />201020320</SubCol1>
                            <SubCol><br /><SubHead>Mode</SubHead><br /> Online </SubCol>
                            <SubCol><br /><SubHead>Amount</SubHead><br /> 300 </SubCol>
                        </FlexHeadCol>
                    </PastBody>
                </BoxAndHead>
            </BothBox>
        </FullPage>
        </Page>
    </>
    )
}

export default FeesPage