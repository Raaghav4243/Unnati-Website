import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import DashboardCard from './DashboardCard';
import { DashboardHeading, DashboardOptions } from './DashboardElements';
import { Option1, Option2 } from './data';

const DashboardNavOptions = ({ img, option }) => {
    return (
        <>
        <DashboardOptions>
            <DashboardHeading>Dashboard</DashboardHeading>
                <Link to="/studentdashboard"><DashboardCard {...Option1} /></Link>
                <Link to="/enrolledcourses"><DashboardCard {...Option2} /></Link>
            </DashboardOptions>
        </>
    )
}

export default DashboardNavOptions;