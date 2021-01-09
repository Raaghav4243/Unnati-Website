import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { option1, option2, option3, option4 } from './data';
import ProfileSettingCard from './ProfileSettingsCard';
import {
  ProfileSettingsHeading,
  ProfileSettings,
} from './ProfileSettingsElements';

const ProfileSetting = ({ match }) => {
  return (
    <ProfileSettings>
      <ProfileSettingsHeading>Profile</ProfileSettingsHeading>
      <Link to='/student/dashboard/profile'>
        <ProfileSettingCard {...option1} />
      </Link>
      <Link to='/student/dashboard/changepassword'>
        <ProfileSettingCard {...option2} />
      </Link>
      <Link to='/student/dashboard/fees'>
        <ProfileSettingCard {...option3} />
      </Link>
      <ProfileSettingCard {...option4} />
    </ProfileSettings>
  );
};

export default withRouter(ProfileSetting);
