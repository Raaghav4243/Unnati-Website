import React from 'react'
import Notifications from '.'
import { NotificationDiv, NotificationIcon, NotificationText } from './NotificationElements'

const NotificationCard = ({icon, option}) => {
    return(
        <>
            <NotificationDiv>
                <NotificationIcon src={icon}/>
                <NotificationText>{option}</NotificationText>
            </NotificationDiv>
        </>
    )
}

export default NotificationCard;