import React from 'react'
import { Navbar } from '../../HomePage/components/Navbar_New';
import SideNav from '../SideNav/SideNav';

import { Page } from '../StudentDashboardComponents';

import { FullPage,Rows, DueAmount, OnlineButton, PaidAmount,Details,FlexEvenRow, Name,PersonalDetails, FeesCat, FeesBox, FeesHead, BoxAndHead, PastHead, SubCol,SubHead, SubCol1, FlexHeadCol, PastBody, BothBox} from './ProfileElements';

function Profile() {
    return <>
    <Navbar />
    <Page>
    <SideNav />
        <FullPage>
                <BoxAndHead>
                    <FeesHead>PROFILE </FeesHead>
                    <FeesBox>
                    
                        <PersonalDetails>Personal Details</PersonalDetails>
                          <Rows>
                          <FlexEvenRow>
                          <Name>First Name*</Name>
                          <Name>Middle Name</Name>
                          <Name>Last Name*</Name>
                          </FlexEvenRow>
                          <FlexEvenRow>
                            <Details>uug</Details>
                            <Details>uug</Details>
                            <Details>uug</Details>
                          </FlexEvenRow>
                          </Rows>
                          
                          <Rows>
                          <FlexEvenRow>
                          <Name>Username</Name>
                          <Name>Email ID</Name>
                          <Name>Phone Number</Name>
                          </FlexEvenRow>
                          <FlexEvenRow>
                            <Details>uug</Details>
                            <Details>uug</Details>
                            <Details>uug</Details>
                          </FlexEvenRow>
                          </Rows>
                          
                          
                    </FeesBox>
                    <PastBody>
                        <PersonalDetails>Cafe Details</PersonalDetails>
                        <Rows><FlexEvenRow>
                          <Name>Username</Name>
                          <Name>Email ID</Name>
                          <Name>Phone Number</Name>
                          </FlexEvenRow>
                          <FlexEvenRow>
                            <Details>uug</Details>
                            <Details>uug</Details>
                            <Details>uug</Details>
                          </FlexEvenRow>
                          </Rows>
                        
                    </PastBody>
                </BoxAndHead>
        </FullPage>
        </Page>
    </>
}

export default Profile