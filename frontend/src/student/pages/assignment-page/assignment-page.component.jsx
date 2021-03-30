import React from 'react';
import { connect } from 'react-redux';

//redux

//components
// import EnrolledCourseCard from '../../components/enrolled-course-card/enrolled-course-card.component';
import AssignmentContainer from './assignment.container';

import { fetchAssignmentStart } from '../../redux/assignment-page/assignment-page.actions';

class AssignmentPage extends React.Component {
  render() {
    return (
      <>
        <AssignmentContainer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAssignmentStart: () => dispatch(fetchAssignmentStart()),
});

export default connect(null, mapDispatchToProps)(AssignmentPage);
