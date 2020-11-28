import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AgainBtn, AgainText, AssignmentResultsDetails, AssignmentResultsMarks } from './AssignmentResultElements'

const AssignmentResultsCard = ({MarksScored, AttemptsLeft, TotalMarks}) => {
    return(
        <>
        <AssignmentResultsDetails>
            Your Score:
             <AssignmentResultsMarks>
                {MarksScored}/{TotalMarks}
            </AssignmentResultsMarks>
        </AssignmentResultsDetails>
        <Link to="/assignmentstart"><AgainBtn>
            <AgainText>
                Attempt again({AttemptsLeft} Attempts Left)
            </AgainText>
        </AgainBtn></Link>
        </>
    )
}

export default AssignmentResultsCard;