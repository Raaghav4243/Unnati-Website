import React from 'react';

import { ReactComponent as MSExcelLogo } from '../../icons/excel.svg';
import { Container, LogoWrapper, TestNameWrapper } from './test-tile.styles';

const TestTile = ({ testName }) => {
  // console.log('TEST NAME INSIDE TILE IS', testName);
  return (
    <>
      <Container>
        <LogoWrapper>
          <MSExcelLogo style={{ height: '60px' }} />
        </LogoWrapper>
        <TestNameWrapper>{testName}</TestNameWrapper>
      </Container>
    </>
  );
};

export default TestTile;
