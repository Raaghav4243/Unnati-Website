import React from 'react'
import { Link } from 'react-router-dom';
import { AssignmentDetails, AssignmentDuration, AssignmentHeading, AssignmentHighestScores, AssignmentHighestScore, AssignmentStartDiv, AssignmentTitle, StartBtn, NextAssignmentText } from './AssignmentStartElements'

export const AssignmentStartCard = ({Title, Duration, TotalMarks, HighestScore, NoOfAttemptsLeft}) => {
    return(
        <>
        <AssignmentDetails>
                <AssignmentTitle>
                    ASIGNMENT TITLE : {Title}
                </AssignmentTitle>
                <AssignmentDuration>
                    ASIGNMENT DURATION :  {Duration}
                </AssignmentDuration>
                <AssignmentHighestScore>
                    HIGHEST SCORE :    <AssignmentHighestScores>{HighestScore}/{TotalMarks}</AssignmentHighestScores>
                </AssignmentHighestScore>
            </AssignmentDetails>
            <Link to="/assignmentpage"><StartBtn>
              <NextAssignmentText> 
                Click here to start the assignment: <br/>
                {NoOfAttemptsLeft} Attempts Left
                </NextAssignmentText>
            </StartBtn></Link>
        </>
    )
}

export default AssignmentStartCard;