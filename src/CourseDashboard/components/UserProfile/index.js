import React from 'react'
import styled from 'styled-components'
import { ImgWrap, UserImage, UserName, UserProfile } from './UserProfile'
import {User} from './data'
import UserProfileCard from './UserProfileCard'

const Profile = ({img, name}) => {
    return(
        <UserProfileCard {...User} />
    )
}

export default Profile;