import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'
import { ProfileSettingsIcon, ProfileSettingsOption, ProfileSettingsText } from './ProfileSettingsElements';

const ProfileSettingCard = ({icon, option}) => {
    return(<ProfileSettingsOption>
        <ProfileSettingsIcon src={icon} />
        <ProfileSettingsText>{option}</ProfileSettingsText>
    </ProfileSettingsOption>)
}

export default ProfileSettingCard;