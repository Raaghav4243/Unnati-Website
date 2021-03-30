import React from 'react';

import { GoToHomepageLink, Name } from './go-to-homepage-button-link.styles';

import { ReactComponent as UnnatiLogo } from '../../icons/UnnatiTree.svg';

const GoToHomePageButton = ({ scrollOn, fontColor, forTest }) => {
  return (
    <>
      {forTest ? (
        <GoToHomepageLink>
          <UnnatiLogo style={{ height: '60px' }} />
          <Name fontColor={fontColor}>UNNATI</Name>
        </GoToHomepageLink>
      ) : (
        <>
          <GoToHomepageLink to='/'>
            <UnnatiLogo style={{ height: '60px' }} />
            <Name fontColor={fontColor}>UNNATI</Name>
          </GoToHomepageLink>
        </>
      )}
    </>
  );
};

export default GoToHomePageButton;
