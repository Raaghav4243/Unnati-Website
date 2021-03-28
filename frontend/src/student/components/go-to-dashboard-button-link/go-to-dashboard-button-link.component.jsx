//libraries used
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//redux used

//components used

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { selectCurrentUserRole } from '../../redux/user/user.selectors';

//styles used
import { GoToDashboardButtonLink } from './go-to-dashboard-button-link.styles';

const GoToDashboardButton = ({ left, right, scrollClass, userRole }) => {
  return (
    <>
      <GoToDashboardButtonLink
        to={
          userRole === 'STUDENT'
            ? '/student/dashboard'
            : userRole === 'TEACHER'
            ? '/teacher/dashboard'
            : null
        }
        className={scrollClass ? 'scroll' : null}
      >
        {left ? <FaArrowLeft /> : null}
        View Dashboard
        {right ? <FaArrowRight /> : null}
      </GoToDashboardButtonLink>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  userRole: selectCurrentUserRole,
});

export default connect(mapStateToProps)(GoToDashboardButton);
