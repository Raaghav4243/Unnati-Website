import React from 'react'
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
            <StartBtn>
              <NextAssignmentText> 
                Click here to start the assignment: <br/>
                {NoOfAttemptsLeft} Attempts Left
                </NextAssignmentText>
            </StartBtn>
        </>
    )
}

export default AssignmentStartCard;