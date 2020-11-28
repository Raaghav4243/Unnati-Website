import React from 'react'
import { Input, Inputname, Form, ConfirmChanges, Mainbox, ChangeHeading, FlexBoxAndHeading, FlexBox, Body, FullBody, FlexEven, ChangePasswordPage} from './PasswordElements';


import SideNav from '../SideNav/SideNav';
import { Navbar } from '../../HomePage/components/Navbar_New';
import { Page } from '../StudentDashboardComponents';

function ChangePassword() {
    return (
        <>
            <Navbar />
            <Page>
                <SideNav />
                <FlexBox>
                    <FlexBoxAndHeading>
                        <ChangeHeading>Change Password</ChangeHeading>
                        <Mainbox>
                            <Form>
                                <FlexBoxAndHeading>
                                    <FlexEven>
                                        <Body>
                                            <Inputname>Old Password</Inputname>
                                            <Input type="password" name="name" required pattern=".{8,12}" title="8 to 12 characters" />
                                        </Body>
                                        <Body>
                                            <Inputname>New Password</Inputname>
                                            <Input type="password" name="name" required pattern=".{8,12}" title="8 to 12 characters" />
                                        </Body>
                                        <Body>
                                            <Inputname>Confirm New Password</Inputname>
                                            <Input type="password" name="name" required pattern=".{8,12}" title="8 to 12 characters" />
                                        </Body>
                                    </FlexEven>
                                    <ConfirmChanges type="submit">Confirm Changes</ConfirmChanges >

                                </FlexBoxAndHeading>
                            </Form>
                        </Mainbox>
                    </FlexBoxAndHeading>
                </FlexBox>
            </Page>
        </>
    )
}

export default ChangePassword