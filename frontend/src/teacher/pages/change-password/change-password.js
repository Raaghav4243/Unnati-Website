import React from 'react'
import { Input, Inputname, Form, ConfirmChanges, Mainbox, ChangeHeading, FlexBoxAndHeading, FlexBox, Body,  FlexEven,  Page} from './PasswordElements';

import { Component } from 'react';
import TeacherDashboardSidenav from '../../components/teacher-dashboard-sidenav/teacher-dashboard-sidenav.component'
import TeacherDashboardNavbar from '../../components/teacher-dashboard-navbar/teacher-dashboard-navbar.component'

class ChangePassword extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            cpassword: ''
        };
    }

    render() {
        return (
            <>
                <TeacherDashboardNavbar />
                <Page>
                    <TeacherDashboardSidenav />
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
                                                <Input type="password" name="name" required pattern=".{8,12}" title="8 to 12 characters" onChange={e => { this.setState({ password: e.target.value }) }} />
                                            </Body>
                                            <Body>
                                                <Inputname>Confirm New Password</Inputname>
                                                <Input type="password" name="name" required pattern=".{8,12}" title="8 to 12 characters" onChange={e => { this.setState({ cpassword: e.target.value }) }} />
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
}
export default ChangePassword

