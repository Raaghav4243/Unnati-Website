import React from 'react'
import { test1 } from './data'
import UpcomingTestsCard from './UpcomingTestsCard'
import { UpcomingTests, UpcomingTestsDiv, UpcomingTestsHeading } from './UpcomingTestsElements'

const UpcomingTestsElement = () => {
    return(
        <>
        <UpcomingTests>
            <UpcomingTestsHeading>UPCOMING TESTS</UpcomingTestsHeading>
            <UpcomingTestsDiv>
            <UpcomingTestsCard {...test1} />
            <UpcomingTestsCard {...test1} />
            <UpcomingTestsCard {...test1} />
            <UpcomingTestsCard {...test1} />
            <UpcomingTestsCard {...test1} />
            <UpcomingTestsCard {...test1} />
            <UpcomingTestsCard {...test1} />
            <UpcomingTestsCard {...test1} />
            <UpcomingTestsCard {...test1} />
            </UpcomingTestsDiv>
        </UpcomingTests>
        </>
    )
}

export default UpcomingTestsElement