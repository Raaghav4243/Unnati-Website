//libraries used
import React from 'react';

//redux used

//components used

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

//styles used
import { GoToDashboardButtonLink } from './go-to-dashboard-button-link.styles';

const GoToDashboardButton = ({ left, right }) => {
  return (
    <>
      <GoToDashboardButtonLink to='/student'>
        {left ? <FaArrowLeft /> : null}
        View Dashboard
        {right ? <FaArrowRight /> : null}
      </GoToDashboardButtonLink>
    </>
  );
};

export default GoToDashboardButton;
