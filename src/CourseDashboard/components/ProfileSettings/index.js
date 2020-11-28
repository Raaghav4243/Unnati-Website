import React from 'react'
import { option1, option2, option3, option4 } from './data'
import ProfileSettingCard from './ProfileSettingsCard'
import { ProfileSettingsHeading, ProfileSettings } from './ProfileSettingsElements'

const ProfileSetting = () => {
    return(
        <ProfileSettings>
        <ProfileSettingsHeading>Profile</ProfileSettingsHeading>
        <ProfileSettingCard {...option1} />
        <ProfileSettingCard {...option2} />
        <ProfileSettingCard {...option3} />
        <ProfileSettingCard {...option4} />
    </ProfileSettings>)
}

export default ProfileSetting;