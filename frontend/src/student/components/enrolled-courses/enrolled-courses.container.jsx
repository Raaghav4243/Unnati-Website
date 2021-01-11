import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { selectIsFetchingEnrolledCourses } from '../../redux/student/student.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import StudentEnrolledCourses from './enrolled-courses.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingEnrolledCourses,
});

const StudentEnrolledCoursesContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(StudentEnrolledCourses);

export default StudentEnrolledCoursesContainer;
