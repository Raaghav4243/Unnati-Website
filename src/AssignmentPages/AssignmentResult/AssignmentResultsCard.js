import React from 'react'
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
        <AgainBtn>
            <AgainText>
                Attempt again({AttemptsLeft} Attempts Left)
            </AgainText>
        </AgainBtn>
        </>
    )
}

export default AssignmentResultsCard;