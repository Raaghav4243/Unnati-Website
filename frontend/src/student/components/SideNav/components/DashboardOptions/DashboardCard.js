import React from 'react'
import styled from 'styled-components';
import { DashboardIcon, DashboardOption, DashboardOptions, DashboardText } from './DashboardElements';

const DashboardCard = ({icon, option}) => {
    return(
        
            <DashboardOption>
                <DashboardIcon src={icon} />
                <DashboardText>{option}</DashboardText>
            </DashboardOption>
        
    )
}

export default DashboardCard