import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../../student/components/with-spinner/with-spinner.component';
// import EnrolledStudentsTableComponent from '../../components/teacher-enrolledstudent/enrolled-students.component';
import EnrolledStudentsTableComponent from '../../components/teacher-enrolledstudent/enrolled-students.component';
import { selectVerifiedStudentsIsFetching } from '../../redux/verified-students/verified-student.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectVerifiedStudentsIsFetching,
});

const EnrolledStudentsTableContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(EnrolledStudentsTableComponent);

export default EnrolledStudentsTableContainer;
