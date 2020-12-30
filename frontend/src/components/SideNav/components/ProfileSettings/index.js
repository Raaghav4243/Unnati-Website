import React from 'react'
import { Link } from 'react-router-dom'
import { option1, option2, option3, option4 } from './data'
import ProfileSettingCard from './ProfileSettingsCard'
import { ProfileSettingsHeading, ProfileSettings } from './ProfileSettingsElements'

const ProfileSetting = () => {
    return(
        <ProfileSettings>
        <ProfileSettingsHeading>Profile</ProfileSettingsHeading>
        <Link to="/profilesettings"><ProfileSettingCard {...option1} /></Link>
        <Link to="/changepassword"><ProfileSettingCard {...option2} /></Link>
        <Link to="/feespage"><ProfileSettingCard {...option3} /></Link>
        <ProfileSettingCard {...option4} />
    </ProfileSettings>)
}

export default ProfileSetting;