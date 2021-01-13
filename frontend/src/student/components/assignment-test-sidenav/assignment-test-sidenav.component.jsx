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
}) => {
  return (
    <>
      <SideNavContainer>
        <SidebarWrap>
          <Tile name={currentCourseName} />
          <Tile small name={currentAssignmentName} />
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
