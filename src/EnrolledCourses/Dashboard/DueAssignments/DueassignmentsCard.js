import React from 'react';
import { DueAssignmentsContent, DueAssignmentsDate, DueAssignmentsTopic } from './DueAssignmentsElements';

const DueAssignmentsCard = ({DueDate, DueTopic}) => {
    return(
        <>
        <DueAssignmentsContent>
            <DueAssignmentsDate>{DueDate}:</DueAssignmentsDate>
            <DueAssignmentsTopic>{DueTopic}</DueAssignmentsTopic>
        </DueAssignmentsContent>
        </>
    )
}

export default DueAssignmentsCard;