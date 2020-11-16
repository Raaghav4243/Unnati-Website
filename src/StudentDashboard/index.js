import React from 'react'
import { Navbar } from '../HomePage/components/Navbar_New'
import Notifications from './Dashboard/Notifications'
import { DashboardHeading } from './SideNav/components/DashboardOptions/DashboardElements'
import SideNav from './SideNav/SideNav'
import { Page, Dashboard, DashboardPageHeading } from './StudentDashboardComponents'

const StudentDashboard = () => {
    return(
        <>
        <Navbar />
        <Page>
        <SideNav />
        <Dashboard>
            <DashboardPageHeading>Dashboard</DashboardPageHeading>
            <Notifications />
        </Dashboard>
        </Page>
        </>
    )
}

export default StudentDashboard;