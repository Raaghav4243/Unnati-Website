import React from 'react';
import styled from 'styled-components';
import { SideNavDiv } from './components/SideNavDiv';
import Profile from './components/UserProfile';
import UserProfileCard from './components/UserProfile';
import { UserProfile } from './components/UserProfile/UserProfile';
import DashboardNavOptions from './components/DashboardOptions/index'
import ProfileSetting from './components/ProfileSettings';
import ReturnBtn from './components/Return';

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