import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../HomePage/components/Navbar_New'
import SideNav from '../../StudentDashboard/SideNav/SideNav'
import { AssignmentStartPage } from '../AssignmentStart/AssignmentStartElements'
import AssignmentPageCard from './AssignmentPageCard'
import { AssignmentPageDiv, AssignmentPageHeading, AssignmentPageQuestionsDiv, AssignmentQuestionsDiv, AssignmentSubmitBtn } from './AssignmentPageElements'
import { Question1 } from './data'

const AssignmentPage = () => {
    return(
        <>
        <Navbar />
        <AssignmentStartPage>
            <SideNav />
        <AssignmentPageDiv>
            <AssignmentPageHeading>ASSIGNMENT</AssignmentPageHeading>
            <AssignmentPageQuestionsDiv>
                <AssignmentPageCard {...Question1}/>
                <AssignmentPageCard {...Question1}/>
                <AssignmentPageCard {...Question1}/>
                <AssignmentPageCard {...Question1}/>
                <AssignmentPageCard {...Question1}/>
                <AssignmentPageCard {...Question1}/>
            </AssignmentPageQuestionsDiv>
            <Link to="/assignmentresults">
                <AssignmentSubmitBtn>
                SUBMIT
            </AssignmentSubmitBtn>
            </Link>
        </AssignmentPageDiv>
        </AssignmentStartPage>
        
        </>
    )
}

export default AssignmentPage