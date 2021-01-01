//libraries used
import React from 'react';

//redux used

//components used

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

//styles used
import { GoToDashboardButtonLink } from './go-to-dashboard-button-link.styles';

const GoToDashboardButton = ({ left, right, scrollClass }) => {
  return (
    <>
      <GoToDashboardButtonLink
        to='/student'
        className={scrollClass ? 'scroll' : null}
      >
        {left ? <FaArrowLeft /> : null}
        View Dashboard
        {right ? <FaArrowRight /> : null}
      </GoToDashboardButtonLink>
    </>
  );
};

export default GoToDashboardButton;
