import React from 'react';

import { ReactComponent as MSExcelLogo } from '../../icons/excel.svg';
import Test from '../../assets/test-passed.png';
// import { FcSurvey } from 'react-icons/fc';
import { Container, LogoWrapper, NameWrapper } from './tile.styles';

const Tile = ({ name, small }) => {
  console.log(' NAME INSIDE TILE IS', name);
  return (
    <>
      <Container small={small ? true : false}>
        <LogoWrapper>
          {small ? (
            <img src={Test} style={{ height: '60px' }} />
          ) : (
            <MSExcelLogo style={{ height: '60px' }} />
          )}
        </LogoWrapper>
        <NameWrapper>{name}</NameWrapper>
      </Container>
    </>
  );
};

export default Tile;
