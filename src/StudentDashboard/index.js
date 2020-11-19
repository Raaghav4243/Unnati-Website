import React from 'react'
import { Navbar } from '../HomePage/components/Navbar_New'
import DueAssignmentsElement from './Dashboard/DueAssignments'
import MyCoursesElement from './Dashboard/MyCourses'
import Notifications from './Dashboard/Notifications'
import UpcomingTestsElement from './Dashboard/UpcomingTests'
import { DashboardHeading } from './SideNav/components/DashboardOptions/DashboardElements'
import SideNav from './SideNav/SideNav'
import { Page, Dashboard, DashboardPageHeading, DashboardElements, DueElements } from './StudentDashboardComponents'

const StudentDashboard = () => {
    return(
        <>
        <Navbar />
        <Page>
        <SideNav />
        <Dashboard>
            <DashboardPageHeading>Dashboard</DashboardPageHeading>
            <Notifications />
            <DashboardElements>
            <MyCoursesElement />
            <DueElements>
                <DueAssignmentsElement />
                <UpcomingTestsElement />
            </DueElements>
            </DashboardElements>
        </Dashboard>
        </Page>
        </>
    )
}

export default StudentDashboard;