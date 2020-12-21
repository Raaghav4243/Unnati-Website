import React from 'react'
import styled from 'styled-components'
import { ImgWrap, UserImage, UserName, UserProfile } from './UserProfile'


const UserProfileCard = ({img, name}) => {
    return(
        <UserProfile>
            <ImgWrap>
                <UserImage src={img} />
            </ImgWrap>
            <UserName>Hi, {name}</UserName>
        </UserProfile>
    )
}

export default UserProfileCard;