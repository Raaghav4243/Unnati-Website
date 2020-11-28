import React from 'react'
import { Navbar } from '../../HomePage/components/Navbar_New'
import SideNav from '../../StudentDashboard/SideNav/SideNav'
import { AssignmentResultsDiv, AssignmentResultsHeading, AssignmentResultsPage } from './AssignmentResultElements'
import AssignmentResultsCard from './AssignmentResultsCard'
import { AssignmentResult } from './data'

const AssignmentResults = () => {
    return(
        <>
        <Navbar />
        <AssignmentResultsPage>
            <SideNav />
            <AssignmentResultsDiv>
                <AssignmentResultsHeading>
                    ASSIGNMENT
                </AssignmentResultsHeading>
                <AssignmentResultsCard {...AssignmentResult} />
            </AssignmentResultsDiv>
        </AssignmentResultsPage>
        </>
    )
}

export default AssignmentResults;