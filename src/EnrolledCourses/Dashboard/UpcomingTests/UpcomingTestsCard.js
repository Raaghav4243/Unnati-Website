import React from 'react'

import { UpcomingTestsContent, UpcomingTestsDate, UpcomingTestsCourse, UpcomingTestsTopic } from './UpcomingTestsElements'

const UpcomingTestsCard = ({DueDate, CourseName, TopicName}) => {
    return(
        <>
        <UpcomingTestsContent>
            <UpcomingTestsDate>{DueDate}</UpcomingTestsDate>
            <UpcomingTestsCourse>{CourseName}</UpcomingTestsCourse>
            <UpcomingTestsTopic>{TopicName}</UpcomingTestsTopic>
        </UpcomingTestsContent>
        </>
    )
}

export default UpcomingTestsCard;