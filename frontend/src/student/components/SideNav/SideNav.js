import React from 'react';
import styled from 'styled-components';
import { SideNavDiv } from './SideNavDiv';
import Profile from './UserProfile';

import DashboardNavOptions from './DashboardOptions/index'
import ProfileSetting from './ProfileSettings';
import ReturnBtn from './Return';


const SideNav = () => {
    return(
        <SideNavDiv>
            <Profile />
            <DashboardNavOptions />
            <ProfileSetting />
            <ReturnBtn />
        </SideNavDiv>
    )
}

export default SideNav;