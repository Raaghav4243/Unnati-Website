import React from 'react'
import styled from 'styled-components'
import DashboardCard from './DashboardCard';
import { DashboardHeading, DashboardOptions } from './DashboardElements';
import { Option1, Option2 } from './data';

const DashboardNavOptions = ({ img, option }) => {
    return (
        <>
        <DashboardOptions>
            <DashboardHeading>Dashboard</DashboardHeading>
                <DashboardCard {...Option1} />
                <DashboardCard {...Option2} />
            </DashboardOptions>
        </>
    )
}

export default DashboardNavOptions;