import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentCourseName } from '../../redux/course-topic/course-topic.selectors';
import { selectTestName } from '../../redux/testpage/testpage.selectors';
import { selectAssignmentName } from '../../redux/assignment-page/assignment-page.selectors';

import {
  SidebarWrap,
  SideNavContainer,
} from './assignment-test-sidenav.styles';
import Tile from './tile.component';

const AssignmentAndTestSidenav = ({
  forAssignment,
  forTest,
  currentCourseName,
  currentAssignmentName,
  currentTestName,
}) => {
  return (
    <>
      <SideNavContainer>
        <SidebarWrap>
          <Tile name={currentCourseName} />
          {forAssignment ? <Tile small name={currentAssignmentName} /> : null}
          {forTest ? <Tile small name={currentTestName} /> : null}
        </SidebarWrap>
      </SideNavContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentAssignmentName: selectAssignmentName,
  currentTestName: selectTestName,
  currentCourseName: selectCurrentCourseName,
});

export default connect(mapStateToProps)(AssignmentAndTestSidenav);
