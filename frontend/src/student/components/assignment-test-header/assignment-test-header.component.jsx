import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentCourseName } from '../../redux/course-topic/course-topic.selectors';
import {
  selectTestName,
  selectTestQuestions,
} from '../../redux/testpage/testpage.selectors';
import {
  selectAssignmentName,
  selectAssignmentQuestions,
} from '../../redux/assignment-page/assignment-page.selectors';

import {
  SideNavContainer,
  // SidebarWrap,
  Container,
  Wrapper,
  DetailsContainer,
  Detail,
  InstructionsWrapper,
  Title,
  Instructions,
  // Wrapper,
} from './assignment-test-header.styles';
import Tile from './tile.component';

const AssignmentAndTestHeader = ({
  forAssignment,
  forTest,
  currentCourseName,
  currentAssignmentName,
  currentTestName,
  assignment_questions,
  test_questions,
}) => {
  return (
    <>
      <SideNavContainer>
        {/* <SidebarWrap> */}
        <Container>
          <Wrapper>
            <Tile name={currentCourseName} />
            <DetailsContainer>
              <Detail>
                {forAssignment ? 'Assignment' : null}
                {forTest ? 'Test' : null}
              </Detail>
              <Detail heading>
                {forAssignment ? currentAssignmentName : null}
                {forTest ? currentTestName : null}
              </Detail>
              <Detail>
                No. of Questions&nbsp;:&nbsp;
                <strong>
                  {forAssignment ? assignment_questions.length : null}
                  {forTest ? test_questions.length : null}
                </strong>
              </Detail>
            </DetailsContainer>
          </Wrapper>
        </Container>
        <InstructionsWrapper>
          <Title>
            Instructions for {forAssignment ? 'Assignment' : 'Test'}
          </Title>
          <Instructions>
            {forAssignment
              ? `In this assignment It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
Many desktop publishing packages will uncover many web sites still in their infancy. 
`
              : `In this test It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                `}
          </Instructions>
        </InstructionsWrapper>
      </SideNavContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentAssignmentName: selectAssignmentName,
  currentTestName: selectTestName,
  currentCourseName: selectCurrentCourseName,
  assignment_questions: selectAssignmentQuestions,
  test_questions: selectTestQuestions,
});

export default connect(mapStateToProps)(AssignmentAndTestHeader);
