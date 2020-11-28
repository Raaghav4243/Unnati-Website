import React from 'react'
import { DueAssignment1 } from './data'
import DueAssignmentsCard from './DueassignmentsCard'
import { DueAssignments, DueAssignmentsDiv, DueAssignmentsHeading } from './DueAssignmentsElements'

const DueAssignmentsElement = () => {
    return(
        <>
        <DueAssignments>
            <DueAssignmentsHeading>DUE ASSIGNMENTS</DueAssignmentsHeading>
            <DueAssignmentsDiv>
                <DueAssignmentsCard {...DueAssignment1} />
                <DueAssignmentsCard {...DueAssignment1} />
                <DueAssignmentsCard {...DueAssignment1} />
                <DueAssignmentsCard {...DueAssignment1} />
                <DueAssignmentsCard {...DueAssignment1} />
                <DueAssignmentsCard {...DueAssignment1} />
                <DueAssignmentsCard {...DueAssignment1} />
                <DueAssignmentsCard {...DueAssignment1} />
                <DueAssignmentsCard {...DueAssignment1} />
            </DueAssignmentsDiv>
        </DueAssignments>
        </>
    )
}

export default DueAssignmentsElement;