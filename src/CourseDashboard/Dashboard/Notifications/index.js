import React from 'react';
import { Notification1, Notification2 } from './data';
import NotificationCard from './NotificationCard';
import {Notification} from './NotificationElements';

const Notifications = () => {
    return(
        <>
        <Notification>
            <NotificationCard {...Notification1}/>
            <NotificationCard {...Notification2}/>
        </Notification>
        </>
    )
}

export default Notifications;