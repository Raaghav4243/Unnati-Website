import React from 'react'
import { AssignmentOptions, AssignmentQuestions, AssignmentQuestionsDiv } from './AssignmentPageElements'

const AssignmentPageCard = ({Question, Answer1, Answer2, Answer3, Answer4}) => {
    return(
        <>
            <AssignmentQuestionsDiv>
                <AssignmentQuestions>
                    {Question}
                </AssignmentQuestions>
                <br/>
                <AssignmentOptions type="radio"/>{Answer1}<br/>
                <AssignmentOptions type="radio"/>{Answer2}<br/>
                <AssignmentOptions type="radio"/>{Answer3}<br/>
                <AssignmentOptions type="radio"/>{Answer4}
            </AssignmentQuestionsDiv>
        </>
    )
}

export default AssignmentPageCard